import { motion } from 'framer-motion';
import PropTypes from "prop-types";

const TechStack = ({ isDark }) => {
    const technologies = [
        { name: 'React', icon: '⚛️', color: 'from-blue-400 to-cyan-400' },
        { name: 'JavaScript', icon: '✨', color: 'from-yellow-400 to-orange-400' },
        { name: 'Tailwind CSS', icon: '🎨', color: 'from-cyan-400 to-blue-500' },
        { name: 'Node.js', icon: '🟢', color: 'from-green-400 to-emerald-500' },
        { name: 'TypeScript', icon: '📘', color: 'from-blue-500 to-purple-500' },
        { name: 'Git', icon: '🔧', color: 'from-orange-500 to-red-500' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 100 },
        },
    };

    return (
        <div className={`${isDark ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Tech Stack
                    </h2>
                    <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        Technologies I work with
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {technologies.map((tech) => (
                        <motion.div
                            key={tech.name}
                            variants={itemVariants}
                            whileHover={{ y: -8, scale: 1.05 }}
                            className={`p-6 rounded-xl backdrop-blur-sm border transition-all duration-300 ${
                                isDark
                                    ? 'bg-gray-800/50 border-gray-700 hover:border-gray-600'
                                    : 'bg-white/50 border-gray-200 hover:border-gray-300'
                            }`}
                        >
                            <div className={`inline-block bg-gradient-to-br ${tech.color} p-4 rounded-lg mb-4`}>
                                <span className="text-2xl">{tech.icon}</span>
                            </div>
                            <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                {tech.name}
                            </h3>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};
TechStack.propTypes = {
  isDark: PropTypes.bool.isRequired
}
export default TechStack;