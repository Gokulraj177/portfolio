import PortfolioClient from '@/components/PortfolioClient';

export const metadata = {
  title: 'Gokulraj | Web Developer',
  description: 'Portfolio of Gokulraj, a passionate Web Developer skilled in HTML, CSS, JavaScript, and Python.',
  keywords: ["Gokulraj", "Web Developer", "Frontend Developer", "Python", "JavaScript", "React"],
};

export default function Home() {
  const skills = [
    { id: 1, name: 'HTML5', proficiency: 95, color: '#f97316' },
    { id: 2, name: 'CSS3 / Animations', proficiency: 90, color: '#3b82f6' },
    { id: 3, name: 'JavaScript', proficiency: 85, color: '#facc15' },
    { id: 4, name: 'Python', proficiency: 80, color: '#a855f7' },
    { id: 5, name: 'React & Next.js', proficiency: 75, color: '#06b6d4' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Petrol Bunk Billing System',
      description: 'Developed a comprehensive Petrol Bunk Billing & Stock Automation System to streamline operations and enhance efficiency. Designed to manage daily records, track employee attendance, monitor fuel sales, and generate detailed reports.',
      skills_used: 'PHP, MySQL, HTML, CSS, JavaScript'
    }
  ];

  return <PortfolioClient skills={skills} projects={projects} />;
}
