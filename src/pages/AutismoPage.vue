<template>
  <q-page class="q-pa-xl bg-blue-grey-1">
    <div class="text-center q-mb-lg">
      <h1 class="text-primary text-h4">¿Qué es el Autismo?</h1>
      <p class="text-grey-7 text-subtitle1">
        El Trastorno del Espectro Autista (TEA) es una condición neurológica que afecta la forma en que una persona
        percibe el entorno, se comunica y se relaciona con los demás. No es una enfermedad, sino una manera diferente
        de procesar la información y de vivir el mundo.
      </p>
    </div>

    <q-separator class="q-my-lg" />

    <div class="row q-col-gutter-xl items-center">
      <div class="col-12 col-md-6">
        <q-img
          src="https://cdn.openai.com/autismo/que-es-el-autismo.jpg"
          alt="Ilustración educativa sobre el autismo"
          ratio="16/9"
          class="rounded-borders shadow-2 q-mb-md"
        />
      </div>

      <div class="col-12 col-md-6">
        <h2 class="text-h5 text-primary">Una forma diferente de percibir y sentir</h2>
        <p class="text-body1 text-grey-9 q-mt-md">
          El autismo no tiene una sola manifestación. Se habla de “espectro” porque cada persona presenta
          características únicas: algunas pueden tener una gran habilidad para recordar detalles, otras destacan
          en la lógica, las matemáticas o el arte. 
        </p>
        <p class="text-body1 text-grey-9">
          Las personas con TEA pueden experimentar diferencias en la comunicación, en la interacción social y en el
          comportamiento. Sin embargo, con comprensión, apoyo y entornos inclusivos, pueden desarrollar plenamente
          su potencial.
        </p>
      </div>
    </div>

    <q-separator class="q-my-xl" />

    <div class="q-mb-lg">
      <h2 class="text-h5 text-primary">Características principales del espectro autista</h2>
      <ul class="text-body1 text-grey-9 q-mt-md">
        <li>Dificultades en la comunicación verbal y no verbal.</li>
        <li>Comportamientos o intereses repetitivos y rutinas estructuradas.</li>
        <li>Diferencias en la forma de procesar estímulos sensoriales.</li>
        <li>Gran atención al detalle y memoria visual destacada en algunos casos.</li>
        <li>Necesidad de ambientes estables y previsibles.</li>
      </ul>
    </div>

    <q-separator class="q-my-xl" />

    <div class="row q-col-gutter-xl items-center">
      <div class="col-12 col-md-6 order-last order-md-first">
        <h2 class="text-h5 text-primary">Importancia de la comprensión y la empatía</h2>
        <p class="text-body1 text-grey-9 q-mt-md">
          Acompañar a una persona con autismo requiere empatía, paciencia y conocimiento. Las familias, docentes
          y comunidades juegan un papel clave para fomentar la inclusión y el respeto.
        </p>
        <p class="text-body1 text-grey-9">
          Pequeños gestos como respetar rutinas, ofrecer comunicación visual o reducir estímulos ruidosos pueden
          marcar una gran diferencia en su bienestar.
        </p>
      </div>

      <div class="col-12 col-md-6">
        <q-img
          src="https://cdn.openai.com/autismo/empatia.jpg"
          alt="Empatía y apoyo en el autismo"
          ratio="16/9"
          class="rounded-borders shadow-2 q-mb-md"
        />
      </div>
    </div>

    <q-separator class="q-my-xl" />

    <div class="text-center">
      <h2 class="text-h6 text-primary">🎥 Video educativo</h2>
      <iframe
        width="80%"
        height="400"
        src="https://www.youtube.com/embed/ytljxC2KMEQ"
        title="Qué es el Autismo - Video educativo"
        frameborder="0"
        allowfullscreen
        class="rounded-borders shadow-2 q-mt-md"
      ></iframe>
      <p class="text-grey-7 q-mt-md">
        Este video ofrece una visión sencilla y humana sobre qué significa vivir dentro del espectro autista.
      </p>
    </div>

    <q-separator class="q-my-xl" />

    <q-card flat bordered class="q-pa-lg bg-blue-grey-2 text-center shadow-1">
      <q-card-section>
        <h3 class="text-primary text-h6">💙 La inclusión comienza con la comprensión</h3>
        <p class="text-grey-9">
          Aprender sobre el autismo es el primer paso para construir un mundo más empático, accesible e inclusivo.
          Cada persona tiene un valor único, y reconocer la diversidad nos enriquece a todos.
        </p>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<style scoped>
.rounded-borders {
  border-radius: 14px;
}
.bg-blue-grey-1 {
  background-color: #f6f9fb;
}
.text-body1 {
  line-height: 1.6;
}
.shadow-2 {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}
</style>
