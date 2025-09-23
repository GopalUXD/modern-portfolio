import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] w-full items-center justify-center ">
      <div className="bg-white/90 shadow-lg rounded-2xl p-10 flex flex-col items-center text-center gap-6 max-w-md">
        <h1 className="text-6xl font-extrabold text-red-600">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800">Page Not Found</h2>
        <p className="text-gray-600">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Button asChild className="mt-4 px-6 py-2 text-lg rounded-xl">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
}
