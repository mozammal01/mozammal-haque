import MernIcon from "@/../public/services/mern-stack.png";
import FullStackGif from "@/../public/services/output-onlinegiftools.gif";
import FrontendIcon from "@/../public/services/frontend.png";

export const services = [
  {
    "id": 1,
    "name": "MERN Stack Development",
    "description": "End-to-end web application development using MongoDB, Express.js, React, and Node.js. Perfect for building scalable and modern apps.",
    "category": "MERN",
    "icon": "🟢",
    "iconImage": MernIcon,
    "features": ["Custom Web Applications", "RESTful API Integration", "Secure Authentication"]
  },
  {
    "id": 2,
    "name": "Full Stack Development",
    "description": "Complete web development solutions covering both frontend and backend technologies to deliver robust, production-ready applications.",
    "category": "Full Stack",
    "icon": "⚡",
    "iconImage": FullStackGif,
    "features": ["End-to-End Solutions", "Scalable Architecture", "Database Management"]
  },
  {
    "id": 3,
    "name": "Frontend Development",
    "description": "Crafting beautiful, responsive, and user-friendly interfaces with React, Next.js, Tailwind CSS, and modern TypeScript.",
    "category": "Frontend",
    "icon": "🎨",
    "iconImage": FrontendIcon,
    "features": ["Pixel-Perfect Design", "Responsive Layouts", "Modern UI/UX"]
  },
  {
    "id": 4,
    "name": "Backend Development",
    "description": "Building powerful, secure, and scalable server-side applications and APIs using Node.js, Express, and modern databases.",
    "category": "Backend",
    "icon": "⚙️",
    "iconImage": MernIcon, // Reusing MernIcon for now
    "features": ["Server-Side Logic", "Database Optimization", "Secure APIs"]
  },
  {
    "id": 5,
    "name": "Interactive UI & Animations",
    "description": "Creating dynamic and captivating user experiences with smooth micro-interactions using Framer Motion and GSAP.",
    "category": "Animations",
    "icon": "✨",
    "iconImage": FrontendIcon, // Reusing FrontendIcon for now
    "features": ["Framer Motion", "GSAP Animations", "Micro-interactions"]
  }
]
