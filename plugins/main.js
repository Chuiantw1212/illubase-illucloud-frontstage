import Vue from 'vue'
/**
 * 使用If 讓它可以在dev執行
 */
if (process.client) {
    require('bootstrap')
    require('popper.js')
}

import InputUpload from '@/components/input/InputUpload.vue'
Vue.component('InputUpload', InputUpload)
import InputTextField from '@/components/input/InputTextField.vue'
Vue.component('InputTextField', InputTextField)

// firebase
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyDjiWhVczvH_LtWHkd-eSVCLO6uJNbhQso",
    authDomain: "my-blog-287510.firebaseapp.com",
    databaseURL: "https://my-blog-287510.firebaseio.com",
    projectId: "my-blog-287510",
    storageBucket: "my-blog-287510.appspot.com",
    messagingSenderId: "32885456963",
    appId: "1:32885456963:web:7d9bab043ddd8a3e09d4f6",
    measurementId: "G-DY0VR8Q0RD"
});