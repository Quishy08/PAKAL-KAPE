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
    id: "cafe-1600",
    name: "Café Variedad 1600",
    subtitle: "Especial",
    altura: "1600 msnm",
    features: ["Variedad Geisha", "Tostado simple", "100% orgánico", "500g"],
    icon: Coffee,
    imagen: "/src/assets/images/producto-1600.jpg",
    delay: "0.2s",
  },
  {
    id: "geisha-premium",
    name: "Geisha Premium",
    subtitle: "Edición Élite",
    altura: "1900 msnm",
    features: ["Geisha Premium", "Mayor altura", "Sabor excepcional", "500g"],
    icon: Star,
    imagen: "/src/assets/images/producto-geisha.jpg",
    delay: "0.4s",
    popular: true,
  },
  {
    id: "chocolate",
    name: "Chocolate Artesanal",
    subtitle: "100% Orgánico",
    altura: "Cacao puro",
    features: ["Cacao puro", "Sin azúcares", "100% orgánico", "500g"],
    icon: Leaf,
    imagen: "/src/assets/images/producto-chocolate.jpg",
    delay: "0.6s",
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
