<template>
  <q-page class="q-pa-xl">
    <div class="text-h4 text-primary text-center q-mb-xl">
      📚 Recursos Descargables
    </div>

    <q-card flat bordered class="q-pa-md">
      <q-card-section>
        <q-list bordered separator>
          <q-item v-for="file in archivos" :key="file.nombre">
            <q-item-section>
              <q-item-label>{{ file.nombre }}</q-item-label>
              <q-item-label caption>{{ file.descripcion }}</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-btn
                color="primary"
                label="Descargar"
                :href="file.url"
                target="_blank"
                flat
                icon="download"
              />
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
const archivos = [
  {
    nombre: 'Guía sobre Autismo (PDF)',
    descripcion: 'Documento informativo general',
    url: '/recursos/guia-autismo.pdf'
  },
  {
    nombre: 'Presentación en PowerPoint',
    descripcion: 'Material para charlas y talleres',
    url: '/recursos/presentacion.pptx'
  },
  {
    nombre: 'Informe de investigación (Excel)',
    descripcion: 'Datos y estadísticas relevantes',
    url: '/recursos/informe.xlsx'
  },
  {
    nombre: 'Plantilla de documento (Word)',
    descripcion: 'Formato para reportes o actividades',
    url: '/recursos/documento.docx'
  }
]
</script>
