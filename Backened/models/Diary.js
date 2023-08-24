const { default: mongoose } = require("mongoose");
const { Schema } = mongoose;

const DiarySchema= new Schema({
  user:{
    type :mongoose.Schema.Types.ObjectId,
    ref:'user'
  }
  ,
  DayWas:
  {
    type : String,
    require:true
  },
  Descryption:
  {
    type : String,
    require : true
  },
  date:
  {
    type : Date,
    default: Date.now
  }

});

module.exports = mongoose.model('Diary' , DiarySchema);
