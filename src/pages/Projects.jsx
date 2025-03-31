import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaIndustry, FaLeaf } from 'react-icons/fa';

const projects = [
  {
    title: 'Proyecto de Infraestructura Urbana',
    description: 'Diseño y construcción de infraestructura urbana sostenible en la ciudad de Lima.',
    category: 'Ingeniería Civil',
    image: '/src/assets/images/services/it.png',
    icon: FaBuilding,
  },
  {
    title: 'Optimización Industrial',
    description: 'Mejora de procesos industriales para una empresa manufacturera líder.',
    category: 'Ingeniería Industrial',
    image: '/src/assets/images/services/ld.png',
    icon: FaIndustry,
  },
  {
    title: 'Gestión Ambiental',
    description: 'Implementación de sistemas de gestión ambiental para empresas mineras.',
    category: 'Consultoría Ambiental',
    image: '/src/assets/images/services/doc.png',
    icon: FaLeaf,
  },
  {
    title: 'Sistema de Energía Renovable',
    description: 'Diseño e implementación de sistema de energía solar para complejo residencial.',
    category: 'Ingeniería Eléctrica',
    image: '/src/assets/images/services/fac.png',
    icon: FaBuilding,
  },
];

export const Projects = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestros Proyectos</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Descubre cómo hemos ayudado a nuestros clientes a alcanzar sus objetivos
              a través de soluciones de ingeniería innovadoras.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Proyectos Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary bg-opacity-50 flex items-center justify-center">
                    <project.icon className="text-white text-4xl" />
                  </div>
                </div>
                <div className="p-6">
                  <span className="inline-block bg-primary bg-opacity-10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Contáctanos y descubre cómo podemos ayudarte a hacer realidad tu proyecto.
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors">
              Contactar ahora
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}; 