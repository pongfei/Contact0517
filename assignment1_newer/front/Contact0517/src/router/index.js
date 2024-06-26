import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
//import Navbar from '../components/Navbar.vue'
import Login from '../components/Login.vue'
import AddContact from '../components/AddContact.vue'
import ContactList from '../components/ContactList.vue'
import EditContact from '../components/EditContact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      redirect:'/login'
    },
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/AddContact',
      name: 'addcontact',
      component: AddContact
    },
    {
      path:'/ContactList',
      name:'contactlist',
      component:ContactList
    },
    {    
      path:'/Login',
      name:'login',
      component:Login
    },
    {
    path:'/EditContact/:contactId',
    name:'editcontact',
    component:EditContact
    },
   
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path === '/' && !localStorage.getItem('token')) {
    next('/login')
  } else {
    next()
  }
})

export default router
