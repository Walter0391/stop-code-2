import mongoose from "mongoose";
import { Post } from "./models/post";

const connectionString =
  "mongodb+srv://mengoniwalter:1234@cluster0.p2fjgut.mongodb.net/";

export const getArticoli = async () => {
  try {
    await mongoose.connect(connectionString, { dbName: "Post" });
    return await Post.find();
  } catch (error) {
  } finally {
    await mongoose.disconnect();
  }
};

//aggiungo post
export const insertPost = async (
  autore: string,
  titolo: string,
  sottotitolo: string,
  descrizione: string
) => {
  try {
    await mongoose.connect(connectionString, { dbName: "Post" });

    let posts = new Post();
    posts.autore = autore;
    posts.titolo = titolo;
    posts.sottotitolo = sottotitolo;
    posts.descrizione = descrizione;

    const result = await posts.save();

    return result;
  } catch (error) {
    console.error(error);
  } finally {
    await mongoose.disconnect();
  }
};

//modifico post
export const modificaPost = async (id: string, descrizione: string) => {
  try {
    await mongoose.connect(connectionString, { dbName: "Post" });

    return await Post.updateOne({ _id: id }, { descrizione: descrizione });
  } catch (error) {
    console.error(error);
  } finally {
    await mongoose.disconnect();
  }
};

// elimino post
export const deleteArticolo = async (id: string) => {
  try {
    await mongoose.connect(connectionString, { dbName: "Post" });

    return await Post.deleteOne({ _id: id });
  } catch (error) {
    console.error(error);
  } finally {
    await mongoose.disconnect();
  }
};
