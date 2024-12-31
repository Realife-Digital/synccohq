import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pb-4 pt-16 bg-white">
      <div className="max-w-6xl xl:max-w-6xl mx-auto divide-y divide-divider px-4 sm:px-6 md:px-8">
        <ul className="sm:pb-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6">
          <li className="space-y-5 row-span-2">
            <h2 className="text-sm tracking-wide  uppercase font-semibold text-primary">
              Company
            </h2>
            <ul className="space-y-2 text-md">
              <li>
                <Link
                  className=" hover:text-gray-900 transition-colors duration-200"
                  href="#"
                >
                  Jobs
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-gray-900 transition-colors duration-200"
                  href="#"
                >
                  Merch
                </Link>
              </li>{" "}
              <li>
                <Link
                  className="hover:text-gray-900 transition-colors duration-200"
                  href="#"
                >
                  Meetups
                </Link>
              </li>
            </ul>
          </li>

          <li className="space-y-5 row-span-2">
            <h2 className="text-sm tracking-wide uppercase font-semibold text-primary">
              Products
            </h2>
            <ul className="space-y-4">
              <li>
                <Link
                  className="hover:text-gray-900 transition-colors duration-200"
                  href="#"
                >
                  Axipulse
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-gray-900 transition-colors duration-200"
                  href="#"
                >
                  WhatsGain
                </Link>
              </li>
            </ul>
          </li>
          <li className="space-y-5 row-span-2">
            <h2 className="text-sm tracking-wide text-primary uppercase font-semibold">
              Newsroom
            </h2>
            <ul className="space-y-4">
              <li>
                <Link
                  className="hover:text-gray-900 transition-colors duration-200"
                  href="#"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </li>
          <li className="space-y-5">
            <h2 className="text-sm tracking-wide text-primary uppercase font-semibold">
              Connect
            </h2>
            <ul className="space-y-4">
              <li>
                <Link
                  className="hover:text-gray-900 transition-colors duration-200"
                  href="#"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-gray-900 transition-colors duration-200"
                  href="#"
                >
                  Linkedin
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <div className="lg:flex justify-between mt-5 py-5 pb-4 border-t lg:flex-row bg-top border-gray-400 space-y-6">
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <Link
              href="/"
              className="text-xs transition-colors duration-300 hover:text-deep-purple-accent-400 tracking-tight"
            >
              &copy; {currentYear} Realife Digital Concept. All rights reserved.
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  );
}
