# Project plan: Home Sweet Home (CAD worksheets)

This is a suggested GitHub Project with milestones, labels and issues for this
repository. It is based on what the branches contain today (checked on 2026-11-03).

## 1. Current state of the repository

| Branch | Content | Status |
|---|---|---|
| `main` | Only the initial commit with an empty README | Needs the finished work |
| `ws1-html5` | WS1: plain HTML5 dashboard, history page, pages menu, Font Awesome icons | Done |
| `ws2-bootstrap` | WS2: Bootstrap start page, dashboard cards with navbar, history table (built on WS1) | Done |
| `ws3-javascript` | WS3: meaningful ids, light/music toggles, random temperatures, live clock (built on WS2) | Done |
| `ws4-jquery` | WS4: dashboard rewritten in jQuery, OpenWeatherMap panel, `config.example.js` (built on WS3) | Done |
| `worksheets` | WS1–WS4 together, one squashed commit per worksheet (same files as `ws4-jquery`) | Done |

Each worksheet branch builds on the one before it (`ws1 → ws2 → ws3 → ws4`).
Each worksheet has its own folder under `Worksheets/NN-Name/`, so earlier
worksheets stay unchanged.

**Things noticed while reviewing the branches:**
- `main` doesn't have any of the work yet, and the README contains only the title.
- `Worksheets/0x/start.html` is still the Bootstrap "Hello, world!" demo (title "Bootstrap demo").
- The history table holds fixed 2018 sample data. Nothing writes to it.
- Light and music state is lost when the page reloads.
- The weather card needs a local `js/config.js`. It is correctly git-ignored, but how to set it up is only explained in a code comment.
- Every page loads its libraries from a CDN, and there is no shared CSS/JS between worksheets. That's fine for worksheets, but worth knowing.

## 2. Suggested GitHub Project

**Name:** `Home Sweet Home – CAD Worksheets`
**Template:** Board, with these columns:

| Column | Meaning |
|---|---|
| Backlog | Ideas and future worksheets that aren't released yet |
| To do | Planned for the current milestone |
| In progress | Being worked on, with a branch open |
| Review | PR opened against `main` |
| Done | Merged |

**Custom fields:** `Worksheet` (single select: WS1…WS8, Docs, Infra),
`Due` (date), `Size` (S / M / L).

## 3. Labels

| Label | Colour | Use |
|---|---|---|
| `worksheet` | `#1d76db` | A worksheet exercise (W*n*-*x*) |
| `html` | `#e34c26` | HTML5 structure / semantics |
| `bootstrap` | `#7952b3` | Bootstrap layout and components |
| `javascript` | `#f1e05a` | Plain JavaScript |
| `jquery` | `#0769ad` | jQuery |
| `api` | `#0e8a16` | External APIs (OpenWeatherMap…) |
| `docs` | `#cfd3d7` | README, instructions, reports |
| `bug` | `#d73a4a` | Something doesn't work |
| `enhancement` | `#a2eeef` | Improvement beyond the worksheet |
| `accessibility` | `#5319e7` | a11y fixes |

## 4. Milestones

Each milestone below matches the GitHub form under **Issues → Milestones →
New milestone**, which has three fields: **Title**, **Due date (optional)** and
**Description**. Copy each field into the form as it is.

Every description uses the same structure: **Goal** (the outcome, in one
sentence), **Deliverables**, **Out of scope**, **Exit criteria** (measurable
checks for closing the milestone), **Depends on** and **Refs**. Individual
tasks are not listed here; they become issues linked to the milestone (see
section 5), and GitHub tracks the milestone's progress from those issues.

Titles follow one pattern: the worksheet code (when there is one), then the
outcome the milestone delivers, with no punctuation. GitHub sorts milestones by
due date, so the M1–M8 numbers in this file are only for reference.

M1–M4 are already finished: after creating one, press **Close** so it shows as
completed. The due dates for M5–M8 and the topics for WS5/WS6 are
**placeholders**, so change them to match the course calendar.

---

### M1

**Title**
```text
WS1 Semantic HTML5 dashboard and history pages
```

**Due date:** `2026-10-06`

**Description**
```text
Goal: The "Home Sweet Home" site exists as a clear, semantic HTML5 structure that later worksheets can style and script.

Deliverables:
- Dashboard page with Kitchen, Living Room and Clock sections
- History page with a table of past events
- Shared navigation menu and Font Awesome icons

Out of scope: CSS frameworks, layout styling and any JavaScript (WS2 and WS3).

Exit criteria:
- Both pages open in the browser and link to each other through the menu
- Both pages pass the W3C HTML validator with no errors
- Headings, sections, lists and tables use the right semantic elements

Depends on: nothing (first worksheet)
Refs: branch ws1-html5, folder Worksheets/01-HTML5
```

---

### M2

**Title**
```text
WS2 Responsive Bootstrap layout for dashboard and history
```

**Due date:** `2026-10-06`

**Description**
```text
Goal: The dashboard and history pages look consistent and adapt to any screen size using Bootstrap 5.

Deliverables:
- Dashboard shown as Bootstrap cards in a responsive grid
- Responsive navbar shared by both pages
- History shown as a styled Bootstrap table

Out of scope: interactive behaviour and live data (WS3 and WS4).

Exit criteria:
- Layout shows 1 column on phones (375px), 2 on tablets and 3 on desktop
- Navbar collapses into a toggle button on small screens and expands again
- No custom CSS is needed for the layout

Depends on: WS1 Semantic HTML5 dashboard and history pages
Refs: branch ws2-bootstrap, folder Worksheets/02-Bootstrap
```

---

### M3

**Title**
```text
WS3 Interactive dashboard with plain JavaScript
```

**Due date:** `2026-10-06`

**Description**
```text
Goal: The dashboard reacts to user actions and shows live values without reloading the page, using plain JavaScript only.

Deliverables:
- Clickable light and music controls that show their current state
- Live clock, date and simulated room temperatures

Out of scope: jQuery, external APIs and saving state between visits (WS4 and WS5).

Exit criteria:
- Every control switches text, icon and colour on click
- Temperatures change every 5 s and the clock every 1 s
- No errors in the browser console

Depends on: WS2 Responsive Bootstrap layout for dashboard and history
Refs: branch ws3-javascript, folder Worksheets/03-Javascript
```

---

### M4

**Title**
```text
WS4 jQuery dashboard with live OpenWeatherMap data
```

**Due date:** `2026-10-06`

**Description**
```text
Goal: The dashboard shows real weather data for Leiria from a public web API, with its logic written in jQuery.

Deliverables:
- All WS3 behaviour reimplemented with jQuery
- Weather card filled from the OpenWeatherMap API, with the age of the data
- Safe API key setup that keeps the key out of Git

Out of scope: saving state, history updates and server-side code (WS5 and WS6).

Exit criteria:
- With a valid key the card shows temperature, max/min, humidity, sunrise and sunset
- Without a key, or when the request fails, the card shows a clear message instead of breaking
- js/config.js is git-ignored and no API key appears in the repository

Depends on: WS3 Interactive dashboard with plain JavaScript, an OpenWeatherMap API key
Refs: branch ws4-jquery, folder Worksheets/04-jQuery
```

---

### M5

**Title**
```text
Quality pass on worksheets 1 to 4
```

**Due date:** `2026-11-24`

**Description**
```text
Goal: Worksheets 1 to 4 are finished to a consistent quality standard, with no placeholders or known defects, before new work starts.

Deliverables:
- Placeholder content replaced or removed
- More robust and configurable weather card
- Accessibility and validation fixes across all pages

Out of scope: new features or new worksheets (WS5 onwards).

Exit criteria:
- Every page passes the W3C HTML validator with no errors
- No console errors and no placeholder or sample text left on any page
- Toggle buttons are usable with a keyboard and screen reader

Depends on: WS1 to WS4 milestones closed
Refs: branches ws1-html5 to ws4-jquery, folders Worksheets/01 to 04
```

---

### M6

**Title**
```text
WS5 Persistent device state and live history
```

**Due date:** `2026-12-08`

**Description**
```text
Goal: The dashboard remembers what the user did, so state and history survive a page reload. (Suggested worksheet, adjust to the official statement.)

Deliverables:
- Device state saved in the browser and restored on load
- History page built from real user actions
- Way to clear the saved history

Out of scope: server storage and sharing state between devices or users (WS6).

Exit criteria:
- After a reload every light and music control shows its last state
- Each toggle adds one history row with category, state and time, newest first
- Clearing the history empties the table and the saved data

Depends on: WS4 jQuery dashboard with live OpenWeatherMap data
Refs: folder Worksheets/05 (name to match the worksheet)
```

---

### M7

**Title**
```text
WS6 REST backend for devices and history
```

**Due date:** `2027-01-12`

**Description**
```text
Goal: Device state and history live on a server, so every browser sees the same data and secrets stay off the client. (Suggested worksheet, adjust to the official statement.)

Deliverables:
- Small REST backend for devices and history
- Dashboard and history pages using the backend instead of browser storage
- Weather requests proxied through the server

Out of scope: user accounts, authentication and deployment to a public server.

Exit criteria:
- Two browser tabs show the same device state after a toggle and a refresh
- GET /devices, POST /devices/:id/toggle and GET /history return the expected JSON
- The OpenWeatherMap key is not present in any file sent to the browser

Depends on: WS5 Persistent device state and live history, the backend stack used in class
Refs: folder Worksheets/06-Backend
```

---

### M8

**Title**
```text
Final delivery with documentation and v1 release
```

**Due date:** `2027-01-26`

**Description**
```text
Goal: The project is handed in as a clean, documented repository that anyone can run from main.

Deliverables:
- All worksheet work merged into main
- README with setup and run instructions and screenshots
- Changelog of what each worksheet added, and a v1.0 release

Out of scope: new features, unless needed to fix a defect found during final review.

Exit criteria:
- A fresh clone of main runs every worksheet by following the README alone
- All other milestones are closed with no open issues
- Tag v1.0 exists on main

Depends on: all previous milestones
Refs: branch main
```

## 5. Planned issues per milestone

These are the tasks that become issues. Each one is linked to its milestone.
Issues for WS1–WS4 are created and then closed as completed, so the finished
work shows on the board.


### WS1 Semantic HTML5 dashboard and history pages (done)

- [x] Dashboard page (index.html) with Kitchen, Living Room and Clock sections showing temperature, lights, windows and music
- [x] History page (history.html) with a table of past events
- [x] Menu (nav) linking Dashboard and History
- [x] Font Awesome icons for rooms and devices

### WS2 Responsive Bootstrap layout for dashboard and history (done)

- [x] Bootstrap start page (start.html) to check that the CDN setup works
- [x] Dashboard laid out as Bootstrap cards in a responsive grid (1/2/3 columns)
- [x] Responsive navbar with a collapse button on small screens
- [x] History page with a striped, hoverable Bootstrap table

### WS3 Interactive dashboard with plain JavaScript (done)

- [x] Meaningful ids on every element the script uses
- [x] Toggle buttons for lights and music: clicking switches text (On/Off), icon and colour
- [x] Room temperatures replaced by random values every 5 seconds
- [x] Live clock (updates every second) and today's date

### WS4 jQuery dashboard with live OpenWeatherMap data (done)

- [x] WS3 features (toggles, temperatures, clock) rewritten with jQuery selectors and events
- [x] Weather card for Leiria loaded with $.getJSON from the OpenWeatherMap API: temperature, max/min, humidity, sunrise and sunset
- [x] "Fetched X seconds / minutes / hours ago" label that updates every second
- [x] Error message when the request fails or the API key is missing
- [x] API key kept out of Git: js/config.example.js is committed, js/config.js is git-ignored

### Quality pass on worksheets 1 to 4

- [ ] Replace the Bootstrap "Hello, world!" start.html with a real landing page, or remove it from WS3/WS4
- [ ] Clock card: compute "Sunrise / Sunset" from the weather data instead of the fixed "above horizon" text
- [ ] Weather card: friendly message when the city is not found or there is no network
- [ ] Make the weather city configurable in config.js instead of hard-coding "leiria"
- [ ] Accessibility: aria-pressed on toggle buttons, check the colour contrast of badges and buttons
- [ ] Run every page through the W3C HTML validator and fix the errors

### WS5 Persistent device state and live history

- [ ] Save light and music state in localStorage and restore it when the page loads
- [ ] Every toggle adds an entry to the history (category, new state, timestamp)
- [ ] history.html builds its table from the saved entries instead of the fixed 2018 rows
- [ ] "Clear history" button
- [ ] "Last changed X minutes ago" labels on the dashboard, reusing the existing plural() helper

### WS6 REST backend for devices and history

- [ ] Choose the stack used in class (e.g. Node/Express or PHP) and add Worksheets/06-Backend
- [ ] REST endpoints: GET /devices, POST /devices/:id/toggle, GET /history
- [ ] Dashboard reads and writes device state with $.ajax instead of localStorage
- [ ] Call OpenWeatherMap from the server so the API key never reaches the browser

### Final delivery with documentation and v1 release

- [ ] All worksheet branches merged into main through pull requests
- [ ] README with a project description, folder structure, how to run each worksheet, how to create js/config.js, and screenshots
- [ ] Short changelog / report of what each worksheet added
- [ ] Release tag v1.0 on main

## 6. Ways to create this on GitHub

The milestones and the Project board have to be created by the repo owner. The
Claude GitHub integration can only create issues and attach them to milestones
that already exist. If you have the [GitHub CLI](https://cli.github.com/)
installed and are logged in (`gh auth login`), run these from the repository
folder:

```bash
# Milestones (titles and due dates only; paste the descriptions from section 4 in the web form,
# or add  -f description="..."  to each line)
gh api repos/Solrosig/cad-worksheets/milestones -f title="WS1 Semantic HTML5 dashboard and history pages" -f due_on="2026-10-06T23:59:59Z" -f state=closed
gh api repos/Solrosig/cad-worksheets/milestones -f title="WS2 Responsive Bootstrap layout for dashboard and history" -f due_on="2026-10-06T23:59:59Z" -f state=closed
gh api repos/Solrosig/cad-worksheets/milestones -f title="WS3 Interactive dashboard with plain JavaScript" -f due_on="2026-10-06T23:59:59Z" -f state=closed
gh api repos/Solrosig/cad-worksheets/milestones -f title="WS4 jQuery dashboard with live OpenWeatherMap data" -f due_on="2026-10-06T23:59:59Z" -f state=closed
gh api repos/Solrosig/cad-worksheets/milestones -f title="Quality pass on worksheets 1 to 4" -f due_on="2026-11-24T23:59:59Z"
gh api repos/Solrosig/cad-worksheets/milestones -f title="WS5 Persistent device state and live history" -f due_on="2026-12-08T23:59:59Z"
gh api repos/Solrosig/cad-worksheets/milestones -f title="WS6 REST backend for devices and history" -f due_on="2027-01-12T23:59:59Z"
gh api repos/Solrosig/cad-worksheets/milestones -f title="Final delivery with documentation and v1 release" -f due_on="2027-01-26T23:59:59Z"

# Labels
for l in "worksheet:1d76db" "html:e34c26" "bootstrap:7952b3" "javascript:f1e05a" \
         "jquery:0769ad" "api:0e8a16" "docs:cfd3d7" "enhancement:a2eeef" "accessibility:5319e7"; do
  gh label create "${l%%:*}" --color "${l##*:}" --force
done

# Project board (needs the "project" scope: gh auth refresh -s project)
gh project create --owner Solrosig --title "Home Sweet Home – CAD Worksheets"
```

Once the milestones exist, Claude can create the open issues listed above and
attach each one to its milestone.
