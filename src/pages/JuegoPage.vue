<template>
  <q-page class="q-pa-xl bg-blue-1">
    <div class="text-h4 text-center text-primary q-mb-lg">
      🧠 Actividad Interactiva: Empareja y Aprende
    </div>

    <div class="text-subtitle1 text-center q-mb-xl text-grey-8">
      Arrastra cada imagen hacia su descripción correcta para aprender más sobre el autismo 💙
    </div>

    <div class="row justify-center q-gutter-lg">
      <!-- Imágenes -->
      <div class="col-12 col-md-5">
        <div class="column items-center q-gutter-md">
          <div
            v-for="item in imagenes"
            :key="item.id"
            draggable="true"
            @dragstart="onDragStart(item)"
            class="draggable-card"
          >
            <img :src="item.src" :alt="item.texto" class="rounded-borders" />
          </div>
        </div>
      </div>

      <!-- Descripciones -->
      <div class="col-12 col-md-5">
        <div class="column q-gutter-md">
          <q-card
            v-for="zona in zonas"
            :key="zona.id"
            class="drop-zone"
            @dragover.prevent
            @drop="onDrop(zona)"
          >
            <q-card-section class="text-center">
              <div class="text-h6">{{ zona.texto }}</div>
              <div v-if="zona.completado" class="q-mt-sm text-positive text-bold">
                ✅ ¡Correcto!
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <div class="text-center q-mt-xl">
      <q-btn
        color="primary"
        label="Reiniciar"
        icon="refresh"
        @click="reiniciar"
        class="q-px-xl q-py-sm"
      />
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const imagenes = ref([
  { id: 1, src: '/recursos/juego1.png', texto: 'Reconocer emociones' },
  { id: 2, src: '/recursos/juego2.png', texto: 'Seguir rutinas' },
  { id: 3, src: '/recursos/juego3.png', texto: 'Interactuar socialmente' }
])

const zonas = ref([
  { id: 1, texto: 'Dificultad para identificar emociones', correcto: 1, completado: false },
  { id: 2, texto: 'Necesidad de mantener rutinas', correcto: 2, completado: false },
  { id: 3, texto: 'Desafíos en la interacción social', correcto: 3, completado: false }
])

const elementoArrastrado = ref(null)

function onDragStart(item) {
  elementoArrastrado.value = item
}

function onDrop(zona) {
  if (elementoArrastrado.value && elementoArrastrado.value.id === zona.correcto) {
    zona.completado = true
  }
}

function reiniciar() {
  zonas.value.forEach(z => (z.completado = false))
}
</script>

<style scoped>
.draggable-card {
  background: white;
  border-radius: 16px;
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.15);
  padding: 10px;
  cursor: grab;
  transition: transform 0.2s ease;
  width: 180px;
  text-align: center;
}
.draggable-card:hover {
  transform: scale(1.05);
}

.draggable-card img {
  width: 100%;
  height: auto;
}

.drop-zone {
  background: #fdfdfd;
  border: 2px dashed #90caf9;
  border-radius: 16px;
  min-height: 100px;
  transition: all 0.3s;
}
.drop-zone:hover {
  background: #e3f2fd;
  border-color: #42a5f5;
}
</style>
