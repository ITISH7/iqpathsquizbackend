import mongoose from 'mongoose';
const bcrypt = require("bcrypt");
const { Schema } = mongoose;

const userSchema = new Schema({
    name : {
        type : String,
        require : true,
    },
    email : {
        type : String,
        require : true,
    },
    mobileNo : {
        type : Number,
        require : true,
    },
    collegeName : {
        type : String,
    },
    profilePhoto : {
        type : String,
    },
    year : {
        type : String,
    },
    password : {
        type : String,
        require : true,
    },
    premiumProduct : {
        type : [String]
    },  
},
{
    timestamps : true,
}
);

// we will use middleware functionality 

// below is used to save a password in hash form 
userSchema.pre("save",async function(next){
    const salt = await bcrypt.genSaltSync(10);
    this.password = await  bcrypt.hash(this.password,salt);

});
// retriving password and comparing with login passwword
userSchema.methods.isPasswordMatched = async function(enteredpassword){
    return await bcrypt.compare(enteredpassword,this.password)
};
module.exports = mongoose.model("User", userSchema);