import React from "react";

const docs = () => {
  return <div>Hello</div>;
};

export default function Page() {
  return (
    <div className="min-h-screen w-full bg-white relative">
      {/* Logo, name, and subheading at the top, centered */}
      <div className="w-full flex flex-col items-center  pb-2">
        <div className="flex items-center justify-center">
          <img
            src="/black_logo.png"
            alt="Neura Chat Logo"
            className="h-20 w-auto drop-shadow-lg"
            style={{ filter: "drop-shadow(0 2px 8px #0003)" }}
          />
          <span className="text-4xl font-medium text-gray-900 tracking-tight select-none ">
            NeuraChat
          </span>
        </div>
        <h2 className="text-xl font-mono font-semibold text-gray-700 mt-6 mb-10 text-center">
          AI Chat Application Documentation
        </h2>
      </div>
      {/* Main docs content */}
      <div className="mx-auto max-w-2xl py-4">
        <h3 className="text-xl font-normal text-gray-500 mb-4 text-left font-mono border-l-4 border-black pl-4">
          Overview & Features
        </h3>
        <p className="text-gray-700 text-base mb-6 text-justify font-mono tracking-tighter">
          The <strong>AI Chat Application</strong> is a learning-focused project
          designed to help developers explore AI-driven conversational
          interfaces and gain hands-on experience with <strong>Next.js</strong>.
          Leveraging the <strong>Gemini API</strong>, it enables real-time,
          streaming chat responses for a modern, interactive user experience.
          This project is built for educational purposes, focusing on the core
          mechanics of AI chat and web development.
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700 font-mono">
          <li>
            <strong>AI-Powered Conversations:</strong> Uses the Gemini API to
            generate intelligent responses based on user input.
          </li>
          <li>
            <strong>Streaming Responses:</strong> Real-time streaming of AI
            replies, displaying text as it is generated.
          </li>
          <li>
            <strong>Learning-Oriented:</strong> No authentication or database,
            so you can focus on AI and Next.js fundamentals.
          </li>
          <li>
            <strong>Modern Next.js Stack:</strong> Demonstrates server-side
            rendering, API routing, and dynamic content handling.
          </li>
        </ul>
        <h4 className="text-lg font-normal text-gray-500 mb-2 font-mono border-l-4 border-black pl-4">
          AI Model & Gemini API
        </h4>
        <p className="text-gray-700 text-base mb-6 text-justify font-mono tracking-tighter">
          <strong>Backend Model:</strong> This application uses the{" "}
          <span className="font-semibold">Gemini API</span> as its AI engine.
          Gemini is a state-of-the-art large language model (LLM) developed for
          advanced conversational and generative AI tasks. It is designed to
          provide fast, context-aware, and high-quality responses, making it
          ideal for chat applications and real-time user interactions.
          <br />
          <br />
          <strong>Why Gemini?</strong> Gemini was chosen for its robust natural
          language understanding, support for streaming responses, and ease of
          integration with modern web frameworks like Next.js. Its API enables
          developers to build intelligent, interactive chat experiences with
          minimal setup, while benefiting from the latest advancements in AI
          research and deployment.
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700 font-mono">
          <li>
            <strong>Frontend:</strong> Built with Next.js and React for
            efficient UI and state management.
          </li>
          <li>
            <strong>Backend/API:</strong> Uses Next.js API routes to securely
            interact with the Gemini API.
          </li>
          <li>
            <strong>Streaming:</strong> Implements streaming to render AI
            responses incrementally.
          </li>
        </ul>
        <h4 className="text-lg font-normal text-gray-500 mb-2 font-mono border-l-4 border-black pl-4">
          Purpose & Limitations
        </h4>
        <p className="text-gray-700 text-base mb-4 text-justify font-mono tracking-tighter">
          The main goal is to gain a{" "}
          <strong>hands-on learning experience</strong> in AI API integration,
          streaming, and Next.js development. There is no authentication or
          persistent storage; all chat data is temporary and in-memory, making
          it ideal for experimentation and learning.
        </p>
        <h4 className="text-lg font-normal text-gray-500 mb-2 font-mono border-l-4 border-black pl-4">
          Summary
        </h4>
        <p className="text-gray-700 text-base text-justify font-mono tracking-tighter">
          This project is a practical demonstration of combining AI technologies
          with modern web development. While not production-ready, it offers
          valuable insights into building dynamic, responsive, and interactive
          chat interfaces using contemporary frameworks and APIs.
        </p>
      </div>
    </div>
  );
}
