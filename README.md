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

[**📖 About**](#-about-the-project) • [**✨ Features**](#-features) • [**🖼️ Screenshots**](#%EF%B8%8F-screenshots) • [**⚙️ Installation**](#%EF%B8%8F-installation-guide) • [**📡 API**](#-api-endpoints)

</div>

---

## 📖 About The Project

**ProspectPilot AI** is an **agentic AI platform** that replaces weeks of manual startup and market research with autonomous AI agents that do the digging for you.

> Traditional research is slow, scattered across spreadsheets, and surface-level. ProspectPilot deploys four specialized agents that pull from market data, competitor signals, funding databases, and startup metrics — then synthesize everything into a structured, decision-ready report in minutes.

### 🎯 The Problem

Founders, analysts, and investors waste days digging through scattered sources — news, SEC filings, competitor sites, market reports — just to answer simple questions like *"Is this market worth entering?"* or *"Is this startup fundable?"*

### 💡 The Solution

ProspectPilot AI gives you **four autonomous agents on one platform**, each purpose-built for a distinct intelligence domain:

| Agent | What it answers |
|:---|:---|
| 📊 **Market Research** | *How big is this market, and is it growing?* |
| 🕵️ **Competitor Analysis** | *Who am I really up against, and where are the gaps?* |
| 📈 **Startup Evaluation** | *Is this startup fundable — and how does it score?* |
| 💰 **Investment Intelligence** | *Where is capital flowing, and who's writing the checks?* |

### ⭐ Why It's Useful

- **🚀 10x faster** than manual research — minutes, not weeks
- **🧠 Zero prompt-engineering required** — just describe what you need in plain English
- **📚 Source-backed** — every insight is traceable, not a black-box guess
- **🌍 Broad coverage** — 50+ market verticals across 20+ geographies
- **📈 Built for real decisions** — outputs are structured for board decks and investment memos, not just casual reading
- **🔓 Accessible to everyone** — works equally well for a pre-seed founder validating an idea and a Series C investor doing diligence

### 👥 Who It's For

- **Founders** validating a new market or idea before building
- **Investors & analysts** screening deals and tracking competitive landscapes
- **Business strategists** who need fast, structured intelligence without a research team

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

<div align="center">

### Built with ❤️ using MERN Stack and Google Gemini AI

⭐ **If you found this project interesting, consider giving it a star!** ⭐

</div>
