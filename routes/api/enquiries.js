// Routes to post and view enquiries from the enquiry form
const auth = require('../../middleware/auth')
const express = require('express')
const { Enquiry } = require('../../models/Enquiry')
const router = express.Router()


// Get all enquries in the database
// Uses auth middleware - user must be logged in to view enquiries.
router.get('/', auth, async (req, res) => {
  const enquiries = await Enquiry.find()
  res.send(enquiries)
});


// Post enquiry to database
// Do not have to be logged in
router.post('/', async (req, res) => {
  let enquiry = new Enquiry({
    name: req.body.name,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    enquiry: req.body.enquiry,
  })
  enquiry = await enquiry.save()
  res.send(enquiry)
})


// Delete enquiry from database by id
// Used on the admin dashboard - requires auth
router.delete('/:id', auth, (req, res) => {
  const id = req.params.id
  Enquiry.findByIdAndRemove(id)
    .then(() => res.send(200))
    .catch(error => res.status(500).send({
      error: error.message
  }))
})


  // Update the isRead property of the collection
  // Used on the admin dashboard - requires auth
router.put("/:id", auth, async (req, res) => {
  const enquiry = await Enquiry.findByIdAndUpdate(
    req.params.id,
    { isRead: req.body.isRead },
    {
      new: true
    }
  );
  res.send(enquiry);
});


module.exports = router