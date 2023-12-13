<template>
  <!-- Header -->
  <header>
    <nav class="navbar sticky-top navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">
          <img src="../src/assets/logo.png" alt="Bootstrap" width="38" height="32">
          CosmicHub
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link ">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Lanzamientos" class="nav-link ">Lanzamientos</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Astronautas" class="nav-link ">Astronautas</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/EstacionEspacial" class="nav-link ">Estaciones Espaciales</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Tienda" class="nav-link ">Tienda</router-link>
            </li>
          </ul>
          <nav class="navbar bg-body-tertiary">
              <form class="container-fluid justify-content-start">
                <router-link to="/login" class="btn btn-outline-primary me-2" type="button">Registrarse</router-link>
                <button class="btn btn-sm btn-outline-secondary" type="button">Iniciar Sesion</button>
              </form>
          </nav>
        </div>
      </div>
    </nav>
  </header>
  
  <!--Content-->
  <div>
    <router-view />
  </div>
  <!-- Footer -->
  <footer>
      <div class="social">
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-facebook-f"></i></a>
      </div>
      <p><i>Israel Juarez e Ian Mateos &copy; 2023 </i></p>
  </footer>
  
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #EEEEEE;
}

footer {
    background-color: #2b3035;
    color: white;
    text-align: center;
    padding: 10px 0;
}

footer .social a{
    font-size: 24px;
    padding-left: 10px;
    padding-right: 10px;
}

</style>
