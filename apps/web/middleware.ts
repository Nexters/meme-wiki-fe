export const config = {
  matcher: ['/meme/:path*'],
};

export default async function middleware(request: Request) {
  const url = new URL(request.url);
  const pathSegments = url.pathname.split('/');
  const memeId = pathSegments[pathSegments.length - 1];

  // 기본 HTML을 가져옵니다
  const res = await fetch(new URL('/', request.url));
  const html = await res.text();

  // /meme/{id} 형식이 아닌 경우 기본 OG 태그 설정
  if (
    pathSegments[1] === 'meme' &&
    (pathSegments[2] === 'quiz' || !pathSegments[2])
  ) {
    const modifiedHtml = html
      .replace(
        /<meta\s+property="og:title"\s+content="[^"]*"[^>]*>/,
        `<meta property="og:title" content="Meme Wiki - 밈 문화의 모든 것" />`,
      )
      .replace(
        /<meta\s+property="og:description"\s+content="[^"]*"[^>]*>/,
        `<meta property="og:description" content="나만의 밈을 만들고 공유하세요." />`,
      )
      .replace(
        /<meta\s+property="og:image"\s+content="[^"]*"[^>]*>/,
        `<meta property="og:image" content="https://meme-wiki.net/thumbnail.png" />`,
      )
      .replace(
        /<meta\s+property="og:url"\s+content="[^"]*"[^>]*>/,
        `<meta property="og:url" content="${url.href}" />`,
      )
      .replace(
        /<meta\s+property="twitter:title"\s+content="[^"]*"[^>]*>/,
        `<meta property="twitter:title" content="Meme Wiki - 밈 문화의 모든 것" />`,
      )
      .replace(
        /<meta\s+property="twitter:description"\s+content="[^"]*"[^>]*>/,
        `<meta property="twitter:description" content="나만의 밈을 만들고 공유하세요." />`,
      )
      .replace(
        /<meta\s+property="twitter:image"\s+content="[^"]*"[^>]*>/,
        `<meta property="twitter:image" content="https://meme-wiki.net/thumbnail.png" />`,
      );

    return new Response(modifiedHtml, {
      status: 200,
      headers: {
        'content-type': 'text/html;charset=UTF-8',
        'cache-control': 'no-cache, no-store, must-revalidate',
        pragma: 'no-cache',
        expires: '0',
      },
    });
  }

  // /meme/{id} 경로에 대한 처리
  try {
    const response = await fetch(
      `https://api.meme-wiki.net/api/memes/${memeId}`,
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );

    if (!response.ok) {
      const res = await fetch(new URL('/', request.url));
      const html = await res.text();
      return new Response(html, {
        status: 200,
        headers: {
          'content-type': 'text/html;charset=UTF-8',
        },
      });
    }

    const data = await response.json();

    const res = await fetch(new URL('/', request.url));
    const html = await res.text();

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
    const res = await fetch(new URL('/', request.url));
    const html = await res.text();
    return new Response(html, {
      status: 200,
      headers: {
        'content-type': 'text/html;charset=UTF-8',
      },
    });
  }
}
