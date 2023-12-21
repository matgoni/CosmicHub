<template>
    <div class="card">
      <div class="card-body">
        <img
          src="https://images.ctfassets.net/xuqkguafrpu1/4H8IARrsb6HGiyFGZi5z5V/99d5d7824d1193e50d6e38560c14a92c/grandarmy_supercluster_illustrations01_2023-12-04.jpg?q=80&fl=progressive"
          alt=""
          class="object-cover w-full h-auto lg:h-96 rounded"
        />
        <div class="card-content">
          <div class="header">
            <img src="../assets/logo.png" alt="Bootstrap" height="57" />
            <h1 class="text-2xl font-semibold sm:text-4xl">CosmicHub</h1>
          </div>
          <span>Diciembre, 2023</span>
          <p>
            ¡Bienvenido a CosmicHub, tu destino definitivo para todo lo relacionado con el espacio!
            🚀 Explora el cosmos con información actualizada sobre lanzamientos espaciales, perfiles
            de astronautas, estaciones espaciales e incluso compra productos cósmicos. Únete a
            nuestra comunidad de entusiastas del espacio mientras nos embarcamos en un viaje a
            través de la inmensidad del universo. ¡Abrocha tu cinturón y deja que tu curiosidad
            despegue!
          </p>
          <hr />
          <p>Características Clave:</p>
          <ul>
            <li>Centro de Lanzamientos: Mantente informado sobre los lanzamientos espaciales en todo el mundo</li>
            <li>Detalles de Astronautas: Descubre detalles fascinantes sobre los hombres y mujeres que se aventuran más allá de nuestra atmósfera.</li>
            <li>Hub de Estaciones Espaciales: Explora las diversas estaciones espaciales orbitando la Tierra y más allá.</li>
            <li>Tienda Galáctica: Compra productos únicos con temática espacial para llevar el cosmos a tu vida diaria.</li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home',
  };
  </script>
  
  <style scoped>
  .card {
    background-color: #332e62;
    margin: 2%;
    padding: 25px;
    border-radius: 15px;
    text-align: justify;
  }
  
  .card-content {
    margin: 2%;
    padding: 10px 0;
  }
  
  .header {
    display: flex;
    align-items: center;
  }
  
  .header img {
    margin-right: 10px;
  }
  
  img.object-cover {
    width: 100%;
    height: auto;
    border-radius: 0.5rem;
  }
  
  @media (min-width: 640px) {
    .card-content {
      padding: 10px 25px;
    }
  }
  </style>
  