const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Academy",
    },
    name: String,
    location: String,
});

const Course = mongoose.model("Course", courseSchema, "course");

const createCourse = async (Course) => {
    const newCourse = new Course(Course);
    return await newCourse.save();
    };
    
    const updateCourse = async (id, data) => {
    return await Course.updateOne({_id: id}, data);
    };
    
    const removeCourse = async (id) => {
    return await Course.deleteOne({_id: id});
    };
    
    const listSortetName = async (userId) => {
    return await Course.find({user_id: userId}).sort({ime: 1});
    };
    
    const getOneCourseById = async (id) => {
        // console.log("I'm in getOneCourseById");
    return await Course.findOne({ _id: id});
    };

module.exports = {
    createCourse,
    updateCourse,
    removeCourse,
    listSortetName,
    getOneCourseById,
};