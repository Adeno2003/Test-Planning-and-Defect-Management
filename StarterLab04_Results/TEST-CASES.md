# Counter App Test Cases

**Status note:** Expected results are defined below. Actual outcomes are inferred from source inspection, **not verified by running the UI**. Replace the "Browser result" and "Browser status" fields after manual testing.

| ID | Starting state | Actions | Expected result | Predicted actual from source | Browser result | Browser status |
|---|---|---|---|---|---|---|
| TC-01 | Fresh page, 0 | Open app | Count: 0 | Count: 0 | Pending | Not run |
| TC-02 | Fresh page, 0 | Click Increment once | Count: 1 | Count: 1 | Pending | Not run |
| TC-03 | Fresh page, 0 | Click Decrement once | Count: -1 | Count: 1 (**bug**) | Pending | Not run |
| TC-04 | Fresh page, 0 | Click Increment twice; click Reset | Count: 0 | Count: 0 | Pending | Not run |
| TC-05 | Fresh page, 0 | Click Increment twice; click Decrement once | Count: 1 | Count: 3 (**bug**) | Pending | Not run |

## How to execute
Start the application with `npm install` then `npm run dev` in the `counter-app` folder. Open the local URL that Vite prints. Refresh the page before each test case, follow the actions, note the number you see, and mark Pass or Fail. Repeat any failed test once more.

## Source review
`src/App.tsx` initializes state to zero. Increment uses `setCount(count + 1)`, Decrement **also** uses `setCount(count + 1)` (unexpected), and Reset uses `setCount(0)`.
