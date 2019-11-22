<template>
  <div v-if="checkEmpty()">
    <div class="mp-image" :style="{ backgroundImage: 'url(' + mp[0]['photo_url'] + ')' }" />
    <MPInfo :info="mp[0]"/>
  </div>
  <div v-else>
    <span>Sorry, there are no results for the entry given</span>
  </div>
</template>

<script>
import MPInfo from "../components/MPInfo";

export default {
  name: "MPDisplay",
  components: {
    MPInfo
  },
  props: {
    mpdata: Object
  },
  methods: {
    getMP: function() {
      var mpdata = this.mpdata;
      return mpdata.representatives_centroid.filter(
        rep => rep.elected_office === "MP"
      );
    },
    checkEmpty: function() {
      if (this.mpdata === undefined) {
        return false;
      } else {
        this.mp = this.mpdata.representatives_centroid.filter(
          rep => rep.elected_office === "MP"
        );
        return true;
      }
    }
  },
  data() {
    return {
      mp: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.mp-image {
  margin: 3rem auto 0 auto;
  height: 200px;
  width: 200px;
  background-size: 200px;
  background-position-y: -10px;
  border-radius: 100px;
}
.iteration {
  border-bottom: 1px solid black;
}

span {
  font-size: 20px;
  font-style: italic;
}
</style>
