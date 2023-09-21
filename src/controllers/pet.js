const router = require("express").Router();
const Pet = require("../models/Pet");

// routes

router.get('/', async function (req, res) {
  try {
    const pet = await Pet.find();
    res.json(pet);
  } catch (error) {
    console.log("error fetching pet:", error);
    res.json({ message: "error fetching pet" });
  }
});

router.get('/:id', async function (req, res) {
  try {
    const { id } = req.params;
    const pet = await Pet.findById(id);
    res.json(pet);
  } catch (error) {
    console.log("error fetching pet by id:", error);
    res.json({ message: "error fetching pet" });
  }
});

router.post('/', async function (req, res) {
  try {
    await new Pet(req.body).save();
    res.status(201).json({ message: "pet created" });
  } catch (error) {
    console.log("error creating pet:", error);
    res.json({ message: "error creating pet" });
  }
});

router.put('/:id', async function (req, res) {
  console.log(req.body);
  try {
    const { id } = req.params;
    await Pet.findByIdAndUpdate(id, req.body);
    res.status(204).json({ message: "pet updated" });
  } catch (error) {
    console.log("error updating pet:", error);
    res.json({ message: "error updating pet" });
  }
});

router.delete('/:id', async function (req, res) {
  try {
    const { id } = req.params;
    await Pet.findByIdAndDelete(id);
    res.status(204).json({ message: "pet deleted" });
  } catch (error) {
    console.log("error deleting pet:", error);
    res.json({ message: "error deleting pet" });
  } 
});

module.exports = router;

// seeds pets

router.get('/data/seed', async function (req, res) {
  const data = [
    {
      ownerType: "Adopt",
      ownerName: "Shawn",
      petName: "Luna",
      petGender: "Female",
      petType: "Dog",
      petAge: "3 years",
      petBio: "Luna is a spirited, intelligent Border Collie mix with a heart full of love and a zest for life.",
    },
    {
      ownerType: "Foster",
      ownerName: "Ilana",
      petName: "Whiskers",
      petGender: "Female",
      petType: "Cat",
      petAge: "4 years",
      petBio: "Whiskers is an orange independent Domestic Shorthair, who will capture your heart with her graceful charm and soothing purrs.",
    },
    {
      ownerType: "Foster",
      ownerName: "Ashton",
      petName: "Midnight",
      petGender: "Female",
      petType: "Cat",
      petAge: "9 months",
      petBio: "Midnight, a sleek and mysterious black cat, is a an enchanting companion who brings a touch of magic to every moment.",
    },
    {
      ownerType: "Adopt",
      ownerName: "Jackson",
      petName: "Max",
      petGender: "Male",
      petType: "Dog",
      petAge: "2 years",
      petBio: "Max is a lovable Labrador Retriever, a wagging tail of happiness who's always up for an adventure and ready to be your faithful companion.",
    },
    {
      ownerType: "Adopt",
      ownerName: "Allison",
      petName: "Mochi",
      petGender: "Male",
      petType: "Cat",
      petAge: "1 year",
      petBio: "Mochi, the beautiful calico cat with a patchwork of colors, is a charming and affectionate feline companion who will fill your life with love and colorful moments.",
    },
  ];

  await Pet.insertMany(data);
  res.status(303).redirect('/pets');
});