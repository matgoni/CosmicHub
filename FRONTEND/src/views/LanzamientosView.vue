<template>
  <div class="launch-container">
    <div class="alert alert-primary">
      <div class="card-body text-center">
        <h2 class="title">Lanzamientos Espaciales Recientes</h2>
        <p>Explora los emocionantes próximos lanzamientos espaciales programados para llevar a cabo misiones innovadoras.</p>
      </div>
    </div>

    <div class="launch-card-container">
      <div v-for="lanzamiento in lanzamientos" :key="lanzamiento._id" class="launch-card">
        <div class="card">
          <div class="card-header text-center">{{ lanzamiento.agencia }}</div>
          <div class="card-body">
            <h5 class="card-title text-center">{{ lanzamiento.fecha }}</h5>
            <br />
            <p class="card-text"><b>Hora:</b> {{ lanzamiento.hora }}</p>
            <p class="card-text"><b>Nación:</b> {{ lanzamiento.nacion }}</p>
            <p class="card-text"><b>Descripción:</b>{{ lanzamiento.descripcion }}</p>
          </div>
          <div class="card-footer">
            <p class="card-text"><b>{{ lanzamiento.cohete }}</b></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LanzamientosService from '../services/LanzamientosService.js';

export default {
  name: 'Lanzamiento',
  data() {
    return {
      lanzamientos: [],
    };
  },
  created() {
    this.getLanzamientos();
  },
  methods: {
    async getLanzamientos() {
      try {
        const lanzamientosData = await LanzamientosService.getLanzamientos();
        this.lanzamientos = lanzamientosData.lanzamientos;
      } catch (error) {
        console.error('Error al obtener lanzamientos:', error);
      }
    },
  },
};
</script>

<style scoped>
.launch-container {
  background-color: #0E101C;
  color: #FFF;
  font-family: 'Roboto', sans-serif;
}

.alert {
  background-color: #3498db;
  border: none;
  border-radius: 0;
}

.title {
  color: #FFF;
}

.card-body {
  color: #FFF;
}

.launch-card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.launch-card {
  margin: 15px;
  flex: 0 0 30%;
}

.card {
  background-color: #1E212E;
  color: #FFF;
  border: 1px solid #2C303D;
  border-radius: 8px;
}

.card-header {
  background-color: #3498db;
  color: #FFF;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 10px;
  border-bottom: 1px solid #2C303D;
}

.card-footer {
  background-color: #2C303D;
  color: #77d0ff;
  padding: 10px;
}
</style>
