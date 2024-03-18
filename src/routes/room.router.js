const { Router } = require('express');
const { roomController } = require('../controllers');
const { validateToken } = require('../middlewares/authMiddleware');
const roomRouter = Router();


roomRouter
    .get('/rooms', roomController.findAll)
    .get('/rooms/:id', roomController.findRoomPk)
    .post('/rooms', roomController.createRoom)
    .put('/rooms/:id', roomController.updateRoom)
    .delete('/rooms/:id', roomController.deleteRoom)

module.exports = roomRouter;