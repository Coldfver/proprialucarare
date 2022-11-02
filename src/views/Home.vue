<template>
    <div id="content">
        <b-container>
            <h1  id="nav" class="bv-no-focus-ring">
                <span class="bd-content-title">Crate</span>
                <hr>

                <carousel :carousel="users"></carousel>
            </h1>
        </b-container>
    </div>
</template>

<script>
    import carousel from '@/views/Carusel'
    import axios from "axios";

    export default{
        data(){
            return{
                users:{},
                low:[]
            }
        },
        methods: {
            async getName(){
                this.users =  await axios.get('https://jsonplaceholder.typicode.com/photos?albumId=1')
                    .then(response => response.data)
            }
        },

        components: { carousel },
        beforeMount(){
            this.getName();
        },
    }

</script>

