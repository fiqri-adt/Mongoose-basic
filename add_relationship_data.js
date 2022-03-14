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

const peopleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Data name tidak ada, please isi ya!"],
  },
  age: {
    type: Number,
  },
  favoriteFruit: fruitSchema,
});

const People = mongoose.model("People", peopleSchema);

const fruitDuku = new Fruit({
  name: "Duku",
  rating: 9,
  review: "Rasa Manis",
});

fruitDuku.save(function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Berhasil simpan buah Duku kedalam database");
  }
});

const people = new People({
  name: "Aditya",
  age: 20,
  favoriteFruit: fruitDuku,
});
people.save(function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Berhasil simpan aditya relationship nya dengan duku");
  }
});
