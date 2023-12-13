<template>
    <div class="card">
    <div class="card-body">
        <!-- form control -->
        <div class="row mb-3">
            <div class="col">
                <div class="d-flex">
                    <input v-model="NombreToSearch" class="form-control" placeholder="Buscar por Nombre"/>
                    <a v-on:click="filterAstronautas('Nombre')" class="btn btn-primary ms-4 ">
                        Buscar
                    </a>
                </div>
            </div>
            <div class="col">
                <div class="d-flex">
                    <select v-model="NacionalidadToSearch" class="form-select">
                        <option disabled selected value="">Seleccionar por Nacionalidad</option>
                        <option v-for="nacionalidad in nacionalidades" :key="nacioanlidad" :value="nacionalidad">
                            {{ nacionalidad }}
                        </option>
                    </select>
                    <a v-on:click="filterNacionalidad('rated')" class="btn btn-primary ms-4">
                        Filtrar
                    </a>
                </div>
            </div>
        </div>
        <!-- form control -->
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div v-for="astronauta in astronautas" class="col" :key="astronautas._id">
                <div class="card a-card">
                    <div class="card-body">
                      <h4 class="card-title fw-bold" style="color: #427D9D;">{{ astronauta.nombre }}</h4>
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

export default{
    nombre: "Astronautas",
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
            let astronautasData;
            if (type === 'nombre') {
                astronautasData = await AstronautasService.getAstronautas(
                    this.NombreToSearch, type,
                );
            } else {
                astronautasData = await AstronautasService.getAstronautas(
                    this.NacionalidadToSearch, type,
                );
            }
            this.astronautas = astronautasData.astronautas;
        },
    },
    getNacionalidades() {
        this.nacionalidades = [];
    },
    async filterAstronautas(type) {
        if (type === 'nombre') {
            astronautasData = await AstronautasService.getAstronautas(
                this.NombreToSearch, type,
            );
        } else {
            astronautasData = await AstronautasService.getAstronautas(
                this.NacionalidadToSearch, type,
            );
        }
        this.astronauta = astronautasData.astronauta;
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

.a-card{
    background-color: #EEEEEE;
    color: #393E46;
    text-align: justify;
}
</style>