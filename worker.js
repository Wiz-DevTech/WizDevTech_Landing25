export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Your API route (from src/app/api/route.ts)
    if (url.pathname === '/api' || url.pathname === '/api/') {
      return new Response(JSON.stringify({
        message: "Hello from the Edge!",
        timestamp: new Date().toISOString(),
        note: "This is your actual API from src/app/api/route.ts",
        deployed: true
      }), {
        status: 200,
        headers: { 
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        },
      });
    }
    
    // Your homepage (simplified version of src/app/page.tsx)
    if (url.pathname === '/') {
      return serveHomepage();
    }
    
    // 404 for other routes
    return new Response('Page not found', { status: 404 });
  }
}

function serveHomepage() {
  // Simplified version of your page.tsx
  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>WizDevTech | Technology Execution Partners</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
          body { font-family: 'Inter', sans-serif; }
          .gradient-bg { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
          .card-hover { transition: transform 0.2s, box-shadow 0.2s; }
          .card-hover:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
        </style>
      </head>
      <body class="min-h-screen bg-gray-50">
        <!-- Header -->
        <header class="border-b border-gray-200 bg-white">
          <div class="container mx-auto px-4">
            <div class="flex items-center justify-between h-16">
              <div class="flex items-center">
                <h1 class="text-xl font-bold text-indigo-600">WizDevTech</h1>
              </div>
              <nav class="hidden md:flex items-center space-x-6">
                <a href="#what-we-do" class="text-gray-600 hover:text-indigo-600 transition-colors">What We Do</a>
                <a href="#how-it-works" class="text-gray-600 hover:text-indigo-600 transition-colors">How It Works</a>
                <a href="#who-its-for" class="text-gray-600 hover:text-indigo-600 transition-colors">Who It's For</a>
                <a href="#leadership" class="text-gray-600 hover:text-indigo-600 transition-colors">Leadership</a>
              </nav>
              <button class="px-4 py-2 border border-gray-300 rounded-lg text-indigo-600 hover:bg-gray-50">
                Start Execution
              </button>
            </div>
          </div>
        </header>

        <!-- Hero Section -->
        <section class="gradient-bg text-white py-20">
          <div class="container mx-auto px-4 text-center">
            <h1 class="text-5xl font-bold mb-6">Technology Execution Partners</h1>
            <p class="text-xl opacity-90 max-w-2xl mx-auto mb-10">
              We bridge the gap between vision and reality, transforming your technology roadmap into tangible results.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button class="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100">
                Start a Project
              </button>
              <button class="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10">
                Learn More
              </button>
            </div>
          </div>
        </section>

        <!-- What We Do -->
        <section id="what-we-do" class="py-20 bg-white">
          <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">What We Do</h2>
            <div class="grid md:grid-cols-3 gap-8">
              <div class="card-hover p-6 bg-gray-50 rounded-xl">
                <h3 class="text-xl font-semibold mb-4 text-gray-800">Strategy & Planning</h3>
                <p class="text-gray-600">Turn your vision into an actionable technology roadmap.</p>
              </div>
              <div class="card-hover p-6 bg-gray-50 rounded-xl">
                <h3 class="text-xl font-semibold mb-4 text-gray-800">Development & Execution</h3>
                <p class="text-gray-600">Build and deploy scalable solutions with modern tech stacks.</p>
              </div>
              <div class="card-hover p-6 bg-gray-50 rounded-xl">
                <h3 class="text-xl font-semibold mb-4 text-gray-800">Ongoing Support</h3>
                <p class="text-gray-600">Maintain, optimize, and scale your technology investments.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- API Test -->
        <section class="py-12 bg-gray-100">
          <div class="container mx-auto px-4 text-center">
            <h3 class="text-2xl font-bold mb-4">API Status</h3>
            <p class="mb-4">Your API endpoint is live at <code class="bg-gray-800 text-white px-2 py-1 rounded">/api</code></p>
            <button onclick="testApi()" class="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              Test API Connection
            </button>
            <pre id="api-result" class="mt-4 text-left bg-gray-800 text-white p-4 rounded-lg hidden"></pre>
          </div>
        </section>

        <!-- Footer -->
        <footer class="bg-gray-800 text-white py-12">
          <div class="container mx-auto px-4 text-center">
            <p class="text-xl font-bold mb-2">WizDevTech</p>
            <p class="opacity-80">Technology Execution Partners</p>
            <p class="mt-6 opacity-60">Successfully deployed on Cloudflare Workers</p>
          </div>
        </footer>

        <script>
          async function testApi() {
            const result = document.getElementById('api-result');
            result.textContent = 'Testing API...';
            result.classList.remove('hidden');
            
            try {
              const response = await fetch('/api');
              const data = await response.json();
              result.textContent = JSON.stringify(data, null, 2);
            } catch (error) {
              result.textContent = 'Error: ' + error.message;
            }
          }
        </script>
      </body>
    </html>
  `;
  
  return new Response(html, {
    headers: { 'Content-Type': 'text/html' }
  });
}
