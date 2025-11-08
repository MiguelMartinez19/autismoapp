<template>
  <q-layout view="hHh lpR fFf">
    <!-- Header -->
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          🌈 AutismoApp
        </q-toolbar-title>
        <q-btn flat label="Inicio" @click="goTo('/')" />
        <q-btn flat label="Qué es el Autismo" @click="goTo('/autismo')" />
        <q-btn flat label="Síntomas" @click="goTo('/sintomas')" />
        <q-btn flat label="Recursos" @click="goTo('/recursos')" />
        <q-btn flat label="planeaciones" @click="goTo('/planeaciones')" />
        <q-btn flat label="Juego" @click="goTo('/Juego')" />
      </q-toolbar>
    </q-header>

    <!-- Página principal -->
    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Footer -->
    <q-footer class="bg-grey-9 text-white q-pa-sm flex flex-center">
      © {{ new Date().getFullYear() }} AutismoApp - Aprendiendo juntos 💙
    </q-footer>
  </q-layout>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const goTo = (path) => router.push(path)
</script>
