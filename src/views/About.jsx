import { motion } from 'framer-motion';
import { useDarkMode } from '../context/DarkModeContext';
import { GitBranch, Briefcase, Mail } from 'lucide-react';

const About = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={`min-h-screen pt-24 pb-16 ${isDarkMode ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About Me</h1>
          <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Passionate developer crafting elegant solutions to complex problems
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Who Am I?</h2>
            <div className={`space-y-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>
                I`m a full-stack developer with a passion for creating beautiful, functional web applications. 
                With 5+ years of experience in web development, I`ve worked with startups and established companies 
                to bring their digital vision to life.
              </p>
              <p>
                My journey in tech started with a curiosity about how things work. Today, I combine technical expertise 
                with creative problem-solving to deliver solutions that exceed expectations.
              </p>
              <p>
                When I`m not coding, you`ll find me diving into the latest web technologies, contributing to open-source 
                projects, or mentoring junior developers.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { label: 'Projects', value: '25+' },
                { label: 'Clients', value: '15+' },
                { label: 'Experience', value: '5+ yrs' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className={`p-4 rounded-lg text-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
                >
                  <div className="text-2xl font-bold text-sky-500">{stat.value}</div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className={`p-8 rounded-xl border-2 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'}`}
            >
              <h3 className="text-2xl font-bold mb-6">Core Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'React & React Native',
                  'Node.js & Express',
                  'TypeScript',
                  'MongoDB & PostgreSQL',
                  'Tailwind CSS',
                  'REST APIs',
                  'GraphQL',
                  'Docker & AWS',
                ].map((skill, i) => (
                  <div
                    key={i}
                    className={`p-3 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'}`}
                  >
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          className={`p-8 rounded-xl border-2 text-center ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-6">Let`s Connect</h3>
          <p className={`mb-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Ready to collaborate or have a question? Reach out!
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold rounded-lg flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 border-2 font-semibold rounded-lg flex items-center gap-2 ${isDarkMode ? 'border-gray-600 hover:border-sky-500' : 'border-gray-300 hover:border-sky-500'}`}
            >
              <GitBranch className="w-5 h-5" />
              GitHub
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 border-2 font-semibold rounded-lg flex items-center gap-2 ${isDarkMode ? 'border-gray-600 hover:border-sky-500' : 'border-gray-300 hover:border-sky-500'}`}
            >
              <Briefcase className="w-5 h-5" />
              LinkedIn
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
