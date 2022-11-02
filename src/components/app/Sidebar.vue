<template>
    <b-list-group id="sidebar">
        <router-link :exact="link.exact" :to="link.url" v-for="link in links" :key="link.url"><b-list-group-item href=" ">{{link.title}}</b-list-group-item></router-link>
    </b-list-group>
</template>

<script>
    export default {
        data: () => ({
            links:[
                {title: 'Check', url:'/', exact:true},
                {title: 'Story', url:'/history'},
                {title: 'Planning', url:'/planning'},
                {title: 'New entry', url:'/record'},
                {title: 'Categories', url:'/categories'},
            ]
        })
    }
</script>
