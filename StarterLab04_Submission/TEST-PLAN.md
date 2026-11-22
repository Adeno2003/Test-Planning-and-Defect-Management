# Lab 04 — Counter Application Test Plan

## Test objectives
Confirm that Increment increases the count by one, Decrement decreases the count by one, and Reset returns the count to zero. Check both individual actions and sequences of actions.

## Scope
**In scope:** Initial count, three buttons, displayed count, state transitions, and multi-action workflows.

**Out of scope:** Performance, security, cross-browser compatibility, mobile accessibility audits, and backend functionality (there is no backend).

## Testing approach
Explore the three controls manually in the browser. Follow the test cases in `TEST-CASES.md`. Compare the displayed number with the expected number. Review `src/App.tsx` to understand how React state is updated. Repeat failed actions to check reproducibility.

## Environment and tools
React/TypeScript/Vite Counter starter project, a modern browser, Node.js, npm, VS Code, Git, and GitHub. Record the actual browser and OS used when executing tests.

## Product risks
A mislabeled or incorrectly coded button may update the count in the opposite direction, producing incorrect values. Sequence tests can expose compounding errors.

## Entry criteria
Application installs and runs with `npm install` and `npm run dev`; counter and buttons are visible.

## Exit criteria
All five test cases are attempted, actual results and Pass/Fail are recorded, failures are repeated, and at least one defect report is filed for any reproducible issue.
