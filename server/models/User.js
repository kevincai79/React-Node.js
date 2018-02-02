const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// line 2 is the same as: const { Schema } = mongoose;

const userSchema = new Schema({
  googleID: String
});

mongoose.model('users', userSchema);
