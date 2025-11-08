<template>
  <q-page class="q-pa-xl flex flex-center column bg-blue-1">
    <!-- Imagen con efecto flotante -->
    <q-img
      src="/img/autismo-ilustracion.jpg"
      alt="Autismo e Inclusión"
      style="max-width: 450px;"
      class="rounded-borders shadow-10 animate-float"
    />

    <!-- Texto principal -->
    <div class="text-center q-mt-lg">
      <h2 class="text-primary text-bold">
        💙 mami el Autismo es el primer paso hacia la Inclusión 💙
      </h2>
      <p class="text-grey-8 text-subtitle1 q-mt-sm">
        Cada persona dentro del espectro autista es única. 
        La empatía, el respeto y la educación son las claves para construir una sociedad más inclusiva y humana.
      </p>
    </div>

    <!-- Botones -->
    <div class="q-mt-lg flex flex-center">
      <q-btn
        color="primary"
        label="Aprender más"
        glossy
        push
        icon="school"
        @click="$router.push('/autismo')"
        class="q-mx-sm"
      />
      <q-btn
        color="secondary"
        label="Ver recursos"
        glossy
        push
        icon="folder_open"
        @click="$router.push('/recursos')"
        class="q-mx-sm"
      />
    </div>
  </q-page>
</template>

<style scoped>
/* Fondo con degradado sutil */
.q-page {
  background: linear-gradient(180deg, #e3f2fd, #ffffff);
}

/* Animación flotante */
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}
.animate-float {
  animation: float 4s ease-in-out infinite;
}
</style>
