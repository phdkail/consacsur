import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaCogs, FaBolt, FaIndustry, FaLeaf, FaTasks } from 'react-icons/fa';
import { BRAND } from '../constants/brand';

const serviceIcons = {
  'Ingeniería Civil': FaBuilding,
  'Ingeniería Mecánica': FaCogs,
  'Ingeniería Eléctrica': FaBolt,
  'Ingeniería Industrial': FaIndustry,
  'Consultoría Ambiental': FaLeaf,
  'Gestión de Proyectos': FaTasks,
};

export const Services = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestros Servicios</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Soluciones integrales en ingeniería para satisfacer las necesidades
              de nuestros clientes con los más altos estándares de calidad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Servicios Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BRAND.services.map((service, index) => {
              const Icon = serviceIcons[service.title];
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <Icon className="text-primary text-3xl mr-4" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
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
              ¿Necesitas más información?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Contáctanos para conocer más detalles sobre nuestros servicios y cómo podemos ayudarte.
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