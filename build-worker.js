// build-worker.js
const { execSync } = require('child_process');
const fs = require('fs');

console.log('Building Next.js...');
execSync('bun run build', { stdio: 'inherit' });

console.log('Running next-on-pages...');
try {
  execSync('npx @cloudflare/next-on-pages@latest', { stdio: 'inherit' });
} catch (error) {
  console.log('Trying alternative method...');
  // If npx fails, try direct path
  execSync('./node_modules/.bin/next-on-pages', { stdio: 'inherit' });
}

// Verify output
if (fs.existsSync('_worker.js')) {
  console.log('✓ _worker.js created successfully');
} else {
  console.log('✗ _worker.js not found. Checking for output...');
  console.log(fs.readdirSync('.'));
}