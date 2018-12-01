<template>
    <section id="DeclarationDetails">
        <div class="modal fade" :id="code" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <section class="border box boxDeclaration boxDeclarationDetails container p-4 d-flex flex-column">
                    <h3 class="text-center">
                        {{declaration.currentUser}}
                        <small v-if="declaration.public == true" class="text-light">(Publica)</small>
                        <small v-else class="text-light">(Privada)</small>
                    </h3>
                    <h3 class="text-center">
                        
                        <i class="fas fa-heart smallHeart"></i>
                        {{declaration.destinatary}}
                        <i class="fas fa-heart smallHeart"></i>
                    </h3>
                    <div class="border border-dark rounded p-5">
                        <h3 class="text-center">
                            <strong class="text-light">DECLARACION</strong>
                        </h3>
                        <p class="DeclarationMessage">
                            {{declaration.message}}
                        </p>
                    </div>
                    <button type="button" class="btn btn-purple text-white mt-2" data-dismiss="modal" aria-label="Close">Cerrar</button>
                </section>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'DeclarationDetails',
        props: ["code", "declaration"]
    }
</script>