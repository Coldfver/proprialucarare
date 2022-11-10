<template>
  <div>
    <b-container>
        <b-row>

            <HistoryFilter @trigerFilter="setFilter" />

            <HistorySelect :pageOptions="pageOptions" @trigerSelect="setSelect"/>

        </b-row>
    </b-container>

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
      <HistoryPagination :currentPage="currentPage" :perPage="perPage" :rows="rows" @trigerPagination="setPagination"/>
    <b-modal :id="infoModal.id"
             :title="infoModal.title"
    >
            <pre>
                <HistoryList  :posts="user"></HistoryList>
            </pre>
    </b-modal>
    <b-modal :id="infoModal2.id"
             :title="infoModal2.title"
    >
            <pre>
                <HistoryComments :comets="inf"></HistoryComments>
            </pre>
    </b-modal>
    <b-modal :id="infoModal3.id"
             :title="infoModal3.title"
    >
            <pre>
                <HistoryAdd @add-todo="addTodo"></HistoryAdd>
            </pre>
    </b-modal>
  </div>
</template>
<script>
    import HistoryFilter from "./HistoryFilter";
    import HistoryPagination from './Pagination';
    import HistorySelect from "./HistorySelect";
    import HistoryList from "./HistoryList";
    import HistoryComments from "./HistoryComments";
    import HistoryAdd from "./HistoryAddElement";

    export default {
        name: "HistoryMain",
        components: {
            HistoryComments, HistoryList, HistorySelect, HistoryPagination, HistoryFilter, HistoryAdd
        },
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
        computed:{
            rows(){
                /**
                 * Call getters method getPostsLength from store src\store\Modules\postsModule\getters.js
                 * */
                return this.$store.getters["postsModule/getPostsLength"];
            },
        },
        async mounted() {
            /**
             * Call action method FETCH_POSTS_DATA from store src\store\Modules\postsModule\actions.js
            * */
            this.$store.dispatch('postsModule/FETCH_POSTS_DATA')
                .then(response => this.posts = response);
            this.users = await this.$store.dispatch('postsModule/FETCH_USERS_DATA')
                .then(response => response)
        },
        methods: {
            setFilter(value) {
                this.filter = value;
            },
            setPagination(value) {
                this.currentPage = value;
            },
            setSelect(value) {
                this.perPage = value
            },

            info(item,index,button) {
                this.infoModal.title = `Row index: ${index+1}`
                this.$store.dispatch('postsModule/FETCH_USER_ID_DATA', {userId: item.userId})
                    .then(response => this.user = response)
                this.infoModal.content = JSON.stringify(this.user, null, 2)
                this.$root.$emit('bv::show::modal', this.infoModal.id, button)
            },
            comp(item,index,button) {
                this.infoModal2.title = `Show: ${index+1}`
                this.$store.dispatch('postsModule/FETCH_COMMENTS_DATA', {id: item.id})
                    .then(response => this.inf = response)
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
