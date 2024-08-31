const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('your-mongodb-url');

// Define schemas
const AdminSchema = new mongoose.Schema({
   Name:String,
    ID-no:String
});

const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
});

const CourseSchema = new mongoose.Schema({
    Coursename:String,
    CourseNumber: Number,
    CourseStartDate:String,
    CourseEndDate:String,
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}
