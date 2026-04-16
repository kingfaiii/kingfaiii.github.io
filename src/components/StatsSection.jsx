import { useCountUp } from '../hooks/useAnimations';
import { useDarkMode } from '../context/DarkModeContext';
import { motion } from 'framer-motion';

const StatsSection = () => {
  const { isDarkMode } = useDarkMode();
  const projects = useCountUp(25, 2000);
  const clients = useCountUp(15, 2000);
  const experience = useCountUp(5, 2000);

  const stats = [
    {
      ref: projects,
      label: 'Projects Completed',
      suffix: '+',
    },
    {
      ref: clients,
      label: 'Happy Clients',
      suffix: '+',
    },
    {
      ref: experience,
      label: 'Years of Experience',
      suffix: '+',
    },
  ];

  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className={`p-8 rounded-2xl border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} text-center hover:shadow-xl transition-shadow duration-300`}
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-4">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-500">
                  <span ref={stat.ref}>0</span>
                  {stat.suffix}
                </div>
              </div>
              <p className={`text-lg font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
