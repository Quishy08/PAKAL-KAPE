import { Coffee, Leaf, Mountain, Star, Award } from "lucide-react";

export const brandInfo = {
  name: "PAKAL KAPE",
  tagline: "Compromiso con el origen, pasión por el café",
  description:
    "Café de especialidad 100% orgánico de las montañas de Chiapas, México",
  logo: "/logo.svg",
};

export const navItems = [
  { id: "historia", label: "Historia" },
  { id: "productos", label: "Productos" },
  { id: "contacto", label: "Contactar" },
];

export const caracteristicas = [
  {
    icon: Coffee,
    title: "Calidad Premium",
    desc: "Café de especialidad 100%",
    color: "text-amber-700",
    bg: "bg-amber-100",
  },
  {
    icon: Leaf,
    title: "100% Orgánico",
    desc: "Certificado orgánico",
    color: "text-green-700",
    bg: "bg-green-100",
  },
  {
    icon: Mountain,
    title: "Gran Altura",
    desc: "1600-1900 msnm",
    color: "text-blue-700",
    bg: "bg-blue-100",
  },
  {
    icon: Star,
    title: "Variedad Geisha",
    desc: "Sabor excepcional",
    color: "text-purple-700",
    bg: "bg-purple-100",
  },
];

export const fundadores = [
  {
    nombre: "Valeria Jarquín",
    rol: "Co-fundadora",
    imagen: "/src/assets/images/valeria.jpg",
  },
  {
    nombre: "Ramses Guzmán",
    rol: "Co-fundador",
    imagen: "/src/assets/images/ramses.jpg",
  },
];

export const productos = [
  {
    id: "yuumil-bakal",
    name: "YUUMIL BAK'AL",
    subtitle: "Café en Grano Tostado",
    tipo: "Café en Grano Tostado",
    calidad: "Europea de Exportación",
    variedad: "Geisha",
    precio: "$250 MXN",
    peso: "500 gramos",
    descripcion:
      "Ideal para quienes disfrutan moler su café al momento y conservar todo su aroma natural. Cada grano tostado guarda en su interior los sabores únicos de las montañas de Jaltenango.",
    features: [
      "100% Orgánico certificado",
      "Variedad Geisha",
      "Calidad Europea de Exportación",
      "84 puntos SCA",
      "500g — $250 MXN",
      "Cosechado entre 1600–1900 msnm",
    ],
    icon: Coffee,
    imagenes: [
      "/src/assets/yuumil_grano_1.jpg",
      "/src/assets/yuumil_grano_2.jpg",
      "/src/assets/yuumil_grano_3.jpg",
    ],
    delay: "0.2s",
  },
  {
    id: "nikte-kaanil",
    name: "NIKTE 'KA'ANIL",
    subtitle: "Café Molido",
    tipo: "Café Molido",
    calidad: "Europea de Exportación",
    variedad: "Geisha",
    precio: "$265 MXN",
    peso: "500 gramos",
    descripcion:
      "Perfecto para cafetera tradicional, prensa francesa o cafetera eléctrica. Molido fino listo para preparar, conservando todas las notas aromáticas y el sabor excepcional de nuestra variedad Geisha.",
    features: [
      "100% Orgánico certificado",
      "Variedad Geisha",
      "Calidad Europea de Exportación",
      "84 puntos SCA",
      "500g — $265 MXN",
      "Molido para cafetera, prensa francesa o eléctrica",
    ],
    icon: Star,
    imagenes: [
      "/src/assets/nikte_molido_1.jpg",
      "/src/assets/nikte_molido_2.jpg",
      "/src/assets/nikte_molido_3.jpg",
    ],
    delay: "0.4s",
  },
];

export const procesosData = [
  {
    title: "Origen",
    subtitle: "Jaltenango, Chiapas, México",
    description:
      "Nuestro café proviene de las montañas de Chiapas, cultivado entre 1600 y 1900 metros sobre el nivel del mar, donde las condiciones perfectas de altitud y clima dan vida a granos excepcionales.",
    icon: Mountain,
    gradient: "from-blue-600 to-blue-800",
    position: "left",
    delay: "0.2s",
  },
  {
    title: "Certificación",
    subtitle: "100% Orgánico Certificado",
    description:
      "Nuestro café cuenta con certificación orgánica, garantizando que cada grano se cultiva sin pesticidas ni químicos, respetando la tierra y el medio ambiente.",
    icon: Award,
    gradient: "from-green-600 to-green-800",
    position: "right",
    delay: "0.4s",
  },
  {
    title: "Variedad",
    subtitle: "Geisha - Café de Especialidad",
    description:
      "Trabajamos con la prestigiosa variedad Geisha, reconocida mundialmente por su perfil de sabor único, notas florales y complejidad excepcional.",
    icon: Star,
    gradient: "from-purple-600 to-purple-800",
    position: "left",
    delay: "0.6s",
  },
  {
    title: "Tostado",
    subtitle: "Tostado Simple (Normal)",
    description:
      "Aplicamos un tostado simple que realza las características naturales del grano, preservando sus sabores originales y su perfil aromático único.",
    icon: Coffee,
    gradient: "from-amber-600 to-amber-800",
    position: "right",
    delay: "0.8s",
  },
];

export const contactInfo = {
  location: "Jaltenango, Chiapas, México",
  fundadores: "Valeria Jarquín & Ramses Guzmán",
  phoneNumber: "+522212764387",
  email: "contacto@pakalkape.com",
  social: {
    instagram: "https://instagram.com/pakalkape",
    facebook: "https://facebook.com/pakalkape",
  },
};
