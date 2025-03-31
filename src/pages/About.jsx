import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaChartLine, FaHandshake } from 'react-icons/fa';
import { BRAND } from '../constants/brand';

const values = [
  {
    title: 'Experiencia',
    description: 'Más de 10 años brindando soluciones de ingeniería de alta calidad.',
    icon: FaChartLine,
  },
  {
    title: 'Compromiso',
    description: 'Dedicação total à satisfação dos nossos clientes e à excelência em cada projeto.',
    icon: FaHandshake,
  },
  {
    title: 'Equipo Profesional',
    description: 'Contamos con un equipo altamente calificado y comprometido.',
    icon: FaUsers,
  },
];

export const About = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre Nosotros</h1>
            <p className="text-xl max-w-3xl mx-auto">
              {BRAND.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Valores Section */}
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
              Nuestros Valores
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Los pilares que guían cada uno de nuestros proyectos y decisiones.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <value.icon className="text-primary text-4xl mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-primary text-white p-8 rounded-lg"
            >
              <h2 className="text-2xl font-bold mb-4">Nuestra Misión</h2>
              <p className="text-lg">
                Proporcionar soluciones de ingeniería innovadoras y sostenibles que contribuyan
                al desarrollo de infraestructura de calidad y al bienestar de la sociedad.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-secondary text-white p-8 rounded-lg"
            >
              <h2 className="text-2xl font-bold mb-4">Nuestra Visión</h2>
              <p className="text-lg">
                Ser reconocidos como líderes en soluciones de ingeniería, destacando por
                nuestra innovación, calidad y compromiso con la sostenibilidad.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}; 