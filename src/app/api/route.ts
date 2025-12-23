// File path: /app/api/example/route.ts

// Required for Cloudflare Pages Edge Runtime
export const runtime = 'edge';

// Example GET handler
export async function GET(req: Request) {
  const data = {
    message: "Hello from the Edge!",
    timestamp: new Date().toISOString(),
  };

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

// Example POST handler
export async function POST(req: Request) {
  const body = await req.json();

  return new Response(JSON.stringify({
    received: body,
    timestamp: new Date().toISOString(),
  }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}