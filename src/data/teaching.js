/**
 * Teaching & Courses Data
 * 
 * HOW TO ADD A COURSE:
 * 1. Add entry at TOP of COURSES array
 */

// ===========================================
// COURSES
// Add new entries at the TOP
// ===========================================

export const COURSES = [
  {
    code: "NEPR 208",
    title: "Neuroscience Program Computational Core Course",
    description: "Introduction to computational neuroscience methods and analysis techniques.",
    url: "https://druckmann-lab.github.io/nepr208",
    term: "Spring",
    active: true
  },
];

// ===========================================
// RECOMMENDED READING
// Background materials for population data analysis
// ===========================================

export const READING = [
  {
    authors: "Duda, Hart, Stock",
    title: "Pattern Classification",
    description: "Classical text on pattern recognition and statistical learning.",
    type: "textbook"
  },
  {
    authors: "Manly",
    title: "Multivariate Statistical Methods: A Primer",
    description: "Accessible introduction to multivariate statistics.",
    type: "textbook"
  },
];

// ===========================================
// HELPER FUNCTIONS
// ===========================================

export function getActiveCourses() {
  return COURSES.filter(c => c.active);
}
