export const config = {
  matcher: ['/meme/:path*'],
};

export default async function middleware(request: Request) {
  const url = new URL(request.url);
  const pathSegments = url.pathname.split('/');
  const path = pathSegments[2];

  // 기본 HTML을 가져옵니다
  const res = await fetch(new URL('/', request.url));
  const html = await res.text();

  // /meme/quiz 경로인 경우 퀴즈 페이지용 OG 태그 설정
  if (path === 'quiz') {
    const modifiedHtml = html
      .replace(
        /<meta\s+property="og:title"\s+content="[^"]*"[^>]*>/,
        `<meta property="og:title" content="Meme Wiki - 밈 퀴즈" />`,
      )
      .replace(
        /<meta\s+property="og:description"\s+content="[^"]*"[^>]*>/,
        `<meta property="og:description" content="재미있는 밈 퀴즈를 풀어보세요!" />`,
      )
      .replace(
        /<meta\s+property="og:image"\s+content="[^"]*"[^>]*>/,
        `<meta property="og:image" content="${url.origin}/thumbnail.png" />`,
      )
      .replace(
        /<meta\s+property="og:url"\s+content="[^"]*"[^>]*>/,
        `<meta property="og:url" content="${url.href}" />`,
      )
      .replace(
        /<meta\s+property="twitter:title"\s+content="[^"]*"[^>]*>/,
        `<meta property="twitter:title" content="Meme Wiki - 밈 퀴즈" />`,
      )
      .replace(
        /<meta\s+property="twitter:description"\s+content="[^"]*"[^>]*>/,
        `<meta property="twitter:description" content="재미있는 밈 퀴즈를 풀어보세요!" />`,
      )
      .replace(
        /<meta\s+property="twitter:image"\s+content="[^"]*"[^>]*>/,
        `<meta property="twitter:image" content="${url.origin}/thumbnail.png" />`,
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
      `https://api.meme-wiki.net/api/memes/${path}`,
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
        `<meta property="og:url" content="https://meme-wiki.net/meme/${path}" />`,
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
