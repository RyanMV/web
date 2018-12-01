<template>
<nav class="navbar navbar-light navbar-expand-lg bg-purple text-white">
  <a class="navbar-brand d-flex align-items-center" href="/">

        <span class="logoText"><p> Itla Crush </p></span>
 
    </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse"
            data-target="#navbarsExample09" aria-controls="navbarsExample09"
            aria-expanded="false" aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExample09">
            <div class="right row">
          <ul class="navbar-nav mr-auto col-12">
                <li class="search nav-item">
            <input
                v-model="input"
                class="form-control"
                type="text"
                placeholder="Search"
                aria-label="Search">
            <button class="btn btn-purple btn-large" @click="goSearch()">Buscar</button>
            <li>
            <li class="nav-item active mr-4">
                <a class="nav-link nav-item-size nav-item-color" href="/confesiones">
                    Confesiones
                </a>
            </li>

            <li class="nav-item dropdown">
                <a class="nav-link nav-item-size nav-item-color" href="#"
                    id="navbarDropdown" role="button" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false"
                >
                Usuario
                    <i class="fas fa-users-cog"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-center bg-purple" aria-labelledby="navbarDropdown">
                    <a
                        v-if="!loggedIn"
                        class="dropdown-item text-white"
                        href="/IniciarSesion">Iniciar Sesion
                    </a>
                    <a
                        v-if="!loggedIn"
                        class="dropdown-item text-white"
                        href="/Registrarse">Registrarse
                    </a>
                    <a
                        @click="logout()"
                        v-if="loggedIn"
                        class="dropdown-item
                        text-white">Cerrar Sesion
                    </a>
                </div>
            </li>
          </ul>
        </div>
        </div>
</nav>
</template>

<script>
    export default {
        name: 'Nav',
        data() {
            return {
                input: ""
            }
        },
        computed: {
            loggedIn() {
                return localStorage.getItem("user-login");
            }
        },
        methods: {
            goSearch() {
                if(this.input.length === 0) {
                    location.href = `/Confesiones/`;
                }
                else {
                    let search = this.input;
                    location.href = `/Confesiones/${search}`;
                }
            },
            logout() {
                this.$store.dispatch("LogoutUser");
            }
        }
    }
</script>
