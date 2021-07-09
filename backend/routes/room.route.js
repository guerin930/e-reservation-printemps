const router = require('express').Router();
const RoomController = require('../controllers/room.controller');

router.post("/save", RoomController.saveRoom);
router.get("/all", RoomController.getAllRooms);
router.get("/infos/:id", RoomController.getRoomInfos);
router.put("/update/:id", RoomController.updateRoom);
router.put("/setNotAviable",RoomController.changeAviableOnFalse);
router.put("/setAviable",RoomController.changeAviableOnTrue);
router.delete("/delete/:id", RoomController.deleteRoom);

module.exports = router;