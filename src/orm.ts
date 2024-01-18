import mongoose from "mongoose";
import { Categoria } from "./models/categoria";

const connectionString = "mongodb+srv://uollazzi:1234@cluster0.axxoeci.mongodb.net/?retryWrites=true&w=majority";

export const getCategorie = async () => {
    try {
        await mongoose.connect(connectionString, { dbName: "amazon" });

        return await Categoria.find();
    } catch (error) {
        console.error(error);
    }
    finally {
        await mongoose.disconnect();
    }
}

export const insertCategoria = async (titolo: string, sottotitolo: string, descrizione: string) => {
    try {
        await mongoose.connect(connectionString, { dbName: "amazon" });

        let cat = new Categoria();
        cat.titolo = titolo;
        cat.sottotitolo = sottotitolo;
        cat.descrizione = descrizione;

        const result = await cat.save();

        return result;
    } catch (error) {
        console.error(error);
    }
    finally {
        await mongoose.disconnect();
    }
}

export const getCategoriaById = async (id: string) => {
    try {
        await mongoose.connect(connectionString, { dbName: "amazon" });

        return await Categoria.findById(id);
    } catch (error) {
        console.error(error);
    }
    finally {
        await mongoose.disconnect();
    }
}

export const deleteCategoria = async (id: string) => {
    try {
        await mongoose.connect(connectionString, { dbName: "amazon" });

        return await Categoria.deleteOne({ _id: id });
    } catch (error) {
        console.error(error);
    }
    finally {
        await mongoose.disconnect();
    }
}