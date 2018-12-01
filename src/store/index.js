import Vue from "vue";
import Vuex from "vuex";
import Firebase from "../firebase.js";

Vue.use(Vuex);
Vue.use(Firebase);

export default new Vuex.Store({
    state: {
        declaration: null,
        loggedIn: false
    },
    getters: {
        GetDeclarations(state, callback) {
            return Firebase.database.ref("Declarations");
        },
        GetUsers(context, user) {
            return Firebase.database.ref("Users");
        },
    },
    actions: {
        SendDeclaration(context, declaration) {
            Firebase.database.ref("Declarations").push(declaration);
        },
        LoginUser(context, userParams) {
            Firebase.database.ref("Users").once('value', snap => {
                let bool = false;
                try {
                    if(snap.val() == null) {
                        alert("No hay usuarios registrados");
                    }
                    else {
                        let array = Object.values(snap.val());
                        for(let i = 0; i <= array.length; i++) {
                            if(array[i].user == userParams.user && array[i].password == userParams.password) {
                                localStorage.setItem("user-login", true);
                                localStorage.setItem("info-login", array[i].name);
                                window.location.href = "/";
                                bool = true;
                                break;
                            }
                        }
                        if(!bool) {
                            alert("Esa combinacion de usuario y clave no se encuentra.");
                        }
                    }
                }
                catch (error) {
                    if(!bool) {
                        alert("Esa combinacion de usuario y clave no se encuentra.");
                    }
                }
            });
        },
        RegisterUser(context, userParams) {
            Firebase.database.ref("Users").once('value', snap => {
                try {
                    if(snap.val() == null) {
                        Firebase.database.ref("Users").push(userParams);
                        window.location.href = "/IniciarSesion";
                    }
                    else {
                        let bool = true;
                        let array = Object.values(snap.val());
                        for(let i = 0; i <= array.length; i++) {
                            if(array[i].user == userParams.user) {
                                bool = false;
                                break;
                            }
                        }
                        if(!bool) {
                            alert("Ya existe un usuario con esa cuenta.");
                        }
                        else {
                            Firebase.database.ref("Users").push(userParams);
                            console.log("Entro");
                            window.location.href = "/IniciarSesion";
                        }
                    }
                }
                catch (error) {
                    Firebase.database.ref("Users").push(userParams);
                    console.log("Entro");
                    window.location.href = "/IniciarSesion";
                }
            });
        },
        LogoutUser(context) {
            this.state.loggedIn = false;
            localStorage.clear();
            alert("Sesion Cerrada");
            window.location.reload();
        },
    },
    mutations: {
        SetDeclaration(state, declaration) {
            state.declaration = declaration;
        }
    }
});