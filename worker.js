// worker.js - Simple Next.js static file server
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // API routes (you'll need to implement these)
    if (url.pathname.startsWith('/api/')) {
      // Handle API requests
      return handleApiRequest(request);
    }
    
    // Serve static files from .next directory
    return env.ASSETS.fetch(request);
  }
}

async function handleApiRequest(request) {
  const url = new URL(request.url);
  
  // Example API handler
  if (url.pathname === '/api/hello') {
    return new Response(JSON.stringify({ message: 'Hello from API' }), {
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
  return new Response('API endpoint not found', { status: 404 });
}