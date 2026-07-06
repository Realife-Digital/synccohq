import { useRouter } from "next/router";

export default function PolicySidebar() {
  const router = useRouter();

  const links = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms and Conditions", href: "/terms-and-conditions" },
    { name: "Refund Policy", href: "/refund-policy" },
  ];

  const handleClick = (href: string) => router.push(href);

  return (
    <aside className="mx-auto md:items-center pt-4 md:justify-between md:flex-row h-screen">
      <nav className="">
        <ul className="space-y-0">
          {links.map(({ name, href }) => (
            <li key={name} className="border-b-2 border-outline py-3 px-2">
              <a href={href} className="text-lg text-surface-on-variant hover:text-surface-on hover:underline" onClick={() => handleClick(href)}>
                {name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
