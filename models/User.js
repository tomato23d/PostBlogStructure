const {Schema, model } = require('mongoose');


const userSchema = new Schema({
  username: { type: String, required: true, unique: true, trim: true },
  email: { type: String, required: true, unique: true, 
  match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/ },
  thoughts: [{type: Schema.Types.ObjectId, ref: 'Blog'}],
  friends: [{type: Schema.Types.ObjectId, ref: 'User'}],
},
{
  toJSON: {
    virtuals: true,
  },
  id: false,
}
);

//the user friends count
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});



const User = model('User', userSchema);


module.exports = User;
