import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sampleBlogCards: [
      { blogTitle: "Lesseon #1", blogCoverPhoto: "stock-5", blogDate: "May 1, 2022" },
      { blogTitle: "Lesson #2", blogCoverPhoto: "stock-6", blogDate: "May 2, 2022" },
      { blogTitle: "Lesson #3", blogCoverPhoto: "stock-7", blogDate: "May 3, 2022" },
      { blogTitle: "Lesson #4", blogCoverPhoto: "stock-8", blogDate: "May 4, 2022" },
    ],
    editPost: null,
    user: null,
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileUsername: null,
    profileId: null,
    profileInitials: null,
  },
  mutations: {
    toggleEditPost(state, payload) {
      state.editPost = payload;
    },
    updateUser(state, payload) {
      state.user = payload;
    },
    setProfileInfo(state, doc) {
      state.profileId = doc.id;
      state.profileEmail = doc.data().email;
      state.profileFirstName = doc.data().firstName;
      state.profileLastName = doc.data().lastName;
      state.profileUsername = doc.data().username;
    },
    setProfileInitials(state) {
      state.profileInitials = 
        state.profileFirstName.match(/(\b\S)?/g).join("") +
        state.profileLastName.match(/(\b\S)?/g).join("");
    },
    changeFirstName(state, payload) {
      state.profileFirstName = payload;
    },
    changeLastName(state, payload) {
      state.profileLastName = payload;
    },
    changeUsername(state, payload) {
      state.profileUsername = payload;
    },
  },
  actions: {
   async getCurrentUser({commit}) {
     const dataBase = await db.collection('users').doc(firebase.auth().currentUser.uid);
     const dbResults = await dataBase.get();
     commit("setProfileInfo", dbResults);
     commit("setProfileInitials");
   },
   async updateUserSettings({commit, state}) {
     const dataBase = await db.collection('users').doc(state.profileId);
     await dataBase.update({
       firstName: state.profileFirstName,
       lastName: state.profileLastName,
       username: state.profileUsername,
     });
     commit("setProfileInitials");
   },
  },
  modules: {},
})
