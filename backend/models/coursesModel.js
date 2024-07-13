const util = require('node:util');
const DB = require('../config/database');
const query = util.promisify(DB.query).bind(DB);

class Course {
}
/*
Courses.method_name = async function() {
}
*/
Course.getAllCourses = async function() {
    try {
        //sample record
        const date = new Date();
        await query("INSERT INTO roleuser (ID, rol) VALUES (1, 'Admin');");
        await query("INSERT INTO users (ID, name, email, dateOfBirthday, username, password, createAt, roleID) VALUES (1, 'Nguyễn Văn A', 'email@example.com', '1990-01-01', 'nguyenvana', 'password123', ?, 1);", [date]);
        await query("INSERT INTO course (ID, courseName, description, price, isProgressLimited, userID, createAt) VALUES (1, 'Tên khóa học', 'des', 100.0, 0, 1, ?)", [date]);
        const courses = await query('SELECT * FROM course');
        return courses;
    } catch (error) {
        return error;
    }
}

module.exports = Course;