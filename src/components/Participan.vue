<template>
    <figure id="Participan" class="border participan p-5">
        <img
            :src="src"
            :alt="member"
        />
        <figcaption class="my-2">{{member}}</figcaption>
    </figure>
</template>

<script>
    export default {
        name: 'Participan',
        props: {
            name: {
                type: String,
                required: true
            },
            enrollment: {
                type: String,
                required: true
            },
            src: {
                type: String,
                required: true
            }
        },
        computed: {
            member: function() {
                return `${this.name} (${this.enrollment})`;
            }
        }
    }
</script>
