import { ROUTES } from '@/constants/routes.constants'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/note-list",
      name: ROUTES.NOTE_LIST,
      component: () => import("@/views/NoteListView.vue"),
    },
    {
      path: "/note/:uuid",
      name: ROUTES.NOTE,
      component: () => import("@/views/NoteView.vue"),
    },
    {
      path: "/create-note",
      name: ROUTES.CREATE_NOTE,
      component: () => import("@/views/CreateNoteView.vue"),
    },
    {
      path: "/:pathMatch(.*)",
      name: ROUTES.NOT_FOUND,
      component: () => import("@/views/404.vue"),
    }
  ],
})

export default router
