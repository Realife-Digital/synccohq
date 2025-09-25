import React from "react";
import Link from "next/link";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <div className="md:bg-opacity-90 transition duration-300 ease-in-out bg-surface">
      <div className="flex flex-col max-w-6xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8 uppercase">
        <div className="flex flex-row items-center justify-between p-4">
          <Link href="/" className="text-lg font-semibold rounded-lg tracking-widest focus:outline-none focus:shadow-outline flex items-center gap-3">
            <h1 className="text-4xl font-light tracking-tighter md:text-4x1 lg:text-3xl uppercase">Syncco</h1>
          </Link>
          <button
            className="text-surface-on cursor-pointer leading-none px-3 py-1 md:hidden outline-none focus:outline-none"
            type="button"
            aria-label="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className={`md:flex flex-grow items-center ${navbarOpen ? "flex" : "hidden"}`}>
          <nav className="flex-col flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/blog"
                  className="font-medium text-surface-on-variant hover:text-surface-on px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="font-medium text-surface-on-variant hover:text-surface-on px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  className="inline-flex items-center px-4 py-2 mt-2 font-medium text-primary-on transition duration-500 ease-in-out transform rounded-lg text-md md:mt-0 md:ml-4 bg-primary"
                  href="/get-quote"
                >
                  <span className="justify-center">Get Quote</span>
                  <svg className="w-3 h-3 fill-current text-primary-on flex ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                  </svg>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
