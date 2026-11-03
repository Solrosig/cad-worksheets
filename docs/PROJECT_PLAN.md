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

M1–M4 are already finished: after creating one, press **Close** so it shows as
completed. The due dates for M5–M8 and the topics for WS5/WS6 are
**placeholders**, so change them to match the course calendar.

---

### M1

**Title**
```text
M1 – WS1 · HTML5
```

**Due date:** `2026-10-06`

**Description**
```text
Worksheet 1: build the "Home Sweet Home" smart-home site with plain, semantic HTML5 only (no CSS framework, no JavaScript).

Scope:
- Dashboard page (index.html) with Kitchen, Living Room and Clock sections showing temperature, lights, windows and music
- History page (history.html) with a table of past events
- Menu (nav) linking Dashboard and History
- Font Awesome icons for rooms and devices

Folder: Worksheets/01-HTML5
Branch: ws1-html5
Done when: both pages open in the browser, the menu works and the HTML validates.
```

---

### M2

**Title**
```text
M2 – WS2 · Bootstrap
```

**Due date:** `2026-10-06`

**Description**
```text
Worksheet 2: restyle the WS1 pages with Bootstrap 5 and make them responsive.

Scope:
- Bootstrap start page (start.html) to check that the CDN setup works
- Dashboard laid out as Bootstrap cards in a responsive grid (1/2/3 columns)
- Responsive navbar with a collapse button on small screens
- History page with a striped, hoverable Bootstrap table

Folder: Worksheets/02-Bootstrap
Branch: ws2-bootstrap (built on ws1-html5)
Done when: the layout adapts from phone to desktop and the navbar collapses correctly.
```

---

### M3

**Title**
```text
M3 – WS3 · JavaScript
```

**Due date:** `2026-10-06`

**Description**
```text
Worksheet 3: make the dashboard interactive with plain JavaScript (no libraries).

Scope:
- Meaningful ids on every element the script uses
- Toggle buttons for lights and music: clicking switches text (On/Off), icon and colour
- Room temperatures replaced by random values every 5 seconds
- Live clock (updates every second) and today's date

Folder: Worksheets/03-Javascript (code in js/index.js)
Branch: ws3-javascript (built on ws2-bootstrap)
Done when: all toggles work, temperatures change and the clock ticks with no console errors.
```

---

### M4

**Title**
```text
M4 – WS4 · jQuery + AJAX
```

**Due date:** `2026-10-06`

**Description**
```text
Worksheet 4: rewrite the dashboard logic in jQuery and add live weather data from a web API.

Scope:
- WS3 features (toggles, temperatures, clock) rewritten with jQuery selectors and events
- Weather card for Leiria loaded with $.getJSON from the OpenWeatherMap API: temperature, max/min, humidity, sunrise and sunset
- "Fetched X seconds / minutes / hours ago" label that updates every second
- Error message when the request fails or the API key is missing
- API key kept out of Git: js/config.example.js is committed, js/config.js is git-ignored

Folder: Worksheets/04-jQuery
Branch: ws4-jquery (built on ws3-javascript)
Done when: the weather card shows real data with a valid key and a clear message without one.
```

---

### M5

**Title**
```text
M5 – Polish of WS1–WS4
```

**Due date:** `2026-11-24`

**Description**
```text
Fix the small gaps left in the finished worksheets before starting new ones.

Scope:
- Replace the Bootstrap "Hello, world!" start.html with a real landing page, or remove it from WS3/WS4
- Clock card: compute "Sunrise / Sunset" from the weather data instead of the fixed "above horizon" text
- Weather card: friendly message when the city is not found or there is no network
- Make the weather city configurable in config.js instead of hard-coding "leiria"
- Accessibility: aria-pressed on toggle buttons, check the colour contrast of badges and buttons
- Run every page through the W3C HTML validator and fix the errors

Done when: every page validates, has no console errors and no placeholder content is left.
```

---

### M6

**Title**
```text
M6 – WS5 · State and dynamic history
```

**Due date:** `2026-12-08`

**Description**
```text
Suggested next worksheet: make the dashboard remember what the user does.

Scope:
- Save light and music state in localStorage and restore it when the page loads
- Every toggle adds an entry to the history (category, new state, timestamp)
- history.html builds its table from the saved entries instead of the fixed 2018 rows
- "Clear history" button
- "Last changed X minutes ago" labels on the dashboard, reusing the existing plural() helper

Folder: Worksheets/05-... (name to match the worksheet statement)
Done when: reloading the page keeps the state and the history shows real changes in order.
```

---

### M7

**Title**
```text
M7 – WS6 · Backend / REST
```

**Due date:** `2027-01-12`

**Description**
```text
Suggested worksheet: move device state to a small server and talk to it over REST.

Scope:
- Choose the stack used in class (e.g. Node/Express or PHP) and add Worksheets/06-Backend
- REST endpoints: GET /devices, POST /devices/:id/toggle, GET /history
- Dashboard reads and writes device state with $.ajax instead of localStorage
- Call OpenWeatherMap from the server so the API key never reaches the browser

Done when: two browser tabs show the same device state and the key is no longer in any client file.
```

---

### M8

**Title**
```text
M8 – Final delivery
```

**Due date:** `2027-01-26`

**Description**
```text
Hand in the finished project in a clean, documented state.

Scope:
- All worksheet branches merged into main through pull requests
- README with a project description, folder structure, how to run each worksheet, how to create js/config.js, and screenshots
- Short changelog / report of what each worksheet added
- Release tag v1.0 on main

Done when: someone who clones main can open every worksheet by following the README alone.
```

## 5. Ways to create this on GitHub

The milestones and the Project board have to be created by the repo owner. The
Claude GitHub integration can only create issues and attach them to milestones
that already exist. If you have the [GitHub CLI](https://cli.github.com/)
installed and are logged in (`gh auth login`), run these from the repository
folder:

```bash
# Milestones (titles and due dates only; paste the descriptions from section 4 in the web form,
# or add  -f description="..."  to each line)
gh api repos/Solrosig/cad-worksheets/milestones -f title="M1 – WS1 · HTML5" -f due_on="2026-10-06T23:59:59Z" -f state=closed
gh api repos/Solrosig/cad-worksheets/milestones -f title="M2 – WS2 · Bootstrap" -f due_on="2026-10-06T23:59:59Z" -f state=closed
gh api repos/Solrosig/cad-worksheets/milestones -f title="M3 – WS3 · JavaScript" -f due_on="2026-10-06T23:59:59Z" -f state=closed
gh api repos/Solrosig/cad-worksheets/milestones -f title="M4 – WS4 · jQuery + AJAX" -f due_on="2026-10-06T23:59:59Z" -f state=closed
gh api repos/Solrosig/cad-worksheets/milestones -f title="M5 – Polish of WS1–WS4" -f due_on="2026-11-24T23:59:59Z"
gh api repos/Solrosig/cad-worksheets/milestones -f title="M6 – WS5 · State and dynamic history" -f due_on="2026-12-08T23:59:59Z"
gh api repos/Solrosig/cad-worksheets/milestones -f title="M7 – WS6 · Backend / REST" -f due_on="2027-01-12T23:59:59Z"
gh api repos/Solrosig/cad-worksheets/milestones -f title="M8 – Final delivery" -f due_on="2027-01-26T23:59:59Z"

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
