"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 3000;
// Enable CORS for all origins
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    //Get the current datetime in ISO 8601 format (UTC)
    const currentDatetime = new Date().toISOString();
    const email = "manuelckay@gmail.com";
    const githubUrl = "https://github.com/Drelcj/hng12-stage0-public-api.git";
    //Construct the JSON response
    const responseData = {
        email: email,
        current_datetime: currentDatetime,
        github_url: githubUrl
    };
    //Send the JSON response with 200 OK status
    res.status(200).json(responseData);
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
