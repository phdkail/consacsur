import React from 'react';
import { motion } from 'framer-motion';
import { FaBalanceScale, FaShieldAlt, FaHandshake, FaCheckCircle } from 'react-icons/fa';

const principles = [
  {
    title: 'Integridad',
    description: 'Actuamos con honestidad y transparencia en todas nuestras operaciones.',
    icon: FaBalanceScale,
  },
  {
    title: 'Cumplimiento',
    description: 'Nos adherimos estrictamente a todas las leyes y regulaciones aplicables.',
    icon: FaShieldAlt,
  },
  {
    title: 'Responsabilidad',
    description: 'Asumimos la responsabilidad de nuestras acciones y decisiones.',
    icon: FaHandshake,
  },
  {
    title: 'Excelencia',
    description: 'Mantenemos los más altos estándares de calidad en todo lo que hacemos.',
    icon: FaCheckCircle,
  },
];

const policies = [
  {
    title: 'Política Anticorrupción',
    description: 'Implementamos medidas estrictas para prevenir y combatir la corrupción en todas sus formas.',
  },
  {
    title: 'Política Ambiental',
    description: 'Nos comprometemos a minimizar el impacto ambiental de nuestras operaciones.',
  },
  {
    title: 'Política de Derechos Humanos',
    description: 'Respetamos y protegemos los derechos humanos en todas nuestras actividades.',
  },
  {
    title: 'Política de Seguridad y Salud',
    description: 'Priorizamos la seguridad y salud de nuestros empleados y stakeholders.',
  },
];

export const Ethics = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Ética y Cumplimiento</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Nos comprometemos a mantener los más altos estándares éticos y de cumplimiento
              en todas nuestras operaciones.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Principios */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Principios
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Los valores fundamentales que guían nuestras acciones y decisiones.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <principle.icon className="text-primary text-4xl mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{principle.title}</h3>
                <p className="text-gray-600">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Políticas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestras Políticas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Políticas y procedimientos que aseguran el cumplimiento de nuestros estándares éticos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {policies.map((policy, index) => (
              <motion.div
                key={policy.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {policy.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {policy.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Tienes alguna pregunta sobre ética y cumplimiento?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Estamos aquí para responder tus preguntas y asegurarnos de que nuestros
              estándares éticos se mantengan en todo momento.
            </p>
            <button className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Contactar al Comité de Ética
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}; 