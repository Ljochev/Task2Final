

const {
    createCourse,
    updateCourse,
    removeCourse,
    listSortetName,
    getOneCourseById,
} = require("../pkg/course/index");


const createNewCourse = async (req, res) => {
    try {
        const data = {...req.body, user_id: req.auth.id };
        const newCourse = await createCourse(data);
        return res.status(200).send(newCourse);
    } catch (error) {
        return res.status(500).send("internal server error!");
    }
};

const updateNewCourse = async (req, res) => {
    try {
        const course = await getOneCourseById(req.params.id);
        if(req.auth.id.toString() !== course.user_id.toString())
        return res.status(400).send("Acces not allowed");
        const updatedCourse = await updateCourse(req.params.id, req.body);
        return res.status(200).send(updatedCourse);
    } catch (error) {
        return res.status(500).send("internal server error!");
    }
};

const getCourseById = async (req, res) => {
    try {
        console.log(req.params.id);
        const course = await getOneCourseById(req.params.id);
        return res.status(200).send(course);
    } catch (error) {
        console.error("Error fetching subject:", error);
        return res.status(500).send("internal server error!");
    }
};

module.exports = {
    createNewCourse,
    updateNewCourse,
    getCourseById,
    };