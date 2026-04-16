import { motion } from "framer-motion";
import PropTypes from "prop-types";

const ProjectShowcase = ({ isDark }) => {
  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "A brief description of your first project",
      tags: ["React", "Tailwind", "Node.js"],
      image: "../assets/robot.png",
    },
    {
      id: 2,
      title: "Project Two",
      description: "A brief description of your second project",
      tags: ["Next.js", "TypeScript", "PostgreSQL"],
      image: "/project2.jpg",
    },
    {
      id: 3,
      title: "Project Three",
      description: "A brief description of your third project",
      tags: ["Vue.js", "Firebase", "Tailwind"],
      image: "/project3.jpg",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className={`py-20 px-4 ${isDark ? "bg-gray-900" : "bg-white"}`}>
      <motion.div className="max-w-6xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants}>
        <motion.h2 variants={itemVariants} className={`text-4xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
          Featured Projects
        </motion.h2>

        <motion.div variants={itemVariants} className={`w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mb-12`} />

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={containerVariants}>
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants} whileHover={{ y: -8, transition: { duration: 0.3 } }} className={`rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-2xl ${isDark ? "bg-gray-800" : "bg-gray-50"}`}>
              <div className="relative h-48 bg-gray-300 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>

              <div className="p-6">
                <h3 className={`text-xl font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>{project.title}</h3>

                <p className={`text-sm mb-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}>{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className={`text-xs px-3 py-1 rounded-full ${isDark ? "bg-gray-700 text-blue-300" : "bg-blue-100 text-blue-700"}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
ProjectShowcase.propTypes = {
  isDark: PropTypes.bool.isRequired,
};
export default ProjectShowcase;
