<template>
<div class="wrapper">
  <div class="products">
    <div class="product" v-for="product in products" :key="product.id">
      <div class="info">
        <h1>{{product.name}}</h1>
        <p>{{product.genre}}</p>
      </div>
      <div class="image">
        <img :src="product.image">
      </div>
      <div class="price">
        <button class="auto" v-on:click="goToUser(product.id,product.name,product.countryOfOrigin, product.yearCreated, product.genre, product.grade, product.image, product.subCount, product.bio)">About</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    products: Array
  },
  methods: {
    goToUser(id, name, country, year,genre,grade, image, numSubs, bio) {
        this.$root.$data.selectedYoutuber = {id:id,name:name,countryOfOrigin:country,yearCreated:year,genre:genre,grade:grade,image:image, subCount:numSubs, bio:bio};
        this.$router.push('/user');
    },
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.product img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: orange;
  color: #000;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.price {
  display: flex;
}

button {
  height: 50px;
  background: grey;
  color: white;
  border: none;
}

.auto {
  display: block;
  width: 100%;
}
</style>