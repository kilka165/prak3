<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
</script>
<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col md-5">
        <select class="form-select" aria-label="Default select example">
    <option selected>Select category</option>
    <option value="1">Vegetables</option>
    <option value="2">Fruits</option>
    <option value="3">Berries</option>
  </select>
  </div>
        <div class="col md-5">
          <input type="text" class="form-control" value="Search by name" aria-label="readonly input example">
        </div>
          <div class="col md-2">
            <button type="button" class="btn btn-outline-warning">warning</button>
      </div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col">
      <div class="card">
        <img src="https://avatars.mds.yandex.net/i?id=48d963be940d8043a6019e2e256a02b0_l-9657256-images-thumbs&n=13" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Banana</h5>
          <p class="card-text">15$</p>
          <p class="card-text">Fruit</p>
          <div class="card-footer text-end">
          <button type="button" class="btn btn-outline-info">Detail</button>
          <button type="button" class="btn btn-outline-success">Cart</button>
          </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <img src="https://avatars.mds.yandex.net/i?id=cd4f131d0f7e64b65f5b9b3b19f929d6_l-4613903-images-thumbs&n=13" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Apple</h5>
          <p class="card-text">10$</p>
          <p class="card-text">Fruit</p>
          <div class="card-footer text-end">
          <button type="button" class="btn btn-outline-info">Detail</button>
          <button type="button" class="btn btn-outline-success">Cart</button>
          </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <img src="https://avatars.mds.yandex.net/i?id=3ca8b9b796dcd3417635516c3ad05f44_l-11869273-images-thumbs&n=13" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Kiwi</h5>
          <p class="card-text">25$</p>
          <p class="card-text">Fruit</p>
          <div class="card-footer text-end">
          <button type="button" class="btn btn-outline-info">Detail</button>
          <button type="button" class="btn btn-outline-success">Cart</button>
          </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <img src="https://img.championat.com/i/j/d/1718636898578720187.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Water Melon</h5>
          <p class="card-text">7$</p>
          <p class="card-text">Berry</p>
          <div class="card-footer text-end">
          <button type="button" class="btn btn-outline-info">Detail</button>
          <button type="button" class="btn btn-outline-success">Cart</button>
          </div>
        </div>
      </div>
    </div>
  <div class="col">
      <div class="card">
        <img src="https://avatars.mds.yandex.net/i?id=19afe26d43934673ec344c107da87815_l-8497407-images-thumbs&n=13" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">strawberry</h5>
          <p class="card-text">50$</p>
          <p class="card-text">Berry</p>
          <div class="card-footer text-end">
          <button type="button" class="btn btn-outline-info">Detail</button>
          <button type="button" class="btn btn-outline-success">Cart</button>
          </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <img src="https://img.razrisyika.ru/kart/144/573273-yagoda-malina-9.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">raspberry</h5>
          <p class="card-text">45$</p>
          <p class="card-text">berry</p>
          <div class="card-footer text-end">
          <button type="button" class="btn btn-outline-info">Detail</button>
          <button type="button" class="btn btn-outline-success">Cart</button>
          </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <img src="https://images.herzindagi.info/image/2024/Jul/beetroot-for-bp.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">beet</h5>
          <p class="card-text">5$</p>
          <p class="card-text">Vegetable</p>
          <div class="card-footer text-end">
          <button type="button" class="btn btn-outline-info">Detail</button>
          <button type="button" class="btn btn-outline-success">Cart</button>
          </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <img src="" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title"></h5>
          <p class="card-text">25$</p>
          <p class="card-text">Vegetable</p>
          <div class="card-footer text-end">
          <button type="button" class="btn btn-outline-info">Detail</button>
          <button type="button" class="btn btn-outline-success">Cart</button>
          </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <img src="" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title"></h5>
          <p class="card-text">25$</p>
          <p class="card-text">Vegetable</p>
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