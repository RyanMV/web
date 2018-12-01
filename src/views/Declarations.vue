<template>
    <main id="Declarations" class="p-4"><br />
        <div class="row d-flex justify-content-around mb-5 pb-4">
            <Declaration
                v-for="(declaration, index) in declarations"
                v-if="isPublic(declaration)"
                :declaration="declaration.val()"
                :id="declaration.key"
                :key="index"
            />
            <h1
                v-if="declarations.length == 0"
                class="display-1 text-purple text-center"
            >
            No hay ninguna confesion hasta el momento.
            </h1>
        </div>
        <a
            v-if="isAuth"
            class="add btn d-flex justify-content-center align-items-center"
            data-toggle="modal" data-target="#exampleModal"
        >
            <i class="fa fa-plus text-white"></i>
        </a>
        <AddDeclaration />
    </main>
</template>

<script>
    import Declaration from "../components/Declaration.vue"
    import AddDeclaration from "../components/AddDeclaration.vue"

    export default {
        name: 'Declarations',
        data() {
            return {
                declarations: []
            }
        },
        created() {
            this.$store.getters.GetDeclarations.on('value', snap => {
                this.declarations = [];
                snap.forEach((declaration) => {
                    let search = this.$route.params.search;
                    if(this.$route.params.search == undefined || declaration.val().message.includes(search)) {
                        this.declarations.push(declaration);
                    }
                });
            });
        },
        methods: {
            isPublic(bool) {
                if(localStorage.getItem("user-login")) {
                    return true;
                }
                else {
                    if(bool.val().public) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            }
        },
        computed: {
            isAuth() {
                return localStorage.getItem("user-login");
            }
        },
        components: {
            Declaration,
            AddDeclaration
        }
    }
</script>