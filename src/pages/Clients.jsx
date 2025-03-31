import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Juan Pérez',
    position: 'Director de Proyectos',
    company: 'Empresa Constructora ABC',
    image: '/src/assets/images/services/it.png',
    testimonial: 'Consacsur ha sido un socio estratégico fundamental en nuestros proyectos de infraestructura. Su experiencia y profesionalismo son excepcionales.',
  },
  {
    name: 'María García',
    position: 'Gerente de Operaciones',
    company: 'Industria XYZ',
    image: '/src/assets/images/services/ld.png',
    testimonial: 'La calidad del trabajo y la atención al detalle de Consacsur han superado nuestras expectativas. Son verdaderos expertos en su campo.',
  },
  {
    name: 'Carlos Rodríguez',
    position: 'Director de Sostenibilidad',
    company: 'Minería Sostenible SA',
    image: '/src/assets/images/services/doc.png',
    testimonial: 'Su enfoque en soluciones sostenibles y su compromiso con el medio ambiente han sido cruciales para nuestros proyectos mineros.',
  },
];

const clients = [
  {
    name: 'Empresa Constructora ABC',
    logo: '/src/assets/images/services/it.png',
  },
  {
    name: 'Industria XYZ',
    logo: '/src/assets/images/services/ld.png',
  },
  {
    name: 'Minería Sostenible SA',
    logo: '/src/assets/images/services/doc.png',
  },
  {
    name: 'Energía Verde Perú',
    logo: '/src/assets/images/services/fac.png',
  },
];

export const Clients = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestros Clientes</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Trabajamos con empresas líderes en diversos sectores, brindando soluciones
              de ingeniería de alta calidad y valor agregado.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonios */}
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
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubre las experiencias de nuestros clientes y cómo hemos ayudado
              a sus empresas a crecer.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">
                      {testimonial.position} - {testimonial.company}
                    </p>
                  </div>
                </div>
                <FaQuoteLeft className="text-primary text-2xl mb-4" />
                <p className="text-gray-600 italic">
                  "{testimonial.testimonial}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clientes Grid */}
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
              Empresas que confían en nosotros
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trabajamos con empresas líderes en diversos sectores de la industria.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex items-center justify-center"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-16 w-auto grayscale hover:grayscale-0 transition-all"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}; 