<template>
  <q-page class="q-pa-xl bg-blue-grey-1">
    <div class="text-center q-mb-xl">
      <h1 class="text-primary text-h4">Síntomas comunes del Autismo</h1>
      <p class="text-grey-7 text-subtitle1">
        El autismo es un espectro, lo que significa que cada persona puede experimentar los síntomas de manera diferente. 
        A continuación, encontrarás una explicación más profunda de los signos más comunes, acompañados de imágenes y videos educativos.
      </p>
    </div>

    <div v-for="(s, i) in sintomas" :key="i" class="row q-my-xl q-col-gutter-xl items-center">
      <!-- Columna izquierda: texto -->
      <div class="col-12 col-md-6">
        <h2 class="text-h5 text-primary">{{ s.titulo }}</h2>
        <p class="text-body1 text-grey-9 q-mt-md">{{ s.descripcion1 }}</p>
        <p class="text-body1 text-grey-9">{{ s.descripcion2 }}</p>
        <ul class="q-mt-md text-grey-8">
          <li v-for="(punto, j) in s.puntos" :key="j">{{ punto }}</li>
        </ul>
      </div>

      <!-- Columna derecha: imagen y video -->
      <div class="col-12 col-md-6 text-center">
        <q-img
          :src="s.imagen"
          :alt="s.titulo"
          ratio="16/9"
          class="rounded-borders shadow-2 q-mb-md"
        />
        <iframe
          width="100%"
          height="280"
          :src="s.video"
          title="Video educativo"
          frameborder="0"
          allowfullscreen
          class="rounded-borders shadow-1"
        ></iframe>
      </div>
    </div>
  </q-page>
</template>

<script setup>
const sintomas = [
  {
    titulo: 'Dificultades en la comunicación social',
    descripcion1:
      'Las personas con autismo pueden tener dificultades para expresar sus pensamientos o entender los de los demás. Esto incluye problemas para mantener conversaciones, comprender el tono de voz, los gestos o las expresiones faciales.',
    descripcion2:
      'No se trata de falta de interés en comunicarse, sino de una forma diferente de procesar la información social. La comunicación visual y el uso de apoyos como pictogramas pueden ayudar notablemente.',
    puntos: [
      'Dificultad para iniciar o mantener conversaciones.',
      'Preferencia por la comunicación literal o directa.',
      'Menor contacto visual o lenguaje corporal inusual.',
      'Dificultad para entender ironías o dobles sentidos.'
    ],
    imagen: 'https://cdn.openai.com/autismo/comunicacion.jpg',
    video: 'https://www.youtube.com/embed/eq7M4h_gGvE'
  },
  {
    titulo: 'Comportamientos repetitivos o rutinas fijas',
    descripcion1:
      'Las repeticiones o rituales pueden ser una forma de regular el entorno. Repetir movimientos, palabras o seguir rutinas predecibles genera sensación de seguridad.',
    descripcion2:
      'Cuando se interrumpen estas rutinas, algunas personas pueden experimentar ansiedad. La estructura y la anticipación son claves para su bienestar diario.',
    puntos: [
      'Movimientos repetitivos (balanceo, palmadas, giros).',
      'Necesidad de seguir rutinas exactas.',
      'Dificultad para adaptarse a cambios inesperados.',
      'Interés intenso en objetos o patrones visuales.'
    ],
    imagen: 'https://cdn.openai.com/autismo/rutinas.jpg',
    video: 'https://www.youtube.com/embed/nxqK6U97HDY'
  },
  {
    titulo: 'Intereses específicos e intensos',
    descripcion1:
      'Muchas personas con autismo desarrollan intereses profundos en temas concretos. Estos intereses pueden ser una fuente de placer, aprendizaje y concentración.',
    descripcion2:
      'Lejos de ser un problema, estos intereses pueden convertirse en habilidades destacadas si se fomentan de manera adecuada.',
    puntos: [
      'Foco intenso en temas como trenes, animales o números.',
      'Conocimiento avanzado sobre un tema específico.',
      'Uso de los intereses como forma de conexión social.'
    ],
    imagen: 'https://cdn.openai.com/autismo/intereses.jpg',
    video: 'https://www.youtube.com/embed/OvI1Y2D-gYI'
  },
  {
    titulo: 'Sensibilidad a estímulos sensoriales',
    descripcion1:
      'Algunas personas con autismo pueden ser muy sensibles a sonidos, luces, texturas o sabores. Otras pueden buscar activamente estímulos para sentirse cómodas.',
    descripcion2:
      'La regulación sensorial es un aspecto clave del acompañamiento, y debe respetarse la manera particular en la que cada persona experimenta su entorno.',
    puntos: [
      'Molestia ante ruidos, luces o ciertos materiales.',
      'Necesidad de objetos con texturas o peso específico.',
      'Conductas de autoestimulación (mirar luces, girar objetos).'
    ],
    imagen: 'https://cdn.openai.com/autismo/sensibilidad.jpg',
    video: 'https://www.youtube.com/embed/l1b6LkUScL0'
  },
  {
    titulo: 'Dificultad para interpretar emociones',
    descripcion1:
      'Comprender las emociones propias y las ajenas puede ser complicado para algunas personas con TEA. Sin embargo, esto no significa falta de empatía.',
    descripcion2:
      'Las herramientas visuales y la educación emocional ayudan a desarrollar una mejor comprensión de las relaciones sociales.',
    puntos: [
      'Dificultad para identificar gestos o expresiones.',
      'Tendencia a respuestas emocionales atípicas.',
      'Necesidad de apoyo en la comunicación afectiva.'
    ],
    imagen: 'https://cdn.openai.com/autismo/emociones.jpg',
    video: 'https://www.youtube.com/embed/7JH0E0PG6Fw'
  }
]
</script>

<style scoped>
.rounded-borders {
  border-radius: 14px;
}
.text-body1 {
  line-height: 1.6;
}
.row {
  align-items: flex-start;
}
.bg-blue-grey-1 {
  background-color: #f6f9fb;
}
</style>
