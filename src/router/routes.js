import MainLayout from 'layouts/MainLayout.vue'
import IndexPage from 'pages/IndexPage.vue'
import AutismoPage from 'pages/AutismoPage.vue'
import SintomasPage from 'pages/SintomasPage.vue'
import RecursosPage from 'pages/RecursosPage.vue'
import ContactoPage from 'pages/ContactoPage.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', component: IndexPage },
      { path: 'autismo', component: AutismoPage },
      { path: 'sintomas', component: SintomasPage },
      { path: 'recursos', component: RecursosPage },
      { path: 'contacto', component: ContactoPage },
    ],
  },
]

export default routes
