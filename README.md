# Shaik Mothi Basha - Data Engineer Portfolio

<div align="center">
  <br />
  <div>
    <img src="https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
    <img src="https://img.shields.io/badge/-TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/-EmailJS-8C4B20?style=for-the-badge&logo=gmail" alt="EmailJS" />
    <img src="https://img.shields.io/badge/-Azure-0078D4?style=for-the-badge&logo=microsoftazure" alt="Azure" />
  </div>
  <h3 align="center">Modern Data Engineer Portfolio with Dark Mode, Resume Download, and Interactive Contact Form</h3>
  <div align="center">
    Visit the live portfolio: 
    <a href="https://skmothi19.github.io"><b>Portfolio Website</b></a>
  </div>
  <br />
</div>

## 📋 Table of Contents

1. [About](#-about)
2. [Tech Stack](#-tech-stack)
3. [Features](#-features)
4. [Project Structure](#-project-structure)
5. [Quick Start](#-quick-start)
6. [Environment Variables](#-environment-variables)
7. [Deployment](#-deployment)
8. [Contact](#-contact)

---

## 👨‍💼 About

This is a modern, professional portfolio website built for **Shaik Mothi Basha**, a Data Engineer with 1+ year of full-time experience building scalable ETL/ELT data pipelines on Azure cloud platform. 

The portfolio showcases:
- Data Engineering expertise (Python, SQL, PySpark)
- Azure cloud technologies (Data Factory, Databricks, Synapse Analytics)
- Professional achievements and key metrics
- Interactive contact form with email integration
- Downloadable resume
- Responsive design with smooth animations

---

## ⚙️ Tech Stack

* **React 18** – Modern component-based UI
* **Vite** – Lightning-fast build tool and dev server
* **TailwindCSS v4** – Utility-first CSS framework
* **Lucide Icons** – Beautiful icon library
* **Radix UI** – Accessible component primitives
* **EmailJS** – Email service integration
* **React Router** – Client-side routing
* **React Toast** – Notification system

---

## ⚡️ Features

* 🌓 **Light/Dark Mode Toggle**
  - Automatic theme detection with localStorage persistence
  - Smooth transitions between themes

* 💫 **Animated UI & Effects**
  - Particle/star background animations
  - Fade-in animations on scroll
  - Smooth hover effects and transitions
  - Glassmorphism design elements

* 📱 **Fully Responsive Design**
  - Mobile-first approach
  - Desktop and mobile navigation
  - Optimized for all screen sizes

* 👨‍💻 **Hero Section**
  - Professional introduction with animations
  - Call-to-action buttons

* 📖 **About Section**
  - Professional summary aligned with resume
  - Key achievements with metrics
  - Technical expertise overview
  - Download and view resume buttons

* 💬 **Skills Section**
  - Categorized technical skills (Azure, Big Data, Engineering, Tools)
  - Filterable skill categories
  - Organized skill grid

* 📨 **Interactive Contact Form**
  - EmailJS integration for real email delivery
  - Form validation
  - Toast notifications for feedback
  - Direct email to skmothi19@gmail.com

* 🤝 **Social Media Links**
  - LinkedIn, X (Twitter), Instagram, GitHub
  - Smooth hover animations

* 🔗 **Projects Showcase**
  - Displayable project cards
  - Technology tags
  - Links to GitHub and live demos

* 📄 **Resume Integration**
  - Download resume as PDF
  - View resume in new tab

---

## 📁 Project Structure

```
skmothi19.github.io/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── SkillsSection.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── Footer.jsx
│   │   ├── ThemeToggle.jsx
│   │   ├── StarBackground.jsx
│   │   └── ui/
│   │       ├── toast.jsx
│   │       └── toaster.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── NotFound.jsx
│   ├── hooks/
│   │   └── use-toast.js
│   ├── lib/
│   │   └── utils.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
│   ├── resume.pdf
│   └── projects/
├── .env.local
├── .env.example
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

---

## 👌 Quick Start

### Prerequisites

* [Node.js](https://nodejs.org/) (v16 or higher)
* [Git](https://git-scm.com/)

### Installation & Setup

```bash
# Clone the repository
git clone https://github.com/skmothi19/skmothi19.github.io.git
cd skmothi19.github.io

# Install dependencies with legacy peer deps flag
npm install --legacy-peer-deps

# Start development server
npm run dev
```

Your app will be available at: [http://localhost:5173](http://localhost:5173)

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

---

## 🔑 Environment Variables

To enable email functionality, create a `.env.local` file in the project root:

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SERVICE_ID=service_xxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
VITE_RECEIVER_EMAIL=skmothi19@gmail.com
```

### Getting EmailJS Credentials

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Go to **Account** → Copy your **Public Key**
3. Go to **Email Services** → Connect your email provider → Copy **Service ID**
4. Go to **Email Templates** → Create a template → Copy **Template ID**

For detailed instructions, see [EMAILJS_SETUP.md](./EMAILJS_SETUP.md)

---

## ☁️ Deployment

### Deploy on Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add Environment Variables in settings:
   - `VITE_EMAILJS_PUBLIC_KEY`
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_RECEIVER_EMAIL`
5. Click **Deploy**

Your live portfolio will be hosted at: [https://skmothi19.github.io](https://skmothi19.github.io)

---

## 📋 Resume Download

The portfolio includes a downloadable resume in PDF format. The resume file should be placed at:
- `public/resume.pdf`

Users can:
- **Download** the resume directly to their device
- **View** the resume in a new browser tab

---

## 🔗 Useful Links

* [React Documentation](https://react.dev/)
* [Tailwind CSS Docs](https://tailwindcss.com/)
* [Vite Documentation](https://vitejs.dev/)
* [Lucide Icons](https://lucide.dev/)
* [Radix UI](https://www.radix-ui.com/)
* [EmailJS Documentation](https://www.emailjs.com/docs/)
* [Vercel Deployment](https://vercel.com/)

---

## 👤 Contact

* **Email:** [skmothi19@gmail.com](mailto:skmothi19@gmail.com)
* **phone:** +91 8341924691
* **LinkedIn:** [shaik-mothi-basha](https://www.linkedin.com/in/shaik-mothi-basha)
* **GitHub:** [skmothi19](https://github.com/skmothi19)
* **Location:** Hyderabad, India

---

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ by Shaik Mothi Basha**
