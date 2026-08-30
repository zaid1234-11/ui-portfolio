# Project Commands & Rules

## Build and Dev Commands
* Local Development: `npm run dev` (starts development server on port 3000)
* Production Build: `npm run build`
* Local Preview: `npm run preview`
* Clean Build Assets: `npm run clean`
* TypeScript Linting: `npm run lint`

---

# FE-04 Project Rules

* **Label and Input Mapping**: All interactive form inputs must have a corresponding `<label>` tag with a matching `htmlFor` property pointing to the input's `id` to ensure screen-reader accessibility.
* **Double Submission Guard**: Form submission buttons must disable themselves and display an active loading state (e.g., using the custom `isLoading` property on the `Button` component) during asynchronous operations.
* **Canvas Cleanup**: Any canvas rendering system or custom animation loops (such as the particle confetti explosion) must store their `requestAnimationFrame` IDs in ref variables and cancel the frames on component unmount to prevent memory leaks.
