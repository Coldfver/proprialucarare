<template>
    <b-list-group >
        <b-list-group-item>Name: {{posts.name}};</b-list-group-item>
        <b-list-group-item>Username: {{posts.username}};</b-list-group-item>
        <b-list-group-item>Email: {{posts.email}};</b-list-group-item>
        <b-list-group-item>Street: {{posts.address?.street}};</b-list-group-item>
        <b-list-group-item>Suite: {{posts.address?.suite}};</b-list-group-item>
        <b-list-group-item>City: {{posts.address?.city}};</b-list-group-item>
        <b-list-group-item>Zipcode: {{posts.address?.zipcode}};</b-list-group-item>
        <b-list-group-item>Lat: {{posts.address?.geo.lat}};</b-list-group-item>
        <b-list-group-item>Lng: {{posts.address?.geo.lng}};</b-list-group-item>
    </b-list-group>
</template>

<script>
    export default {
        name:"HistoryList",
        props: ['posts'],
    }
</script>
