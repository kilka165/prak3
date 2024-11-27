<script setup>
import { useProductStore } from '@/stores/product';
import { useCategoryStore } from '@/stores/catogory';
import {ref} from 'vue'
const productStore = useProductStore();
const categoryStore = useCategoryStore();
const category = ref(null);
const SearchText = ref('');
const products = ref([]);
products.value= productStore.product;

const filterCategory = () => {
  SearchText.value = '';
  products.value = productStore.filterProductCategoryName(category.value, null);
}
const SearchName = () => {
  category.value = null;
  products.value = productStore.filterProductCategoryName(null, SearchText.value);
}
</script>
<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col md-5">
        <select class="form-select" aria-label="Default select example" v-model="category" @change="filterCategory"> 
        <option selected>Select category</option>
    <option v-for="category in categoryStore.categories":value="category":key="category">{{ category }}</option>
  </select>
  </div>
        <div class="col md-5">
          <input type="text" class="form-control" value="Search by name" aria-label="readonly input example" v-model="SearchText" @input="SearchName">
        </div>
          <div class="col md-2">
            <button type="button" class="btn btn-outline-warning">warning</button>
      </div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col" v-for="product in products" :key="product.id">
      <div class="card">
        <img :src="product.img" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{ product.Name }}</h5>
          <p class="card-text">${{ product.prise }}</p>
          <p class="card-text">{{ product.category }}</p>
          <p class="card-text">{{ product.description }}</p>
          <p class="card-text">{{ product.publish_at }}</p>
          <div class="card-footer text-end">
          <button type="button" class="btn btn-outline-info">Detail</button>
          <button type="button" class="btn btn-outline-success">Cart</button>
          </div>
        </div>
      </div>
    </div>
    </div>
   </div>
  </div>
  </template>