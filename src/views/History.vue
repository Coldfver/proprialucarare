<template>
    <div>
        <b-input-group size="sm">
            <b-form-input
                    id="filter-input"
                    v-model="filter"
                    type="search"
                    placeholder="Type to Search"
            ></b-form-input>

            <b-input-group-append>
                <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
            </b-input-group-append>
        </b-input-group>
        <b-pagination
                v-model="currentPage"
                :total-rows="rows"
                :per-page="perPage"
                aria-controls="my-table"
        ></b-pagination>
        <b-form-select
                id="per-page-select"
                v-model="perPage"
                :options="pageOptions"
                size="sm"
        ></b-form-select>
        <b-table id="my-table"
                 :filter-included-fields="filterOn"
                 :filter="filter"
                 :per-page="perPage"
                 :current-page="currentPage"
                 small bordered dark striped hover
                 :items="posts"
                 :fields="fields"
                 show-empty
        >
            <template #cell(USERNAME)="row">
                <span>
                    {{ getUser(row.item.userId) }}
                </span>
            </template>
            <template #cell(DETAILS)="row">
                <b-button  size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
                    <b-icon icon="journal-arrow-up" aria-label="Help"></b-icon>
                </b-button>
            </template>
            <template #cell(COMMENTS)="row">
                <b-button  class="mr-1">
                    <b-icon icon="share" aria-label="Help"></b-icon>
                </b-button>
            </template>
            <template #cell(NEW_POST)="row">
                <b-button  class="mr-1">
                    <b-icon icon="plus-circle" aria-label="Help"></b-icon>
                </b-button>
            </template>
            <template #cell(DELETE_POST)="row">
                <b-button class="mr-1">
                    <b-icon icon="trash" aria-label="Help"></b-icon>
                </b-button>
            </template>
        </b-table>
        <b-modal :id="infoModal.id"
                 :title="infoModal.title"
        >
            <pre>
                <records :posts="user"></records>
            </pre>
        </b-modal>
    </div>
</template>
<script>
    import records from '@/views/Record'
    export default {
        data() {
            return {
                fields:[ 'id', 'title','body','USERNAME','DETAILS','COMMENTS','NEW_POST','DELETE_POST'],
                item:[],
                posts:[],
                user:[],
                users:{},
                pageOptions: [10, 50, { value: 100, text: "Show a lot" }],
                perPage: 10,
                currentPage: 1,
                filter: null,
                filterOn: ['id','title','body'],
                infoModal: {
                    id: 'info-modal',
                    title: '',
                    content: ''
                }
            }
        },
        components:{
            records
        },
        computed:{
            rows(){
                return this.posts.length
            },
        },
        async mounted() {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(json => this.posts = json)
            this.users =  await fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                /*
                .then(function (data) {
                    let temp_users = {}
                    data.forEach(function (value) {
                        temp_users[value.id] = value
                        console.log('value', value)
                    })
                    // this.user = temp_users
                    return temp_users
                }
                */
                .then((data) => data)
        },
        methods: {
             info(item,index,button) {
                this.infoModal.title = `Row index: ${index}`
                fetch(`https://jsonplaceholder.typicode.com/users/${item.userId}`)
                    .then(response => response.json())
                    .then(json => this.user = json)
                this.infoModal.content = JSON.stringify(this.user, null, 2)
                this.$root.$emit('bv::show::modal', this.infoModal.id, button)
            },
            getUser(id) {
                 if(!this.users.length) return null;
                 const user = this.users.filter(userItem => userItem.id === id);
                 return user[0] ? user[0]?.name : null;
            }
        },



    }

</script>
