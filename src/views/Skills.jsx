import { motion } from 'framer-motion';
import { useDarkMode } from '../context/DarkModeContext';
import { Zap, Code2, Database, Cloud, Palette, Cpu } from 'lucide-react';

const Skills = () => {
  const { isDarkMode } = useDarkMode();

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Palette,
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'JavaScript', level: 95 },
        { name: 'HTML/CSS', level: 96 },
        { name: 'Responsive Design', level: 94 },
      ],
    },
    {
      title: 'Backend Development',
      icon: Code2,
      skills: [
        { name: 'Node.js', level: 92 },
        { name: 'Express', level: 90 },
        { name: 'REST APIs', level: 93 },
        { name: 'GraphQL', level: 85 },
        { name: 'Authentication', level: 88 },
        { name: 'Microservices', level: 82 },
      ],
    },
    {
      title: 'Database & Storage',
      icon: Database,
      skills: [
        { name: 'MongoDB', level: 90 },
        { name: 'PostgreSQL', level: 88 },
        { name: 'Firebase', level: 85 },
        { name: 'Redis', level: 82 },
        { name: 'Elasticsearch', level: 78 },
        { name: 'Data Modeling', level: 89 },
      ],
    },
    {
      title: 'DevOps & Tools',
      icon: Cloud,
      skills: [
        { name: 'Docker', level: 88 },
        { name: 'AWS', level: 85 },
        { name: 'CI/CD Pipeline', level: 87 },
        { name: 'Git', level: 95 },
        { name: 'Linux', level: 85 },
        { name: 'Kubernetes', level: 72 },
      ],
    },
    {
      title: 'Other Technologies',
      icon: Cpu,
      skills: [
        { name: 'React Native', level: 85 },
        { name: 'Framer Motion', level: 90 },
        { name: 'Testing (Jest)', level: 87 },
        { name: 'Performance Optimization', level: 88 },
        { name: 'Web Security', level: 84 },
        { name: 'Agile/Scrum', level: 91 },
      ],
    },
    {
      title: 'Soft Skills',
      icon: Zap,
      skills: [
        { name: 'Team Leadership', level: 89 },
        { name: 'Problem Solving', level: 94 },
        { name: 'Communication', level: 91 },
        { name: 'Project Management', level: 87 },
        { name: 'Mentoring', level: 85 },
        { name: 'Innovation', level: 90 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

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
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Skills & Expertise</h1>
          <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            A comprehensive overview of my technical abilities and expertise
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`p-6 rounded-lg border transition-all duration-300 hover:shadow-lg ${isDarkMode ? 'bg-gray-800 border-gray-700 hover:border-sky-500' : 'bg-gray-50 border-gray-200 hover:border-sky-500'}`}
                whileHover={{ y: -5 }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                {/* Skills */}
                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium text-sm">{skill.name}</span>
                        <span className="text-xs font-semibold text-sky-500">
                          {skill.level}%
                        </span>
                      </div>
                      <div
                        className={`h-2 rounded-full overflow-hidden ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
                      >
                        <motion.div
                          className="h-full bg-gradient-to-r from-sky-500 to-cyan-500"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.1, ease: 'easeOut' }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Proficiency Legend */}
        <motion.div
          className="mt-16 p-8 rounded-lg border"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            backgroundColor: isDarkMode ? '#1f2937' : '#f9fafb',
            borderColor: isDarkMode ? '#374151' : '#e5e7eb',
          }}
        >
          <h3 className="text-xl font-bold mb-6">Skill Proficiency Guide</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { range: '90-100%', label: 'Expert', color: 'from-green-500 to-emerald-500' },
              { range: '75-89%', label: 'Advanced', color: 'from-blue-500 to-sky-500' },
              { range: '60-74%', label: 'Intermediate', color: 'from-yellow-500 to-orange-500' },
              { range: '<60%', label: 'Beginner', color: 'from-red-500 to-pink-500' },
            ].map((level, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded bg-gradient-to-r ${level.color}`} />
                <div>
                  <p className="font-semibold text-sm">{level.label}</p>
                  <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {level.range}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className={`text-lg mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Want to see these skills in action? Check out my projects or let's discuss your needs.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-sky-500/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.button>
            <motion.button
              className={`px-8 py-3 border-2 font-semibold rounded-lg transition-all ${isDarkMode ? 'border-gray-600 hover:border-sky-500' : 'border-gray-300 hover:border-sky-500'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
