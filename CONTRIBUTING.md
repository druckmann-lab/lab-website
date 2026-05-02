# Contributing to the Lab Website

Each lab member has their own file. Just edit your file and push — GitHub Actions handles the rest.

Want to preview locally?

1. Run `python -m http.server`
2. go to `http://localhost:8000/`

---

## 🧑 Adding Yourself as a New Member

### Step 1 — Create your file

Add a file under `src/data/members/` in the folder matching your role:

| Role | Folder |
|------|--------|
| PI | `pi/` |
| Postdoc | `postdoc/` |
| PhD Student | `phd/` |
| Alumni | `alumni/` |

Name the file `firstname-lastname.js`:

```
src/data/members/phd/jane-doe.js
```

### Step 2 — Copy the template and fill it in

Copy `src/data/members/_TEMPLATE.js` or use the following:

```js
export default {
  // === REQUIRED ===
  id: "janedoe",                  // lowercase, no spaces
  name: "Jane Doe",               // display name
  role: "Graduate Student",        // Graduate Student / Postdoc / Research Staff
  img: "janedoe.jpg",             // photo filename in public/members/

  // === OPTIONAL ===
  program: "Neurosciences",
  coAdvisor: "",
  bio: "",
  education: [
    // "PhD - Field, University",
    // "MS - Field, University",
  ],

  // === CONTACT (include what you want visible) ===
  email: "janedoe@stanford.edu",
  website: "",                    // https://yoursite.com
  scholar: "",                    // Google Scholar URL
  linkedin: "",                   // LinkedIn URL
};
```

### Step 3 — Add your photo

Place your photo in `public/members/`.

- Filename must match the `img` field above
- Square recommended (~500×500px)
- If no photo is provided, your initials will be shown automatically

### Step 4 — Push

That's it. GitHub Actions will regenerate `src/data/members/index.js` automatically.

---

## ✏️ Updating Your Information

1. Open `src/data/members/[folder]/[your-name].js`
2. Edit and push

---

## 🎓 When Someone Leaves the Lab

1. Move their file from `phd/` or `postdoc/` → `alumni/`
2. Add these fields:

```js
  years: "2020-2025",
  currentPosition: "Scientist, Google DeepMind",
```

3. Push

---

## 📄 Adding a Publication

**File:** `src/data/publications.js`

Add your entry at the **top** of the appropriate array (newest first):

| Array | Use for |
|-------|---------|
| `PUBLICATIONS` | All peer-reviewed papers |
| `PREPRINTS` | arXiv, bioRxiv, etc. |
| `BOOK_CHAPTERS` | Book chapters |
| `SELECTED_PUBLICATIONS` | Highlights (curated by PI) |

```js
{
  id: "doe2025nature",              // [first author last name][year][venue]
  title: "Your Paper Title",
  authors: "Jane Doe*, John Smith, Shaul Druckmann",
  venue: "Nature",
  year: 2025,
  note: "*Co-first authors",        // optional
  links: {
    paper: "https://doi.org/...",    // optional
    code: "https://github.com/...", // optional
    news: "https://...",            // optional (press coverage, etc.)
  }
}
```

### ⚠️ Important

- Use **full names** in `authors` (e.g., "Shaul Druckmann" ✅, "Druckmann S" ❌)
- The name must match the `name` field in the member file exactly — this is how papers automatically appear on profile pages
- `id` must be unique across all arrays

---

## 📢 Adding News

**File:** `src/data/news.js`

Add your entry at the **top** of the `NEWS` array:

```js
{
  date: "2025-06-15",               // YYYY-MM-DD
  title: "Paper Published in Nature",
  description: "Our work on ... has been published.",
  link: "https://...",              // optional, external link
  tags: ["publication"],            // see tags below
}
```

### Available Tags

| Tag | Use for |
|-----|---------|
| `publication` | Paper accepted/published |
| `preprint` | New preprint |
| `people` | New members, graduations, awards |
| `talk` | Conference talks, invited lectures |
| `funding` | Grants, fellowships |
| `social` | Lab events |

### Longer News Posts

For news items that need more detail:

1. Create a markdown file in `public/posts/` (e.g., `2025-06-15-new-members.md`)
2. Add `contentPath` to your news entry:

```js
{
  date: "2025-06-15",
  title: "Welcome New Members!",
  description: "Short summary.",
  contentPath: "2025-06-15-new-members.md",
  tags: ["people"],
}
```

Supported markdown: headers (`#`), bold (`**`), italic (`*`), links, images, lists (`-`), blockquotes (`>`)

---

## 🔍 FAQ

**Q: Can I edit `index.js` directly?**
→ No. `src/data/members/index.js` is auto-generated. Run `npm run build:members` to regenerate it.