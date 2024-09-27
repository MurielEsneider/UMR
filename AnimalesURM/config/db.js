const mongoose = require ("mongoose")

const CONE = async () => {
    try {
        await mongoose.connect("mongodb+srv://Muriel:444@cluster0.evyojh5.mongodb.net/Refugio?retryWrites=true&w=majority&appName=Cluster0")
    } catch (e) {
        console.error("Está feo:", e.message);
    }
};

module.exports = CONE