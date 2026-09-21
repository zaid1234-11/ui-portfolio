# FE-04 Foundations — Component Notes

This document analyzes the differences between my hand-built React + TypeScript components and the industry-standard implementations provided by Radix UI (which underpins `shadcn/ui`).

---

## Gaps Identified Between Hand-Built Components and Radix UI (shadcn/ui)

### 1. Screen Reader Escape Prevention (`aria-hidden` on Sibling Elements)
* **My Version:** Traps keyboard focus using a custom `Tab` key listener. While this works for physical keyboard navigation, it does not prevent users of assistive technology (e.g., NVDA, VoiceOver) from escaping the modal. Assistive tool virtual cursors can swipe or navigate straight through the DOM to background elements.
* **Radix UI's Handling:** When the dialog is mounted, Radix portals the dialog to the body element and dynamically injects `aria-hidden="true"` to all other direct sibling child roots. This tells the accessibility tree that everything in the background is non-navigable, successfully isolating the screen reader within the modal.

### 2. Scroll Lock & Layout Shift Mitigation
* **My Version:** Toggles `document.body.style.overflow = 'hidden'` on open and restores it on close. This locks scrolling, but causes the layout of the page to shift to the right by several pixels as the scrollbar disappears.
* **Radix UI's Handling:** Radix calculates the layout's scrollbar width dynamically when mounting (`window.innerWidth - document.documentElement.clientWidth`) and injects a matching inline `padding-right` style to the body element, preventing structural page shifting on modal open transitions.

### 3. Layering & Stack Management (Nested Modals)
* **My Version:** A single global keydown listener hooks to the `Escape` key. If a user was to open nested modals, pressing `Escape` would trigger all open modal components to close simultaneously. Focus restoration becomes chaotic as multiple components attempt to focus their respective parent triggers.
* **Radix UI's Handling:** Implements a global focus-scope and layer stack coordinator. Only the topmost active layer receives pointer events and handles key events, ensuring nested modals close one at a time and restore focus in exact reverse order of activation.

### 4. Reading Direction & RTL Support (Tabs)
* **My Version:** Hardcoded Left and Right arrow keys to cycle tabs left-to-right.
* **Radix UI's Handling:** Radix UI's tabs support the reading direction attribute (`dir="ltr" | dir="rtl"`). When reading direction is set to Right-to-Left (RTL), arrow navigation adjusts dynamically (e.g., Left arrow moves to the logically next tab).

### 5. Selection and Focus States Separation
* **My Version:** Uses standard CSS focus outline rings. This causes the outline to display even when clicked with a mouse, detracting from visual aesthetics.
* **Radix UI's Handling:** Radix coordinates with state data attributes (`data-state="active"`) and handles focus rings through `:focus-visible` tracking. Focus rings are only visible if the element was reached through keyboard tab actions.
