import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Calendar, Clock, ArrowRight } from "@phosphor-icons/react";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700"],
});

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
    <div className={`${poppins.variable} font-[family-name:var(--font-poppins)]`}>
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-surface to-secondary/5 py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-surface-on mb-6">Our Blog</h1>
          <p className="text-xl text-surface-on-variant mb-8 max-w-3xl mx-auto">
            Insights, tips, and stories from the world of technology and digital innovation.
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-surface-variant">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-outline hover:border-primary hover:text-primary transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-surface-on mb-8">Featured Article</h2>
          <div className="bg-surface-variant rounded-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="relative">
                <Image src={blogPosts[0].image} alt={blogPosts[0].title} width={600} height={400} className="object-cover w-full h-full" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-primary text-primary-on px-3 py-1 rounded-full text-sm font-medium">{blogPosts[0].category}</span>
                  <div className="flex items-center text-surface-on-variant text-sm">
                    <Calendar size={16} className="mr-1" />
                    {blogPosts[0].date}
                  </div>
                  <div className="flex items-center text-surface-on-variant text-sm">
                    <Clock size={16} className="mr-1" />
                    {blogPosts[0].readTime}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-surface-on mb-4">{blogPosts[0].title}</h3>
                <p className="text-surface-on-variant mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-surface-on-variant">By {blogPosts[0].author}</span>
                  <Link href="#" className="flex items-center text-primary hover:text-primary/80 transition-colors">
                    Read more
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-surface-variant">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-surface-on mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-surface rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image src={post.image} alt={post.title} width={400} height={250} className="object-cover w-full h-48" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-on px-3 py-1 rounded-full text-sm font-medium">{post.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-surface-on-variant">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-surface-on mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-surface-on-variant mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-surface-on-variant">By {post.author}</span>
                    <Link href="#" className="flex items-center text-primary hover:text-primary/80 transition-colors text-sm">
                      Read more
                      <ArrowRight size={14} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-on mb-4">Stay Updated</h2>
          <p className="text-xl text-primary-on/80 mb-8">Subscribe to our newsletter for the latest insights and updates.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-primary-on/20"
            />
            <button className="bg-primary-on text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary-on/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
