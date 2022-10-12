<template>
    <b-list-group >
        <b-list-group-item

        >
                 id: {{posts.name}};
                 name: {{posts.name}};
                 name: {{posts.name}};
                 name: {{posts.name}};
                 name: {{posts.name}};
                 name: {{posts.name}};



        </b-list-group-item>
    </b-list-group>
</template>

<script>
    export default {
        props: ['posts'],
        data() {
            return {
                fields: [],
                item: [],
                post: []
            }
        },

        // mounted() {
        //     fetch('https://jsonplaceholder.typicode.com/users')
        //         .then(response => response.json())
        //         .then(json => this.post = json)
        // },


    }
</script>
