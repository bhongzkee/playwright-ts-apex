#!/bin/bash
set -e

# Optional: tag argument
TEST_TAG=$1

# Timestamp for report
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
ALLURE_DIR="./allure-reports/generated-allure-report-$TIMESTAMP"

# Clean previous results
rm -rf ./allure-reports/allure-results

# Run Playwright tests
if [ -z "$TEST_TAG" ]; then
  npx playwright test || true  # <-- make sure script continues even if tests fail
else
  npx playwright test --grep "$TEST_TAG" || true
  # npx playwright test
fi

# Generate Allure report
npx allure generate ./allure-reports/allure-results --clean -o $ALLURE_DIR

# Open Allure report
npx allure open $ALLURE_DIR
echo "Allure report generated at $ALLURE_DIR"