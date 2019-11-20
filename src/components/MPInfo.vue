<template>
  <div class="info">
    <h2 class="name">{{ name }}</h2>
    <div class="details">
      <div class="contact">
        <h1>Contact</h1>
        <a class="email" :href="email">{{ email }}</a>
        <h2>Offices</h2>
        <div class="offices">
          <div class="office" v-bind:key="office['type']" v-for="office in offices">
            <p>{{ office["postal"] }}</p>
            <p>Telephone: <a :href="'tel:' + office['tel']">{{ office["tel"]}}</a></p>
            <p>Fax: {{ office["fax"]}}</p>
          </div>
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

<style lang="scss" scoped>
h1{
  border-bottom: 2px solid white;
}
a{
  color: white;
}
.info{
  color: white;
}

.name{
  font-weight: bold;
}

.contact {
  margin: 1rem auto 0 auto;
  max-width: 500px;
  text-align: left;

  .offices{
    @include flexbox();
    @include flex-wrap(wrap);
    .office{
      width: 50%;
    }
  }
}
</style>