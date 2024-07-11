const courseCtr = require('../controllers/coursesController');

module.exports = function (app) {
    app.get('/courses', courseCtr.getAllCourses)
}
