<template>
<div>
  <div class="pure-menu pure-menu-horizontal">
    <p>Choose an option below</p>
    <ul class="pure-menu-list">
      <li class="pure-menu-item"><a @click="select('country','US')" href="#" class="pure-menu-link">From the US</a></li>
      <li class="pure-menu-item"><a @click="select('genre','Comedy')" href="#" class="pure-menu-link">Comedy</a></li>
      <li class="pure-menu-item"><a @click="select('genre','People')" href="#" class="pure-menu-link">People</a></li>
      <li class="pure-menu-item"><a @click="select('genre','Entertainment')" href="#" class="pure-menu-link">Entertainment</a></li>
      <li class="pure-menu-item"><a @click="select('genre','Music')" href="#" class="pure-menu-link">Music</a></li>
      <li class="pure-menu-item"><a @click="select('grade','A')" href="#" class="pure-menu-link">Grade A</a></li>
      <li class="pure-menu-item"><a @click="select('grade','B')" href="#" class="pure-menu-link">Grade B</a></li>

    </ul>
  </div>
  <ProductList :products="products" />
</div>
</template>

<script>
import ProductList from "../components/ProductList.vue"
export default {
  name: 'BrowseView',
  components: {
    ProductList
  },
  data() {
    return {
      thingToFilter: '',
      filter: '',
    }
  },
  computed: {
    products() {
      if(this.filter == "country")
          return this.$root.$data.products.filter(product => product.countryOfOrigin === this.thingToFilter);
      else if(this.filter=="genre")
          return this.$root.$data.products.filter(product => product.genre === this.thingToFilter);
      else if(this.filter=="grade" && this.thingToFilter == "A")
          return this.$root.$data.products.filter(product => product.grade === "A" || product.grade === "A+" || product.grade === "A++" || product.grade === "A-");
      else if(this.filter=="grade" && this.thingToFilter == "B")
          return this.$root.$data.products.filter(product => product.grade === "B" || product.grade === "B+" || product.grade === "B-");
      else
          return this.$root.$data.products.filter(product => product.name === this.thingToFilter);
    
    }
  },
  methods: {
    select(filter, filterItem) {
      this.filter = filter;
      this.thingToFilter = filterItem;
    }
  }
}
</script>
<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}