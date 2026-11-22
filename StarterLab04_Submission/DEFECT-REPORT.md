# Defect Report

**Defect ID:** BUG-01  
**Title:** Decrement button increases the counter instead of decreasing it  
**Related test cases:** TC-03 and TC-05  
**Environment:** React / TypeScript / Vite starter application; browser and OS to be recorded during manual testing.  
**Severity:** Medium (core feature behaves incorrectly)  
**Priority:** High (fix a primary button)  
**Status:** Identified in source code; manual reproduction pending

## Steps to reproduce
1. Start the app with `npm install` and `npm run dev`.
2. Open the app in a browser; the displayed number should be 0.
3. Click **Decrement** once.
4. Observe the displayed number.
5. Repeat after refreshing to confirm.

## Expected result
The displayed number changes from 0 to -1.

## Predicted actual result (source inspection)
The displayed number changes from 0 to 1, because the Decrement click handler calls `setCount(count + 1)`. **Verify this in the browser before claiming execution.**

## Root cause and proposed fix
In `src/App.tsx`, the Decrement button incorrectly adds one. Change its handler to `onClick={() => setCount(count - 1)}`. For the assignment, leave the original faulty code in place until testing is documented.

## Confirmation testing
After a fix, rerun TC-03 and TC-05 and update their actual results.
