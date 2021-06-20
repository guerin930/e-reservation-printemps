const router = require('express').Router();
const RoomController = require('../controllers/room.controller');

router.post("/room", RoomController.saveRoom);
router.get("/allrooms", RoomController.getAllRooms);
router.get("/roomInfos/:id", RoomController.getRoomInfos);
router.put("/update/:id", RoomController.updateRoom);
router.put("/setNotAviable",RoomController.changeAviableOnFalse);
router.put("/setAviable",RoomController.changeAviableOnTrue);
router.delete("/delete/:id", RoomController.deleteRoom);

module.exports = router;