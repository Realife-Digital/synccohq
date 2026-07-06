import PageShell from "@/components/PageShell";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowRightIcon, CalendarIcon, ClockIcon } from "@phosphor-icons/react/dist/ssr";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt: "Explore the latest trends shaping the web development landscape, from AI integration to progressive web apps.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Sarah Chen",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Web Development",
    },
    {
      id: 2,
      title: "Building Scalable Mobile Apps: Best Practices",
      excerpt: "Learn the essential strategies for creating mobile applications that can grow with your business needs.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Mike Rodriguez",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "Mobile Development",
    },
    {
      id: 3,
      title: "UI/UX Design Principles for Better User Experience",
      excerpt: "Discover the fundamental principles that make digital products intuitive and enjoyable to use.",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Alex Johnson",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Design",
    },
    {
      id: 4,
      title: "The Role of AI in Modern Software Development",
      excerpt: "How artificial intelligence is revolutionizing the way we build and deploy software applications.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Sarah Chen",
      date: "2024-01-01",
      readTime: "8 min read",
      category: "Technology",
    },
    {
      id: 5,
      title: "Cybersecurity Best Practices for Web Applications",
      excerpt: "Essential security measures every developer should implement to protect user data and application integrity.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Mike Rodriguez",
      date: "2023-12-28",
      readTime: "9 min read",
      category: "Security",
    },
    {
      id: 6,
      title: "Optimizing Performance: Speed Up Your Web Applications",
      excerpt: "Proven techniques to improve loading times and enhance user experience across different devices.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Alex Johnson",
      date: "2023-12-20",
      readTime: "6 min read",
      category: "Performance",
    },
  ];

  const categories = ["All", "Web Development", "Mobile Development", "Design", "Technology", "Security", "Performance"];

  return (
    <PageShell>
      <section className="border-b border-outline bg-surface-variant py-20">
        <div className="section-shell max-w-3xl">
          <h1 className="text-4xl font-semibold text-surface-on md:text-5xl">Insights from the studio</h1>
          <p className="mt-4 text-lg leading-relaxed text-surface-on-variant">
            Practical notes on product development, design, and engineering from the Syncco team.
          </p>
        </div>
      </section>

      <section className="border-b border-outline bg-surface py-8">
        <div className="section-shell">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="rounded-lg border border-outline px-4 py-2 text-sm font-medium text-surface-on-variant transition-colors hover:border-outline-variant hover:text-surface-on"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="section-shell">
          <h2 className="text-3xl font-bold text-surface-on mb-8">Featured Article</h2>
          <div className="bg-surface-variant rounded-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="relative">
                <Image src={blogPosts[0].image} alt={blogPosts[0].title} width={600} height={400} className="object-cover w-full h-full" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="rounded-md bg-surface px-3 py-1 text-sm font-medium text-surface-on-variant">
                    {blogPosts[0].category}
                  </span>
                  <div className="flex items-center text-sm text-surface-on-variant">
                    <CalendarIcon size={16} className="mr-1" aria-hidden />
                    {blogPosts[0].date}
                  </div>
                  <div className="flex items-center text-sm text-surface-on-variant">
                    <ClockIcon size={16} className="mr-1" aria-hidden />
                    {blogPosts[0].readTime}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-surface-on mb-4">{blogPosts[0].title}</h3>
                <p className="text-surface-on-variant mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-surface-on-variant">By {blogPosts[0].author}</span>
                  <Link href="#" className="link-subtle inline-flex items-center">
                    Read more
                    <ArrowRightIcon size={16} className="ml-1" aria-hidden />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="bg-surface-variant py-16">
        <div className="section-shell">
          <h2 className="text-3xl font-bold text-surface-on mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-surface rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image src={post.image} alt={post.title} width={400} height={250} className="object-cover w-full h-48" />
                  <div className="absolute top-4 left-4">
                    <span className="rounded-md bg-surface px-3 py-1 text-sm font-medium text-surface-on">{post.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-surface-on-variant">
                    <div className="flex items-center">
                      <CalendarIcon size={14} className="mr-1" aria-hidden />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <ClockIcon size={14} className="mr-1" aria-hidden />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-surface-on mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-surface-on-variant mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-surface-on-variant">By {post.author}</span>
                    <Link href="#" className="link-subtle inline-flex items-center text-sm">
                      Read more
                      <ArrowRightIcon size={14} className="ml-1" aria-hidden />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-primary py-16">
        <div className="section-shell max-w-xl text-center">
          <h2 className="text-3xl font-semibold text-primary-on">Stay updated</h2>
          <p className="mt-3 text-base text-zinc-400">Subscribe for product and engineering notes from the studio.</p>
          <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-lg border-0 px-4 py-3 text-surface-on focus:outline-none focus:ring-2 focus:ring-zinc-600"
            />
            <button className="btn-secondary border-zinc-700 bg-white text-surface-on hover:bg-zinc-100">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
