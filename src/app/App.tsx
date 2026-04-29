export default function App() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-[#F5F3ED]">
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="flex flex-col items-center text-center max-w-md">
          <div className="mb-8">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40 8H16C14.9391 8 13.9217 8.42143 13.1716 9.17157C12.4214 9.92172 12 10.9391 12 12V52C12 53.0609 12.4214 54.0783 13.1716 54.8284C13.9217 55.5786 14.9391 56 16 56H48C49.0609 56 50.0783 55.5786 50.8284 54.8284C51.5786 54.0783 52 53.0609 52 52V20L40 8Z"
                fill="#3D3D3D"
              />
              <path d="M40 8V20H52" fill="#3D3D3D" />
              <circle cx="32" cy="36" r="8" fill="#F5F3ED" />
              <path
                d="M32 32V36M32 40H32.02"
                stroke="#3D3D3D"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <h1 className="text-4xl mb-3 text-black">Page Not Found</h1>

          <p className="text-base text-black mb-8">
            The page you are looking for doesn't exist or has been moved
          </p>

          <button className="w-full max-w-xs px-6 py-3 bg-[#D4C5F9] text-black rounded-lg border-2 border-black hover:bg-[#C4B5E9] transition-colors">
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
}
