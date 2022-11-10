<template>
    <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="my-table"
            align="fill"
    ></b-pagination>
</template>

<script>
    export default {
        name:"TablePagination",
        data() {
          return {
              currentPage: 1
          }
        },
        props:{
            rows:{
                type:Number,
            },
            perPage:{
                type:Number,
            },
        },
        watch: {
            currentPage(value) {
                this.$emit("trigerPagination", value);
            }
        }

    }
</script>
