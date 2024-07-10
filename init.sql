CREATE DATABASE IF NOT EXISTS onlineCourses;
USE onlineCourses;

CREATE TABLE roleuser (
    ID int NOT NULL PRIMARY KEY,
    rol varchar(10)
);

CREATE TABLE users (
    ID int NOT NULL PRIMARY KEY,
    name nvarchar(255),
    email varchar(255),
    dateOfBirthday date,
    username varchar(40),
    password varchar(40),
    createAt datetime,
    roleID int,
    FOREIGN KEY (roleID) REFERENCES roleuser(ID)
);

CREATE TABLE course (
    ID int NOT NULL PRIMARY KEY,
    courseName NVARCHAR(255),
    description NVARCHAR(255),
    price FLOAT,
    isProgressLimited BIT,
    userID int,
    createAt datetime,
    FOREIGN KEY (userID) REFERENCES users(ID)
);

CREATE TABLE module (
    ID int NOT NULL PRIMARY KEY,
    courseID int,
    moduleName NVARCHAR(255),
    number int,
    FOREIGN KEY (courseID) REFERENCES course(ID)
);

CREATE TABLE lesson (
    id int NOT NULL PRIMARY KEY,
    moduleID int,
    lessonName NVARCHAR(255),
    number int,
    videoURL varchar(255),
    lessonDetail nvarchar(255),
    courseOrder int,
    FOREIGN KEY (moduleID) REFERENCES module(ID)
);

CREATE TABLE comment (
    userID int,
    courseID int,
    lessonID int,
    content nvarchar(255),
    createAt datetime,
    FOREIGN KEY (userID) REFERENCES users(ID),
    FOREIGN KEY (courseID) REFERENCES course(ID),
    FOREIGN KEY (lessonID) REFERENCES lesson(ID)
);

CREATE TABLE userlesson (
    userID int,
    lessonID int,
    completeTime datetime,
    FOREIGN KEY (userID) REFERENCES users(ID),
    FOREIGN KEY (lessonID) REFERENCES lesson(ID)
);

CREATE TABLE enrolment (
    courseID int,
    userID int,
    enrolmentTime datetime,
    completeTime datetime,
    cancelled BIT,
    cancelledReason NVARCHAR(255),
    FOREIGN KEY (userID) REFERENCES users(ID),
    FOREIGN KEY (courseID) REFERENCES course(ID)
);

CREATE TABLE quiz (
    ID int NOT NULL PRIMARY KEY,
    courseID int,
    quizName NVARCHAR(255),
    number int,
    courseOrder int,
    minPassCourse int,
    isPassRequired BIT,
    FOREIGN KEY (courseID) REFERENCES course(ID)
);

CREATE TABLE quizquestion (
    ID int NOT NULL PRIMARY KEY,
    quizID int,
    quesTitle NVARCHAR(255),
    FOREIGN KEY (quizID) REFERENCES quiz(ID)
);

CREATE TABLE quizanswer (
    ID int NOT NULL PRIMARY KEY,
    questionID int,
    answerText NVARCHAR(255),
    isCorrect BIT,
    FOREIGN KEY (questionID) REFERENCES quizquestion(ID)
);

CREATE TABLE userquizattempt (
    userID int,
    quizID int,
    attemptTime datetime,
    scoreAchieved float,
    FOREIGN KEY (userID) REFERENCES users(ID),
    FOREIGN KEY (quizID) REFERENCES quiz(ID)
);
