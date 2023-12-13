<template>
    <div>
      <div class="alert alert-primary">
        <div class="card-body text-center">
          <h2>Lanzamientos Espaciales Recientes</h2>
          <p>Explora los emocionantes próximos lanzamientos espaciales programados para llevar a cabo misiones innovadoras.</p>
        </div>
      </div>
  
      <div class="card as">
        <div class="container">
          <div class="row">
            <div v-for="lanzamiento in lanzamientos" :key="lanzamiento._id" class="col-md-4 mb-4">
              <!-- Contenido del lanzamiento -->
              <div class="card">
                <div class="card-header text-center">
                  {{ lanzamiento.agencia }}
                </div>
                <div class="card-body">
                  <h5 class="card-title text-center">{{ lanzamiento.fecha }}</h5>
                  <br>
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
.card{
    background-color: #F3F8FF;
    color: #164863
}
.as{
    background-color: #222831;
}

.card-header{
    color: #427D9D;
    font-size: 170%;
    font-weight: bolder;
}
.card-footer{
    color: #77d0ff;
}
</style>
  