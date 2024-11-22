import * as dao from "./dao.js";
import * as enrollmentDao from "../Enrollments/dao.js";

export default function UserRoutes(app) {
    //For People
    const peopleInCourse = (req, res) => {
        const { courseId } = req.params;
        const people = dao.findPeopleByCourse(courseId);
        // console.log(people);
        res.json(people);
    };

    const enrollInCourse = (req, res) => {
        const { courseId, userId } = req.params;
        // console.log(courseId, userId);
        enrollmentDao.enrollUserInCourse(userId, courseId);
        const allPeople = dao.findPeopleByCourse(courseId);
        res.send(allPeople);
    };

    const deletePersonFromCourse = (req, res) => {
        const { courseId, userId } = req.params;
        // console.log(currentUser);
        // console.log("Course ID: ", courseId);
        dao.deletePersonInCourse(userId, courseId);
        const allPeople = dao.findPeopleByCourse(courseId);
        res.send(allPeople);
    };

    app.get("/api/people/:courseId/", peopleInCourse);
    app.post("/api/people/:courseId/:userId", enrollInCourse);
    app.delete("/api/people/:courseId/:userId", deletePersonFromCourse);
}