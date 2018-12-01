<template>
    <main id="Register" class="py-5 d-flex justify-content-center row"><br />
        <div class="col-md-5">
            <div class="formulario border rounded text-center p-md-4 p-3">
                <div class="d-flex justify-content-center">
                    <img src="../../public/img/CRUSH.png" class="logo img-fluid m-2 mt-4" >
                </div>
                <div>
                    <div>
                        <legend>
                            <h3>Registro</h3>
                        </legend>
                        <form class="form-Center" @submit.prevent="Register()">
                            <div class="form-group">
                                <div>
                                    <label for="inputEmail" class="sr-only">Usuario</label>
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text text-purple">
                                                <i class="fas fa-user"></i>
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            id="inputEmail"
                                            placeholder="Usuario"
                                            class="form-control input input-color"
                                            v-model="info.user"
                                            required
                                        >
                                    </div>
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text text-purple">
                                                <i class="fas fa-user"></i>
                                            </span>
                                        </div>
                                        <input
                                            required
                                            type="text"
                                            v-model="info.name"
                                            placeholder="Nombre"
                                            class="form-control input input-color"
                                        >
                                    </div>
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text text-purple">
                                                <i class="fas fa-key"></i>
                                            </span>
                                        </div>
                                        <input
                                            v-model="info.lastName"
                                            required
                                            type="text"
                                            placeholder="Apellido"
                                            class="form-control input input-color"
                                        >
                                    </div>
                                    <label for="inputPassword" class="sr-only">Contraseña</label>
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text text-purple">
                                                <i class="fas fa-key"></i>
                                            </span>
                                        </div>
                                        <input
                                            v-model="info.password"
                                            required
                                            type="password"
                                            class="form-control input input-color"
                                            placeholder="Contraseña"
                                        >
                                    </div>
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text text-purple">
                                                <i class="fas fa-key"></i>
                                            </span>
                                        </div>
                                        <input
                                            type="password"
                                            class="form-control input input-color"
                                            placeholder="Contraseña"
                                            required>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-lg btn-purple btn-block">Registrarse</button>
                        </form>
                    </div> 
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    export default {
        name: 'Register',
        data() {
            return {
                info: {
                    user:  "",
                    name: "",
                    lastName: "",
                    password: ""
                }
            }
        },
        methods: {
            Register() {
                this.$store.dispatch("RegisterUser", this.info);
                this.info = {
                    user: "",
                    name: "",
                    lastName: "",
                    password: ""
                }
            }
        }
    }
</script>