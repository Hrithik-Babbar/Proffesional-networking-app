const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RoomSchema = new Schema({
    title: String,
    vendorname: String,
    username: String,
    convos: [{
        type: Schema.Types.ObjectId,
        ref: 'Convo'
    }]

});
module.exports = mongoose.model('Room', RoomSchema);