<template>
    <div class="card">
        <div class="card-body">
            <img src="imagenes/img1.jpg" alt="" class="object-cover w-full h-64 rounded sm:h-100 lg:col-span-7 dark:bg-gray-500">
            <div class="card2">
                <h1 class="text-2xl font-semibold sm:text-4xl">CosmicHub</h1>
                <span>Diciembre, 2023</span>
                <p style="color: white;">¡Bienvenido a CosmicHub, tu destino definitivo para todo lo relacionado con el espacio! 🚀 Explora el cosmos con información actualizada sobre lanzamientos espaciales, perfiles de astronautas, estaciones espaciales e incluso compra productos cósmicos. Únete a nuestra comunidad de entusiastas del espacio mientras nos embarcamos en un viaje a través de la inmensidad del universo. ¡Abrocha tu cinturón y deja que tu curiosidad despegue!</p>
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
    background-color: #222831;
    margin: 2%;
    color: white;
    padding: 25px;
    border-radius: 15px;
    text-align: justify;
}
.card2{
    margin: 2%;
    padding: 10px 25px;
}
</style>