const orderModel = require('../models/orderModel');


const findOrder = async (req, res) => {
  const allOrder = await orderModel.find();//получаєм список товарів з БД
  
  res.render('basket', { allOrder: allOrder });
};

const addNewOrder = async (req, res) => {
}

const deleteOrder = (req, res) => {
  const result = orderModel.findByIdAndDelete(req.params.id);
  
  result
    .then((result) => {
      res.sendStatus(200);
    })
}

module.exports = {
  addNewOrder,
  findOrder,
  deleteOrder
};