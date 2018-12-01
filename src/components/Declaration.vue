<template>
    <div id="Declaration">
        <section class="border box col-2 boxDeclaration container p-4 mb-4 d-flex flex-column">
            <h3 class="text-center">
                {{declaration.currentUser}}
                <small v-if="declaration.public == true" class="text-light">(Publica)</small>
                <small v-else class="text-light">(Privada)</small>
            </h3>
            <h3 class="text-center">
                <strong class="text-light">LOVE</strong>
                <i class="fas fa-heart smallHeart"></i>
                {{declaration.destinatary}}
                <i class="fas fa-heart smallHeart"></i>
            </h3>
            <button
                @click="setDeclaration" class="btn btn-purple"
                data-toggle="modal" :data-target="getId"
            >
            Mostrar
            </button>
            <DeclarationDetails :code="id" :declaration="declaration" />
        </section>
    </div>
</template>

<script>
    import DeclarationDetails from "./DeclarationDetails";
    
    export default {
        name: 'Declaration',
        props: ["id", "declaration"],
        data() {
            return {
                bool: false
            }
        },
        computed: {
            getId() {
                return `#${this.id}`;
            }
        },
        methods: {
            setDeclaration() {
                //this.$store.commit("SetDeclaration", this.declaration);
                this.bool = true;
            }
        },
        components: {
            DeclarationDetails
        }
    }
</script>
