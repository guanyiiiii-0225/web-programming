import express from 'express'; 
// import mongoose from '../../mongo';
import mongoose from 'mongoose';
import dotenv from "dotenv-defaults";
import ScoreCard from '../../models/ScoreCard'
dotenv.config();

const deleteScoreCard = async (req, res) => {
    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((res) => console.log("mongo db connection created"));
    const db = mongoose.connection;
    db.on("error", (err) => console.log(err));
    db.once("open", async () => {
        try {
            await ScoreCard.deleteMany({}).then(()=>{
                console.log("Database deleted");
                db.close();
                res.json({ message: 'Database cleared' });
            });
        } catch (e) { throw new Error("Database deletion failed"); }
    });
};


export default deleteScoreCard;