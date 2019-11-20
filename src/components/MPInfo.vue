<template>
  <div class="info">
    <p>{{ name }}</p>
    <div class="details">
      <div class="contact">
        <div class="email">{{ email }}</div>
        <div v-bind:key="office['type']" v-for="office in offices">
          <p>{{ office["postal"] }}</p>
          <p>Telephone: {{ office["tel"]}}</p>
          <p>Fax: {{ office["fax"]}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MPInfo",
    props: {
      info: Object
    },
    data() {
      return {
        name: this.info["name"],
        email: this.info["email"],
        party: this.info["party_name"],
        district: this.info["district_name"],
        offices: this.info["offices"]
      }
    }
  }
</script>