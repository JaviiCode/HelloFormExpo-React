# HelloFormExpo - Saludador en React Native

Una aplicación móvil desarrollada con Expo y React Native que permite al usuario introducir su nombre y recibir un saludo personalizado.

## 📱 Descripción

**Saludador Expo** es una aplicación simple pero completa que demuestra los conceptos fundamentales del desarrollo móvil con React Native y TypeScript:

- ✅ Entrada de texto con validación
- ✅ Gestión de estado con React Hooks
- ✅ Estilos condicionales
- ✅ Feedback háptico
- ✅ Diseño moderno con gradientes
- ✅ Experiencia de usuario pulida

### Funcionalidades principales

1. **Entrada de nombre**: Campo de texto con límite de 20 caracteres
2. **Validación**: El botón se deshabilita cuando el campo está vacío
3. **Contador de caracteres**: Muestra cuántos caracteres has escrito
4. **Mensajes de error**: Indicaciones visuales cuando el campo está vacío
5. **Feedback háptico**: Vibración suave al pulsar el botón
6. **Diseño atractivo**: Header con gradiente e iconos

## 🚀 Cómo ejecutar el proyecto

### Requisitos previos

- Node.js (versión 14 o superior)
- npm o yarn
- Expo CLI instalado globalmente (opcional)
- Expo Go en tu dispositivo móvil (iOS/Android)

### Instalación

1. **Clona el repositorio** (o descarga el código):
   ```bash
   git clone https://github.com/tuusuario/HelloFormExpo_nombreApellido.git
   cd HelloFormExpo_nombreApellido
   ```

2. **Instala las dependencias**:
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**:
   ```bash
   npm start
   ```
   
   O también puedes usar:
   ```bash
   npx expo start
   ```

4. **Ejecuta en tu dispositivo**:
   - Escanea el código QR con la app **Expo Go** (Android) o la cámara (iOS)
   - O presiona `a` para Android Emulator
   - O presiona `i` para iOS Simulator (solo en Mac)

## 📋 Puntos implementados

### Requisitos base ✅
- [x] Proyecto creado con Expo + TypeScript
- [x] Componentes: `SafeAreaView`, `View`, `Text`, `TextInput`, `Pressable`
- [x] Estado con `useState<string>`
- [x] Estilos con `StyleSheet.create()`
- [x] Validación: mensaje de error si el campo está vacío
- [x] Saludo personalizado cuando hay texto
- [x] `StatusBar` de Expo integrado

### Puntos extra (+3 pts) ✅

1. **✅ Botón deshabilitado** (cuando el campo está vacío)
   - Se aplica estilo visual diferente
   - El botón no responde a clicks cuando está deshabilitado

2. **✅ Estilos condicionales para errores**
   - Mensaje de error en rojo con icono
   - Borde rojo en el `TextInput` cuando hay error
   - Fondo rosado claro en el input con error

3. **✅ Contador de caracteres**
   - Muestra "X / 20" en tiempo real
   - Límite máximo de 20 caracteres con `maxLength`

4. **✅ Mejoras visuales**
   - `LinearGradient` en el header (morado/azul)
   - Iconos de `@expo/vector-icons` (MaterialIcons)
   - Diseño responsive con flexbox
   - Sombras y elevaciones para profundidad

5. **✅ Feedback háptico con expo-haptics**
   - Vibración suave al pulsar el botón
   - Mejora la experiencia táctil de la app

## 🆚 Comparación: Android Clásico / Jetpack Compose vs Expo

### Android Clásico (XML + Activities)
**Ventajas:**
- Control total sobre componentes nativos
- Documentación extensa y madura
- Integración profunda con el sistema Android

**Desventajas:**
- Código verboso (XML + Java/Kotlin separados)
- Curva de aprendizaje pronunciada
- Solo funciona en Android

### Jetpack Compose
**Ventajas:**
- UI declarativa moderna
- Código más conciso y legible
- Kotlin nativo con type-safety
- Previsualización en tiempo real

**Desventajas:**
- Solo Android (no multiplataforma)
- Comunidad más pequeña que React
- Más nuevo, menos recursos de terceros

### Expo/React Native
**Ventajas:**
- **Multiplataforma**: Un código para iOS y Android
- **Desarrollo rápido**: Hot reload instantáneo
- **JavaScript/TypeScript**: Lenguaje familiar para web devs
- **Ecosistema enorme**: Miles de librerías npm
- **Fácil de empezar**: `npx create-expo-app` y listo
- **Expo Go**: Pruebas en dispositivo real sin compilar

**Desventajas:**
- Rendimiento ligeramente inferior en apps muy complejas
- Dependencia del puente JS-Native
- Algunas APIs nativas requieren módulos custom

### Mi experiencia personal

En esta actividad, **Expo/React Native** resultó mucho más **rápido y sencillo**:

1. **Setup instantáneo**: En 2 minutos ya estaba probando en mi móvil
2. **Hot reload**: Los cambios aparecían al instante
3. **TypeScript**: Autocompletado y detección de errores en tiempo real
4. **Librerías**: Instalar gradientes, iconos y haptics fue trivial
5. **Multiplataforma**: El mismo código funciona en iOS y Android

## 🛠️ Tecnologías utilizadas

- **Expo SDK**: Framework para React Native
- **React Native**: Librería para apps móviles
- **TypeScript**: Tipado estático para JavaScript
- **expo-linear-gradient**: Gradientes nativos
- **expo-haptics**: Feedback táctil
- **@expo/vector-icons**: Biblioteca de iconos

## 📦 Estructura del proyecto

```
HelloFormExpo/
├── App.tsx              # Componente principal
├── app.json             # Configuración de Expo
├── package.json         # Dependencias
├── tsconfig.json        # Configuración de TypeScript
└── README.md            # Este archivo
```

## 🎨 Características del diseño

- **Paleta de colores**: Gradiente morado-azul profesional
- **Tipografía**: Pesos variados para jerarquía visual
- **Espaciado**: Sistema consistente de padding/margin
- **Feedback visual**: Estados hover, disabled, error
- **Accesibilidad**: Colores contrastados y textos legibles

## 👨‍💻 Autor

**[Javier González Mederos]**  
DAM - Desarrollo de Aplicaciones Multiplataforma

![Pantalla inicial](./captura.jpg)