# 👨‍💻 Mahib Hosen Ornob - Personal Portfolio

Welcome to my personal portfolio repository! This project is a complete, modern, and responsive website built to showcase my journey as a Software Engineer turned Computer Science PhD Researcher. It highlights my academic research, technical experience, programming projects, and even my photography.

## 🚀 Live Demo

*(Add your deployment link here once hosted, e.g., https://mahibornob.com)*

## 🛠️ Built With

This portfolio is developed using a modern web development stack:

*   **React 18**: Frontend UI library.
*   **Vite**: Next-generation, blazing-fast frontend tooling and bundler.
*   **Tailwind CSS**: Utility-first CSS framework for rapid and highly customizable styling.
*   **Framer Motion**: Powerful animation library for React, enabling seamless page transitions and interactive elements.
*   **React Icons**: Comprehensive library for scalable SVG icons.

## ✨ Key Features

*   **Responsive Design:** Fully optimized for all devices, from large desktop monitors to mobile phones.
*   **Smooth Animations:** Utilizes Framer Motion for elegant scroll animations, hover effects, and page intros.
*   **Component-Driven Architecture:** Clean, modular React code structure (Hero, About, Experience, Projects, Research, Photography, Contact).
*   **Centralized Content Management:** All portfolio content (text, images, links) is managed in a single `src/constants/index.js` file, making future updates quick and hassle-free.
*   **Photography Showcase:** Dedicated section to display personal photography with responsive grid layouts.
*   **Research & Publications:** Specialized component to highlight published academic papers, complete with award badges and PDF download links.

## 📂 Project Structure

```
├── public/                 # Static assets (favicons, etc.)
├── src/
│   ├── assets/             # Images, project screenshots, photography, and PDFs
│   │   ├── photography/
│   │   └── projects/
│   ├── components/         # Reusable React components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Photography.jsx
│   │   ├── Projects.jsx
│   │   ├── Research.jsx
│   │   └── Technologies.jsx
│   ├── constants/          # All portfolio text, links, and data
│   │   └── index.js
│   ├── App.jsx             # Main application component
│   ├── index.css           # Global stylesheet and Tailwind imports
│   └── main.jsx            # Application entry point
├── package.json            # Project dependencies and npm scripts
├── tailwind.config.js      # Tailwind CSS configuration
└── vite.config.js          # Vite configuration
```

## ⚙️ Local Development Setup

To run this project locally on your machine, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (version 18+ recommended) and `npm` installed.

### Installation

1.  **Clone the repository** (if you haven't already):
    \`\`\`bash
    git clone https://github.com/yourusername/Personal-Portfolio.git
    cd Personal-Portfolio
    \`\`\`

2.  **Install dependencies**:
    \`\`\`bash
    npm install
    \`\`\`

3.  **Start the development server**:
    \`\`\`bash
    npm run dev
    \`\`\`

4.  **View the application**:
    Open your browser and navigate to the local URL provided in your terminal, usually \`http://localhost:5173/\`.

## 📝 How to Update Content

The beauty of this portfolio is that you rarely need to touch the UI code to update your information!

Almost all content is sourced from **\`src/constants/index.js\`**. 
*   **Adding a new project:** Just add a new object to the \`PROJECTS\` array.
*   **Updating your bio:** Edit the \`HERO_CONTENT\` or \`ABOUT_TEXT\` strings.
*   **Adding a publication:** Update the \`RESEARCH\` array.
*   **Adding photos:** Place the image in \`src/assets/photography/\` and add it to the \`PHOTOGRAPHY_IMAGES\` array.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
