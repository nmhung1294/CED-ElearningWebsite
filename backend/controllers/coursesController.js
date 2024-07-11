const course = require('../models/coursesModel');

/*
exports.methodName = async (req, res) => {
}
*/

exports.getAllCourses = async (req, res) => {
    try {
        const courses = await course.getAllCourses();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}