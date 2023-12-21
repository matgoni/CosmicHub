<template>
  <div class="login">
    <h2>Iniciar sesión</h2>
    <form @submit.prevent="loginUser">
      <div class="form-group">
        <label for="email">Correo electrónico</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="password">Contraseña</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <input type="submit" class="btn btn-primary" value="Login">
      &nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to="/Registro" class="btn btn-link">No tienes una cuenta? Registro</router-link>
    </form>
  </div>
</template>
  
<script>
import { mapActions } from "vuex";
export default {
    name: "Login",
    data() {
        return {
            email: "",
            password: ""
        };
    },
    methods: {
        ...mapActions(["login"]),
        loginUser() {
        let user = {
            email: this.email,
            password: this.password
        };
        this.login(user).then(res => {
            if (res.data.success) {
                this.$router.push("/");
            }
        }).catch(err => {
            // Manejar errores de la solicitud
            console.error("Error en la solicitud: ", err);
        });
    }
  }
};
</script>
 
  <style scoped>
  .login {
    max-width: 400px;
    margin: 8% auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    font-weight: bold;
  }
  
  input[type="text"],
  input[type="email"],
  input[type="password"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  .btn-primary, .btn-link {
    display: block;
    width: 100%;
    text-align: center;
    margin-top: 10px;
}
  
  /* Estilos responsivos */
  @media (max-width: 600px) {
    .login {
      max-width: 90%;
      margin: 10% auto;
    }
  }
  </style>
  