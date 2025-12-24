export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname === '/' ? '/index.html' : url.pathname;
    
    // GitHub repository details
    const GITHUB_USER = 'Wiz-DevTech';
    const GITHUB_REPO = 'WizDevTech_Landing25';
    const GITHUB_BRANCH = 'main'; // or 'master'
    
    // Map URLs to GitHub file paths
    const githubUrl = `https://raw.githubusercontent.com/${GITHUB_USER}/${GITHUB_REPO}/${GITHUB_BRANCH}${path}`;
    
    try {
      // Fetch from GitHub
      const response = await fetch(githubUrl);
      
      if (response.ok) {
        // Get content type based on file extension
        const contentType = getContentType(path);
        const headers = {
          'Content-Type': contentType,
          'Cache-Control': 'public, max-age=3600'
        };
        
        return new Response(await response.text(), { headers });
      }
      
      // Fallback to index.html for SPA routing
      if (response.status === 404) {
        const indexResponse = await fetch(`https://raw.githubusercontent.com/${GITHUB_USER}/${GITHUB_REPO}/${GITHUB_BRANCH}/index.html`);
        return new Response(await indexResponse.text(), {
          headers: { 'Content-Type': 'text/html' }
        });
      }
      
      return new Response('Not Found', { status: 404 });
    } catch (error) {
      return new Response('Error fetching content', { status: 500 });
    }
  }
}

// Helper function to determine content type
function getContentType(path) {
  const ext = path.split('.').pop().toLowerCase();
  const types = {
    'html': 'text/html',
    'css': 'text/css',
    'js': 'application/javascript',
    'json': 'application/json',
    'png': 'image/png',
    'jpg': 'image/jpeg',
    'jpeg': 'image/jpeg',
    'gif': 'image/gif',
    'svg': 'image/svg+xml',
    'ico': 'image/x-icon'
  };
  return types[ext] || 'text/plain';
}
