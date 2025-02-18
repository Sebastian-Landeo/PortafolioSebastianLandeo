"use client"
import { itemsNavbar } from "@/data";
import Link from "next/link";
import { usePathname } from "next/navigation";


// la barra de abajo
const Navbar = () => {
    const router = usePathname();

    return (
        // Este div tiene varias clases CSS aplicadas (Tailwind CSS)
        //fixed: Esta clase establece que el div tenga una posición fija. Esto significa que el div permanecerá en la misma posición relativa a la ventana gráfica, incluso cuando se desplace la página.
        /* z-40: Esta clase establece el z-index del div en 40. El z-index determina el orden de apilamiento de los elementos. Un elemento con un z-index más alto aparecerá delante de los elementos con un z-index más bajo.
        flex: Esta clase aplica el modelo de diseño Flexbox al div. Flexbox es un modelo de diseño que permite diseños responsivos y flexibles.
        flex-col: Esta clase establece la dirección del flex en columna, lo que significa que los elementos hijos de este div se organizarán verticalmente.
        items-center: Esta clase centra los elementos hijos a lo largo del eje transversal (horizontalmente en este caso, ya que la dirección del flex es columna).
        justify-center: Esta clase centra los elementos hijos a lo largo del eje principal (verticalmente en este caso, ya que la dirección del flex es columna).
        w-full: Esta clase establece el ancho del div al 100% de su contenedor padre.
        mt-auto: Esta clase aplica un margen superior automático, lo que empuja el div hacia la parte inferior de su contenedor padre si hay espacio restante.
        h-max: Esta clase establece la altura del div a la altura máxima del contenido, asegurando que solo ocupe tanto espacio vertical como requiera su contenido.
        bottom-10: Esta clase establece el margen inferior del div en 10 unidades (probablemente 2.5rem o 40px, dependiendo de la configuración de Tailwind CSS), posicionándolo 10 unidades por encima de la parte inferior de la ventana gráfica. */

        <div className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10">
            <nav>
                <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/15 background-blur-sm ">
                {itemsNavbar.map((item) => (
                    <div key={item.id}
                    className={
                        `px-3 py-2 transition duration-150
                        rounded-full cursor-pointer hover:bg-secondary
                        ${router === item.link && 'bg-secondary'}` 
                      }
                      // El operador === compara tanto el valor como el tipo de los operandos                      
                    >
                        {/*Poner de naranja lo que seleccionas */}
                        <Link href={item.link}>{item.icon}</Link>
                    </div>
                    ))}
                </div>
            </nav>
        </div>
    );

}

export default Navbar;