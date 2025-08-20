export const config = {
  matcher: ['/meme/:memeId'],
};

const CACHE_REVALIDATE_TIME = 3600; // 1시간
const API_ENDPOINT = 'https://api.meme-wiki.net/api/memes';

// 메타 데이터 타입 정의
interface MemeMetadata {
  success: {
    title: string;
    usageContext: string;
    imgUrl: string;
  };
}

async function fetchMemeData(memeId: string): Promise<MemeMetadata | null> {
  try {
    const response = await fetch(`${API_ENDPOINT}/${memeId}`, {
      headers: {
        Accept: 'application/json',
        'Cache-Control': `public, max-age=${CACHE_REVALIDATE_TIME}`,
      },
    });

    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching meme data:', error);
    return null;
  }
}

function updateMetaTags(
  html: string,
  data: MemeMetadata['success'],
  url: URL,
  memeId: string,
): string {
  const metaTags = {
    'og:title': `${data.title} - Meme Wiki`,
    'og:description': data.usageContext,
    'og:image': data.imgUrl,
    'og:url': `${url.origin}/meme/${memeId}`,
    'twitter:title': `${data.title} - Meme Wiki`,
    'twitter:description': data.usageContext,
    'twitter:image': data.imgUrl,
  };

  let modifiedHtml = html;

  // 한 번의 순회로 모든 메타 태그 업데이트
  Object.entries(metaTags).forEach(([property, content]) => {
    modifiedHtml = modifiedHtml.replace(
      new RegExp(
        `<meta\\s+property="${property}"\\s+content="[^"]*"[^>]*>`,
        'i',
      ),
      `<meta property="${property}" content="${content}" />`,
    );
  });

  return modifiedHtml;
}

export default async function middleware(request: Request) {
  const url = new URL(request.url);
  const memeId = url.pathname.split('/').pop();

  if (!memeId) {
    return Response.redirect(new URL('/', request.url));
  }

  try {
    // 메메 데이터 가져오기 (캐싱 적용)
    const memeData = await fetchMemeData(memeId);

    if (!memeData) {
      return Response.redirect(new URL('/', request.url));
    }

    // 기본 HTML 가져오기
    const res = await fetch(new URL('/', request.url));
    const html = await res.text();

    // 메타 태그 업데이트
    const modifiedHtml = updateMetaTags(html, memeData.success, url, memeId);

    // 응답 반환 (캐싱 헤더 포함)
    return new Response(modifiedHtml, {
      headers: {
        'content-type': 'text/html;charset=UTF-8',
        'cache-control': `public, s-maxage=${CACHE_REVALIDATE_TIME}, stale-while-revalidate`,
      },
    });
  } catch (error) {
    console.error('Middleware error:', error);
    return Response.redirect(new URL('/', request.url));
  }
}
