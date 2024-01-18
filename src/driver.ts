import { MongoClient, ObjectId } from "mongodb";

const connectionString = "mongodb+srv://uollazzi:1234@cluster0.axxoeci.mongodb.net/?retryWrites=true&w=majority";

export const getProdotti = async () => {
    const client = new MongoClient(connectionString);

    try {
        await client.connect();

        const db = client.db("amazon"); // use della mongoshell
        const prodotti = db.collection("prodotti");

        // const dati = prodotti.find();
        // const datiProdotti = await dati.toArray();

        const datiProdotti = await prodotti.find().toArray();

        return datiProdotti;

    } catch (error) {
        console.error(error);
    }
    finally {
        await client.close();
    }
}

export const insertProdotto = async (nome: string, prezzo: number) => {
    const client = new MongoClient(connectionString);

    try {
        const db = client.db("amazon"); // use della mongoshell
        const prodotti = db.collection("prodotti");

        const result = await prodotti.insertOne({
            nome,
            prezzo
        });

        return result;

    } catch (error) {
        console.error(error);
    }
    finally {
        await client.close();
    }
}

export const deleteProdotto = async (id: string) => {
    const client = new MongoClient(connectionString);

    try {
        const db = client.db("amazon"); // use della mongoshell
        const prodotti = db.collection("prodotti");

        const result = await prodotti.deleteOne({
            _id: new ObjectId(id)
        });

        return result;

    } catch (error) {
        console.error(error);
    }
    finally {
        await client.close();
    }
}