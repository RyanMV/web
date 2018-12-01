<template>
    <div id="Login">
        <main class="py-5 d-flex justify-content-center row"><br />
            <div class="col-md-5">
                <div class="formulario border rounded text-center p-md-4 p-3">
                    <div class="d-flex justify-content-center">
                        <img src="../../public/img/CRUSH.png" class="logo img-fluid m-2 mt-4" >
                    </div>
                    <div>
                        <fieldset>
                            <legend>
                                <h3>Iniciar Sesion</h3>
                            </legend>
                            <form class="form-Center" @submit.prevent="isUser()">
                                <div class="form-group">
                                    <label for="inputEmail" class="sr-only col-xs-12">Usuario</label>
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text text-purple">
                                                <i class="fas fa-user"></i>
                                            </span>
                                        </div>
                                        <input
                                            v-model="user"
                                            type="text"
                                            id="inputEmail"
                                            class="form-control input input-color"
                                            placeholder="Usuario"
                                            required
                                        >
                                    </div>
                                    <label for="inputPassword" class="sr-only col-xs-12">Contraseña</label>
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text text-purple">
                                                <i class="fas fa-key"></i>
                                            </span>
                                        </div>
                                        <input
                                            v-model="password"
                                            type="password"
                                            class="form-control input input-color"
                                            placeholder="Contraseña"
                                            required>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-lg btn-purple btn-block">Iniciar</button>
                            </form>  
                        </fieldset>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                user: "",
                password: ""
            }
        },
        methods: {
            isUser() {
                let user = {
                    user: this.user,
                    password: this.password
                }
                this.$store.dispatch("LoginUser", user);
            }
        }
    };
</script>
