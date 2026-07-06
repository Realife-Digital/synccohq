import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import SupportSection from "@/components/Support";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700"],
});

export default function Home() {
  const cards = [
    {
      icon: "/creative-lab.svg",
      title: "Crafting Unique Solutions for Everyday Challenges.",
      description:
        "At Syncco Labs, we design and develop our own cutting-edge web and mobile apps to simplify lives and revolutionize digital experiences.",
      linkText: "Explore our solutions",
      linkHref: "#",
    },
    {
      icon: "/solar-system.svg",
      title: "Pushing the Boundaries of Innovation.",
      description:
        "Our in-house team creates software solutions that redefine industry standards, combining creativity, precision, and cutting-edge technology.",
      linkText: "Learn more",
      linkHref: "#",
    },
    {
      icon: "/rocket.svg",
      title: "Empowering Users Globally with Robust Solutions.",
      description: " From design to deployment, every product we create embodies reliability and innovation, ensuring seamless user experiences.",
      linkText: "See our portfolio",
      linkHref: "#",
    },
  ];

  return (
    <div className={`${poppins.variable} font-[family-name:var(--font-poppins)]`}>
      <Header />
      <Main />

      <section>
        <div className="space-y-8 mx-auto flex flex-col items-center justify-center pb-12">
          <div className="px-6 mt-16 text-center">
            <h2 className="text-3xl font-semibold">Building Useful Apps for Everyday Life</h2>
          </div>

          <div className="container max-w-6xl lg:w-4/5 grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-12">
            {cards.map((card, index) => (
              <div key={index} className="flex flex-col bg-surface rounded-2xl p-6 hover:shadow-xl transition-shadow">
                <div className="ml-auto">
                  <ArrowUpRightIcon size={24} className="text-primary" />
                </div>

                <div className="text-6xl my-16 mx-auto">
                  <Image src={card.icon} alt="" height={150} width={150} priority />
                </div>
                <div className="space-y-4 mb-12">
                  <h3 className="text-xl font-semibold text-surface-on mb-2">{card.title}</h3>
                  <p className="text-sm text-surface-on-variant mb-4">{card.description}</p>
                </div>

                <Link href={card.linkHref} className="text-primary text-sm font-medium hover:underline">
                  {card.linkText} →
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8 mx-auto flex flex-col items-center justify-center pb-24">
          <div className="px-6">
            <h1 className="text-2xl">Trusted by</h1>
          </div>

          <div className="grid grid-cols-2 gap-3 lg:flex items-center justify-center px-6">
            <div className="flex items-center justify-center bg-surface h-16 lg:w-48 p-6">
              <Image src="/monierate.png" alt="Google Logo" className="block object-contain h-16 greyC" height={200} width={200} />
            </div>
            <div className="flex items-center justify-center bg-surface h-16 lg:w-48 p-6">
              <Image src="/palremit-o.svg" alt="Palremit Logo" className="block object-contain h-16 greyC" height={200} width={200} />
            </div>
            <div className="flex items-center justify-center bg-surface h-16 lg:w-48 p-6">
              <Image src="/images/Shopify-Logo.svg" alt="Google Logo" className="block object-contain h-16 greyC" height={200} width={200} />
            </div>
          </div>
        </div>
      </section>

      <SupportSection />
      <Footer />
    </div>
  );
}
