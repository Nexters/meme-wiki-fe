export const config = {
  matcher: ['/meme/:memeId'],
};

export default async function middleware(request: Request) {
  const url = new URL(request.url);
  const memeId = url.pathname.split('/').pop();

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
        `<meta property="og:url" content="${url.origin}/meme/${memeId}" />`,
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
