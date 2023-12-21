<template>
  <!-- Header -->
  <header>
    <nav class="navbar sticky-top navbar-expand-lg bg-body-tertiary" >
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">
          <img src="@/assets/logo.png" alt="CosmicHub Logo" width="38" height="32">
          CosmicHub
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link active">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Lanzamientos" class="nav-link active">Lanzamientos</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Astronautas" class="nav-link active">Astronautas</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/EstacionEspacial" class="nav-link active">Estaciones Espaciales</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Tienda" class="nav-link active">Tienda</router-link>
            </li>
          </ul>
          <div class="d-flex">
            <router-link v-if="!isLoggedIn" to="/Registro" class="btn btn-outline-primary me-2" type="button">Registrarse</router-link>
            <router-link v-if="!isLoggedIn" to="/Login" class="btn btn-outline-secondary" type="button">Iniciar Sesión</router-link>
            <a v-if="isLoggedIn" class="btn btn-outline-secondary">
              <a to="/logout" @click.prevent="logoutUser">Cerrar Sesión</a>
            </a>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <!-- Content -->
  <div>
    <router-view />
  </div>

  <!-- Footer -->
  <footer class="mt-5 bg-body-secondary">
    <div class="container-fluid py-4">
      <div class="row">
        <div class="col-md-4 col-sm-12">
          <h5>INFORMACIÓN</h5>
          <p>
            IPN<br>
            Ciencia de Datos<br>
            Desarrollo de Aplicaciones Web
          </p>
        </div>
        <div class="col-md-4 col-sm-12">
          <h5>Desarrolladores</h5>
          <ul class="list-unstyled">
            <li>Ian Mateos</li>
            <li>Israel Juarez</li>
          </ul>
        </div>
        <div class="col-md-4 col-sm-12">
          <h5>Síguenos</h5>
          <div class="social">
            <a href="#" class="fab fa-instagram"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-facebook-f"></a>
          </div>
        </div>
      </div>
      <hr class="my-4">
      <p class="text-center text-muted">&copy; 2023 CosmicHub. Todos los derechos reservados.</p>
    </div>
  </footer>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Errors from "./components/Errors.vue";
export default {
  name: 'App',
  components: {
    Errors
  },
  computed: {
    ...mapGetters(["isLoggedIn","error"])
  },
  methods: {
    ...mapActions(["logout"]),
    logoutUser() {
      this.logout();
    }
  }
};
</script>
<style scoped>
#app {
  font-family: 'Avenir', 'Helvetica', 'Arial', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #EEEEEE;
}

header {
  
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-brand img {
  margin-right: 8px;
}

.navbar-nav .nav-link {
  color: #34495e;
}

.navbar-nav .nav-link:hover {
  color: #3498db;
}

footer {
  padding: 40px 0;
}

.social a {
  font-size: 24px;
  margin: 0 10px;
  color: #000;
  transition: color 0.3s;
}

.social a:hover {
  color: #3498db;
}

/* Estilos responsivos */
@media (max-width: 768px) {
  .social a {
    font-size: 18px; /* Ajusta el tamaño de los íconos de redes sociales para pantallas más pequeñas */
  }
}
</style>

