import { createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../views/home.vue"),
  },
  {
    path: "/about",
    component: () => import("../views/about.vue"),
  },
];

// 返回一个函数，是为了每个请求都创建一个新的路由。
export default function (history) {
  return createRouter({
    history,
    routes,
  });
}

// SPA: 创建一个路由: 映射关系
// const router = createRouter({
// 指定采用的模式: hash
// history: createWebHashHistory(),
// history: createWebHistory(),
// routes,
// });
