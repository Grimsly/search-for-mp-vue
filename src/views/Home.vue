<template>
  <div class="home">
    <input
      v-model="number"
      v-on:keyup.enter="search"
      placeholder="Enter iterations"
      maxlength="6"
    />
    <!-- <div>{{ mpdata }}</div> -->
    <MPDisplay v-bind:mpdata="mpdata" />
  </div>
</template>

<script>
import MPDisplay from "../components/MPDisplay";
import axios from "axios";

export default {
  name: "home",
  components: {
    MPDisplay
  },
  data() {
    return {
      mpdata: undefined,
      number: 0
    };
  },
  methods: {
    search: function() {
      var num = this.number.toUpperCase();
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
