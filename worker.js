export default {
  async fetch(request) {
    const url = new URL(request.url);
    
    // Cache control
    const headers = {
      'Cache-Control': 'no-cache',
      'X-Updated': '2025-12-23'
    };
    
    if (url.pathname === '/api') {
      headers['Content-Type'] = 'application/json';
      return new Response(JSON.stringify({
        message: "Hello from the Edge!",
        timestamp: new Date().toISOString()
      }), { headers });
    }
    
    headers['Content-Type'] = 'text/html';
    return new Response(`<h1>Updated</h1><p>${new Date().toISOString()}</p>`, { headers });
  }
}
