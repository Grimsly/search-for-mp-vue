<template>
  <div class="home">
    <input
      v-model="number"
      v-on:keyup.enter="search"
      placeholder="Enter iterations"
    />
    <div>{{ mpdata }}</div>
    <For v-bind:todos="todos" v-bind:number="num" />]
  </div>
</template>

<script>
import For from "../components/For";
import axios from "axios";

export default {
  name: "home",
  components: {
    For
  },
  data() {
    return {
      todos: [
        {
          hey: 1
        },
        {
          hey: 2
        },
        {
          hey: 3
        }
      ],
      mpdata: [],
      num: 1
    };
  },
  methods: {
    search: function() {
      var num = this.number;
      const url = "http://localhost:8080/postcodes/" + num;
      console.log(num);
      axios
        .get(url)
        .then(res => (this.mpdata = res.data))
        .catch(err => console.log(err));
    }
  }
}
</script>

<style lang="scss" scoped>
input{
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  height: 20px;
  font-size: 20px;
}
</style>
