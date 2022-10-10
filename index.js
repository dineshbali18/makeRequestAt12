const express=require("express")
// import fetch from "node-fetch";
const axios = require('axios').default;
const app=express();

app.listen(process.env.PORT,()=>{
    const d = new Date();
let time = d.getHours();
let timeMin=d.getMinutes();
    setInterval(()=>{
        axios.get("http://3.6.165.128:5000/api/user/634453436ae09ee5db41a475/admin/user/updatevotes",
        {headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzQ0NTM0MzZhZTA5ZWU1ZGI0MWE0NzUiLCJpYXQiOjE2NjU0MjIyMDR9.P3QPLtexoLAQXX8z9l7DSWttY6gI6ROj8lqn4jQzbgs"}})
    },86400000)
})
