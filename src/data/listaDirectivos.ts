import { DirectivesData } from "@/types/directive";

/**
 * Archivo de datos para los directivos de la organización
 * Para editar: modifica directamente los valores en este archivo
 * IMPORTANTE: Después de editar, ejecuta un nuevo build y deploy
 * Ver documentación completa en: src/docs/editar-directivos.md
 */

export const directivos: DirectivesData = {
  consejoDirectivo: [
    { cargo: "Presidente", nombre: "Jorge Lago" },
    { cargo: "Vicepresidente", nombre: "Ricardo López" },
    { cargo: "Secretario", nombre: "Luisa Mirta López" },
    { cargo: "Prosecretario", nombre: "Sara Goyochea" },
    { cargo: "Tesorero", nombre: "Carlos Oscar Sarkis" },
    { cargo: "Protesorero", nombre: "Cristian Torres" },
  ],
  consejeros: [
    { cargo: "Vocal 1°", nombre: "Alberto Horst" },
    { cargo: "Vocal 2°", nombre: "Amanda Acosta" },
    { cargo: "Vocal 3°", nombre: "Adrián Albornoz" },
  ],
  consejerosSuplentes: [
    { cargo: "Vocal 1°", nombre: "Analia Weber" },
    { cargo: "Vocal 2°", nombre: "Echenique Silvia" },
    { cargo: "Vocal 3°", nombre: "Vega Emilia" },
  ],
  sindicos: [
    { cargo: "Síndico titular", nombre: "José H. Jeréz" },
    { cargo: "Síndico suplente", nombre: "Lucas Sandoval" },
  ],
};
