const router = require('express').Router();
const bookingController = require('../controllers/booking.controller');

//submit booking
router.post("/booking", bookingController.saveBooking);
router.get("/booking", bookingController.getAllBooking);
router.get("/booking/:id", bookingController.currentBooking);
router.put("/booking/:id", bookingController.UpdateBooking);
router.put("/booking/cancel/:id", bookingController.CancelBooking);
router.delete("/booking/:id", bookingController.DeleteBooking);

module.exports = router;