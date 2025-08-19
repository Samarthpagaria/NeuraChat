export default function DocsLayout({ children }) {
  return (
    <div className="min-h-screen w-full bg-white relative">
      {/* Grid Background on sides */}
      <div className="relative min-h-screen flex justify-center items-start">
        <div className="relative w-full max-w-3xl px-6 mx-auto border-l border-r border-neutral-500 bg-white z-10">
          <div className="relative z-10 mx-auto max-w-2xl py-8">{children}</div>
        </div>
      </div>
    </div>
  );
}
