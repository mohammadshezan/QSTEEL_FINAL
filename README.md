# QSTEEL FINAL

A railway logistics and yard-operations platform with a modern, railway-themed UI, planning and optimization tools, and integrations with an Express API, PostgreSQL/Prisma, Redis, and an optional Python AI service.

- Frontend: Next.js 14, React 18, Tailwind CSS
- Backend: Node.js/Express, Socket.IO
- Data: PostgreSQL (Prisma ORM), Redis (optional cache)
- AI: Python FastAPI service (optional)

## Repository Structure

```
Backend/
  AI-Service/           # Python FastAPI service (optional)
  NodeJS-API/           # Express API + Prisma
Config/
  docker-compose.yml    # Compose for local/dev
  render.yaml           # Render deploy config (if used)
  .env.example          # Example env values
Database/
  schema.prisma         # Prisma schema (source of truth)
  seed.js               # Seed script
Documentation/
  README.md             # Extended docs, production readiness, etc.
Frontend/
  web/                  # Next.js app (UI)
PROJECT_STRUCTURE.md    # Notes about the re-org
```

## Quick Start

### Option A — Docker Compose (recommended for local dev)

1) Review env values and create required env files:
- Check `Config/.env.example` and copy values you need into your own env files.

2) Start the stack:

```powershell
# From repo root
docker compose -f .\Config\docker-compose.yml up --build
```

- Frontend: http://localhost:3000
- API: http://localhost:4000

### Option B — Run services individually

- Frontend (Next.js)
```powershell
cd .\Frontend\web
npm install
npm run dev
```

- API (Express + Prisma)
```powershell
cd .\Backend\NodeJS-API
npm install
npx prisma generate
npm run dev
```

- AI Service (Python FastAPI; optional)
```powershell
cd .\Backend\AI-Service
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
uvicorn main:app --reload --host 0.0.0.0 --port 5001
```

- Database (Prisma migrations & seed)
```powershell
# Ensure your DATABASE_URL is set for the API project
cd .\Backend\NodeJS-API
npx prisma migrate dev
# Seed data (if needed)
node ..\..\Database\seed.js
```

## Recent Updates
- Restructured repository into `Frontend/`, `Backend/`, `Database/`, `Config/`, and `Documentation/`
- Removed Chat widget from the UI shell
- Updated hero title gradient colors for a cleaner, cool-toned look

## Documentation
- See `Documentation/README.md` and `Documentation/PRODUCTION_READINESS.md` for more details