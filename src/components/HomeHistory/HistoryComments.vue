<template>
    <b-list-group >
        <b-list-group-item>Name:{{comets.name}};</b-list-group-item>
        <b-list-group-item>Email:{{comets.email}};</b-list-group-item>
        <b-list-group-item>PostId:{{comets.postId}};</b-list-group-item>
        <b-list-group-item>Body:{{comets.body}};</b-list-group-item>
    </b-list-group>
</template>

<script>
    export default {
        props: ['comets'],
    }
</script>
