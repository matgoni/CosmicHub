<template>
    <div class="card">
        <div class="card-body">
            <img src="https://images.ctfassets.net/xuqkguafrpu1/4H8IARrsb6HGiyFGZi5z5V/99d5d7824d1193e50d6e38560c14a92c/grandarmy_supercluster_illustrations01_2023-12-04.jpg?q=80&fl=progressive" alt="" class="object-cover w-full h-64 rounded sm:h-100 lg:col-span-7 dark:bg-gray-500">
            <div class="card2">
                <h1 class="text-2xl font-semibold sm:text-4xl">
                <img src="../assets/logo.png" alt="Bootstrap"  height="57">CosmicHub</h1>
                <span>Diciembre, 2023</span>
                <p>¡Bienvenido a CosmicHub, tu destino definitivo para todo lo relacionado con el espacio! 🚀 Explora el cosmos con información actualizada sobre lanzamientos espaciales, perfiles de astronautas, estaciones espaciales e incluso compra productos cósmicos. Únete a nuestra comunidad de entusiastas del espacio mientras nos embarcamos en un viaje a través de la inmensidad del universo. ¡Abrocha tu cinturón y deja que tu curiosidad despegue!</p>
                <p><hr>Características Clave:</p>
                <ul>
                <li>
                    Centro de Lanzamientos: Mantente informado sobre los lanzamientos espaciales en todo el mundo
                </li>
                <li>
                    Detalles de Astronautas: Descubre detalles fascinantes sobre los hombres y mujeres que se aventuran más allá de nuestra atmósfera.
                </li>
                <li>
                    Hub de Estaciones Espaciales: Explora las diversas estaciones espaciales orbitando la Tierra y más allá.
                </li>
                <li>
                    Tienda Galáctica: Compra productos únicos con temática espacial para llevar el cosmos a tu vida diaria.
                </li>
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
<style>
.card {
    background-color: #FFC436;
    margin: 2%;
    padding: 25px;
    border-radius: 15px;
    text-align: justify;
}
.card2{
    margin: 2%;
    padding: 10px 25px;
}
img.dark\:bg-gray-500 {
    object-fit: cover;
    border-radius: 0.5rem;
    width: 100%;
    height: 24rem;
    position: relative;
}

/* Estilo para el fondo negro semi-transparente */
img.dark\:bg-gray-500:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Ajusta el valor alpha para controlar la opacidad */
    z-index: 1;
}
</style>