const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/db-test");

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const apel = new Fruit({
  name: "Apel",
  rating: 9,
  review: "Rasa Manis",
});

apel.save(function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Berhasil simpan buah2x kedalam database");
  }
});

const anggur = new Fruit({
  name: "Anggur",
  rating: 8,
  review: "Rasa Manis",
});

const jeruk = new Fruit({
  name: "jeruk",
  rating: 8,
  review: "Rasa Manis asem",
});

const kiwi = new Fruit({
  name: "kiwi",
  rating: 9,
  review: "Rasa Manis",
});

Fruit.insertMany([kiwi, anggur, jeruk], function (error) {
  if (error) {
    console.log(error);
  } else {
    mongoose.connection.close();

    console.log("Berhasil simpan buah2x kedalam database");
  }
});
