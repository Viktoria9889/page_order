const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
        itemPage: {
                type: String,
                default:''
        },
        amount: {
                type: Number,
                default:''
                
        },
        photoUrl: {
                type: String,
                default:''
        },
        yourName: {
                type: String,
                default:''
        }
}, { timestamps: true });

const model = mongoose.model('Order', orderSchema);
module.exports = model;

