# AI Meeting Summarizer – Project Documentation

## 1. Project Overview

The AI Meeting Summarizer is a full-stack application designed to convert meeting transcripts into concise summaries and send them via email. Users can quickly understand meeting outcomes without reading long transcripts.

Key features include:

- Upload transcripts as `.txt` files or paste manually.
- Add custom instructions/prompts for AI-based summarization.
- Generate and edit summaries.
- Send summaries via email to multiple recipients.
- Responsive UI with clear success/error feedback.

---



## 2. Approach and Process

### Frontend

- Built with **React** and **Vite** for a fast, optimized single-page application.
- Components are modular:
  - `FileUpload` – Handles transcript uploads.
  - `PromptInput` – Input for custom summarization instructions.
  - `SummaryEditor` – Editable summary display.
  - `EmailForm` – Sends summaries via email with success/error feedback.
- Environment variables allow safe configuration without exposing sensitive data.
- `_redirects` file ensures SPA routing works correctly on Netlify.

### Backend

- Built with **Node.js** and **Express** to handle API requests.
- Routes:
  - `/summarise` – Generates AI-based summaries.
  - `/send` – Sends emails via **Nodemailer**.
- Sensitive information (API keys, SMTP credentials) is stored securely using environment variables.
- CORS enabled for frontend communication.
- Returns structured JSON responses with success/error messages.
- Mail can be found in spam folder 

### Development Workflow

1. Create modular frontend and backend components.
2. Configure environment variables for local and production use.
3. Test API communication between frontend and backend locally.
4. Deploy backend on a cloud service (Render, Heroku, etc.).
5. Deploy frontend on Netlify with SPA routing and environment variables.
6. Validate email sending and summary generation in production.

---

## 3. Tech Stack

| Layer      | Technology/Tool           | Purpose                                      |
|------------|---------------------------|----------------------------------------------|
| Frontend   | React + Vite              | Responsive SPA frontend                     |
| Styling    | CSS / Flexbox             | Layout, alignment, responsive design       |
| Backend    | Node.js + Express         | API server and routing                       |
| Email      | Nodemailer               | Sending emails from backend                  |
| AI         | Gemini / AI API           | Generating summaries based on prompts       |
| Deployment | Netlify                  | Hosting frontend SPA                          |
| Deployment | Render / Cloud Provider  | Hosting backend API                           |
| Versioning | Git + GitHub             | Source control and collaboration            |

---

## 5. Deployment
--[AI Meeting Summarizer](https://aisummariser-app.netlify.app/) 

### Frontend (Netlify)

- Base directory: `client`
- Build command: `npm run build`
- Publish directory: `client/dist`
- Environment variables can be configured in Netlify for backend API endpoints.

### Backend

- Can be deployed on cloud platforms like **Render** or **Heroku**.
- Securely store sensitive keys in environment variables.

---

## 6. Usage

1. Open the frontend in a browser.
2. Upload or paste a transcript.
3. Enter instructions/prompts.
4. Generate summary (loading states indicate progress).
5. Edit summary if needed.
6. Enter recipient emails and subject.
7. Send email and view success/error messages.

---

## 7. Notes

- `.env` files are never committed to GitHub.
- `_redirects` is required for SPA routing on Netlify.
- Frontend communicates securely with backend using environment variables.
- All sensitive data (API keys, email credentials) remains hidden from the public.



