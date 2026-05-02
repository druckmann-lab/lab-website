/**
 * TEMPLATE - Copy this file and rename to: [firstname]-[lastname].js
 * Place in the appropriate folder: pi/, postdoc/, phd/, or alumni/
 * 
 * Required fields: id, name, role, img
 * Optional fields: everything else (delete or leave empty if not needed)
 */

export default {
  // === REQUIRED ===
  id: "firstnamelastname",        // lowercase, no spaces (e.g., "janedoe")
  name: "Your Full Name",         // as you want it displayed
  role: "Graduate Student",       // ["Graduate Student", "Postdoc", "Research Staff"]
  img: "firstnamelastname.jpg",   // photo filename in public/members/

  // === OPTIONAL ===
  program: "",                    // e.g., "Neurosciences", "Physics", "Computer Science"
  coAdvisor: "",                  // e.g., "Jane Smith"
  education: [
    // "PhD - Field, University",
    // "MS - Field, University",
    // "BS - Field, University",
  ],

  // === CONTACT (add what you want visible) ===
  email: "",                      // e.g., "you@stanford.edu"
  website: "",                    // e.g., "https://yoursite.com"
  scholar: "",                    // e.g., "https://scholar.google.com/citations?user=XXXXX"
  linkedin: "",                   // e.g., "https://linkedin.com/in/yourname"

  // === FOR ALUMNI ONLY ===
  // years: "2020-2025",          // years in the lab
  // currentPosition: "",         // e.g., "Scientist, Google DeepMind"
};
