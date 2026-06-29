<div align="center">

# 🚀 ProspectPilot AI

### Multi-Agent Startup Intelligence Platform

**Agentic AI Platform for Startup Intelligence — built for founders, investors & analysts**

<br>

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-Runtime-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-Backend-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/atlas)
[![Gemini](https://img.shields.io/badge/Gemini-2.5_Flash-8E75B2?style=for-the-badge&logo=googlegemini&logoColor=white)](https://ai.google.dev/)
[![JWT](https://img.shields.io/badge/JWT-Auth-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)
[![Tailwind](https://img.shields.io/badge/TailwindCSS-Styling-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![Hackathon](https://img.shields.io/badge/Hackathon-Project-FF6B6B?style=for-the-badge&logo=devpost&logoColor=white)]()
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

<br>

[![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=24&pause=1000&color=8E75B2&center=true&vCenter=true&width=600&lines=AI-Powered+Startup+Intelligence;Multi-Agent+Decision+Platform;Built+with+MERN+%2B+Gemini+AI)](https://git.io/typing-svg)

<br>

[**🎥 Demo**](#-demo) • [**✨ Features**](#-features) • [**🏗️ Architecture**](#%EF%B8%8F-system-architecture) • [**⚙️ Installation**](#%EF%B8%8F-installation-guide) • [**📡 API**](#-api-endpoints) • [**🤝 Contributing**](#-contributors)

</div>

---

## 🎥 Demo

<p align="center">
  <img src="./hero.png" width="900" alt="ProspectPilot AI Landing Page">
</p>

<p align="center"><i>📌 Swap in a real screen recording at <code>./assets/demo.gif</code> once available — the landing page is shown above in the meantime.</i></p>

---

## ✨ Features

<div align="center">

| 🚀 Feature | 📝 Description |
|:---|:---|
| 🔐 **Secure Authentication** | JWT-based register/login with bcrypt password hashing |
| 🧠 **Agentic AI Research** | Autonomous agents that plan, search, and synthesize — no prompt engineering needed |
| 📊 **Market Research Agent** | TAM/SAM/SOM sizing, trend signal detection, regulatory landscape mapping |
| 🕵️ **Competitor Analysis Agent** | Competitive moat scoring, funding round tracking, feature gap analysis |
| 📈 **Startup Evaluation Agent** | Scores startups across 40+ metrics on an A–F grading scale |
| 💰 **Investment Intelligence Agent** | Tracks $2T+ in deals across 3K+ investors for funding signals |
| 🗂️ **Saved Reports Dashboard** | Access and manage all previously generated AI reports |
| 🌍 **Global Market Coverage** | 50+ verticals across 20+ geographies with localized data sources |
| 🛡️ **Enterprise Security** | SOC 2 compliant — proprietary data never trains the models |
| 📱 **Responsive UI** | Sleek, mobile-friendly Tailwind CSS interface |

</div>

---

## 🖼️ Screenshots

<div align="center">

### 🏠 Landing Page
<img src="./hero.png" width="800">

### ⚡ Platform Features
<img src="./features.png" width="800">

### 🤖 AI Agents Overview
<img src="./ai-agents.png" width="800">

### 💡 Why ProspectPilot
<img src="./why-us.png" width="800">

### 📣 Call to Action
<img src="./cta.png" width="800">

### 📝 Sign Up
<img src="./signup.png" width="800">

### 🔑 Sign In
<img src="./login.png" width="800">

### 📊 Dashboard
<img src="./dashboard.png" width="800">

### 📈 Market Research Agent
<img src="./market-research-agent.png" width="800">

> 🕵️ **Competitor Analysis**, 💰 **Investment Intelligence**, and 🚀 **Startup Evaluation** agents share the same focused workspace layout shown above — just the agent icon, title, and quick-start prompts change per domain.

### 📂 Reports
<img src="./reports.png" width="800">

### 🦶 Footer
<img src="./footer.png" width="800">

</div>

---

## 🏗️ System Architecture

<p align="center">
  <img src="./architecture/prospectpilot-architecture.png" width="100%" alt="System Architecture">
</p>

> ProspectPilot AI follows a **modular multi-agent architecture**, where independent AI agents communicate with the Gemini API and persist insights to MongoDB Atlas — enabling each agent (Market Research, Competitor Analysis, Startup Evaluation, Investment Intelligence) to operate, scale, and evolve independently.

---

## 🔄 Workflow

```mermaid
graph TD

A[User] --> B[React Frontend]
B --> C[REST API]
C --> D[Express Backend]
D --> E[JWT Authentication]
D --> F[Agent Controller]

F --> G[Market Research Agent]
F --> H[Competitor Analysis Agent]
F --> I[Startup Evaluation Agent]
F --> J[Investment Intelligence Agent]

G --> K[Gemini API]
H --> K
I --> K
J --> K

K --> L[Generated Report]
L --> M[MongoDB Atlas]
M --> N[Reports Dashboard]
```

---

## 🧰 Tech Stack

<div align="center">

| Layer | Technologies |
|:---|:---|
| **Frontend** | React.js, Vite, Tailwind CSS, Axios, React Router, Lucide React |
| **Backend** | Node.js, Express.js, JWT Authentication, bcrypt.js |
| **Database** | MongoDB Atlas, Mongoose |
| **AI Engine** | Google Gemini 2.5 Flash API |
| **Deployment** | Vercel (Frontend), Render / Railway (Backend) |

</div>

---

## 📁 Folder Structure

```bash
ProspectPilotAI/
│
├── client/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── App.jsx
│
├── server/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── server.js
│
├── screenshots/
├── architecture/
└── README.md
```

---

## ⚙️ Installation Guide

### 1️⃣ Clone the repository

```bash
git clone https://github.com/<your-username>/ProspectPilotAI.git
cd ProspectPilotAI
```

### 2️⃣ Setup Frontend

```bash
cd client
npm install
npm run dev
```

### 3️⃣ Setup Backend

```bash
cd server
npm install
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file inside the `server/` directory:

```env
PORT=
MONGO_URI=
JWT_SECRET=
GEMINI_API_KEY=
```

---

## 📡 API Endpoints

<div align="center">

| Method | Endpoint | Description |
|:---|:---|:---|
| `POST` | `/api/auth/register` | Register a new user |
| `POST` | `/api/auth/login` | Authenticate user & return JWT |
| `POST` | `/api/agents/market-research` | Run Market Research Agent |
| `POST` | `/api/agents/competitor-analysis` | Run Competitor Analysis Agent |
| `POST` | `/api/agents/startup-evaluation` | Run Startup Evaluation Agent |
| `POST` | `/api/agents/investment-intelligence` | Run Investment Intelligence Agent |
| `GET` | `/api/agents/reports` | Fetch all saved reports for a user |

</div>

---

## 🔮 Future Enhancements

- 📄 PDF Export of AI-generated reports
- 🤖 Multi-LLM Support (OpenAI, Claude, Mistral)
- 📡 Real-Time Market Data Integration
- 🎙️ Voice-Based Interaction
- 📚 RAG (Retrieval-Augmented Generation) Integration
- 👥 Team Collaboration Workspaces
- 📊 Analytics Dashboard with Trend Insights

---

## 🤝 Contributors

<div align="center">

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/<username>">
        <img src="https://github.com/identicons/<username>.png" width="80" height="80" style="border-radius:50%"><br>
        <sub><b>Your Name</b></sub>
      </a><br>
      <sub>Founder & Lead Developer</sub>
    </td>
    <td align="center">
      <a href="https://github.com/<username2>">
        <img src="https://github.com/identicons/<username2>.png" width="80" height="80" style="border-radius:50%"><br>
        <sub><b>Teammate Name</b></sub>
      </a><br>
      <sub>Contributor</sub>
    </td>
  </tr>
</table>

*Want to contribute? Pull requests are warmly welcome!* 🎉

</div>

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

### Built with ❤️ using MERN Stack and Google Gemini AI

⭐ **If you found this project interesting, consider giving it a star!** ⭐

</div>
