# Implementation Plan: Multi-Narrative Journey

Refactoring the Journey section from a single-track timeline to a multi-narrative analysis of "Three Ways Leads Die." We will implement **Option A: Tabbed Narratives** to allow users to explore the psychological, operational, and trust-based failures that lead to lost revenue.

## User Review Required

> [!IMPORTANT]
> **Shift to Tabbed Interface**: The current vertical timeline will be replaced by a tab-switched view. I've chosen Option A as it offers the clearest focus for each specific "story" without overwhelming the user with a massive scroll.

> [!TIP]
> **Metaphorical Imagery**: For the new narratives (Human Bottleneck and Trust Erosion), I will use metaphorical icons and generated images that represent "Process Failure" and "Communication Breakdown" to maintain the premium, clinical aesthetic.

---

## Proposed Changes

### Core Data & Types
#### [NEW] [journeyData.ts](file:///c:/Users/abhis/OneDrive/Documents/Client-of-vivek/src/constants/journeyData.ts)
- Define a `Narrative` interface.
- Implement 3 narratives:
  1. **Desire Decay** (Refined existing timeline).
  2. **Human Bottleneck** (Focusing on operational delays and forgotten leads).
  3. **Trust Erosion** (Focusing on fragmented context and repeated questions).

---

### Journey Components Refactor
#### [MODIFY] [JourneyHeader.tsx](file:///c:/Users/abhis/OneDrive/Documents/Client-of-vivek/src/components/journey/JourneyHeader.tsx)
- Update title to: **"Three Ways Leads Die"**.
- Update subtitle to: **"Before you ever speak to them."**

#### [NEW] [JourneyTabs.tsx](file:///c:/Users/abhis/OneDrive/Documents/Client-of-vivek/src/components/journey/JourneyTabs.tsx)
- Create a sleek, glass-morphism tab switcher.
- Labels: `Desire Decay`, `Human Bottleneck`, `Trust Erosion`.

#### [MODIFY] [JourneyOptimalCard.tsx](file:///c:/Users/abhis/OneDrive/Documents/Client-of-vivek/src/components/journey/JourneyOptimalCard.tsx)
- Make names more generic (e.g., `NarrativeHeroCard`).
- Add support for different primary metrics ($ vs Time vs Trust %).

#### [MODIFY] [JourneyDegradationList.tsx](file:///c:/Users/abhis/OneDrive/Documents/Client-of-vivek/src/components/journey/JourneyDegradationList.tsx)
- Support more flexible "steps" (e.g., "The Forgotten Lead" or "The Repeat Question").

#### [MODIFY] [Timeline.tsx](file:///c:/Users/abhis/OneDrive/Documents/Client-of-vivek/src/components/journey/Timeline.tsx)
- Introduce `activeNarrative` state.
- Use `AnimatePresence` to cross-fade between narratives.

---

## Verification Plan

### Automated Tests
- N/A (Visual/Transition based)

### Manual Verification
- **Tab Switching**: Verify that clicking a tab instantly and smoothly updates the Hero Card and the Detail List.
- **Narrative Integrity**: Ensure the "Desire Decay" content matches your existing timeline data.
- **Mobile UX**: Check that tabs scroll horizontally on small screens and that the stacking order remains logical.
- **Snappy Reordering**: Move the `journey` section in `App.tsx` [PAGE_SECTIONS](file:///c:/Users/abhis/OneDrive/Documents/Client-of-vivek/src/App.tsx) to confirm no breakage.
