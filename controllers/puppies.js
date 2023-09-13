import { Puppy } from "../models/puppy.js"

function index(req, res) {
  Puppy.find({})
  .then(puppies => {
    res.render('puppies/index', {
      puppies
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/puppies')
  })
}

function newPuppy(req, res) {
  res.render('puppies/new')
}

function create(req, res) {
  Puppy.create(req.body)
  .then(puppy => {
    res.redirect('/puppies')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/puppies')
  })
}

function show(req, res) {
  Puppy.findById(req.params.puppyId)
  .then(puppy => {
    res.render('puppies/show', {
      puppy
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/puppies')
  })
}

function edit(req, res) {
  Puppy.findById(req.params.puppyId)
  .then(puppy => {
    res.render('puppies/edit', {
      puppy
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/puppies')
  })
}

function update(req, res) {
  Puppy.findByIdAndUpdate(req.params.puppyId, req.body, {new: true})
  .then(puppy => {
    res.redirect(`/puppies/${puppy._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/puppies')
  })
}

function deletePuppy(req, res) {
  Puppy.findByIdAndDelete(req.params.puppyId)
  .then(puppy => {
    res.redirect('/puppies')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/puppies')
  })
}

export {
  index,
  create,
  newPuppy as new,
  show,
  edit,
  update,
  deletePuppy as delete
}