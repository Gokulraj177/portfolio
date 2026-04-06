const Database = require('better-sqlite3');
const db = new Database('portfolio.db');

const skills = [
  { name: 'HTML5', proficiency: 95, color: '#f97316' },
  { name: 'CSS3 / Animations', proficiency: 90, color: '#3b82f6' },
  { name: 'JavaScript', proficiency: 85, color: '#facc15' },
  { name: 'Python', proficiency: 80, color: '#a855f7' },
  { name: 'React & Next.js', proficiency: 75, color: '#06b6d4' }
];

const projects = [
  {
    title: 'Petrol Bunk Billing System',
    description: 'Developed a comprehensive Petrol Bunk Billing & Stock Automation System to streamline operations and enhance efficiency. Designed to manage daily records, track employee attendance, monitor fuel sales, and generate detailed reports.',
    skills_used: 'PHP, MySQL, HTML, CSS, JavaScript'
  }
];

// Seed
try {
  const insertSkill = db.prepare('INSERT INTO skills (name, proficiency, color) VALUES (?, ?, ?)');
  for (const s of skills) {
    insertSkill.run(s.name, s.proficiency, s.color);
  }

  const insertProject = db.prepare('INSERT INTO projects (title, description, skills_used) VALUES (?, ?, ?)');
  for (const p of projects) {
    insertProject.run(p.title, p.description, p.skills_used);
  }
  
  console.log('Seeded database with skills and projects.');
} catch (e) {
  console.log('Error seeding (maybe already seeded):', e.message);
}
