

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
    <aside className="mx-auto px-4 md:items-center py-16 md:justify-between md:flex-row md:px-6 lg:px-8  h-screen p-4">
      <nav className="mx-6">
        <ul className="space-y-4">
          {links.map((link) => (
            <li
              key={link.name}
              className="border-b-2 py-4 border-gray-200 max-w-64"
            >
              <a
                href={link.href}
                className="text-xl text-zinc-700 hover:text-primary"
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
