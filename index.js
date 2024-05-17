const express = require("express");
const { expressjwt: jwt } = require("express-jwt");
const { getSection } = require("./pkg/config/index");
const {
    refreshToken,
    createNewAcademy,
    login,
    resetPassword,
    forgotPassword,
    getAllAcademyEmailsSorted,
} = require("./handlers/auth");

const {
    createNewCourse,
    updateNewCourse,
    getCourseById,
} = require("./handlers/academy");

require("./pkg/db/index");

const app = express();
app.use(express.json());
app.use(
    jwt({
        secret: getSection("development").jwt_secret,
        algorithms: ["HS256"],
    }).unless({
        path: [
// we add the rouths we dont want to be authenticated
"/api/academy/register",
"/api/academy/login",
"/api/academy/reset_password",
"/api/academy/forgot_password",
        ],
    })
);
// pass ljochev123
// routs with authentification

app.get("/api/academy/refresh-token", refreshToken);
app.post("/api/academy/register", createNewAcademy);
app.post("/api/academy/login", login);
app.post("/api/academy/reset_password", resetPassword);
app.post("/api/academy/forgot_password", forgotPassword);
app.get("/api/academy/sortedEmails", getAllAcademyEmailsSorted);



// routes for courses

app.post("/api/course/create", createNewCourse);
app.put("/api/course/update/:id", updateNewCourse);
app.get("/api/course/id/:id", getCourseById);


app.listen(getSection("development").PORT, () => {
    console.log(`Server is listening on port ${getSection("development").PORT}`)
});