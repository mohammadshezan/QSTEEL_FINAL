# QSTEEL Project - Reorganized Structure

## 📁 Project Organization Overview

The QSTEEL project has been reorganized into a clean, segregated folder structure following industry best practices:

### 🎨 **Frontend** - UI/UX Components
```
Frontend/
└── web/
    ├── src/
    │   ├── app/                    # Next.js App Router pages
    │   │   ├── page.tsx           # Landing page (main entry)
    │   │   ├── layout.tsx         # Root layout
    │   │   ├── globals.css        # Global CSS styles
    │   │   ├── (auth)/            # Authentication pages
    │   │   ├── admin/             # Admin dashboard pages
    │   │   ├── customer/          # Customer portal pages
    │   │   ├── manager/           # Manager interface pages
    │   │   ├── yard/              # Yard operations pages
    │   │   └── ...other routes
    │   ├── components/            # Reusable React components
    │   │   ├── Nav.tsx           # Navigation component
    │   │   ├── MapLive.tsx       # Live map component
    │   │   ├── Assistant.tsx     # AI assistant component
    │   │   └── ui/               # UI library components
    │   ├── lib/                  # Utility functions
    │   └── types/                # TypeScript definitions
    ├── public/                   # Static assets
    ├── package.json             # Frontend dependencies
    ├── tailwind.config.js       # Tailwind CSS configuration
    ├── tsconfig.json           # TypeScript configuration
    └── next.config.js          # Next.js configuration
```

**Technologies:** Next.js 14, React 18, TypeScript, Tailwind CSS, Leaflet Maps

### ⚡ **Backend** - Server-side Logic
```
Backend/
├── NodeJS-API/                  # Express.js API Server
│   ├── src/
│   │   ├── index.js            # Main API server file
│   │   └── optimizer.js        # Rake optimization engine
│   ├── scripts/                # Utility scripts
│   ├── package.json           # API dependencies
│   ├── Dockerfile             # Containerization
│   └── .env                   # Environment variables
│
└── AI-Service/                 # Python AI/ML Service
    ├── main.py                # FastAPI ML service
    ├── requirements.txt       # Python dependencies
    └── Dockerfile            # AI service container
```

**Technologies:** Node.js, Express.js, Socket.IO, Python, FastAPI

### 🗄️ **Database** - Data Management
```
Database/
├── schema.prisma              # Prisma ORM schema
└── seed.js                   # Database seeding script
```

**Technologies:** Prisma ORM, PostgreSQL, Redis

### ⚙️ **Config** - Configuration Files
```
Config/
├── docker-compose.yml         # Multi-service orchestration
├── render.yaml               # Render.com deployment
├── .env.example             # Environment template
└── .env                     # Local environment variables
```

### 🔧 **Root Files** - Project Configuration
```
QSTEEL_FINAL/
├── package.json              # Root workspace configuration
├── package-lock.json        # Dependency lock file
├── .gitignore               # Git ignore rules
└── PROJECT_STRUCTURE.md     # This documentation
```

### 📚 **Documentation**
```
Documentation/
├── README.md                 # Project overview
└── PRODUCTION_READINESS.md   # Deployment guide
```

### 🚀 **Deployment**
```
Deployment/
├── Dockerfile               # API containerization
├── DEPLOY.md               # Deployment instructions
└── (other deployment files)
```

## 🏗️ **Architecture Overview**

### **Frontend Architecture:**
- **Framework:** Next.js 14 with App Router
- **Styling:** Tailwind CSS with custom design system
- **State Management:** React hooks and context
- **Maps:** Leaflet for real-time tracking
- **UI Components:** Custom component library

### **Backend Architecture:**
- **API Server:** Express.js with REST endpoints
- **Real-time:** Socket.IO for live updates
- **Authentication:** JWT-based auth system
- **Optimization:** Custom MILP-based rake optimizer
- **AI/ML:** Separate Python service for forecasting

### **Key Features:**
1. **🤖 AI-Powered Optimization** - Rake formation and route optimization
2. **📍 Real-time Tracking** - Live railway position tracking
3. **👥 Multi-role System** - Customer, Manager, Yard, Admin interfaces
4. **🌱 Carbon Analytics** - Sustainability metrics and eco-routing
5. **📊 Dashboard & KPIs** - Comprehensive analytics
6. **🔗 Blockchain Ledger** - Tamper-evident audit trail

## 🚀 **Running the Project**

### **Development Mode:**
```bash
# Frontend (Port 3000)
cd Frontend/web
npm install
npm run dev

# Backend API (Port 4000)
cd Backend/NodeJS-API
npm install
npm run dev

# AI Service (Port 8000)
cd Backend/AI-Service
pip install -r requirements.txt
python main.py
```

### **Production Deployment:**
```bash
# Using Docker Compose
docker-compose up -d
```

## 📊 **File Type Distribution**

### **Frontend Files:**
- **TypeScript/TSX:** 105 component and page files
- **CSS:** Global styles with Tailwind utilities
- **JSON:** Configuration and manifests
- **Static Assets:** Logos, icons, PWA manifest

### **Backend Files:**
- **JavaScript:** 3 main server files
- **Python:** 1 AI service file
- **SQL Schema:** Prisma schema definition
- **Environment:** Configuration templates

### **Total Project Size:** ~500KB of source code (excluding dependencies)

## 🎯 **Benefits of This Structure**

1. **🔍 Clear Separation of Concerns** - Each folder has a specific purpose
2. **🚀 Easy Deployment** - Separate containerization for each service
3. **👥 Team Collaboration** - Developers can work on specific areas
4. **🔧 Maintainability** - Easy to locate and modify specific functionality
5. **📈 Scalability** - Can scale individual services independently

---

*This reorganized structure makes the QSTEEL project more maintainable, scalable, and easier to understand for new developers joining the team.*