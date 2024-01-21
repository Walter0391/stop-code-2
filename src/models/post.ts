import mongoose from "mongoose";

const Articolo = new mongoose.Schema({
  autore: String,
  titolo: String,
  sottotitolo: { type: String, required: true },
  descrizione: String,
});

export const Post = mongoose.model("Post", Articolo, "articolo");
