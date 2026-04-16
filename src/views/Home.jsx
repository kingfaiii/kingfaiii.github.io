import { useDarkMode } from '../context/DarkModeContext';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import { motion } from 'framer-motion';
import { Zap, Code2, Palette, Rocket } from 'lucide-react';

const HomePage = () => {
  const { isDarkMode } = useDarkMode();

  const features = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Well-organized, maintainable, and scalable code following best practices.',
    },
    {
      icon: Palette,
      title: 'Beautiful Design',
      description: 'Modern, responsive designs that look great on all devices.',
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Optimized for speed and efficiency with excellent user experience.',
    },
    {
      icon: Rocket,
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising on quality.',
    },
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'}`}>
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Features Section */}
      <section className={`py-24 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Me?</h2>
            <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              I bring expertise, creativity, and dedication to every project
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className={`p-6 rounded-xl border transition-all duration-300 hover:shadow-xl ${isDarkMode ? 'bg-gray-800 border-gray-700 hover:border-sky-500' : 'bg-white border-gray-200 hover:border-sky-500'}`}
                  whileHover={{ y: -10 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-24 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900' : 'bg-gradient-to-br from-gray-50 via-white to-gray-50'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Something Great?</h2>
            <p className={`text-xl mb-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Let's discuss your project and bring your ideas to life
            </p>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-bold text-lg rounded-lg hover:shadow-2xl hover:shadow-sky-500/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

