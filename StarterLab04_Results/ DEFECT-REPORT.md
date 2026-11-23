# Defect Report

**Defect ID:** BUG-01  
**Title:** Decrement button increases the counter instead of decreasing it  
**Related test cases:** TC-03 and TC-05  
**Environment:** React / TypeScript / Vite starter application in Replit Preview; Chromium-based cloud browser, user agent reporting Chrome 158 on Windows 10 x64; viewport 1280 × 720.

**Severity:** Medium (core feature behaves incorrectly)  
**Priority:** High (fix a primary button)  
**Status:** Confirmed during manual testing.

**Test date:** November 22, 2026 (America/Los_Angeles; November 23 UTC).

## Steps to reproduce
1. Start the app with `npm install` and `npm run dev`.
2. Open the app in a browser; the displayed number should be 0.
3. Click **Decrement** once.
4. Observe the displayed number.
5. Repeat after refreshing to confirm.

## Expected result
The displayed number changes from 0 to -1.

## Actual result
Clicking Decrement from 0 increased the counter to 1 instead of decreasing it to -1.

This was observed in the browser and reproduced after refreshing the page.
TC-05 also failed: two Increment clicks followed by Decrement displayed
Count: 3 instead of Count: 1.

## Screenshot evidence

- [Decrement from 0 displayed Count: 1](evidence/counter-app-run/TC-03_run1_decrement_from_0_actual_1.jpeg)
- [Repeated after refresh with the same result](evidence/counter-app-run/TC-03_run2_decrement_from_0_actual_1.jpeg)
- [Two Increments then Decrement displayed Count: 3](evidence/counter-app-run/TC-05_increment2_decrement_actual_3.jpeg)

## Root cause and proposed fix
In `src/App.tsx`, the Decrement button incorrectly adds one. Change its handler to `onClick={() => setCount(count - 1)}`. For the assignment, leave the original faulty code in place until testing is documented.

## Confirmation testing
After a fix, rerun TC-03 and TC-05 and update their actual results.
