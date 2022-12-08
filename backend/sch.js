const mongo = require('mongoose')

const dbsch = new mongo.Schema(
    {
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        age:{
            type:Number,
            required:true
        }
        // date:{
        //     type:Date,
        //     required:true
        // }
    }
)

module.exports = mongo.model('sch',dbsch)