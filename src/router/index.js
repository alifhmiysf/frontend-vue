// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import MainIndex from '@/views/MainIndex.vue';
import HomeIndex from '@/views/posts/HomeIndex.vue';
import PostCreate from '@/views/posts/PostCreate.vue';
import PostEdit from '@/views/posts/PostEdit.vue';
import NewView from '@/views/NewView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainIndex
  },
  {
    path: '/posts',
    name: 'posts.index',
    component: HomeIndex
  },
  {
    path: '/posts/create',
    name: 'posts.create',
    component: PostCreate
  },
  {
    path: '/posts/edit/:id',
    name: 'posts.edit',
    component: PostEdit
  },
  {
    path: '/new',
    name: 'new.view',
    component: NewView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
