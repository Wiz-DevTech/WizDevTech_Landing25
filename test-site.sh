#!/bin/bash
echo "=== TESTING UPDATED SITE ==="
echo ""
echo "1. Homepage title:"
curl -s "https://wizdevtechlanding26-production.info-wizdevtech.workers.dev/" | grep -o "<title>[^<]*</title>"
echo ""
echo "2. API endpoint:"
curl -s "https://wizdevtechlanding26-production.info-wizdevtech.workers.dev/api"
echo ""
echo ""
echo "3. Checking for WizDevTech content:"
if curl -s "https://wizdevtechlanding26-production.info-wizdevtech.workers.dev/" | grep -q "WizDevTech"; then
  echo "✅ WizDevTech content found!"
else
  echo "❌ WizDevTech content not found"
fi
echo ""
echo "4. Headers:"
curl -s -I "https://wizdevtechlanding26-production.info-wizdevtech.workers.dev/" | grep -i "cache\|x-"
