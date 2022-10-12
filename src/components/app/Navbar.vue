<template>
    <b-navbar type="dark" variant="dark" >
        <button @click.prevent="$emit('click')" v-b-toggle.sidebar-1 type="button" id="sidebarCollapse" class="btn btn-secondary">
            <i class="fas fa-align-left"></i>
            <span class="navbar-toggler-icon"></span>
        </button>
        <b-collapse id="nav-collaps" is-nav>
            <b-navbar-nav>
                <b-container><div class="text-light">{{date | date('datetime')}}</div></b-container>
            </b-navbar-nav>
        </b-collapse>
        <b-navbar-nav class="ml-auto">
            <b-dropdown id="dropdown" offset="25" text="Name" class="m-2" right no-caret>
                <b-dropdown-item href="/profile">Profile</b-dropdown-item>
                <b-dropdown-item @click.prevent="logout">Logout</b-dropdown-item>
            </b-dropdown>
        </b-navbar-nav>
    </b-navbar>
</template>

<script>
    export default {
        data: () => ({
            date: new Date(),
            interval: null,
        }),
        methods: {
            logout(){
                console.log('Logout')
                this.$router.push('./login?message=logout')
            }
        },
        mounted() {
        this.interval = setInterval(() => {
            this.date = new Date()
        },1000)
        },
        beforeDestroy() {
            clearInterval(this.interval)
        }
    }
</script>