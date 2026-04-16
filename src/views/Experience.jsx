import { motion } from 'framer-motion';
import { useDarkMode } from '../context/DarkModeContext';
import { Briefcase, Calendar, MapPin, ArrowRight } from 'lucide-react';

const Experience = () => {
  const { isDarkMode } = useDarkMode();

  const experiences = [
    {
      id: 1,
      title: 'Senior Full-Stack Developer',
      company: 'Tech Innovation Labs',
      location: 'San Francisco, CA',
      period: '2023 - Present',
      description: 'Leading development of enterprise-scale applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting scalable solutions.',
      achievements: [
        'Increased application performance by 45% through optimization',
        'Led team of 5 developers on mission-critical projects',
        'Implemented CI/CD pipeline reducing deployment time by 60%',
      ],
    },
    {
      id: 2,
      title: 'Full-Stack Developer',
      company: 'Digital Solutions Inc',
      location: 'Remote',
      period: '2021 - 2023',
      description: 'Developed and maintained multiple client-facing applications. Collaborated with design and product teams to deliver high-quality solutions.',
      achievements: [
        'Built 12 production-ready applications using MERN stack',
        'Improved code quality score from 65% to 92% through refactoring',
        'Implemented comprehensive testing strategy increasing coverage to 85%',
      ],
    },
    {
      id: 3,
      title: 'Junior Full-Stack Developer',
      company: 'StartUp Hub',
      location: 'New York, NY',
      period: '2020 - 2021',
      description: 'Started my professional journey working on frontend and backend features. Learned best practices and industry standards.',
      achievements: [
        'Shipped 8 features from design to production',
        'Reduced load time by 35% through frontend optimization',
        'Participated in code reviews and knowledge sharing sessions',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className={`min-h-screen pt-24 pb-16 ${isDarkMode ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Experience</h1>
          <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            My professional journey and career milestones
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Timeline Line */}
          <div
            className={`absolute left-0 md:left-1/2 top-0 bottom-0 w-1 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} md:translate-x-[-50%]`}
          />

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={itemVariants}
                className={`flex gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Content */}
                <div className="flex-1 md:w-1/2 md:text-right">
                  <div
                    className={`p-6 rounded-lg border transition-all duration-300 hover:shadow-lg ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'}`}
                  >
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2 md:justify-end">
                        <Briefcase className="w-5 h-5 text-sky-500" />
                        <h3 className="text-xl font-bold">{experience.title}</h3>
                      </div>
                      <p className="text-sky-500 font-semibold mb-1">{experience.company}</p>
                      <div className={`flex gap-4 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} md:justify-end`}>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {experience.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {experience.location}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p
                      className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                    >
                      {experience.description}
                    </p>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold mb-2 text-sm text-sky-500">Key Achievements:</h4>
                      <ul className={`space-y-1 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {experience.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 md:justify-end">
                            <ArrowRight className="w-4 h-4 mt-0.5 text-sky-500 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex w-8 items-center justify-center">
                  <motion.div
                    className="w-4 h-4 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-full border-4 border-gray-950 z-10"
                    whileHover={{ scale: 1.3 }}
                  />
                </div>

                {/* Empty space for md layout */}
                <div className="flex-1 md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className={`text-lg mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Interested in working together?
          </p>
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-sky-500/50 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Lets Chat
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
