import express from "express";
import saveDataToDB from "./saveDataToDB.js";
import router from "./router/getRoute.js";
import cors from "cors";

const app=express();
app.use(express.json());
app.use(cors());

// Call this function only once
// saveDataToDB();

app.use("/",router);
app.get("/",(req,res)=>{
  res.json({
    message : "fine",
  }
})

const PORT = process.env.PORT || 5000;

app.listen(PORT);
