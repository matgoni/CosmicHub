<template>
  <section class="store">
    <header>
      <h2 class="store-title">Tienda de CosmicHub</h2>
    </header>

    <div class="main-content">
      <section class="products">
        <article v-for="producto in productosPaginados" :key="producto._id" class="product">
          <img :src="producto['img-src']" :alt="'Imagen de ' + producto.producto" class="product-image">
          <div class="product-details">
            <h3 class="product-name">{{ producto.producto }}</h3>
            <p class="product-description">{{ producto.descripcion }}</p>
            <p class="product-price">${{ producto.precio }} USD</p>
            <button @click="addToCart(producto)" class="add-to-cart-button">Agregar al carrito</button>
          </div>
        </article>
        <nav class="pagination-controls">
          <button v-for="pagina in numeroTotalDePaginas" :key="pagina" @click="cambiarPagina(pagina)">
            {{ pagina }}
          </button>
        </nav>
      </section>
      

      <aside class="cart">
        <h3>Lista de compras</h3>
        <div v-for="item in carrito" :key="item._id" class="cart-item">
          <span>{{ item.producto }} ({{ item.cantidad }})</span>
          <span>{{ item.precio }}</span>
          <button @click="removeFromCart(item._id)" class="remove-from-cart-button">Eliminar</button>
        </div>
        <div class="total-carrito">
          Total: ${{ totalCarrito }} USD
        </div>
        <button @click="checkout" class="checkout-button">Checkout</button>
      </aside>
    </div>
  </section>
</template>


<script>
import TiendaService from '../services/TiendaService.js';

export default {
  name: 'Producto',
  data() {
    return {
      productos: [],
      carrito: [],
      paginaActual: 1,
      productosPorPagina: 3,
    };
  },
  created() {
    this.getProductos();
  },
  computed: {
    totalCarrito() {
      return this.carrito.reduce((total, item) => {
        return total + (item.precio * item.cantidad);
      }, 0);
    },
    productosPaginados() {
    const inicio = (this.paginaActual - 1) * this.productosPorPagina;
    const fin = inicio + this.productosPorPagina;
    return this.productos.slice(inicio, fin);
    },
    numeroTotalDePaginas() {
      return Math.ceil(this.productos.length / this.productosPorPagina);
    },
    paginasVisibles() {
      let paginas = [];
      let start = Math.max(this.paginaActual - 2, 1);
      let end = Math.min(start + 4, this.numeroTotalDePaginas);

      if (end === this.numeroTotalDePaginas) {
        start = Math.max(end - 4, 1);
      }

      for (let i = start; i <= end; i++) {
        paginas.push(i);
      }

      return paginas;
    }
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
    addToCart(producto) {
      let productInCart = this.carrito.find(item => item._id === producto._id);
      if (productInCart) {
        productInCart.cantidad++;
      } else {
        this.carrito.push({...producto, cantidad: 1});
      }
    },
    removeFromCart(productoId) {
      const index = this.carrito.findIndex(item => item._id === productoId);
      if (index !== -1) {
        if (this.carrito[index].cantidad > 1) {
          this.carrito[index].cantidad--;
        } else {
          this.carrito.splice(index, 1);
        }
      }
    },
    checkout() {
      if (this.carrito.length > 0) {
        // Vacía el carrito
        this.carrito = [];
        alert("Compra exitosa");

      } else {
        alert("Tu carrito está vacío");
      }
    },
    cambiarPagina(pagina) {
      this.paginaActual = pagina;
    }
  },
};
</script>
<style scoped>
.store {
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.store-title {
  text-align: center;
  margin-bottom: 20px;
}

.main-content {
  display: flex;
  flex-wrap: wrap;
}

.products {
  flex: 1;
  min-width: 0; /* importante para el ajuste de tamaño */
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
  margin: auto; /* Centrar la imagen */
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
.cart {
  flex-basis: 300px; /* Ancho del carrito */
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-left: 20px;
}
.checkout-button {
  background-color: #28a745; /* Color verde */
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px; /* Espacio sobre el botón */
}
.checkout-button:hover {
  background-color: #218838; /* Color verde oscuro */
}
.pagination-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.pagination-controls button {
  padding: 8px 12px;
  margin: 0 5px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.pagination-controls button:hover {
  background-color: #0056b3;
}

.pagination-controls button.active {
  background-color: #0056b3;
}


/* Estilos para dispositivos más pequeños */
@media (max-width: 800px) {
  .main-content {
    flex-direction: column;
  }
  .products, .cart {
    width: 100%;
    margin-left: 0;
    margin-bottom: 20px;
  }
  .cart {
    order: -1; /* Muestra el carrito arriba en dispositivos pequeños */
  }
}
.remove-from-cart-button {
  background-color: #ff6347; /* Color rojo-tomate */
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  margin-left: 10px; /* Espacio a la izquierda del botón */
}
.remove-from-cart-button:hover {
  background-color: #e55347; /* Color rojo más oscuro para el hover */
}
</style>
