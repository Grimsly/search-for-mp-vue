<template>
  <div>
    <div v-bind:key="n" v-for="n in number" class="iteration">
      <div v-bind:key="todo.hey" v-for="todo in todos">
        <h3>{{todo.hey}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "For",
    props: ["todos", "number"]
}
</script>

<style lang="scss" scoped>
.iteration{
  border-bottom: 1px solid black;
}
</style>