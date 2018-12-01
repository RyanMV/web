<template>
    <section id="AddDeclaration">
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title text-center w-100 h1" id="exampleModalLabel">
                        Confiesa tu amor
                    </h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form class="form-Center" @submit.prevent="add()">
                        <div class="form-group">
                            <div>
                                <label for="inputEmail" class="sr-only">Destinatario</label>
                                <div
                                    v-if="otherInput === false"
                                    class="input-group mb-3"
                                >
                                    <div class="input-group-prepend">
                                        <span class="input-group-text text-purple">
                                            <i class="fas fa-user"></i>
                                        </span>
                                    </div>
                                    <select
                                        v-model="declaration.destinatary"
                                        @click="otherInputTrue()"
                                        class="form-control input input-color"
                                        placeholder="Destinatario" required
                                    >
                                        <option v-for="(user, index) in users" :key="index" :value="user.name">
                                            {{user.name}}
                                        </option>
                                        <option value="Otros">Otros</option>
                                    </select>
                                </div>
                                <div
                                v-if="otherInput === true"
                                    class="input-group mb-3"
                                >
                                    <div class="input-group-prepend">
                                        <span class="input-group-text text-purple">
                                            <i class="fas fa-key"></i>
                                        </span>
                                    </div>
                                    <input
                                        v-model="declaration.destinatary"
                                        type="text"
                                        class="form-control input input-color"
                                        placeholder="Destinatario"
                                        required
                                    >
                                    <div class="input-group-append">
                                        <span class="input-group-text text-purple">
                                            <button
                                                @click="otherInputFalse()"
                                                class="btn btn-outline-secondary" type="button"
                                            >
                                                <i class="fas fa-times"></i>
                                            </button>
                                        </span>
                                    </div>
                                </div>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text text-purple">
                                            <i class="fas fa-key"></i>
                                        </span>
                                    </div>
                                    <textarea
                                        v-model="declaration.message"
                                        class="form-control input input-color"
                                        style="min-height: 150px;" rows="1"
                                        placeholder="Muestra tu amor a esa persona que quieres tanto"
                                        required
                                        cols="50"    
                                    >
                                    </textarea>
                                </div>
                                <div class="checkbox pl-2 text-left">
                                    <label>
                                        <input
                                            v-model="declaration.public"
                                            type="checkbox"
                                            value="true"
                                        >
                                        Publica
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">
                                Cerrar
                            </button>
                            <button type="reset" class="btn btn-danger">Restaurar</button>
                            <button
                                type="submit"
                                class="btn btn-primary"
                            >
                            Confesar
                            </button>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'AddDeclaration',
        data() {
            return {
                otherInput: false,
                declaration: {
                    currentUser: localStorage.getItem("info-login"),
                    destinatary: "",
                    message: "",
                    public: false
                },
                users: []
            }
        },
        created() {
            this.$store.getters.GetUsers.on('value', snap => {
                snap.forEach(user => {
                    this.users.push(user.val());
                });
                this.declaration.destinatary = this.users[0].name;
            });
        },
        methods: {
            add() {
                $("#exampleModal").modal('hide');
                console.log("Updating");
                this.$store.dispatch("SendDeclaration", this.declaration);

                // Restauring the fields.
                this.declaration.destinatary = this.users[0].name;
                this.declaration.message = "";
                this.declaration.public = false;
            },
            otherInputTrue() {
                if(this.declaration.destinatary === "Otros") {
                    this.otherInput = true;
                }
            },
            otherInputFalse() {
                this.declaration.destinatary = this.users[0].name;
                this.otherInput = false;
            }          
        }
    }
</script>
