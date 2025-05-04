# Guía para editar la información de Directivos

Esta guía explica cómo actualizar la información de los directivos que se muestra en el sitio web.

## Ubicación del archivo

La información de los directivos se encuentra en:

```
src/data/listaDirectivos.ts
```

## Estructura del archivo

El archivo está organizado en categorías de directivos. Cada directivo tiene dos campos: `cargo` y `nombre`.

```typescript
export const directivos = {
  consejoDirectivo: [
    { cargo: "Presidente", nombre: "Jorge Lago" },
    { cargo: "Vicepresidente", nombre: "Ricardo López" },
    // ...más directivos
  ],
  consejeros: [
    // ...directivos en esta categoría
  ],
  consejerosSuplentes: [
    // ...directivos en esta categoría
  ],
  otrosDirectivos: [
    // ...directivos en esta categoría
  ],
};
```

## Cómo editar la información

### Para modificar un directivo existente:

1. Abra el archivo `src/data/listaDirectivos.ts` en un editor de código
2. Localice el directivo que desea modificar dentro de la categoría correspondiente
3. Cambie el valor del campo `nombre` o `cargo` según sea necesario
4. Guarde el archivo

### Para añadir un nuevo directivo:

1. Abra el archivo `src/data/listaDirectivos.ts` en un editor de código
2. Localice la categoría donde desea agregar el nuevo directivo
3. Añada una nueva entrada siguiendo el formato: `{ cargo: "Nombre del cargo", nombre: "Nombre de la persona" }`
4. Guarde el archivo

### Para eliminar un directivo:

1. Abra el archivo `src/data/listaDirectivos.ts` en un editor de código
2. Localice el directivo que desea eliminar
3. Borre la línea completa (incluyendo la coma al final si es necesaria)
4. Guarde el archivo

## Después de realizar cambios

Después de modificar el archivo, es necesario reconstruir y redeployar la aplicación para que los cambios sean visibles en el sitio web:

1. Ejecute `npm run build` o `yarn build` (según el gestor de paquetes que utilice el proyecto)
2. Suba los cambios al repositorio siguiendo el proceso habitual de git
3. El sistema de CI/CD se encargará de desplegar los cambios

## Ejemplo práctico

### Antes:

```typescript
ejecutivos: [
  { cargo: "Presidente", nombre: "Jorge Lago" },
  { cargo: "Vicepresidente", nombre: "Ricardo López" },
],
```

### Después (modificando un nombre y añadiendo un cargo):

```typescript
ejecutivos: [
  { cargo: "Presidente", nombre: "Jorge Lago Martínez" }, // Se modificó el apellido
  { cargo: "Vicepresidente", nombre: "Ricardo López" },
  { cargo: "Vicepresidente segundo", nombre: "María González" }, // Se añadió un nuevo cargo
],
```

## Notas importantes

- Mantenga el formato exacto del archivo, incluyendo llaves, comas y comillas
- Asegúrese de que cada entrada (excepto la última de cada sección) termine con una coma
- No modifique las líneas que contienen tipos o interfaces de TypeScript
- Si no está seguro de cómo proceder, consulte con el equipo de desarrollo

## Contacto para soporte

Si tiene problemas al editar este archivo, contacte al equipo de desarrollo en: [correo@ejemplo.com]

