import PageShell from "@/components/PageShell";
import { pagesSeo } from "@/lib/seo";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

export default function Careers() {
  const [selectedTeam, setSelectedTeam] = useState("All teams");
  const [searchQuery, setSearchQuery] = useState("");

  const teams = [
    { name: "All teams", count: 5 },
    { name: "Engineering", count: 3 },
    { name: "Design", count: 1 },
    { name: "Product", count: 1 },
    { name: "Marketing", count: 1 },
  ];

  const openPositions = [
    {
      id: 1,
      title: "Senior Full-Stack Developer",
      team: "Engineering",
      location: "Remote: Lagos, Nigeria · Abuja, Nigeria",
      type: "Remote",
    },
    {
      id: 2,
      title: "Product Designer",
      team: "Design",
      location: "Office: Lagos, Nigeria",
      type: "Office",
    },
    {
      id: 3,
      title: "DevOps Engineer",
      team: "Engineering",
      location: "Remote: Lagos, Nigeria · Abuja, Nigeria",
      type: "Remote",
    },
    {
      id: 4,
      title: "Digital Marketing Specialist",
      team: "Marketing",
      location: "Office: Lagos, Nigeria",
      type: "Office",
    },
    {
      id: 5,
      title: "Product Manager",
      team: "Product",
      location: "Remote: Lagos, Nigeria · Abuja, Nigeria",
      type: "Remote",
    },
  ];

  const filteredPositions = openPositions.filter((position) => {
    const matchesTeam = selectedTeam === "All teams" || position.team === selectedTeam;
    const matchesSearch = position.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTeam && matchesSearch;
  });

  return (
    <PageShell title={pagesSeo.careers.title} description={pagesSeo.careers.description} path={pagesSeo.careers.path}>
      <div className="min-h-screen bg-surface">
        <div className="section-shell py-16">
          {/* Header Section */}
          <div className="mb-12">
            <h1 className="mb-4 text-4xl font-semibold text-surface-on md:text-5xl">
              We have {openPositions.length} open positions
            </h1>
            <p className="text-lg text-surface-on-variant">
              Build products with a team that values craft, clarity, and dependable delivery.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Left Side - Filters */}
            <div className="lg:col-span-1">
              {/* Location Filter */}
              <div className="mb-8">
                <div className="relative">
                  <select className="w-full appearance-none rounded-lg border border-outline bg-surface-variant px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>All locations</option>
                    <option>Lagos, Nigeria</option>
                    <option>Abuja, Nigeria</option>
                    <option>Remote</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Team Filter */}
              <div>
                <h3 className="mb-4 text-sm font-medium text-surface-on">Filter by teams</h3>
                <div className="space-y-2">
                  {teams.map((team) => (
                    <button
                      key={team.name}
                      onClick={() => setSelectedTeam(team.name)}
                      className={`w-full rounded-lg px-4 py-3 text-left transition-colors ${
                        selectedTeam === team.name
                          ? "bg-primary text-primary-on"
                          : "text-surface-on-variant hover:bg-surface-variant"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{team.name}</span>
                        <span className="text-sm opacity-75">{team.count}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Search and Job Listings */}
            <div className="lg:col-span-3">
              {/* Search Bar */}
              <div className="mb-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder={`Search from ${openPositions.length} open positions`}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full rounded-lg border border-outline bg-surface-variant py-3 pl-12 pr-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Featured Roles */}
              <div className="mb-6">
                <h2 className="text-sm font-medium text-surface-on">Featured roles</h2>
              </div>

              {/* Job Listings */}
              <div className="space-y-4">
                {filteredPositions.map((position) => (
                  <div key={position.id} className="cursor-pointer rounded-lg border border-outline bg-surface-variant p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="mb-2 text-xl font-semibold text-surface-on">{position.title}</h3>
                        <div className="flex items-center gap-2 text-surface-on-variant">
                          <span className="text-sm">
                            {position.type === "Remote" ? "Remote" : "Office"}: {position.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* No Results */}
              {filteredPositions.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-gray-400 text-6xl mb-4">🔍</div>
                  <h3 className="mb-2 text-xl font-semibold text-surface-on">No positions found</h3>
                  <p className="text-surface-on-variant">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="border-t border-outline bg-surface py-24">
        <div className="section-shell">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-semibold text-surface-on">Benefits at Syncco Labs</h2>
            <p className="text-lg text-surface-on-variant">Practical perks that support focused, sustainable work.</p>
          </div>
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h3 className="mb-6 text-3xl font-semibold text-surface-on">Get what you need to succeed</h3>
              <ul className="mb-8 space-y-3">
                {[
                  "Competitive compensation and clear growth paths",
                  "Flexible remote and hybrid arrangements",
                  "Tools and learning budget for your craft",
                  "Team events that build real connection",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 text-surface-on-variant">✓</span>
                    <span className="leading-tight text-surface-on-variant">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-primary">
                Learn more about benefits
              </Link>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden">
                <Image src="/pexels-fauxels-3184423.jpg" alt="Syncco Labs team members" width={500} height={300} className="object-cover h-[600px]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Spaces Section */}
      <section className="bg-surface-variant py-24">
        <div className="section-shell text-center">
          <h2 className="text-3xl font-semibold text-surface-on">We build open and collaborative spaces</h2>
        </div>
      </section>
    </PageShell>
  );
}
