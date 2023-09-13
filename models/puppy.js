import mongoose from "mongoose"

const Schema = mongoose.Schema

const puppySchema = new Schema({
  name: String,
  age: Number,
  breed: String
})

const Puppy = mongoose.model('Puppy', puppySchema)

export {
  Puppy
}