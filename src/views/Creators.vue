<template>
    <div id="Creators">
        <main class="d-flex align-items-center"><br />
            <div class="control text-center">
                <div class="d-flex justify-content-around row">
                    <Participan
                        v-for="participan in participans"
                        :key="participan.enrollment"
                        :src="participan.src"
                        :name="participan.name"
                        :enrollment="participan.enrollment"
                        class="col-12 col-sm-4 col-md-3"
                    />
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    import Participan from "../components/Participan.vue"

    export default {
        name: 'Creators',
        data: function() {
            return {
                participans: [
                    {
                        src: "../../public/img/Jossy.jpg",
                        name: "Jossy Emil Devers Sanchez",
                        enrollment: "2016-3501"
                    },
                    {
                        src: "../../public/img/abdiel.jpg",
                        name: "Abdiel Modesto Bou Ramirez",
                        enrollment: "2016-3601"
                    },
                    {
                        src: "../../public/img/edy.jpg",
                        name: "Edy Jose Garcia",
                        enrollment: "2016-3586"
                    },
                    {
                        src: "../../public/img/jessica.jpg",
                        name: "Jessica Gomez Jimenez",
                        enrollment: "2016-3476"
                    }
                ]
            }
        },
        components: {
            Participan
        }
    }
</script>