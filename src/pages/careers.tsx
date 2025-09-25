import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Poppins } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700"],
});

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
    <div className={`${poppins.variable} font-[family-name:var(--font-poppins)]`}>
      <Header />

      {/* Main Content */}
      <div className="bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Header Section */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">We have {openPositions.length} open positions</h1>
            <p className="text-xl text-gray-600">The future of digital solutions is here. Be the one who creates it.</p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Left Side - Filters */}
            <div className="lg:col-span-1">
              {/* Location Filter */}
              <div className="mb-8">
                <div className="relative">
                  <select className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none">
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
                <h3 className="text-sm font-medium text-gray-900 mb-4">Filter by teams</h3>
                <div className="space-y-2">
                  {teams.map((team) => (
                    <button
                      key={team.name}
                      onClick={() => setSelectedTeam(team.name)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                        selectedTeam === team.name ? "bg-primary text-white" : "hover:bg-gray-100 text-gray-700"
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
                    className="w-full px-4 py-3 pl-12 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
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
                <h2 className="text-sm font-medium text-gray-900">Featured roles</h2>
              </div>

              {/* Job Listings */}
              <div className="space-y-4">
                {filteredPositions.map((position) => (
                  <div key={position.id} className="bg-gray-50 border border-gray-200 rounded-lg p-6 cursor-pointer">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{position.title}</h3>
                        <div className="flex items-center gap-2 text-gray-600">
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No positions found</h3>
                  <p className="text-gray-600">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-semibold text-gray-900 mb-6">Benefits at Syncco Labs</h2>
            <p className="text-xl text-gray-600">No ping pong tables or bean bag chairs, just benefits you actually want</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-semibold text-gray-900 mb-6">Get what you need to succeed</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-gray-700 leading-tight">Financial benefits that show we value your work</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-gray-700 leading-tight">Flexibility to work from home, the office or abroad</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-gray-700 leading-tight">A complimentary Syncco Labs subscription loaded with perks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-gray-700 leading-tight">Exciting events year-round so you can get to know your team</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-primary text-primary-on rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Check out Benefits
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
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900">We build open and collaborative spaces</h2>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
