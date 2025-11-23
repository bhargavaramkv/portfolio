# Bhargava Ram - Software Engineer & Freelancer Portfolio

A Marvel-themed interactive portfolio featuring a J.A.R.V.I.S. AI assistant powered by Google Gemini.

## 🚀 Features

- **Theme**: "Captain America" / Tech Blue aesthetic
- **Role**: Software Engineer & Freelancer
- **Tech Stack**: React, TypeScript, Vite, Tailwind CSS (via CDN), Recharts, Google Gemini AI
- **Sections**:
  - **Origin Story**: Background and education
  - **Mission Log**: Corporate/Major projects
  - **Side Quests**: Freelance work
  - **Superpowers**: Technical skills visualization
  - **J.A.R.V.I.S.**: Interactive AI chat

## 🛠 Local Development

To run this project locally:

1.  **Clone the repository**
    ```bash
    git clone <your-repo-url>
    cd bhargava-portfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Setup Environment Variables**
    
    Create a `.env` file in the root directory (copy from `.env.example`):
    ```bash
    cp .env.example .env
    ```
    
    Then edit `.env` and add your Google Gemini API key:
    ```env
    VITE_GEMINI_API_KEY=your_google_gemini_api_key
    ```
    
    *Get your key from [Google AI Studio](https://aistudio.google.com/)*

4.  **Start the development server**
    ```bash
    npm run dev
    ```
    
    Open `http://localhost:5173` in your browser.

## 📦 Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🚀 Deployment

### Vercel (Recommended)
1.  Push your code to GitHub
2.  Go to [Vercel](https://vercel.com/) and import your repository
3.  Vercel will auto-detect Vite
4.  **Important**: Add your `VITE_GEMINI_API_KEY` in Vercel **Settings > Environment Variables**
5.  Click **Deploy**

### Netlify
1.  Push your code to GitHub
2.  Go to Netlify > "New site from Git"
3.  Build command: `npm run build`
4.  Publish directory: `dist`
5.  Add `VITE_GEMINI_API_KEY` in **Site settings > Build & deploy > Environment**

## 📄 License

MIT

## 👤 Author

**Bhargava Ram K V**
- Email: kattavenkatabhargavaram@gmail.com
- Location: Bengaluru, India
