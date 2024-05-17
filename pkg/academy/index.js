const mongoose = require("mongoose");

const academySchema = new mongoose.Schema({
  name: String,
    email: String,
    password: String,
fullName: String,
})

const Academy = mongoose.model("Academy", academySchema, "academy");

const create = async (data) => {
    const newAcademy = new Academy(data);
    return await newAcademy.save();
    };
    const update = async (id, data) => {
    return await Academy.updateOne({_id: id }, {data});
    };
    
    const getById = async (id) => {
        console.log("I'm inside");
    // return await Academy.findOne({ _id: id });
    return await Academy.findById(id);
    };
    
    const getByEmail = async ( email ) => {
    return await Academy.findOne({ email: email});
    };
    
    const setNewPassword = async (id, password) => {
    return await Academy.updateOne({ _id: id }, {password});
    };
    
    const getAllEmailSorted = async () => {
    // return await Academy.find({}).select({"ime:"}).sort({ email: 1});
    return await Academy.find({}).sort({ email: 1});
    };
    
    const remove = async (id) => {
    // return await Academy.deleteOne({_id: id});
    return await Academy.findByIdAndDelete(id);
    };
    
    const updateWrongPassword = async (id, wrongPassword) => {
        wrongPassword++;
        console.log(wrongPassword);
      return await Academy.updateOne({_id: id }, { wrongPassword });
      };
      const updateLogin = async (id, succesfullLog) => {
        succesfullLog++;
        return await Academy.updateOne({ _id: id }, { succesfullLog });
      }
      
      const updateResetPassword = async (id, resetPassword) => {
        resetPassword++;
        return await Academy.updateOne({ _id: id}, {resetPassword});
      
      };
    
    module.exports = {
    create,
    update,
    getById,
    getByEmail,
    setNewPassword,
    getAllEmailSorted,
    remove,
    updateWrongPassword,
    updateLogin,
    updateResetPassword,
    };