# Lab 04 — Counter Application Test Plan

## Test objectives
Confirm that Increment increases the count by one, Decrement decreases the count by one, and Reset returns the count to zero. Check both individual actions and sequences of actions.

## Scope
**In scope:** Initial count, three buttons, displayed count, state transitions, and multi-action workflows.

**Out of scope:** Performance, security, cross-browser compatibility, mobile accessibility audits, and backend functionality (there is no backend).

## Testing approach
Use repeatable component interaction tests for the cases in `TEST-CASES.md`.
The tests render the counter, click its buttons, and compare the displayed
count with the expected value. Known defect cases are kept as explicit
expected failures so they run on each test execution. Review `src/App.tsx` to
understand state updates. Real-browser and cross-browser testing are out of
scope for this automated suite.

## Environment and tools
React/TypeScript/Vite Counter starter project, Node.js, npm, Vitest, Testing
Library, jsdom, VS Code, Git, and GitHub. The automated tests are not run in a
real browser.

## Product risks
A mislabeled or incorrectly coded button may update the count in the opposite direction, producing incorrect values. Sequence tests can expose compounding errors.

## Entry criteria
Application installs and runs with `npm install` and `npm run dev`; counter and buttons are visible.

## Exit criteria
All five cases are exercised by the automated suite, observed results and
statuses are recorded in `TEST-CASES.md`, and any reproducible defect is
documented in `DEFECT-REPORT.md`.
