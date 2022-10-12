<template>
    <div>
        <div>
            <Navbar @click="show = !show"/>
        </div>
        <div class="wrapper">
            <!-- Sidebar  -->
            <Sidebar v-show="show"/>
            <router-view />
        </div>
    </div>
</template>

<script>
    import Navbar from '@/components/app/Navbar'
    import Sidebar from '@/components/app/Sidebar'

    export default {
        name: 'main-layout',
        data() {
            return {
                show: true,
            }
        },
        methods: {
        },
        components: {
            Navbar,Sidebar
        }
    }
</script>