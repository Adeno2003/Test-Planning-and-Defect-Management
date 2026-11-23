# Counter App Test Cases

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
