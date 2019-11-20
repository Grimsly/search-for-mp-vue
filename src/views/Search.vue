<template>
  <div class="search">
    <input
      v-model="number"
      v-on:keyup.enter="search"
      placeholder="Postal Code"
      maxlength="6"
    />
    <!-- <div>{{ mpdata }}</div> -->
    <MPDisplay class="profile" v-bind:mpdata="mpdata" />
  </div>
</template>

<script>
import MPDisplay from "../components/MPDisplay";
import axios from "axios";

export default {
  name: "search",
  components: {
    MPDisplay
  },
  data() {
    return {
      mpdata: undefined,
      number: ""
    };
  },
  methods: {
    search: function() {
      var num = this.number.toUpperCase();
      const url = "http://localhost:8080/postcodes/" + num;
      axios
        .get(url)
        .then(res => (this.mpdata = res.data))
        .catch(err => console.log(err));
    }
  }
}
</script>

<style lang="scss" scoped>
.search{
  background-color: rgb(32, 161, 221);
}
.profile{
  height: 100%;
  padding-bottom: 2rem;
}
input{
  margin-top: 2rem;
  padding: 0 2rem 10px 6px;
  border: none;
  border-bottom: 2px solid white;
  background-color:rgb(32, 161, 221);
  color: white;
  outline: none;
  height: 30px;
  max-width: 200px;
  font-size: 30px;
  box-sizing: border-box;
  background-image: url("~@/images/white-search.svg");
  background-repeat: no-repeat;
  background-position: right 5px center;
  background-size: 25px;
  &::-webkit-input-placeholder { /* Edge */
    color: rgba(white, 0.4);
    font-size: 25px;
    font-style: italic;
  }

  &::-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: rgba(white, 0.4);
    font-size: 25px;
    font-style: italic;
  }

  &::placeholder {
    color: rgba(white, 0.4);
    font-size: 25px;
    font-style: italic;
  }
}
</style>
