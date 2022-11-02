<template>
  <b-input-group size="sm">
    <b-form-input
        id="filter-input"
        v-model="filter"
        type="search"
        placeholder="Type to Search"
    ></b-form-input>

    <b-input-group-append>
      <b-button :disabled="!filter" @click="filter = ''">
        Clear
      </b-button>
    </b-input-group-append>
  </b-input-group>
</template>

<script>
  export default {
      name: "HistoryFilter",
      data() {
          return {
              filter: "",
          }
      },
      watch: {
          filter(value) {
              this.$emit("trigerFilter", value);
          }
      }
  }
</script>

<style scoped>

</style>
