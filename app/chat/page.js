"use client";
import React from "react";
import { useState } from "react";
import { SendHorizontal } from "lucide-react";
import { Loader } from "lucide-react";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState(null);
  const [streaming, setStreaming] = useState("");
  const [loading, setLoading] = useState(false);
  const [streamResponse, setStreamResponse] = useState("");

  const handleChat = async () => {
    setLoading(true);
    setResponse(null);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();
      setResponse({ question: message, answer: data.response });
      setMessage(""); // Clear textarea after response
    } catch (error) {
      setResponse({ question: message, answer: "Error : " + error.message });
      setMessage("");
    }
    setLoading(false);
  };

  const handleStreamChat = async () => {
    setStreaming(true);
    setStreamResponse("");
    try {
      const response = await fetch("/api/chat-stream", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });
      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value);
        const lines = chunk.split("\n");
        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const data = JSON.parse(line.slice(6));
            setStreamResponse((prev) => prev + data.content);
          }
        }
      }
    } catch (error) {
      setStreamResponse("Error: " + error.message);
    }
    setLoading(false);
  };
  return (
    <div className="min-h-screen w-full bg-black relative">
      {/* Top bar with logo and name */}
      <div className="absolute top-6 left-8 z-20 flex items-center">
        <img
          src="/white_logo.png"
          alt="Neura Chat Logo"
          className="h-15 w-auto drop-shadow-lg"
          style={{ filter: "drop-shadow(0 2px 8px #0003)" }}
        />
        <span className="text-xl font-medium text-gray-100 tracking-tight select-none ml-3">
          NeuraChat
        </span>
      </div>
      {/* Black Grid with White Dots Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "#000000",
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px),
            radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px, 20px 20px, 20px 20px",
          backgroundPosition: "0 0, 0 0, 0 0",
        }}
      />
      <div className="flex flex-col items-center justify-center min-h-screen relative z-10 ">
        <h1 className="mb-8 drop-shadow-lg">
          <span className="block text-xl md:text-6xl text-white font-geist font-extralight tracking-loose">
            Conversations Powered
          </span>
          <span className="w-fit block text-3xl md:text-5xl text-blue-200 font-roboto font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-neutral-300 to-red-600 p-2 mx-auto">
            By Intelligence
          </span>
        </h1>
        <div className="w-full max-w-2xl flex flex-col items-center gap-4">
          {/* Response output */}
          {response && (
            <div className="w-full mb-2 p-4 rounded-2xl bg-white/10 border border-white/20 shadow-lg backdrop-blur-md text-blue-100 font-mono text-base whitespace-pre-line max-h-60 overflow-y-auto scrollbar-thumb-only animate-fade-in">
              <div className="mb-2">
                <span className="font-bold text-blue-300">You:</span>{" "}
                {response.question}
              </div>
              <div>
                <span className="font-bold text-green-300">AI:</span>{" "}
                {response.answer}
              </div>
            </div>
          )}

          {/* stream - Respinse code  */}

          {streamResponse && (
            <div className="w-full mt-5 mb-2 p-4 rounded-2xl bg-white/10 border border-white/20 shadow-lg backdrop-blur-md text-blue-100 font-mono text-base whitespace-pre-line max-h-60 overflow-y-auto scrollbar-thumb-only animate-fade-in">
              <div className="mb-2">
                <span className="font-bold text-blue-300">You:</span> {message}
              </div>
              <div>
                <span className="font-bold text-green-300">AI:</span>{" "}
                {streamResponse}
              </div>
            </div>
          )}

          <div className="relative w-full">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onInput={(e) => {
                e.target.style.height = "auto";
                e.target.style.height = `${e.target.scrollHeight}px`;
              }}
              placeholder="Type your message here..."
              rows="4"
              className="w-full p-4 pr-16 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent text-white placeholder-gray-400 resize-none backdrop-blur-md"
              style={{
                minHeight: "96px",
                boxShadow:
                  "0 8px 48px 0 rgba(0,0,0,0.85), 0 1.5px 8px 0 rgba(0,0,0,0.45)",
              }}
            />
            <button
              className="absolute bottom-3  right-15 p-2 px-4 bg-white/10 hover:bg-blue-600 active:scale-95 text-blue-300 hover:text-white rounded-full shadow-2xl backdrop-blur-lg border border-white/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400/60 disabled:opacity-50 group "
              disabled={!message.trim()}
              onClick={handleStreamChat}
              style={{
                zIndex: 2,
                boxShadow:
                  "0 4px 32px 0 rgba(99,102,241,0.25), 0 1.5px 8px 0 rgba(0,0,0,0.25)",
              }}
              aria-label="Send message"
            >
              <span className="flex items-center justify-center">
                {loading ? (
                  <Loader className="w-6 h-6 animate-spin text-blue-400 drop-shadow-[0_2px_8px_rgba(99,102,241,0.5)] group-hover:text-white transition-colors duration-150" />
                ) : (
                  <p className="font-mono tracking-wider">Stream Response</p>
                )}
              </span>
            </button>
            <button
              className="absolute bottom-3 right-3 p-2 bg-white/10 hover:bg-blue-600 active:scale-95 text-blue-300 hover:text-white rounded-full shadow-2xl backdrop-blur-lg border border-white/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400/60 disabled:opacity-50 group"
              disabled={!message.trim()}
              onClick={handleChat}
              style={{
                zIndex: 2,
                boxShadow:
                  "0 4px 32px 0 rgba(99,102,241,0.25), 0 1.5px 8px 0 rgba(0,0,0,0.25)",
              }}
              aria-label="Send message"
            >
              <span className="flex items-center justify-center">
                {loading ? (
                  <Loader className="w-6 h-6 animate-spin text-blue-400 drop-shadow-[0_2px_8px_rgba(99,102,241,0.5)] group-hover:text-white transition-colors duration-150" />
                ) : (
                  <SendHorizontal className="w-6 h-6 group-hover:scale-110 group-active:scale-95 transition-transform duration-150 drop-shadow-[0_2px_8px_rgba(99,102,241,0.5)]" />
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
