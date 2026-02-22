import express from 'express'

const port = 3000;
const app = express()

app.get("/", (req, res)={

})

app.post("/user/signup" , (req, res)=>{

})

app.post("/user/signin", (req, res)=>{

})

app.get("/user/course", (req, res)=>{

})

app.get("course/purchase", (req, res)=>{
    
})

app.get("/courses", (req, res)=>{

})



app.listen(port, ()=>{
    console.log(`app is listing on http://localhost:3000/`)
})