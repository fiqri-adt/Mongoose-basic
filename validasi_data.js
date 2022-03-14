const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/db-test");

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Data name tidak ada, please isi ya!"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const apel = new Fruit({
  name: "Apel",
  rating: 10,
  review: "Rasa Manis",
});

apel.save(function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Berhasil simpan buah2x kedalam database");
  }
});
