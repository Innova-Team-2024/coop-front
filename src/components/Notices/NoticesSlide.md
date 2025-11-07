# NoticesSlide Component

Componente slider reutilizable basado en Swiper que implementa el patrón **Compound Components** para máxima flexibilidad.

---

## 🎯 Características

- ✅ Acepta cualquier tipo de contenido (no limitado a un componente específico)
- ✅ Breakpoints responsivos predefinidos
- ✅ Paginación opcional con estilos personalizados
- ✅ FreeMode para scroll natural
- ✅ Compatible con Next.js 15 y Server Components
- ✅ TypeScript completo

---

## 📦 Instalación

Este componente requiere Swiper:

```bash
npm install swiper
```

---

## 🚀 Uso Básico

```tsx
import { NoticesSlide } from "@/components/NoticesSlide";
import NoticeCard from "@/components/NoticeCard";

export default function Page() {
  return (
    <NoticesSlide pagination={true}>
      <NoticesSlide.Item>
        <NoticeCard title="Noticia 1" description="..." image={img1} />
      </NoticesSlide.Item>
      <NoticesSlide.Item>
        <NoticeCard title="Noticia 2" description="..." image={img2} />
      </NoticesSlide.Item>
    </NoticesSlide>
  );
}
```

---

## 📖 API Reference

### `<NoticesSlide>`

Componente contenedor que configura el Swiper.

| Prop           | Tipo        | Default | Descripción                                         |
| -------------- | ----------- | ------- | --------------------------------------------------- |
| `children`     | `ReactNode` | -       | **Requerido.** Debe contener `NoticesSlide.Item`    |
| `pagination`   | `boolean`   | `false` | Muestra paginación de puntos (se oculta en ≥1024px) |
| `spaceBetween` | `number`    | `16`    | Espacio entre slides en píxeles                     |
| `className`    | `string`    | `""`    | Clases Tailwind adicionales para el contenedor      |

## 💡 Ejemplos de Uso

### Con Array de Datos

```tsx
const notices = [
  {
    id: 1,
    title: "Noticia 1",
    description: "Descripción de la noticia",
    image: img1,
  },
  {
    id: 2,
    title: "Noticia 2",
    description: "Otra descripción",
    image: img2,
  },
  {
    id: 3,
    title: "Noticia 3",
    description: "Más contenido",
    image: img3,
  },
];

export default function NoticiasPage() {
  return (
    <NoticesSlide pagination={true} spaceBetween={24}>
      {notices.map((notice) => (
        <NoticeCard key={notice.id} {...notice} />
      ))}
    </NoticesSlide>
  );
}
```

### Contenido Mixto

```tsx
export default function MixedContentSlider() {
  return (
    <NoticesSlide>
      {/* Slide 1: NoticeCard normal */}
      <NoticeCard
        title="Evento Especial"
        description="Próximamente"
        image={eventImg}
      />

      {/* Slide 2: Card promocional con fondo degradado */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-lg">
        <PromoCard title="¡Oferta Especial!" discount="50% OFF" />
      </div>

      {/* Slide 3: Contenido HTML custom */}
      <div className="p-6 bg-gray-100 rounded-lg h-full">
        <h3 className="text-2xl font-bold mb-4">Custom Content</h3>
        <p className="text-gray-600">
          Puedes meter cualquier contenido HTML o componente React aquí
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Acción
        </button>
      </div>
    </NoticesSlide>
  );
}
```

### Slider de Productos

```tsx
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function ProductSlider({ products }: { products: Product[] }) {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-6">Productos Destacados</h2>

      <NoticesSlide pagination={true} spaceBetween={20}>
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-2xl text-green-600 font-bold mt-2">
              ${product.price}
            </p>
            <button className="w-full mt-4 bg-blue-500 text-white py-2 rounded">
              Agregar al carrito
            </button>
          </div>
        ))}
      </NoticesSlide>
    </section>
  );
}
```

---

## 🎨 Breakpoints Responsivos

Configuración predefinida:

| Ancho  | Slides Visibles | Espacio |
| ------ | --------------- | ------- |
| 320px  | 1               | 8px     |
| 390px  | 1.1             | 4px     |
| 640px  | 2.1             | 6px     |
| 1024px | 2.1             | 80px    |
| 1280px | 2.4             | 16px    |

> **Nota:** Los valores decimales (1.1, 2.1) muestran parcialmente el siguiente slide para indicar que hay más contenido.

---

## Funcionamiento Interno

El componente utiliza React.Children.map para envolver automáticamente cada hijo en un <SwiperSlide>:

```tsx
{
  React.Children.map(children, (child, index) => (
    <SwiperSlide key={index} className="h-auto mb-8">
      {child}
    </SwiperSlide>
  ));
}
```

Esto significa que no necesitas envolver manualmente cada elemento en un componente de slide. Simplemente pasa tus componentes como children y el slider se encarga del resto.

---

## ⚙️ Personalización Avanzada

### Cambiar Breakpoints

Si necesitas breakpoints diferentes, modifica el objeto `breakpoints` en `NoticesSlideRoot`:

```tsx
breakpoints={{
  768: { slidesPerView: 1.5, spaceBetween: 12 },
  1024: { slidesPerView: 3, spaceBetween: 24 },
}}
```

### Cambiar Colores del Paginador

Modifica el `<style jsx global>`:

```tsx
.swiper-pagination-bullet {
  background-color: rgba(59, 130, 246, 0.35); // Azul
}
.swiper-pagination-bullet-active {
  background-color: #3b82f6;
}
```

---

## 🐛 Troubleshooting

### Los slides no se ven correctamente

- Verifica que cada hijo tenga contenido con altura definida
- Asegúrate de que los componentes hijos tengan height o min-height
- Revisa que los estilos de Swiper se estén importando

```tsx
// ✅ Correcto
<NoticesSlide>
  <div className="h-64 bg-gray-100">Contenido</div>
</NoticesSlide>

// ❌ Incorrecto (sin altura)
<NoticesSlide>
  <div>Contenido</div>
</NoticesSlide>
```

### La paginación no funciona

- Confirma que pagination={true} esté en <NoticesSlide>
- Revisa que los estilos globales se estén aplicando
- Revisa la consola del navegador por errores de Swiper

```tsx
// ✅ Correcto
<NoticesSlide pagination={true}>
  <NoticeCard {...notice} />
</NoticesSlide>

// ❌ Incorrecto
<NoticesSlide>
  <NoticeCard pagination={true} {...notice} />
</NoticesSlide>
```

### Los breakpoints no se respetan

- El último breakpoint que coincida será el que se use
- Verifica que los valores de slidesPerView sean coherentes
- Si personalizas, asegúrate de seguir el orden ascendente (320 < 768 < 1024)

### Los slides tienen diferentes alturas

- Esto es por diseño (h-auto en SwiperSlide)
- Si quieres altura uniforme, sigue las instrucciones en "Personalizar Altura de los Slides"

---

## 📚 Referencias

- [Swiper React Documentation](https://swiperjs.com/react)
- [Compound Components Pattern](https://kentcdodds.com/blog/compound-components-with-react-hooks)
- [Next.js 15 Documentation](https://nextjs.org/docs)

---
