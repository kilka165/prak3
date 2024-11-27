<script setup>
import { RouterLink, RouterView } from 'vue-router'
import router from './router';
import { useProductStore } from './stores/product';
import { useCategoryStore } from './stores/catogory';

const productStore = useProductStore();
const categoryStore = useCategoryStore();
</script>

<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <router-link to="/" class="navbar-brand">Shopfruit</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon">Home</span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Shop</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">cart </a>
        </li>
        <li class="nav-item">
           
           <RouterLink to="/about" class="nav-link">about</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
<RouterView></RouterView>
</template>

<style scoped>

</style>
