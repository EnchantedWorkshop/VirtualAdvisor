# Virtual Advisor

**For testing purposes follow the steps below - Vihaan**
For manual testing do these steps in seperate shell sessions:
- cd backend -> npm install -> npm run dev
- cd frontend -> npm install -> npm run dev
- go to localhost:3000 to see the current app

## 1. The Problem

Most students struggle to visualize how their four-year curriculum "unlocks" future courses. Existing tools (like Atlas) list requirements in tables or checkboxes, but don't show you, "If I take CS 280 in Year 2, then EECS 370 will open up in Year 3, which in turn lets me do EECS 481 senior design." That disjointed UI forces manual mapping, leading to scheduling mistakes, missed prerequisites, and elective overloads.

## 2. The Vision

Virtual Advisor reimagines degree planning as an interactive skill tree—akin to what you'd see in a game—that:

*   Visually maps every course as a node.
*   Connects prerequisites, co-requisites, and substitution options as "branches."
*   Highlights completed, in-progress, and future courses.
*   Suggests optimal semester placements and substitutions when plans change.

## 3. Key Features

| Feature              | What it Does                                                                         |
| -------------------- | ------------------------------------------------------------------------------------ |
| Skill-Tree Canvas    | A zoomable graph where each course is a "skill" node; colored by status (done/in-progress). |
| Branching Prerequisites | Draws arrows from prerequisites → dependents; hover to see requirement details.       |
| Substitution Paths   | Shows alternate nodes (e.g. "EECS 203 or Math 216") faded until you pick one.           |
| Semester Layout      | Auto-arranges nodes into columns per term; drag-and-drop to move courses between terms. |
| What-If Modeling     | Instantly recalculates feasibility if you swap a course or delay a semester.            |
| Graduation Gauge     | A progress bar tuned to your major's credit and breadth requirements; updates in real time. |

## 4. User Experience Flow

*   **Onboarding:** Authenticate via campus SSO. Pull in declared major, transfer credits, completed courses.
*   **Tree Generation:** System builds the directed graph of your degree program from the registrar's API. Places "unlocked" courses in green, "locked" in gray.
*   **Plan Creation:** User clicks Term 1 → drags a course onto it. Tree highlights downstream available courses.
*   **Substitution Handling:** Click node's "swap" icon for valid substitutions.
*   **Review & Export:** Export plan as PDF or push to advisor's dashboard.

## 5. Technical Architecture

*   **Front-end:** React + D3 (or vis.js) for graph rendering, Tailwind CSS for styling.
*   **Back-end:** Node.js/Express microservice.
    *   Fetches catalog data (courses, prerequisites, cross-listings).
    *   Stores plan state (MongoDB/Firestore).
    *   Exposes REST endpoints for "what-if" recalculations.
*   **Integration:**
    *   OAuth2 with campus SSO.
    *   University registrar API (or CSV uploads) for curriculum metadata.

## 6. Project Structure

```
/virtual-advisor
|-- /frontend         # React application (Vite, D3/vis.js, Tailwind CSS)
|-- /backend          # Node.js/Express API
|-- /data             # Mock data, schemas
|-- README.md         # This file
```

## 7. Why It Matters

*   **Clarity:** Turns abstract requirements into an intuitive visual graph.
*   **Flexibility:** Models real-time changes.
*   **Engagement:** Game-like skill-tree planning.
*   **Innovation:** Fills a gap in existing tools.

## 8. Next Steps & Pitch Points

*   Prototype: Build a minimal React/D3 demo.
*   User Testing: Gather feedback.
*   Institutional Buy-in: Present to stakeholders.
*   Scale: Integrate with live data and roll out. 