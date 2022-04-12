<template>
<div id="app">
  <div id="menu">
    <div id="brand">
      <router-link to="/">
        <img src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg">
      </router-link>
    </div>
    <div id="side">
      <router-link to="/browse">
        <div class="menu-item browse">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/1200px-Magnifying_glass_icon.svg.png">
          <p>Filter</p>
        </div>
      </router-link>
      <router-link to="/">
        <div class="menu-item">
          <img src="https://cdn-icons-png.flaticon.com/512/25/25694.png">
          <p>Home</p>
        </div>
      </router-link>
    </div>
  </div>
  <router-view />
  <div class="footer">
    <a href='https://github.com/ALarsonPi/creativeProject3.git'>Git hub Repo</a>
  </div>
</div>
</template>
  
<script>

export default {
  data() {
    return {
      numItems: 0,
    }
  },
  computed: {
    // a computed getter
    getNumItems() {
      return this.$root.$data.cart.length;
    }
  }
}

</script>


<style>
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;

}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}

#menu a {
  color: #B84901;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 200px;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
}

#side img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;
}
</style>

