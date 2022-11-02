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
                <b-button  @click="info(row.item, row.index, $event.target)" class="mr-1">
                    <b-icon icon="journal-arrow-up" aria-label="Help"></b-icon>
                </b-button>
            </template>
            <template #cell(COMMENTS)="row">
                <b-button  @click="comp(row.item, row.index, $event.target)" class="mr-1">
                    <b-icon icon="share" aria-label="Help"></b-icon>
                </b-button>
            </template>
            <template  #cell(NEW_POST)="row">
                <b-button  @click="addNew(row.item, row.index, $event.target)" class="mr-1">
                    <b-icon icon="plus-circle" aria-label="Help"></b-icon>
                </b-button>
            </template>
            <template  #cell(DELETE_POST)="row">
                <b-button type="submit"  @click="removeElemet(row.item.id)" class="mr-1">
                    <b-icon icon="trash" aria-label="Help"></b-icon>
                </b-button>
            </template>
        </b-table>
        <b-modal :id="infoModal.id"
                 :title="infoModal.title"
        >
            <pre>
                <records  :posts="user"></records>
            </pre>
        </b-modal>
        <b-modal :id="infoModal2.id"
                 :title="infoModal2.title"
        >
            <pre>
                <comments :comets="inf"></comments>
            </pre>
        </b-modal>
        <b-modal :id="infoModal3.id"
                 :title="infoModal3.title"
                 @ok="addTodo({id:'1'})"
        >
            <pre>
                <edition @add-todo="addTodo"></edition>
            </pre>
        </b-modal>
    </div>
</template>
<script>
    import records from '@/views/Record'
    import comments from '@/views/Planning'
    import edition from '@/views/Detail'
    import axios from "axios";

    export default {
        data() {
            return {
                fields:[ 'id', 'title','body','USERNAME','DETAILS','COMMENTS','NEW_POST','DELETE_POST'],
                item:[],
                posts:[],
                post:[],
                user:[],
                inf:[],
                redact:[],
                users:{},
                pageOptions: [10, 50, { value: 100, text: "Show a lot" }],
                perPage: 10,
                currentPage: 1,
                filter: '',
                filterOn: [],
                infoModal: {
                    id: 'info-modal',
                    title: '',
                    content: '',
                },
                infoModal2: {
                    id: 'show-modal',
                    title: '',
                    content: '',
                },
                infoModal3: {
                    id: 'edit-modal',
                    title: '',
                    content: '',
                },
            }
        },
        components:{
            records,comments,edition
        },
        computed:{
            rows(){
                return this.posts.length
            },
        },
        async mounted() {
            axios.get('https://jsonplaceholder.typicode.com/posts')
                    .then(response => this.posts = response.data)
            this.users = await axios.get('https://jsonplaceholder.typicode.com/users')
                .then(response => response.data)
        },
        methods: {
             info(item,index,button) {
                this.infoModal.title = `Row index: ${index+1}`
                 axios.get(`https://jsonplaceholder.typicode.com/users/${item.userId}`)
                     .then(response => this.user = response.data)
                this.infoModal.content = JSON.stringify(this.user, null, 2)
                this.$root.$emit('bv::show::modal', this.infoModal.id, button)
            },
            comp(item,index,button) {
                this.infoModal2.title = `Show: ${index+1}`
                axios.get(`https://jsonplaceholder.typicode.com/comments/${item.id}`)
                    .then(response => this.inf = response.data)
                this.infoModal2.content = JSON.stringify(this.inf, null, 2)
                this.$root.$emit('bv::show::modal', this.infoModal2.id, button)
            },
            addNew(item,index,button) {
                this.infoModal3.title = `Add element: ${index+1}`
                this.$root.$emit('bv::show::modal', this.infoModal3.id, button)
            },
            getUser(id) {
                 if(!this.users.length) return null;
                 const user = this.users.filter(userItem => userItem.id === id);
                 return user[0] ? user[0]?.name : null;
            },
            removeElemet(id){
                if(confirm("Are you sure you want to delete") == true){
                    this.posts = this.posts.filter(x =>x.id !== id)
                    return true
                }else{
                    return false
                }
            },
            addTodo (todo){
                this.posts.push(todo)
            },
        },
    }

</script>
