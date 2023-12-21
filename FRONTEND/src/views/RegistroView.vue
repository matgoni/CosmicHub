<template>
    <div class="container my-4">
        <div class="row justify-content-center">
            <div class="card registration-card mx-auto">
                <div class="card-header bg-primary text-white">
                    <h4 class="card-title">Registro</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="registerUser">
                        <!-- Name Field -->
                        <div class="form-group">
                            <label for="name"><i class="fas fa-user"></i> Nombre</label>
                            <input type="text" id="name" name="name" v-model="name" class="form-control" placeholder="Introduzca su nombre">
                        </div>
                        <!-- Email Field -->
                        <div class="form-group">
                            <label for="email"><i class="fas fa-envelope"></i> Email</label>
                            <input type="email" id="email" name="email" v-model="email" class="form-control" placeholder="Introduce tu correo electrónico">
                        </div>
                        <!-- Password Field -->
                        <div class="form-group">
                            <label for="password"><i class="fas fa-lock"></i> Contraseña</label>
                            <input type="password" id="password" name="password" v-model="password" class="form-control" placeholder="Ingrese una contraseña">
                        </div>
                        <!-- Confirm Password Field -->
                        <div class="form-group">
                            <label for="confirm_password"><i class="fas fa-lock"></i> Confirma Contraseña</label>
                            <input type="password" id="confirm_password" name="confirm_password" v-model="confirm_password" class="form-control" placeholder="ingrese misma contraseña">
                        </div>
                        <!-- Área para mostrar errores -->
                        <div v-if="errors.length" class="alert alert-danger">
                            <ul>
                                <li v-for="error in errors" :key="error">{{ error }}</li>
                            </ul>
                        </div>
                        <!-- Submit Button -->
                        <button type="submit" class="btn btn-primary btn-block">Registrarse</button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <!-- Link to Login Page -->
                        <router-link to="/Login" class="btn btn-link">Ya tienes una cuenta? Login</router-link>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
    name: "Register",
    data() {
        return {
            name: "",
            email: "",
            password: "",
            confirm_password: "",
            errors: []
        };
    },
    methods: {
        ...mapActions(["register"]),

        registerUser() {
            this.clearErrors(); // Limpia errores anteriores

            // Validaciones básicas
            if (!this.validateRegistration()) {
                return;
            }

            let user = {
                name: this.name,
                email: this.email,
                password: this.password
            };

            this.register(user).then(res => {
                if (res && res.data && res.data.success) {
                    this.$router.push("/Login");
                } else {
                    // Manejar caso donde res.data.success no es true
                    this.errors.push(res.data.message || "Error en el registro.");
                }
            }).catch(error => {
                // Manejar error de solicitud
                this.errors.push(error.message || "Error en la conexión.");
            });
        },

        validateRegistration() {
            if (!this.email) {
                this.errors.push("El correo electrónico es obligatorio.");
            }
            if (!this.password) {
                this.errors.push("La contraseña es obligatoria.");
            }
            if (this.password !== this.confirm_password) {
                this.errors.push("Las contraseñas no coinciden.");
            }
            return this.errors.length === 0;
        },

        clearErrors() {
            this.errors = [];
        }
    }
};
</script>

<style scoped>
/* Estilo base para el contenedor */
.container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}

/* Estilo para tarjetas con un máximo de ancho y centrado */
.registration-card {
    margin: 1rem auto;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    max-width: 500px;
}

/* Estilo responsivo para formularios */
.form-control {
    width: 100%;
    padding: 0.5rem;
    border-radius: 5px;
    margin-bottom: 1rem;
}

/* Botones y enlaces */
.btn-primary, .btn-link {
    display: block;
    width: 100%;
    text-align: center;
    margin-top: 10px;
}

/* Media queries para diferentes tamaños de pantalla */
@media (min-width: 576px) {
    .container {
        max-width: 540px;
    }
}

@media (min-width: 768px) {
    .container {
        max-width: 720px;
    }
}

@media (min-width: 992px) {
    .container {
        max-width: 960px;
    }
}

@media (min-width: 1200px) {
    .container {
        max-width: 1140px;
    }
}
</style>
