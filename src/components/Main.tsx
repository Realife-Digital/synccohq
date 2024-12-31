import Link from "next/link";

export default function Main() {
  return (
    <main className="flex flex-col items-center justify-center space-y-16 bg-white py-24">
      <div className="max-w-7xl lg:w-3/5 px-4 pt-16 mx-auto">
        <div className="text-center md:w-2/3 w-full mb-24 mx-auto">
          <h1 className="mb-5 lg:text-6xl text-4xl items-center font-semibold">
            Crafting Exceptional Digital Solutions
          </h1>
          <p className="lg:text-xl text-md mb-12">
            Apps, Web, Mobile, and Beyond—groundbreaking platforms that connect,
            simplify, and inspire.
          </p>

          <div className="flex justify-center items-center">
            <Link
              className="rounded-lg bg-primary text-white transition-colors flex items-center justify-center hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
