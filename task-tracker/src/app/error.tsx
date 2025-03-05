"use client";

const ErrorPage = () => (
  <div className="flex flex-col justify-center items-center h-screen">
    <h1 className="text-4xl font-bold mb-4">Something went wrong!</h1>
    <p className="text-lg mb-4">Please refresh the page.</p>
    <button
      onClick={() => window.location.reload()}
      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
    >
      Refresh
    </button>
  </div>
);

export default ErrorPage;