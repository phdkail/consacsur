import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Crear directorios si no existen
const dirs = [
  'src/assets/images',
  'src/assets/icons',
  'src/assets/logos',
  'src/assets/images/services',
];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Copiar logo principal
fs.copyFileSync(
  path.join(__dirname, '../isodata/LOGO.png'),
  path.join(__dirname, '../src/assets/logos/logo.png')
);

// Copiar logo para redes sociales
fs.copyFileSync(
  path.join(__dirname, '../isodata/LOGO REDES SOCIALES.png'),
  path.join(__dirname, '../src/assets/logos/logo-social.png')
);

// Copiar logo 3D transparente
fs.copyFileSync(
  path.join(__dirname, '../isodata/LOGO 3D  TRANSPARENTE.png'),
  path.join(__dirname, '../src/assets/logos/logo-3d.png')
);

// Copiar imágenes de servicios
fs.copyFileSync(
  path.join(__dirname, '../isodata/IT.png'),
  path.join(__dirname, '../src/assets/images/services/it.png')
);
fs.copyFileSync(
  path.join(__dirname, '../isodata/LD.png'),
  path.join(__dirname, '../src/assets/images/services/ld.png')
);
fs.copyFileSync(
  path.join(__dirname, '../isodata/DOC.png'),
  path.join(__dirname, '../src/assets/images/services/doc.png')
);
fs.copyFileSync(
  path.join(__dirname, '../isodata/FAC.png'),
  path.join(__dirname, '../src/assets/images/services/fac.png')
);

console.log('Assets copiados exitosamente!'); 