import React from "react";

interface SidebarProps {
  setActivePolicy: (policy: "privacy" | "terms" | "refund") => void;
}

const PolicySidebar: React.FC<SidebarProps> = ({ setActivePolicy }) => {
  const links: { name: string; value: "privacy" | "terms" | "refund" }[] = [
    { name: "Privacy Policy", value: "privacy" },
    { name: "Terms and Conditions", value: "terms" },
    { name: "Refund Policy", value: "refund" },
  ];

  return (
    <aside className="h-screen p-6">
      <nav>
        <ul className="space-y-4">
          {links.map((link) => (
            <li key={link.value} className="border-b-2 py-4 border-gray-200">
              <button
                onClick={() => setActivePolicy(link.value)}
                className="text-xl text-zinc-700 hover:text-primary"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default PolicySidebar;