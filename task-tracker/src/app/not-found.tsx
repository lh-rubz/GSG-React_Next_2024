import Link from "next/link";

const NotFound = () => (
  <div className="flex flex-col justify-center items-center h-screen">
    <h1 className="text-4xl font-bold mb-4">Task Not Found</h1>
    <Link href="/" className="text-blue-500 hover:underline">Go back to homepage</Link>
  </div>
);

export default NotFound;