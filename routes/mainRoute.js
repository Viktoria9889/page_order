const express = require('express');
const multer = require('multer')
const orderModel = require('../models/orderModel')
const orderCntr = require('../controller/orderCntr')
const router = express.Router();

const storage = multer.diskStorage({
    destination:  (req, file, cb) => {
      cb(null, 'public/uploads');
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now());
    }
  });
const upload = multer({ storage: storage });

router.get('/', async(req,res) => {
  res.render('order');
});

router.post('/add-order', upload.single('photo'), async (req, res) => {
  req.body.photoUrl = req.file.filename;
  const newOrder = new orderModel(req.body);//new orderModel збираєм новий обєкт в бд з даних які приходять з фронта
  console.log('newOrder:', newOrder)

  newOrder
    .save()
    .then((newOrder) => res.send(newOrder))
    .catch((error) => {
      console.log(error);
      res.render(('error.ejs'), { title: 'Error' });
    })
})

router.route('/basket').get(orderCntr.findOrder);

router.route('/basket/:id').delete(orderCntr.deleteOrder);



module.exports = router; 