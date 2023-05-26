import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express()
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb+srv://aviralsainger:Aviral04@cluster0.gwz66qa.mongodb.net/?retryWrites=true&w=majority",{
   // useNewUrlParser: true,
    useUnifiedTopology: true 
})
.then(() => console.log("DB Connected"))
.catch((err) => {console.log(err)})

const userschema = new mongoose.Schema({
    name: String,
    email: String,
        password: String,
        dob: String
})
const User  = new mongoose.model("User", userschema)

app.post("/register", async(req,res) =>{
    const {name, email, password,dob} = req.body
    const emailExists = await User.findOne({ email: req.body.email });

if (emailExists) {res.send({ message:"Email allready exists"});}
else{
    const user = new User({
        name, email, password, dob
    })
user.save(res.send({ message: "Registered Successfully"}))
}
    
})
app.post("/login", async(req,res)=>{
    const {email, password} = req.body
    const user = await User.findOne({ email: req.body.email });

if (user) {
    if(password === user.password){
        res.send({ message: "Login Successfully", user: user})
    } else{
        res.send({ message: "Password Didn't Match"})
    }
}
else{ res.status(400).send({message: "User Not Found"});}
})

app.get("/", (req,res) => {
    res.send("Api Working")
})

app.listen(5000, () => {
    console.log("Server Running at 5000")
})
