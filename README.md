# NeuraChat

NeuraChat is a learning-focused **AI Chat Application** built with **Next.js** and powered by the **Gemini API**.  
It delivers intelligent, real-time conversations with streaming responses, providing a smooth and interactive chat experience.

This project was created purely for **educational purposes** to explore how to integrate AI APIs into web applications, implement streaming responses, and understand Next.js features like API routes and server-side rendering.

---

## Project Documentation

### Overview

NeuraChat demonstrates how to combine modern web technologies with AI to create an interactive chat system. The app connects with the Gemini API to generate AI-driven responses and streams them in real time.

### Features

- AI-powered conversations using Gemini API
- Real-time streaming of responses
- Built with Next.js for frontend and backend integration
- Simple and minimal design without authentication or databases

### Limitations

- No user authentication
- No persistent storage (chats are not saved)
- Not intended for production use

### Tech Stack

- Next.js – React framework for frontend and backend routes
- React – Component-based UI library
- Gemini API – AI model integration for chat responses

---

## How to Run the Project

1. **Clone the repository**

```bash
git clone https://github.com/your-username/neurachat.git
cd neurachat
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

- Create a file named .env.local in the root directory and add your Gemini API key

```bash
GEMINI_API_KEY=your_api_key_here
```

- 🔑 You can obtain a Gemini API key from the official Google AI Studio or the relevant Gemini developer portal.

4. **Run the development server**

```bash
npm run dev
```

4. **Open your browser and go to http://localhost:3000
   to start using NeuraChat.**

---

## Demo

Here’s a screenshot of **NeuraChat** in action:

## **Home Page**

![NeuraChat Home Page Demo](/public/demo/neuraChat_HomePage.png)

## **Chat Page**

![NeuraChat Chat Page Demo](/public/demo/neuraChat_chatPage.png)

## **Documentation Page**

![NeuraChat Home Page Demo](/public/demo/neuraChat_documentationPage.png)
