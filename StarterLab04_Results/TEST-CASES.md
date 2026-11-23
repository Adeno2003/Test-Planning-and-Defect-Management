# Counter App Test Cases

## Browser execution results

Executed on November 22, 2026 (America/Los_Angeles; November 23 UTC)
against the running Replit preview. Environment: Chromium-based cloud browser,
user agent reporting Chrome 158 on Windows 10 x64; viewport 1280 × 720.
Each case started after a fresh page load. Results below were observed in
the browser, not inferred from source code or component tests.

| Test | Starting state | Actions | Expected result | Actual result | Status |
|---|---|---|---|---|---|
| TC-01 | Fresh page | Open app | Count: 0 | Count: 0 | Pass |
| TC-02 | Fresh page, 0 | Click Increment once | Count: 1 | Count: 1 | Pass |
| TC-03 | Fresh page, 0 | Click Decrement once | Count: -1 | Count: 1 | Fail |
| TC-04 | Fresh page, 0 | Click Increment twice; click Reset | Count: 0 | Count: 0 | Pass |
| TC-05 | Fresh page, 0 | Click Increment twice; click Decrement once | Count: 1 | Count: 3 | Fail |

TC-03 was repeated after refreshing: clicking Decrement from 0 again
displayed Count: 1. The defect is reproducible. TC-05 showed Count: 2
immediately before Decrement and Count: 3 afterward.

### Screenshot evidence

- [TC-01 — initial Count: 0](evidence/counter-app-run/TC-01_initial_count_0.jpeg)
- [TC-02 — Count: 1 after Increment](evidence/counter-app-run/TC-02_increment_once_count_1.jpeg)
- [TC-03 — Count: 1 after Decrement from 0](evidence/counter-app-run/TC-03_run1_decrement_from_0_actual_1.jpeg)
- [TC-03 repeat — same defect after refresh](evidence/counter-app-run/TC-03_run2_decrement_from_0_actual_1.jpeg)
- [TC-04 — Count: 0 after Reset](evidence/counter-app-run/TC-04_increment2_reset_count_0.jpeg)
- [TC-05 — Count: 2 before Decrement](evidence/counter-app-run/TC-05_increment2_before_decrement_count_2.jpeg)
- [TC-05 — Count: 3 after Decrement](evidence/counter-app-run/TC-05_increment2_decrement_actual_3.jpeg)

## Separate automated component execution

**Automated execution:** The cases below are exercised by
`StarterLab04/counter-app/src/App.test.tsx` using Vitest, Testing Library, and
jsdom. These are component interaction tests, not browser runs. TC-03 and
TC-05 are deliberately encoded as expected failures because of the known
Decrement defect; their assertions run each time. See
`StarterLab04/counter-app/README.md` for commands.

| ID | Starting state | Actions | Expected result | Actual result | Automated status |
|---|---|---|---|---|---|---|
| TC-01 | Fresh page, 0 | Open app | Count: 0 | Count: 0 | Pass |
| TC-02 | Fresh page, 0 | Click Increment once | Count: 1 | Count: 1 | Pass |
| TC-03 | Fresh page, 0 | Click Decrement once | Count: -1 | Count: 1 (**known defect**) | Expected failure |
| TC-04 | Fresh page, 0 | Click Increment twice; click Reset | Count: 0 | Count: 0 | Pass |
| TC-05 | Fresh page, 0 | Click Increment twice; click Decrement once | Count: 1 | Count: 3 (**known defect**) | Expected failure |

The expected failures are repeatable confirmation of the same defect and do
not make the test command fail. If either assertion unexpectedly passes,
Vitest flags the expected-failure test as a failure so its marker can be
removed after the behavior is fixed.

## Source review
`src/App.tsx` initializes state to zero. Increment uses `setCount(count + 1)`, Decrement **also** uses `setCount(count + 1)` (unexpected), and Reset uses `setCount(0)`.
