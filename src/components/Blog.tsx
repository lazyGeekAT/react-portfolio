import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Building Scalable React Applications',
      excerpt: 'Learn how to structure and optimize React applications for better performance and maintainability.',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'React',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      link: 'https://blog.example.com/scalable-react-applications'
    },
    {
      title: 'Mastering Tailwind CSS',
      excerpt: 'A comprehensive guide to using Tailwind CSS for rapid UI development and consistent design systems.',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'CSS',
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      link: 'https://blog.example.com/mastering-tailwind-css'
    },
    {
      title: 'Python for Backend Development',
      excerpt: 'Exploring Python frameworks and best practices for building robust backend systems.',
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'Python',
      image: 'https://images.pexels.com/photos/11035540/pexels-photo-11035540.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      link: 'https://blog.example.com/python-backend-development'
    },
    {
      title: 'CI/CD Pipeline Best Practices',
      excerpt: 'Setting up automated deployment pipelines for faster and more reliable software delivery.',
      date: '2023-12-28',
      readTime: '12 min read',
      category: 'DevOps',
      image: 'https://images.pexels.com/photos/11035224/pexels-photo-11035224.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      link: 'https://blog.example.com/cicd-pipeline-best-practices'
    },
    {
      title: 'Flutter vs React Native',
      excerpt: 'A detailed comparison of Flutter and React Native for cross-platform mobile development.',
      date: '2023-12-20',
      readTime: '7 min read',
      category: 'Mobile',
      image: 'https://images.pexels.com/photos/11035313/pexels-photo-11035313.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      link: 'https://blog.example.com/flutter-vs-react-native'
    },
    {
      title: 'Cloud Computing Fundamentals',
      excerpt: 'Understanding the basics of cloud computing and choosing the right platform for your projects.',
      date: '2023-12-15',
      readTime: '9 min read',
      category: 'Cloud',
      image: 'https://images.pexels.com/photos/11035457/pexels-photo-11035457.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      link: 'https://blog.example.com/cloud-computing-fundamentals'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Latest Blog Posts
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Sharing my knowledge and insights on web development and technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
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
          
          <div className="text-center mt-12">
            <a
              href="https://blog.example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              View All Posts
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;