<template>
<div class="store">
    <h2 class="store-title">Tienda de CosmicHub</h2>
    <div class="products">
      <div v-for="producto in productos" :key="producto._id" class="product">
        <img :src="producto.img-src" class="product-image">
        <div class="product-details">
          <h3 class="product-name">{{ producto.producto }}</h3>
          <p class="product-description">{{ producto.descripcion }}</p>
          <p class="product-price">$ {{ producto.precio }}</p>
          <button @click="addToCart(producto)" class="add-to-cart-button">Agregar al carrito</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TiendaService from '../services/TiendaService.js';

export default {
  name: 'Producto',
  data() {
    return {
      productos: [],
    };
  },
  created() {
    this.getProductos();
  },
  methods: {
    async getProductos() {
      try {
        const productosData = await TiendaService.getProductos();
        this.productos = productosData.productos;
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    },
  },
};
</script>

<style scoped>
.store {
  text-align: center;
  padding: 20px;
}

.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.product {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  max-width: 300px;
  text-align: center;
}

.product-image {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
}

.product-name {
  font-size: 1.2rem;
  margin: 10px 0;
}

.product-description {
  margin: 10px 0;
}

.product-price {
  font-weight: bold;
  margin: 10px 0;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
