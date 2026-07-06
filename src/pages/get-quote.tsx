import PageShell from "@/components/PageShell";
import React, { useState } from "react";
import { CheckIcon } from "@phosphor-icons/react/dist/ssr";

export default function GetQuote() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <PageShell>
      <section className="border-b border-outline bg-surface-variant py-20">
        <div className="section-shell max-w-3xl">
          <h1 className="text-4xl font-semibold text-surface-on md:text-5xl">Get your project quote</h1>
          <p className="mt-4 text-lg leading-relaxed text-surface-on-variant">
            Tell us about your product and we will respond with scope, timeline, and a clear proposal.
          </p>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="section-shell">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form Section */}
            <div>
              <h2 className="text-3xl font-bold text-surface-on mb-8">Tell us about your project</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-surface-on mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-surface-on mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-surface-on mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-surface-on mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-surface-on mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select a project type</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app">Mobile Application</option>
                    <option value="ui-ux-design">UI/UX Design</option>
                    <option value="consulting">Technology Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-surface-on mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-plus">$50,000+</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-surface-on mb-2">
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="2-3-months">2-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="6-months-plus">6+ months</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-surface-on mb-2">
                    Project Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    placeholder="Tell us about your project goals, requirements, and any specific features you need..."
                    className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full py-4">
                  Get my quote
                </button>
              </form>
            </div>

            {/* Services & Info Section */}
            <div>
              <div className="rounded-xl border border-outline bg-surface-variant p-8">
                <h3 className="mb-4 text-2xl font-semibold text-surface-on">Why Syncco Labs</h3>
                <ul className="space-y-3">
                  {[
                    "Experienced team with a proven delivery record",
                    "Modern technologies and maintainable architecture",
                    "Transparent pricing with no hidden costs",
                    "Ongoing support after launch",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckIcon size={20} className="mt-0.5 shrink-0 text-surface-on-variant" aria-hidden />
                      <span className="text-surface-on-variant">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 p-6 bg-surface-variant rounded-lg">
                <h3 className="text-xl font-semibold text-surface-on mb-4">Get in Touch</h3>
                <div className="space-y-3">
                  <p className="text-surface-on-variant">
                    <span className="font-medium">Email:</span> hello@synccolabs.com
                  </p>
                  <p className="text-surface-on-variant">
                    <span className="font-medium">Response Time:</span> Within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
