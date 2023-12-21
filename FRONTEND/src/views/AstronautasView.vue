<template>
<div class="card">
    <div class="card-body">
    <!-- Formulario de búsqueda y filtrado -->
    <div class="row mb-3">
        <div class="col">
        <div class="input-group">
            <input v-model="NombreToSearch" class="form-control"  placeholder="Buscar por Nombre" />
            <button @click="filterAstronautas('nombre')" class="btn btn-primary ms-2">
            Buscar
            </button>
        </div>
        </div>
        <div class="col">
        <div class="input-group">
            <select v-model="NacionalidadToSearch" class="form-select">
            <option disabled selected value="">Seleccionar por Nacionalidad</option>
            <option v-for="nacionalidad in nacionalidades" :key="nacionalidad" :value="nacionalidad">
                {{ nacionalidad }}
            </option>
            </select>
            <button @click="filterAstronautas('nacionalidad')" class="btn btn-primary ms-2">
            Filtrar
            </button>
        </div>
        </div>
    </div>

    <!-- Tarjetas de astronautas -->
    <div class="row row-cols-1 row-cols-md-3 g-4">
        <div v-for="astronauta in astronautas" :key="astronauta._id" class="col">
        <div class="card a-card">
            <div class="card-body">
            <h4 class="card-title fw-bold" style="color: #0174BE;">{{ astronauta.nombre }}</h4>
            <p v-if="astronauta.nacionalidad" class="card-text">
                <b>Nacionalidad:</b> {{ astronauta.nacionalidad }}
            </p>
            <p v-if="astronauta.compañia_espacial" class="card-text">
                <b>Compañia Espacial: </b>{{ astronauta.compañia_espacial }}
            </p>
            <p v-if="astronauta.tiempo_espacio" class="card-text">
                <b>Tiempo en el Espacio:</b> {{ astronauta.tiempo_espacio }}
            </p>
            <p v-if="astronauta.misiones" class="card-text">
                <b>Número de Misiones:</b> {{ astronauta.misiones }}
            </p>
            </div>
        </div>
        </div>
    </div>
    </div>
</div>
</template>

<script>
import AstronautasService from '../services/AstronautasService.js';

export default {
name: 'Astronautas',
data() {
    return {
    astronautas: [],
    nacionalidades: [],
    NombreToSearch: '',
    NacionalidadToSearch: '',
    };
},
created() {
    this.getAstronautas();
    this.getNacionalidades();
},
methods: {
    async getAstronautas() {
    const astronautasData = await AstronautasService.getAstronautas();
    this.astronautas = astronautasData.astronautas;
    },
    async getNacionalidades() {
    this.nacionalidades = await AstronautasService.getNacionalidades();
    },
    async filterAstronautas(type) {
    const astronautasData = await AstronautasService.getAstronautas(
        type === 'nombre' ? this.NombreToSearch : this.NacionalidadToSearch,
        type
    );
    this.astronautas = astronautasData.astronautas;
    },
},
};
</script>

<style>
.card {
background-color: #222831;
margin: 2%;
color: white;
padding: 25px;
border-radius: 15px;
}

.a-card {
background-color: #EEEEEE;
color: #393E46;
text-align: justify;
}

.btn-primary {
background-color: #FFC436;
border-color: #FFC436;
}

.btn-primary:hover {
background-color: #FFF0CE;
border-color: #FFF0CE;
color: #000;
}
</style>
  