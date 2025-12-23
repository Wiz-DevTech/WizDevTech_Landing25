#!/bin/bash
echo "=== PROJECT STRUCTURE ANALYSIS ==="
echo ""
echo "1. Next.js App Structure:"
if [ -d "src/app" ]; then
  echo "✅ Found src/app directory"
  echo "   Files:"
  ls -la src/app/
else
  echo "❌ No src/app directory found"
fi
echo ""
echo "2. Current Worker Status:"
echo "   API Test:"
curl -s https://wizdevtechlanding26-production.info-wizdevtech.workers.dev/api | jq . 2>/dev/null || curl -s https://wizdevtechlanding26-production.info-wizdevtech.workers.dev/api
echo ""
echo "3. Build Configuration:"
echo "   Next Config:"
cat next.config.ts
echo ""
echo "   Package.json scripts:"
grep -A10 '"scripts"' package.json
echo ""
echo "4. Deployment Status:"
echo "   Worker.js size: $(wc -l < worker.js) lines"
echo "   Last deploy: Check above for timestamp"
