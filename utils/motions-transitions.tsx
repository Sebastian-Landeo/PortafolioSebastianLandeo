// Transición al recargar la página
export const transitionVariantsPage = {
    // Esto significa que el elemento comenzará fuera de la pantalla a la 
    // derecha y ocupará todo el ancho de su contenedor.
    initial: {
      x: "100%",
      width: "100%",
    },
    // Esto significa que el elemento se moverá a su posición 
    // original (en pantalla) y su ancho se reducirá a cero.
    animate: {
      x: "0%",
      width: "0%",
    },
    // La propiedad x transiciona de "0%" a "100%", moviendo el elemento fuera de
    // la pantalla hacia la derecha. De manera similar, el width transiciona de 
    // "0%" a "100%", expandiendo el ancho del elemento de nuevo a su tamaño 
    // completo
    exit: {
      x: ["0%", "100%"],
      width: ["0%", "100%"],
    },
}
// Animáciones para los objetos
export const fadeIn = (position: string) => {
    return {
      visible: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          type: "tween",
          duration: 1.4,
          delay: 0.5,
          ease: [0.25, 0.25, 0.25, 0.75]
        }
      },
      hidden: {
        y: position === 'bottom' ? -80 : 0,
        x: position === 'right' ? 80 : 0,
        opacity: 0,
        transition: {
          type: "tween",
          duration: 1.4,
          delay: 0.5,
          ease: [0.25, 0.25, 0.25, 0.75]
        }
      }
    }
  }
  