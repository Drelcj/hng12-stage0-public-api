import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

// Enable CORS for all origins
app.use(cors());

app.get('/', (req: Request, res: Response) => {
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