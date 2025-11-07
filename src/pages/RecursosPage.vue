<template>
  <q-page class="q-pa-xl bg-grey-2">
    <div class="text-h4 text-center text-primary q-mb-xl">
      📚 Recursos Descargables
    </div>

    <div class="row q-col-gutter-xl justify-center">
      <div
        v-for="file in archivos"
        :key="file.nombre"
        class="col-xs-12 col-sm-6 col-md-4 col-lg-3"
      >
        <q-card class="card-3d q-pa-md">
          <q-card-section class="text-center q-py-lg">
            <div class="icon-container q-mb-md">
              <q-icon :name="file.icono" size="64px" :color="file.color" />
            </div>
            <div class="text-h6 text-bold text-primary">{{ file.nombre }}</div>
            <div class="text-caption text-grey-7 q-mt-xs">
              {{ file.descripcion }}
            </div>
          </q-card-section>

          <q-separator />

          <q-card-actions align="center" class="q-pt-sm">
            <q-btn
              v-if="file.previsualizable"
              flat
              color="primary"
              icon="visibility"
              label="Ver"
              @click="verArchivo(file)"
              class="btn-animated"
            />
            <q-btn
              flat
              color="secondary"
              icon="download"
              label="Descargar"
              :href="file.url"
              target="_blank"
              class="btn-animated"
            />
          </q-card-actions>
        </q-card>
      </div>
    </div>

    <!-- Dialog de previsualización PDF -->
    <q-dialog v-model="dialogVisible" maximized>
      <q-card class="bg-white">
        <q-bar class="bg-primary text-white">
          <div class="text-h6">{{ archivoSeleccionado?.nombre }}</div>
          <q-space />
          <q-btn dense flat icon="close" v-close-popup />
        </q-bar>
        <q-card-section class="q-pa-none">
          <iframe
            v-if="archivoSeleccionado"
            :src="archivoSeleccionado.url"
            width="100%"
            height="600px"
            style="border: none"
          ></iframe>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const dialogVisible = ref(false)
const archivoSeleccionado = ref(null)

const verArchivo = (file) => {
  archivoSeleccionado.value = file
  dialogVisible.value = true
}

const archivos = [
  {
    nombre: 'Presentación Caja de Herramienta (PowerPoint)',
    descripcion: 'Presentación informativa',
    url: '/recursos/Presentacion Caja de Herramienta.pptx',
    icono: 'slideshow',
    previsualizable: false,
    color: 'deep-orange',
  },
  {
    nombre: 'CAJA DE HERRAMIENTAS TEA (Word)',
    descripcion: 'Documento Word',
    url: '/recursos/CAJA DE HERRAMIENTAS TEA.docx',
    icono: 'description',
    previsualizable: false,
    color: 'blue',
  },
  {
    nombre: 'Conclusiones basadas en el video (PDF)',
    descripcion: 'Documento en PDF',
    url: '/recursos/Conclusiones basadas en el video los niños merecen y necesitan (1) (1).pdf',
    icono: 'picture_as_pdf',
    previsualizable: true,
    color: 'red',
  },
  {
    nombre: 'Línea de tiempo (PDF)',
    descripcion: 'Documento en PDF',
    url: '/recursos/LINEA DE TIEMPO.pdf',
    icono: 'picture_as_pdf',
    previsualizable: true,
    color: 'red',
  },
  {
    nombre: 'Caracterización TEA (Word)',
    descripcion: 'Archivo Word',
    url: '/recursos/T3 CARACTERIZACION TRASTORNÓ DEL ESPECTRO AUTISTA (TEA) (1).docx',
    icono: 'description',
    previsualizable: false,
    color: 'blue',
  },
  {
    nombre: 'Texto Argumentativo (PDF)',
    descripcion: 'Tarea 1 en formato PDF',
    url: '/recursos/TAREA 1 TEXTO ARGUMENTATIVO  (3).pdf',
    icono: 'picture_as_pdf',
    previsualizable: true,
    color: 'red',
  },
]
</script>

<style scoped>
.card-3d {
  background: linear-gradient(145deg, #ffffff, #f3f3f3);
  border-radius: 20px;
  box-shadow: 10px 10px 20px #cfcfcf, -10px -10px 20px #ffffff;
  transition: all 0.3s ease;
  cursor: pointer;
}

.card-3d:hover {
  transform: translateY(-10px) scale(1.03);
  box-shadow: 15px 15px 30px #c7c7c7, -15px -15px 30px #ffffff;
}

.icon-container {
  background: linear-gradient(135deg, #e3f2fd, #ffffff);
  width: 100px;
  height: 100px;
  border-radius: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.05),
    inset -5px -5px 10px rgba(255, 255, 255, 0.6);
}

.btn-animated {
  transition: all 0.2s ease-in-out;
}
.btn-animated:hover {
  transform: scale(1.1);
}
</style>
