<template>
<div class="store">
    <h2 class="store-title">Tienda de CosmicHub</h2>
    <div class="products">
      <div v-for="producto in productos" :key="producto._id" class="product">
        <img :src="producto['img-src']" class="product-image">
        <div class="product-details">
          <h3 class="product-name">{{ producto.producto }}</h3>
          <p class="product-description">{{ producto.descripcion }}</p>
          <p class="product-price"> {{ producto.precio }}</p>
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
        this.productos = productosData.items;
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
  font-family: 'Arial', sans-serif;
}

.products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 10px;
}

.product {
  background: linear-gradient(to right, #ffffff, #f7f7f7);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.2);
}

.product-image {
  width: 90%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.product-image:hover {
  transform: scale(1.05);
}

.product-details {
  padding: 15px;
}

.product-name {
  font-size: 1.4rem;
  color: #333;
  margin: 10px 0;
  text-shadow: 1px 1px 2px #ccc;
}

.product-description {
  color: #666;
  font-size: 0.9rem;
  margin: 5px 0;
}

.product-price {
  font-weight: bold;
  font-size: 1.2rem;
  color: #007bff;
  margin: 10px 0;
}

.add-to-cart-button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 12px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.add-to-cart-button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}
</style>

