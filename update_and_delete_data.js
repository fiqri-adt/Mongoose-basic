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

// Fruit.updateOne(
//   { _id: "622ebab5556177221045c3cb" },
//   { name: "Mangga" },
//   function (error) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Berhasil anda update data apel menjadi mangga kedalam DB");
//     }
//   }
// );

Fruit.deleteOne({ _id: "622ebab5556177221045c3cb" }, function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Berhasil delete data mangga menjadi mangga kedalam DB");
  }
});

Fruit.find(function (error, fruits) {
  if (error) {
    console.log(error);
  } else {
    mongoose.connection.close();
    console.log("Nama2x buah setelah data di delete");
    fruits.forEach(function (fruit) {
      console.log(fruit.name);
    });
  }
});
