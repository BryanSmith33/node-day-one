// here we have static data but in the future you would get this from a database
const kittens = [
  { id: 0, name: 'Jordan', breed: 'persian', fluff: 10 },
  { id: 1, name: 'Princess McFuzzy Boots', breed: 'domestic long hair', fluff: 11 },
  { id: 2, name: 'Billy', breed: 'calico', fluff: 2 }
]
module.exports = {
  getAll: (req, res) => {
    res.status(200).send(kittens)
  },
  getByID: (req, res) => {
    let kittenID = null
    kittens.forEach((kitten, index) => {
      if (kitten.id === Number(req.params.id)) {
        kittenID = index
      }
    })
    res.status(200).send(kittens[kittenID])
  },
  create: (req, res) => {
    const { name, breed, fluff } = req.body
    const kitten = {
      id: kittens[kittens.length - 1].id + 1,
      name: name,
      breed: breed,
      fluff: fluff
    }
    kittens.push(kitten)
    res.status(200).send(kittens)
  },
  update: (req, res) => {
    let kittenID = null
    kittens.forEach((kitten, index) => {
      if (kitten.id === Number(req.params.id)) {
        kittenID = index
      }
    })
    // modify the item of the array with the matching id coming in from req.params.id
    // we can say req.body.VALUE || kittens[kittenID].VALUE to have a fallback incase we don't pass anything in on the body
    kittens[kittenID] = {
      id: kittens[kittenID].id,
      name: req.body.name || kittens[kittenID].name,
      breed: req.body.breed || kittens[kittenID].breed,
      fluff: req.body.fluff || kittens[kittenID].fluff
    }
    res.status(200).send(kittens)
  },
  delete: (req, res) => {
    kittens.forEach((kitten, index) => {
      if (kitten.id === Number(req.params.id)) {
        kittens.splice(index, 1)
      }
    })
    res.status(200).send(kittens)
  }
}