import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, Search, Filter, Tag } from 'lucide-react';

const BlogsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts = [
    {
      title: 'Building Scalable React Applications',
      excerpt: 'Learn how to structure and optimize React applications for better performance and maintainability. This comprehensive guide covers component architecture, state management patterns, and performance optimization techniques.',
      content: 'In this detailed guide, we explore the fundamental principles of building scalable React applications...',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'React',
      tags: ['React', 'Performance', 'Architecture'],
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      link: 'https://blog.example.com/scalable-react-applications',
      featured: true
    },
    {
      title: 'Mastering Tailwind CSS',
      excerpt: 'A comprehensive guide to using Tailwind CSS for rapid UI development and consistent design systems. Learn advanced techniques and best practices.',
      content: 'Tailwind CSS has revolutionized the way we approach styling in modern web development...',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'CSS',
      tags: ['CSS', 'Tailwind', 'Design'],
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      link: 'https://blog.example.com/mastering-tailwind-css',
      featured: true
    },
    {
      title: 'Python for Backend Development',
      excerpt: 'Exploring Python frameworks and best practices for building robust backend systems. From Flask to Django, learn which framework suits your needs.',
      content: 'Python continues to be one of the most popular choices for backend development...',
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'Python',
      tags: ['Python', 'Backend', 'API'],
      image: 'https://images.pexels.com/photos/11035540/pexels-photo-11035540.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      link: 'https://blog.example.com/python-backend-development',
      featured: false
    },
    {
      title: 'CI/CD Pipeline Best Practices',
      excerpt: 'Setting up automated deployment pipelines for faster and more reliable software delivery. Learn about GitHub Actions, Jenkins, and modern DevOps practices.',
      content: 'Continuous Integration and Continuous Deployment have become essential practices...',
      date: '2023-12-28',
      readTime: '12 min read',
      category: 'DevOps',
      tags: ['DevOps', 'CI/CD', 'Automation'],
      image: 'https://images.pexels.com/photos/11035224/pexels-photo-11035224.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      link: 'https://blog.example.com/cicd-pipeline-best-practices',
      featured: false
    },
    {
      title: 'Flutter vs React Native',
      excerpt: 'A detailed comparison of Flutter and React Native for cross-platform mobile development. Performance, development experience, and ecosystem analysis.',
      content: 'The mobile development landscape offers several frameworks for cross-platform development...',
      date: '2023-12-20',
      readTime: '7 min read',
      category: 'Mobile',
      tags: ['Flutter', 'React Native', 'Mobile'],
      image: 'https://images.pexels.com/photos/11035313/pexels-photo-11035313.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      link: 'https://blog.example.com/flutter-vs-react-native',
      featured: false
    },
    {
      title: 'Cloud Computing Fundamentals',
      excerpt: 'Understanding the basics of cloud computing and choosing the right platform for your projects. AWS, Azure, and Google Cloud comparison.',
      content: 'Cloud computing has transformed how we build and deploy applications...',
      date: '2023-12-15',
      readTime: '9 min read',
      category: 'Cloud',
      tags: ['Cloud', 'AWS', 'Azure'],
      image: 'https://images.pexels.com/photos/11035457/pexels-photo-11035457.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      link: 'https://blog.example.com/cloud-computing-fundamentals',
      featured: false
    },
    {
      title: 'Advanced JavaScript Patterns',
      excerpt: 'Dive deep into advanced JavaScript patterns and techniques. Learn about closures, prototypes, async patterns, and modern ES6+ features.',
      content: 'JavaScript has evolved significantly over the years...',
      date: '2023-12-10',
      readTime: '11 min read',
      category: 'JavaScript',
      tags: ['JavaScript', 'ES6', 'Patterns'],
      image: 'https://images.pexels.com/photos/11035366/pexels-photo-11035366.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      link: 'https://blog.example.com/advanced-javascript-patterns',
      featured: false
    },
    {
      title: 'Database Design Principles',
      excerpt: 'Learn the fundamentals of database design, normalization, and optimization. From SQL to NoSQL, understand when to use each approach.',
      content: 'Effective database design is crucial for application performance...',
      date: '2023-12-05',
      readTime: '13 min read',
      category: 'Database',
      tags: ['Database', 'SQL', 'NoSQL'],
      image: 'https://images.pexels.com/photos/11035445/pexels-photo-11035445.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      link: 'https://blog.example.com/database-design-principles',
      featured: false
    }
  ];

  const categories = ['All', 'React', 'CSS', 'Python', 'DevOps', 'Mobile', 'Cloud', 'JavaScript', 'Database'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              My Blog
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Sharing insights, tutorials, and thoughts on web development, technology, and programming
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 w-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-gray-800">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
                <Tag className="text-yellow-400" size={28} />
                Featured Articles
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredPosts.map((post, index) => (
                  <article
                    key={index}
                    className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 border border-yellow-500/20"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-semibold">
                          Featured
                        </span>
                        <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full text-xs">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 hover:text-blue-400 transition-colors duration-200">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-gray-400 text-sm">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            {new Date(post.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={14} />
                            {post.readTime}
                          </div>
                        </div>
                        <a
                          href={post.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 font-semibold"
                        >
                          Read More
                          <ArrowRight size={16} />
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filter Section */}
      <section className="py-8 bg-gray-900 border-b border-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <Filter className="text-gray-400" size={20} />
              <span className="text-gray-300 font-semibold">Filter by category:</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-white">
                All Articles ({filteredPosts.length})
              </h2>
            </div>
            
            {filteredPosts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-gray-400 text-lg">No articles found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <article
                    key={index}
                    className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full text-xs">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-1 text-gray-400 text-xs">
                          <Calendar size={12} />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 hover:text-blue-400 transition-colors duration-200">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-gray-400 text-xs">
                          <Clock size={12} />
                          {post.readTime}
                        </div>
                        <a
                          href={post.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm"
                        >
                          Read More
                          <ArrowRight size={12} />
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogsPage;