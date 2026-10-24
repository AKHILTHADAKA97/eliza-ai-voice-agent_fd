# ELIZA AI — Multi-Model Voice Assistant

A full-stack starter project inspired by classic ELIZA / retro sci-fi terminal interfaces. It includes a React + Vite + Tailwind frontend and a FastAPI backend with provider adapters, model routing, conversation persistence, browser speech recognition/synthesis, and optional OpenAI-compatible API support.

## Requirements
- Node.js 20+
- Python 3.11+
- Optional: MongoDB and Redis for persistence/caching
- An API key for at least one configured LLM provider (or Ollama running locally)

## Quick start

### 1. Backend
```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
Copy-Item .env.example .env
python -m uvicorn app.main:app --reload --port 8000
```
Linux/macOS activation: `source .venv/bin/activate`; copy config with `cp .env.example .env`.

Edit `backend/.env` and add `OPENAI_API_KEY` and/or configure Ollama. The backend works without a key for health checks, but chat needs a working provider.

### 2. Frontend
In a second terminal:
```powershell
cd frontend
npm install
Copy-Item .env.example .env
npm run dev
```
Open the Vite URL printed in the terminal (usually http://localhost:5173).

## Provider configuration
- OpenAI: set `OPENAI_API_KEY` and `OPENAI_MODEL` in `backend/.env`.
- Ollama: install/start Ollama, pull a model (example `ollama pull llama3.2`), then set `OLLAMA_BASE_URL=http://localhost:11434` and `OLLAMA_MODEL=llama3.2`.
- OpenAI-compatible endpoint: configure `OPENAI_COMPAT_BASE_URL`, `OPENAI_COMPAT_API_KEY`, and `OPENAI_COMPAT_MODEL`.
- Anthropic and Gemini provider adapter placeholders are included as extension points; they report unavailable until their integrations are implemented/configured. The UI only lists providers reported by the backend.

## Voice and speech quality
The UI uses browser speech recognition when available and browser speech synthesis for spoken answers. Settings now include Natural, Warm, Energetic, Calm, Narrator, and Professional voice profiles, an optional installed-voice override, speech-rate control, and a voice test. Profile presets tune available browser voice selection, rate, and pitch; they do **not** synthesize a new voice or guarantee the same quality across operating systems. Install additional high-quality voices in your OS/browser for more choice. Text answers remain available if speech is unsupported.

## Response quality and prompting
Settings include Balanced (recommended), Tutor, Expert, Concise, Creative, and Senior Software Engineer response presets, a detailed-answer toggle, and custom system instructions. The selected prompt is sent with each chat request. A good default prompt prioritizes correctness, directly answers first, adapts depth, uses examples when useful, avoids invented claims, and states uncertainty. Custom instructions are limited to 4,000 characters; never put secrets or API keys in prompts.

### Speech implementation note
This version's voice output is client-side Web Speech API synthesis. It is low-cost and private-by-default but depends on installed voices and is not equivalent to neural speech services. For a closer premium assistant experience, the next production step is an optional server-side neural TTS adapter (for example, an OpenAI text-to-speech model), with server-held credentials, audio streaming/caching, cancellation, usage limits, and a browser-speech fallback. Do not expose TTS credentials in the frontend.

## Persistence
By default, conversations are stored in a local JSON file under `backend/data/conversations.json` so the project runs without MongoDB. Set `MONGODB_URI` to use MongoDB instead. Redis is optional and not required for basic operation.

## Tests
```powershell
cd backend
python -m pytest
```
```powershell
cd frontend
npm run build
```

## Notes
- Do not commit `.env` files.
- Never put provider API keys in frontend environment variables.
- This starter does not implement user authentication or multi-tenant credential storage. Add authentication before exposing it publicly.
- Do not expose this development server directly to the internet without production hardening, HTTPS, authentication, rate limiting, and origin restrictions.
