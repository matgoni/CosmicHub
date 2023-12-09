import mongoose from "mongoose";

try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('🗄️ 🗄️ Conect DB ok ')
} catch (error){
    console.log('Error de conexion:' + error)
}
