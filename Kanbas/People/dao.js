import Database from "../Database/index.js";


export function findPeopleByCourse (courseId) {
    const {users, enrollments} = Database;
    
    const userIds = enrollments
          .filter((enrollment) => enrollment.course === courseId)
          .map((enrollment) => enrollment.user);
  
    const usersInCourse = users.filter((user) => userIds.includes(user._id));
  
    return usersInCourse;
}

export function deletePersonInCourse(userId, courseId){
    const { enrollments } = Database;
    Database.enrollments = enrollments.filter(
        (enrollment) => enrollment.user !== userId || enrollment.course !== courseId);
}