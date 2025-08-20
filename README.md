# 🚀 Página Personal de GitHub Pages - Carlos Granados

Una página web personal moderna y responsiva creada para GitHub Pages, con diseño atractivo y funcionalidades interactivas.

## ✨ Características

- 🎨 **Diseño Moderno**: Interfaz limpia y profesional con gradientes y sombras
- 📱 **Totalmente Responsiva**: Se adapta perfectamente a todos los dispositivos
- 🚀 **Rendimiento Optimizado**: Carga rápida y animaciones suaves
- 🎭 **Animaciones Interactivas**: Efectos de scroll, hover y transiciones
- 📝 **Formulario de Contacto**: Sistema de contacto funcional con validaciones
- 🎯 **Navegación Suave**: Scroll automático a las secciones
- 🌟 **Efectos Visuales**: Parallax, tipografía animada y barras de habilidades

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Estilos modernos con Flexbox y Grid
- **JavaScript ES6+**: Funcionalidades interactivas y animaciones
- **Font Awesome**: Iconos vectoriales
- **Google Fonts**: Tipografía Inter para mejor legibilidad

## 📁 Estructura del Proyecto

```
carlosgranados.github.io/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # Funcionalidades JavaScript
├── README.md           # Este archivo
└── .gitignore          # Archivos a ignorar por Git
```

## 🚀 Configuración para GitHub Pages

### 1. Configurar el Repositorio

1. Ve a tu repositorio en GitHub
2. Haz clic en **Settings** (Configuración)
3. Desplázate hasta la sección **Pages**
4. En **Source**, selecciona **Deploy from a branch**
5. En **Branch**, selecciona **main** o **master**
6. Haz clic en **Save**

### 2. Personalizar el Contenido

Antes de hacer push, personaliza el contenido en `index.html`:

- **Nombre y título**: Cambia "Carlos Granados" por tu nombre
- **Descripción**: Actualiza la descripción personal
- **Proyectos**: Modifica los proyectos de ejemplo con los tuyos
- **Habilidades**: Ajusta las barras de habilidades según tu experiencia
- **Información de contacto**: Actualiza email, LinkedIn, GitHub, etc.

### 3. Hacer Deploy

```bash
# Agregar todos los archivos
git add .

# Hacer commit
git commit -m "Initial commit: Personal website"

# Subir a GitHub
git push origin main
```

Tu página estará disponible en: `https://tuusuario.github.io/carlosgranados.github.io`

## 🎨 Personalización

### Colores Principales

Los colores principales están definidos en CSS variables. Puedes cambiarlos en `styles.css`:

```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --text-color: #2d3748;
    --text-light: #4a5568;
    --background-light: #f7fafc;
}
```

### Tipografía

La fuente principal es Inter de Google Fonts. Puedes cambiarla modificando el enlace en `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=TuFuente:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### Imágenes

Para agregar tu foto de perfil:

1. Coloca tu imagen en el proyecto
2. Reemplaza el ícono en la sección hero:
```html
<div class="profile-avatar">
    <img src="tu-foto.jpg" alt="Tu Nombre" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">
</div>
```

## 📱 Responsive Design

El sitio está optimizado para:

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🔧 Funcionalidades JavaScript

### Navegación
- Menú móvil hamburguesa
- Scroll suave a secciones
- Header con efecto de transparencia

### Formulario de Contacto
- Validación de campos
- Sistema de notificaciones
- Simulación de envío

### Animaciones
- Barras de habilidades animadas
- Efectos de scroll
- Efectos hover en tarjetas
- Efecto de escritura en el título

## 🚀 Optimizaciones de Rendimiento

- **Lazy Loading**: Carga diferida de imágenes
- **CSS Optimizado**: Uso de transform y opacity para animaciones
- **JavaScript Modular**: Código organizado y eficiente
- **Fuentes Web**: Optimización de carga de tipografías

## 🐛 Solución de Problemas

### La página no se muestra
1. Verifica que GitHub Pages esté habilitado
2. Espera unos minutos después del push
3. Revisa la consola del navegador para errores

### Estilos no se cargan
1. Verifica que `styles.css` esté en el repositorio
2. Asegúrate de que la ruta en `index.html` sea correcta

### JavaScript no funciona
1. Verifica que `script.js` esté en el repositorio
2. Revisa la consola del navegador para errores
3. Asegúrate de que no haya bloqueadores de scripts

