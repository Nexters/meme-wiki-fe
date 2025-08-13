export const config = {
  matcher: ['/meme/:memeId((?!quiz)[^/]+)'],
};

export default async function middleware(request: Request) {
  const url = new URL(request.url);
  const memeId = url.pathname.split('/').pop();

  try {
    // API에서 밈 데이터를 가져옵니다
    const response = await fetch(
      `https://api.meme-wiki.net/api/memes/${memeId}`,
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );

    if (!response.ok) {
      return Response.redirect(url.origin, 302);
    }

    const data = await response.json();

    // 원본 HTML을 가져옵니다
    const res = await fetch(new URL('/', request.url));
    const html = await res.text();

    // OG 태그를 동적으로 교체합니다
    const modifiedHtml = html
      .replace(
        /<meta\s+property="og:title"\s+content="[^"]*"[^>]*>/,
        `<meta property="og:title" content="${data.success.title} - Meme Wiki" />`,
      )
      .replace(
        /<meta\s+property="og:description"\s+content="[^"]*"[^>]*>/,
        `<meta property="og:description" content="${data.success.usageContext}" />`,
      )
      .replace(
        /<meta\s+property="og:image"\s+content="[^"]*"[^>]*>/,
        `<meta property="og:image" content="${data.success.imgUrl}" />`,
      )
      .replace(
        /<meta\s+property="og:url"\s+content="[^"]*"[^>]*>/,
        `<meta property="og:url" content="https://meme-wiki.net/meme/${memeId}" />`,
      )
      .replace(
        /<meta\s+property="twitter:title"\s+content="[^"]*"[^>]*>/,
        `<meta property="twitter:title" content="${data.success.title} - Meme Wiki" />`,
      )
      .replace(
        /<meta\s+property="twitter:description"\s+content="[^"]*"[^>]*>/,
        `<meta property="twitter:description" content="${data.success.usageContext}" />`,
      )
      .replace(
        /<meta\s+property="twitter:image"\s+content="[^"]*"[^>]*>/,
        `<meta property="twitter:image" content="${data.success.imgUrl}" />`,
      );

    return new Response(modifiedHtml, {
      headers: {
        'content-type': 'text/html;charset=UTF-8',
        'x-middleware-cache': 'no-cache',
        'cache-control': 'no-cache, no-store, must-revalidate',
        pragma: 'no-cache',
        expires: '0',
      },
    });
  } catch (error) {
    // 에러 발생 시 기본 페이지로 리다이렉트
    return Response.redirect(url.origin, 302);
  }
}
