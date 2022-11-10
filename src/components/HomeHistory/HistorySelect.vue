<template>
    <b-col lg="6" class="my-1">
        <b-form-group
                label="Selection mode:"
                label-for="table-select-mode-select"
                label-cols-sm="3"
                label-align-sm="right"
                label-size="sm"
                class="mb-0"
        >
            <b-form-select
                    id="per-page-select"
                    v-model="perPage"
                    :options="pageOptions"
                    size="sm"
            ></b-form-select>
        </b-form-group>
    </b-col>
</template>

<script>
    export default {
        name:"HistoySelect",
        data(){
            return {
                perPage: 10
            }
        },
        props:{
            pageOptions:{
                type:Array,
            }
        },
        watch:{
            perPage(value) {
                this.$emit("trigerSelect", value)
            }
        }
    }
</script>
