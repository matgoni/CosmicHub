<template>
  <div>
    <header>
      <div class="container">
        <h1>Explora el Espacio</h1>
        <p>Descubre las maravillas del cosmos</p>
      </div>
    </header>

    <section id="estaciones">
      <div class="container">
        <h2>Estaciones Espaciales</h2>

        <div v-for="(estacion, index) in estaciones" :key="index" class="card">
          <div class="card-content">
            <div class="card-img">
              <img :src="estacion.imagen" :alt="estacion.nombre">
            </div>
            <div class="card-info">
              <h3>{{ estacion.nombre }}</h3>
              <p>{{ estacion.descripcion }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import EstacionesService from '../services/EstacionesService.js';

export default {
  data() {
    return {
      estaciones: [
        {
          nombre: "Estación Espacial Internacional",
          descripcion: "Explora la estación espacial con tecnología de vanguardia.",
          imagen: "https://images.unsplash.com/photo-1614314007212-0257d6e2f7d8?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          nombre: "TIANGONG",
          descripcion: "Sumérgete en la experiencia única de la estación espacial china.",
          imagen: "https://media.istockphoto.com/id/1164145930/es/foto/tiangong-3-estación-espacial-china-orbitando-el-planeta-tierra-en-el-espacio-negro-con.jpg?s=1024x1024&w=is&k=20&c=4OHPSL3qQ-s5rQ3WzTxqvvGNCegnBtXXIfOHzM3kSvM=",
        },
        // Puedes agregar más estaciones según sea necesario
      ],
    };
  },
};
</script>

<style>
/* Estilo para el componente Estaciones.vue */
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

header {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 40px 0;
}

header h1 {
  font-size: 2.5em;
  margin-bottom: 10px;
}

header p {
  font-size: 1.2em;
}

section {
  background-color: #f4f4f4;
  padding: 40px 0;
}

h2 {
  text-align: center;
  color: #333;
}

.card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 20px 0;
  transition: transform 0.3s;
  display: flex;
  flex-direction: column;
}

.card:hover {
  transform: scale(1.05);
}

.card-content {
  display: flex;
}

.card-img {
  width: 50%;
  height: auto;
  overflow: hidden;
}

.card-img img {
  width: 100%; /* Ajusta el tamaño de la imagen */
  height: auto;
}

.card-info {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card h3 {
  color: #333;
  margin-bottom: 10px;
}

.card p {
  color: #666;
}


