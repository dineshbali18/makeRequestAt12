const express=require("express")
// import fetch from "node-fetch";
const axios = require('axios').default;
const app=express();

app.listen(process.env.PORT,()=>{
    const d = new Date();
let time = d.getHours();
let timeMin=d.getMinutes();
    setInterval(()=>{
        axios.get("http://3.6.165.128:5000/api/user/630b6a0281c92cbe12b9b5d5/admin/user/updatevotes",
        {headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzBiNmEwMjgxYzkyY2JlMTJiOWI1ZDUiLCJpYXQiOjE2NjMwMDUxMzR9.Qkcy6s1644q1SRrhm8258gjNK4i_sEurN_wvr3dwILA"}})
    },86400000)
})