# Druckmann Lab Website

Website for the Druckmann Lab at Stanford University.

## Quick Start

```bash
python -m http.server     # go to localhost:8000
```

## Structure

```
index.html              ← Homepage
people.html             ← Lab members
person.html             ← Individual profile (auto-generated)
publications.html       ← All publications
news.html               ← News listing
teaching.html           ← Courses & reading
contact.html            ← Contact & join info

src/data/               ← All editable data lives here
  members/              ← One file per person
  publications.js       ← Papers, preprints, book chapters
  news.js               ← Announcements
  teaching.js           ← Courses & reading list
  research.js           ← Research areas & lab info

public/
  members/              ← Profile photos
  posts/                ← Long-form news (markdown)
  logos/                 ← Affiliation logos
```

## Contributing

See **[CONTRIBUTING.md](CONTRIBUTING.md)** for how to add yourself, publications, news, etc.