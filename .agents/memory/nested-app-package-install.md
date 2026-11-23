---
name: Installing packages for nested apps
description: Package-installation behavior when the application lives below the workspace root.
---

When an app lives in a subdirectory and the package installation helper has no
working-directory option, it may initialize a new package at the workspace
root instead of modifying the app's package files.

**Why:** The counter app is nested under `StarterLab04/counter-app`; installing
through the workspace-level helper created unrelated root package files.

**How to apply:** Check which package.json and lockfile the helper changed. For
nested apps, make sure dependencies and scripts are recorded in that app's own
package files, and remove any accidental workspace-root files.
