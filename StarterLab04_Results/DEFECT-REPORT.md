# Defect Report

## DEF-01 — Decrement increases the count

- **Related test cases:** TC-03 and TC-05
- **Environment:** Counter component interaction tests with Vitest, Testing
  Library, and jsdom (not a real browser)
- **Steps to reproduce:**
  1. Start with the counter at 0.
  2. Click **Decrement** once.
  3. For TC-05, instead click **Increment** twice, then **Decrement** once.
- **Expected result:** TC-03 displays -1; TC-05 displays 1.
- **Actual result:** TC-03 displays 1; TC-05 displays 3.
- **Severity:** Medium — the Decrement control produces incorrect values.
- **Priority:** High — the primary behavior of a visible control is incorrect.
- **Status:** Open; retained intentionally for this testing lab.

Automated coverage is in `StarterLab04/counter-app/src/App.test.tsx`. Both
defect cases are marked as expected failures and their assertions run with
`npm test` from the counter-app directory. The app behavior has not been
changed.
