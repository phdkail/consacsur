import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { BRAND } from '../../constants/brand';

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Nosotros', href: '/about' },
    { name: 'Servicios', href: '/services' },
    { name: 'Proyectos', href: '/projects' },
    { name: 'Clientes', href: '/clients' },
    { name: 'Ética y Cumplimiento', href: '/ethics' },
    { name: 'Contacto', href: '/contact' },
  ],
  social: [
    {
      name: 'Facebook',
      href: BRAND.social.facebook,
      icon: FaFacebook,
    },
    {
      name: 'Twitter',
      href: BRAND.social.twitter,
      icon: FaTwitter,
    },
    {
      name: 'LinkedIn',
      href: BRAND.social.linkedin,
      icon: FaLinkedin,
    },
    {
      name: 'Instagram',
      href: BRAND.social.instagram,
      icon: FaInstagram,
    },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y Descripción */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <img
                src={BRAND.logo.light}
                alt={BRAND.name}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {BRAND.description}
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Contacto
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>{BRAND.contact.address}</li>
              <li>{BRAND.contact.city}, {BRAND.contact.country}</li>
              <li>Tel: {BRAND.contact.phone}</li>
              <li>Email: {BRAND.contact.email}</li>
            </ul>
          </div>
        </div>

        {/* Redes Sociales y Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary dark:hover:text-primary-light"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} {BRAND.name}. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}; 