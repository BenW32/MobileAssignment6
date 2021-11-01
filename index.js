//13:27 automatically update
//15:01 left off
const express = require('express');
const app = express();
const nodemane = require('nodemon');
app.use(express.json());

const PORT = 1150;

let data = {
    "User":{
        username: "dogecoin",
    password: "password1",
    email: "test@test.com",
    //new code
    "courses":{
        "course":{
            classID: "CMSC2204",
            coursename: "mobile",
            startDate: "8/29/2021",
            endDate: "12/21/2021"
        },
        "course1":{
            classID: "CMSC2204",
            coursename: "mobile",
            startDate: "8/29/2021",
            endDate: "12/21/2021"
        },
        "course2":{
            classID: "CMSC2204",
            coursename: "mobile",
            startDate: "8/29/2021",
            endDate: "12/21/2021"
        }

    }
    }
    
}

app.get(`/getUser`, (req, res) =>{
    try{
        return res.status(200).json(data);
    }
    catch{
        return res.status(500);
    }
});
//adding post method
app.post('/addUser', (req,res) =>{
try{
console.log(req.body);
return res.status(200).json("Added user username successfully");
}
catch{
return res.status(500);
}
});
//------------------------------



app.listen(PORT, () => {
    console.log(`Server Started on port ${PORT}`);
});