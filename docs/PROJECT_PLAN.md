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

Dates for M1–M4 are when the work was committed. Dates from M5 onwards are
**placeholders**: change them to match the course calendar, and rename the
topics to match the actual worksheet statements.

### M0 – Repository setup · due 2026-11-10
Get `main` into a state that represents the project.
- [ ] Merge `worksheets` (or `ws4-jquery`) into `main` with a PR
- [ ] Write the README: project description, folder structure, how to open each worksheet, how to create `js/config.js` for WS4
- [ ] Decide on a branch convention (keep one `wsN-*` branch per worksheet, merge to `main` when done) and document it
- [ ] Add the labels and milestones from this file
- [ ] (Optional) Enable GitHub Pages from `main` so each worksheet can be opened online

### M1 – WS1 · HTML5 · ✅ done 2026-10-06 (`ws1-html5`)
- [x] W1: Dashboard page (`index.html`) with kitchen, living room and clock sections
- [x] W1: History page (`history.html`) with a table
- [x] W1: Menu linking the pages
- [x] W1: Font Awesome icons

### M2 – WS2 · Bootstrap · ✅ done 2026-10-06 (`ws2-bootstrap`)
- [x] W2: Bootstrap start page
- [x] W2: Dashboard with cards and responsive navbar
- [x] W2: History with Bootstrap striped table

### M3 – WS3 · JavaScript · ✅ done 2026-10-06 (`ws3-javascript`)
- [x] W3-1: First JavaScript page / meaningful ids
- [x] W3-2a/c/d: Light and music toggle buttons (text, icon, colour)
- [x] W3: Random temperatures every 5 s
- [x] W3: Live clock and date

### M4 – WS4 · jQuery + AJAX · ✅ done 2026-10-06 (`ws4-jquery`)
- [x] W4-1: Dashboard adapted to jQuery
- [x] W4-2a/b: Weather panel from the OpenWeatherMap API
- [x] W4-2c: "Fetched X seconds/minutes/hours ago"
- [x] `config.example.js` template, `config.js` git-ignored

### M5 – Polish of WS1–WS4 · due 2026-11-24
Small fixes to the finished worksheets.
- [ ] Replace the "Hello, world!" `start.html` with a real landing page, or remove it from WS3/WS4
- [ ] Sunrise/sunset row in the Clock card: compute it from the weather data instead of the fixed "above horizon"
- [ ] Show a friendly message in the weather card when the city isn't found or there's no network
- [ ] Make the city configurable (in `config.js`) instead of hard-coding `leiria`
- [ ] Accessibility pass: `aria-pressed` on toggle buttons, colour contrast of badges
- [ ] Validate all pages with the W3C validator

### M6 – WS5 · State and dynamic history (suggested) · due 2026-12-08
The likely next step after jQuery: make the dashboard remember things.
- [ ] Save light/music state in `localStorage` and restore it on load
- [ ] Each toggle adds a row to the history (category, state, timestamp)
- [ ] `history.html` builds its table from saved data instead of fixed 2018 rows
- [ ] "Clear history" button
- [ ] "Last changed X minutes ago" labels on the dashboard, reusing the `plural()` helper

### M7 – WS6 · Backend / REST (suggested) · due 2027-01-12
If the course continues with server-side work.
- [ ] Choose a stack (e.g. Node/Express or PHP) and add `Worksheets/06-Backend/`
- [ ] REST endpoints: `GET /devices`, `POST /devices/:id/toggle`, `GET /history`
- [ ] Dashboard reads and writes device state with `$.ajax` instead of `localStorage`
- [ ] Move the OpenWeatherMap call to the server so the API key never reaches the browser

### M8 – Final delivery · due 2027-01-26
- [ ] All worksheet branches merged into `main`
- [ ] README with screenshots of each worksheet
- [ ] Short report / changelog of what each worksheet added
- [ ] Release tag `v1.0`

## 5. Ways to create this on GitHub

The milestones and the Project board have to be created by the repo owner. The
Claude GitHub integration can only create issues and attach them to milestones
that already exist. If you have the [GitHub CLI](https://cli.github.com/)
installed and are logged in (`gh auth login`), run these from the repository
folder:

```bash
# Milestones
gh api repos/Solrosig/cad-worksheets/milestones -f title="M0 – Repository setup" -f due_on="2026-11-10T23:59:59Z"
gh api repos/Solrosig/cad-worksheets/milestones -f title="M1 – WS1 · HTML5" -f state=closed
gh api repos/Solrosig/cad-worksheets/milestones -f title="M2 – WS2 · Bootstrap" -f state=closed
gh api repos/Solrosig/cad-worksheets/milestones -f title="M3 – WS3 · JavaScript" -f state=closed
gh api repos/Solrosig/cad-worksheets/milestones -f title="M4 – WS4 · jQuery + AJAX" -f state=closed
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
