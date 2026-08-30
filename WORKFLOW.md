# FE-04 AI Development Workflow Comparison

## Round 1 — Vague Prompt
Based on the initial implementation of `ConnectForm.tsx` in commit `64a62d7`, a vague prompt yielded a generic, basic contact form. The initial scaffolding had simple inputs, standard placeholders, and basic local validation. The layout used standard button nodes, plain HTML controls, and lacked proper accessibility mappings, custom typography integration, or robust loading and success feedback mechanisms.

## Round 2 — Precise Prompt
The final implementation reflects the precise prompt round, introducing granular constraints. The form was refactored to use a reusable, typed `<Button>` component, integrated with `VariableProximity` kinetics and a custom GLSL-morphic scale animation. Crucially, a canvas-based particle physics confetti engine was implemented to provide tactile, high-fidelity visual confirmation upon successful submission.

## Specific Differences
Comparing the initial commit to the latest code reveals key technical improvements:
* **Correctness & Validation:** The validation evolved from trivial truthy checks to verified email validation (checking for `@` symbols, trimming name inputs) and mapping specific error string states to a dedicated alert banner.
* **Accessibility:** Input nodes were updated to use explicit matching IDs (`name-input`, `email-input`, `message-input`) bound to `<label htmlFor="...">` nodes, ensuring full screen-reader accessibility.
* **Loading & Error States:** Replaced standard button elements with our custom `<Button>` widget tracking `isLoading` and displaying a dynamic spinner.
* **Edge Cases:** The submission handler was guarded against double-submit requests by disabling the button and showing a "SYNTHESIZING..." text indicator.
* **Tests:** Tests were not implemented or measured in the workspace.

## AI Mistake I Caught
In the early form implementation, the canvas particle class did not verify parent boundary sizing before drawing confetti. This caused the canvas to overflow on mobile layout resizes, clipping the particles. To resolve this, I refactored the canvas setup inside the `useEffect` hook to calculate `canvas.width = canvas.parentElement?.clientWidth || window.innerWidth` and bound it to window resize listeners.

## Time and Review Effort
Timing was not formally recorded for these implementation rounds.

## What I Learned
Vague prompts result in generic, non-production-ready boilerplate. Precise prompts outlining constraints, state mechanics, custom animations, and accessibility rules yield polished, premium results that match existing codebase aesthetics with minimal review effort.
