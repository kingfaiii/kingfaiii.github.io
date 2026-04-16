import { motion } from 'framer-motion';
import PropTypes from "prop-types";
SocialLinks.propTypes = {
  isDark: PropTypes.bool.isRequired,
};
export default function SocialLinks({ isDark }) {
    const socialLinks = [
        { icon: '𝕏', label: 'Twitter', href: '#', color: 'hover:text-black dark:hover:text-white' },
        { icon: '💼', label: 'LinkedIn', href: '#', color: 'hover:text-blue-600' },
        { icon: '🐙', label: 'GitHub', href: '#', color: 'hover:text-gray-800 dark:hover:text-gray-200' },
        { icon: '📧', label: 'Email', href: '#', color: 'hover:text-red-500' },
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
        <section className={`py-20 px-4 text-center transition-colors duration-300 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
            >
                <h2 className={`text-3xl font-bold mb-12 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Connect With Me
                </h2>

                <motion.div className="flex justify-center gap-8 flex-wrap">
                    {socialLinks.map((link) => (
                        <motion.a
                            key={link.label}
                            href={link.href}
                            variants={itemVariants}
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                            className={`text-4xl transition-all duration-300 ${link.color} ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                            aria-label={link.label}
                        >
                            {link.icon}
                        </motion.a>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}