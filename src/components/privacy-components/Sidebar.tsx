export default function PolicySidebar({
  setActivePolicy,
}: {
  setActivePolicy: (policy: string) => void;
}) {
  const links = [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms and Conditions", href: "#terms" },
    { name: "Refund Policy", href: "#refund" },
  ];

  const handleClick = (href: string) => {
    const hash = href.replace("#", "");
    setActivePolicy(hash); // Update the active policy in the state
  };

  return (
    <aside className="mx-auto md:items-center pt-4 md:justify-between md:flex-row h-screen">
      <nav className="">
        <ul className="space-y-0">
          {links.map((link) => (
            <li
              key={link.name}
              className="border-b-2 border-gray-200 py-3 px-2"
            >
              <a
                href={link.href}
                className="text-lg text-zinc-700 hover:text-primary hover:underline"
                onClick={() => handleClick(link.href)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
