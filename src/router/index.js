import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue"
import Lesson from "../views/Lesson.vue"
import Login from "../views/Login.vue"
import Register from "../views/Register.vue"
import ForgotPassword from "../views/ForgotPassword.vue"
import Profile from "../views/Profile.vue"
import Admin from "../views/Admin.vue"
import CreatePost from "../views/CreatePost.vue"
import BlogPreview from "../views/BlogPreview.vue"
import ViewBlog from "../views/ViewBlog.vue"
import EditBlog from "../views/EditBlog.vue"
import Quiz from "../views/Quiz.vue"
import Quiz1 from "../views/Quiz1.vue"
import Quiz2 from "../views/Quiz2.vue"
import Quiz3 from "../views/Quiz3.vue"
import firebase from "firebase/app"
import "firebase/auth"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: 'Home',
    }
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      title: 'About',
    }
  },
  {
    path: "/lesson",
    name: "Lesson",
    component: Lesson,
    meta: {
      title: 'Lesson',
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: 'Login',
    }
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      title: 'Register',
    }
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPassword,
    meta: {
      title: 'Forgot Password',
    }
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: {
      title: 'Profile',
    }
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    meta: {
      title: 'Admin',
    }
  },
  {
    path: "/quiz",
    name: "Quiz",
    component: Quiz,
    meta: {
      title: 'Quiz',
    }
  },
  {
    path: "/quiz1",
    name: "Quiz1",
    component: Quiz1,
    meta: {
      title: 'แบบทดสอบที่ 1',
    }
  },
  {
    path: "/quiz2",
    name: "Quiz2",
    component: Quiz2,
    meta: {
      title: 'แบบทดสอบที่ 2',
    }
  },
  {
    path: "/quiz3",
    name: "Quiz3",
    component: Quiz3,
    meta: {
      title: 'แบบทดสอบที่ 3',
    }
  },
  {
    path: "/create-lesson",
    name: "CreatePost",
    component: CreatePost,
    meta: {
      title: 'Create Lesson',
    }
  },
  {
    path: "/lesson-preview",
    name: "BlogPreview",
    component: BlogPreview,
    meta: {
      title: 'Preview Lesson',
    }
  },
  {
    path: "/view-lesson/:blogid",
    name: "ViewBlog",
    component: ViewBlog,
    meta: {
      title: 'View Lesson',
    }
  },
  {
    path: "/edit-lesson/:blogid",
    name: "EditBlog",
    component: EditBlog,
    meta: {
      title: 'Edit Lesson',
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Biology`;
  next();
});

router.beforeEach(async (to, from, next) => {
  let user = firebase.auth().currentUser;
  let admin = null;
  if (user) {
    let token = await user.getIdTokenResult();
    admin = token.claims.admin;
  }
  if (to.matched.some((res) => res.meta.requiresAuth)) {
    if (user) {
      if (to.matched.some((res) => res.meta.requiresAdmin)) {
        if (admin) {
          return next();
        }
        return next({ name: "Home" });
      }
      return next();
    }
    return next({ name: "Home" });
  }
  return next();
})

export default router;
