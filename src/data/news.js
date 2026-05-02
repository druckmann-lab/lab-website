/**
 * News & Announcements Data
 * 
 * HOW TO ADD NEWS:
 * 1. Add entry at TOP of NEWS array
 * 2. For long content, create .md file in public/posts/
 */

// ===========================================
// NEWS
// Add new entries at the TOP
// ===========================================

export const NEWS = [
  // -------- 2025 --------

  // -------- 2024 --------
  {
    date: "2024-03-01",
    title: "Paper published in Nature",
    description: "Our work 'Transforming a head direction signal into a goal-oriented steering command' with Rachel Wilson's lab has been published in Nature.",
    link: "https://www.nature.com/articles/s41586-024-07039-2",
    tags: ["publication"]
  },

  // -------- 2023 --------
  {
    date: "2023-06-01",
    title: "Hypothalamic mirror neurons paper published in Cell",
    description: "Our collaboration with Nirao Shah's lab on hypothalamic neurons that mirror aggression has been published in Cell.",
    tags: ["publication"]
  },

  // -------- 2021 --------
  {
    date: "2021-06-01",
    title: "Shaul receives McKnight Scholar Award",
    description: "Shaul has been named a 2021 McKnight Foundation Scholar for his research into how the brain computes using activity distributed across populations and brain areas.",
    link: "https://neuroscience.stanford.edu/people/shaul-druckmann",
    tags: ["award"]
  },
];

// ===========================================
// HELPER FUNCTIONS
// ===========================================

/**
 * Get recent news items
 */
export function getRecentNews(count = 5) {
  return NEWS.slice(0, count);
}

/**
 * Get news grouped by year
 */
export function getNewsByYear() {
  const byYear = {};
  NEWS.forEach(item => {
    const year = item.date.substring(0, 4);
    if (!byYear[year]) byYear[year] = [];
    byYear[year].push(item);
  });
  return Object.entries(byYear)
    .sort((a, b) => b[0] - a[0])
    .map(([year, items]) => ({ year: parseInt(year), items }));
}

/**
 * Format date for display
 */
export function formatDate(dateStr) {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
