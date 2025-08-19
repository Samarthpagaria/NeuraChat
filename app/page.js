"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white relative">
      {/* Top bar with logo and buttons */}
      <div className="absolute top-6 left-8 right-8 z-20 flex items-center justify-between">
        {/* Logo on the left */}
        <div className="flex items-center">
          <img
            src="/black_logo.png"
            alt="Neura Chat Logo"
            className="h-15 w-auto drop-shadow-lg"
            style={{ filter: "drop-shadow(0 2px 8px #0003)" }}
          />
          <span className="text-xl font-medium text-gray-900 tracking-tight select-none">
            NeuraChat
          </span>
        </div>
        {/* Buttons on the right */}
        <div className="flex gap-2">
          <Link
            href="/chat"
            className="px-4 py-1 rounded-full text-white font-md shadow-lg transition-all duration-700 border-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, #ff512f 0%, #dd2476 51%, #ff512f 100%)",
              backgroundSize: "200% auto",
              boxShadow: "0 0 20px #fbbf24",
              margin: "10px 0 10px 10px",
              textAlign: "center",
              display: "block",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundPosition = "right center")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundPosition = "left center")
            }
          >
            Chat
          </Link>
          <Link
            href="/docs"
            className="px-4 py-1 rounded-full text-white font-md shadow-lg transition-all duration-700 border-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, #16222A 0%, #3A6073 51%, #16222A 100%)",
              backgroundSize: "200% auto",
              boxShadow: "0 0 20px #eee",
              margin: "10px",
              textAlign: "center",
              display: "block",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundPosition = "right center")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundPosition = "left center")
            }
          >
            Docs
          </Link>
        </div>
      </div>
      {/* Noise Texture (Darker Dots) Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "#ffffff",
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.35) 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="flex flex-col justify-center items-center min-h-screen relative z-10 p-8">
        <div className="w-full max-w-2xl mx-auto text-center pt-10">
          <h1 className="mb-6 drop-shadow-lg">
            <span className="block text-3xl md:text-7xl font-sans font-light text-black tracking-tight">
              Conversations Powered
            </span>
            <span
              className="block text-4xl md:text-7xl font-roboto font-bold tracking-tighter bg-clip-text text-transparent p-2"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #ef4444 0%, #f59e42 25%, #14b8a6 50%, #3b82f6 75%, #8b5cf6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              By Intelligence
            </span>
          </h1>
          <Link
            href="/chat"
            className="px-4 py-2 cursor-pointer transition hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-300/40 focus:ring-offset-2 bg-white/60 hover:bg-white/80 text-gray-900 text-sm font-md tracking-wide capitalize rounded-2xl border border-blue-200/60 shadow-xl backdrop-blur-md inline-flex items-center gap-2 mb-8"
            style={{
              boxShadow:
                "0 4px 24px 0 rgba(99,102,241,0.10), 0 1.5px 8px 0 rgba(0,0,0,0.10), 0 0.5px 16px 0 rgba(99,102,241,0.08), 0 0.5px 6px 0 rgba(99,102,241,0.10) inset",
            }}
          >
            <span className="relative inline-flex h-2.5 w-2.5 items-center justify-center rounded-full">
              <span
                className="absolute inline-flex h-full w-full rounded-full animate-ping"
                style={{ backgroundColor: "#0077b666" }}
              ></span>
              <span
                className="absolute inline-flex h-full w-full rounded-full animate-ping"
                style={{ backgroundColor: "#0077b666" }}
              ></span>
              <span
                className="relative inline-flex h-2 w-2 rounded-full"
                style={{ backgroundColor: "#0077b6" }}
              ></span>
            </span>
            Chat with AI
            <svg
              className=" w-5 h-5 text-black inline-block"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
          <p className="text-center text-black text-lg font-sans font-semibold mb-2 px-4 md:px-0 drop-shadow-sm leading-tight tracking-tight">
            Welcome to your next-generation chat experience, powered by Google's
            Gemini AI model. Enjoy seamless, intelligent conversations in a
            beautifully designed, modern interface.
          </p>
          <p className="text-center text-black text-base font-sans mb-10 px-4 md:px-0 leading-tight tracking-tight">
            Gemini delivers advanced natural language understanding and
            generation, ensuring your interactions are fast, accurate, and
            context-aware. Start chatting and explore the future of AI
            communication.
          </p>
        </div>
      </div>
    </div>
  );
}
