import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // El objeto theme contiene una propiedad extend, que permite agregar 
  // valores personalizados al tema predeterminado de Tailwind sin 
  // sobrescribirlo por completo.
  // Dentro del objeto extend, hay dos propiedades
  // principales que se están personalizando: colors y backgroundImage.
  theme: {
    extend: {
      colors: {
        secondary: "#f5741c",
        darkBg: "#131424"
      },
      //  Este es un gradiente lineal definido con parámetros específicos. 
      // El gradiente comienza en un ángulo de 90 grados y transiciona entre 
      // dos colores con niveles de transparencia especificados. El primer 
      // color es rgba(70, 54, 124, 0.5), un púrpura semitransparente, y el 
      // segundo color es rgba(74, 47, 189, 0.5), otro púrpura semitransparente. 
      backgroundImage: {
        "gradient-cover": 
        "linear-gradient(90deg, 21deg, rgba(70, 54, 124, 0.5) - 5.91%, rgba(74, 47, 189, 0.5) 111.58%)",
        
      },
    },
  },
  plugins: [],
} satisfies Config;
