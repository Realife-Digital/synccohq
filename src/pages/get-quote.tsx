import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Poppins } from "next/font/google";
import React, { useState } from "react";
import { Check } from "@phosphor-icons/react/dist/ssr";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700"],
});

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
    <div className={`${poppins.variable} font-[family-name:var(--font-poppins)]`}>
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-surface to-secondary/5 py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-surface-on mb-6">Get Your Project Quote</h1>
          <p className="text-xl text-surface-on-variant mb-8 max-w-3xl mx-auto">
            Ready to bring your digital vision to life? Let&apos;s discuss your project and get you a detailed quote.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-4">
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

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-on py-4 px-8 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Get My Quote
                </button>
              </form>
            </div>

            {/* Services & Info Section */}
            <div>
              <div className="bg-primary-container rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Why Choose Syncco Labs?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-primary-on-container">Experienced team with proven track record</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-primary-on-container">Modern technologies and best practices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-primary-on-container">Transparent pricing with no hidden costs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-primary-on-container">Ongoing support and maintenance</span>
                  </li>
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

      <Footer />
    </div>
  );
}
