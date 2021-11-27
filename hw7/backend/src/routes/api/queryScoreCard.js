import express from 'express'; 
import mongoose from 'mongoose';
import dotenv from "dotenv-defaults";
import ScoreCard from '../../models/ScoreCard'
dotenv.config();

const queryScoreCard = async (req, res) => {
    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((res) => console.log("mongo db connection created"));
    const db = mongoose.connection;
    db.on("error", (err) => console.log(err));
    db.once("open", async () => {
        try {
            if(req.query.type == 'name'){
                ScoreCard.find({ name: req.query.queryString}, {_id:0, __v:0}, function (err, result){ // get all albums
                    if (err) { // if there will be any error
                        console.log(err);
                    } else { /// in success case in which records from DB is fetched
                        console.log(result);
                        db.close();
                        if(result == ""){
                            var msg = "name (" + req.query.queryString + ") not found";
                            res.json({ message: msg });
                        }
                        else{
                            res.json({ messages: result });
                        }
                        
                    }
                  });
            }
            else{
                ScoreCard.find({ subject: req.query.queryString}, {_id:0, __v:0}, function (err, result){ // get all albums
                    if (err) { // if there will be any error
                        console.log(err);
                    } else { /// in success case in which records from DB is fetched
                        console.log(result);
                        db.close();
                        if(result == ""){
                            var msg = "subject (" + req.query.queryString + ") not found";
                            res.json({ message: msg });
                        }
                        else{
                            res.json({ messages: result });
                        }
                        
                    }
                  });
            }
        } catch (e) { throw new Error("Database query failed"); }
    });
};


export default queryScoreCard;