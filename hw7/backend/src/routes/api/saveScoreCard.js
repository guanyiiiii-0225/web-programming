import express from 'express'; 
// import mongoose from '../../mongo';
import mongoose from 'mongoose';
import dotenv from "dotenv-defaults";
import ScoreCard from '../../models/ScoreCard'
dotenv.config();

const HandleSaveScoreCard = async (req, res) => {
  var existing = await ScoreCard.find({'name': req.body.name, 'subject': req.body.subject});

  await ScoreCard.updateOne({ 'name': req.body.name, 'subject': req.body.subject}, {$set:{ 'score': req.body.score }},     
        {
          new: true,
          upsert: true // Make this update into an upsert
        }
    ).then((obj) => {
      console.log('Updated - ' + obj);
      if(existing){
        var msg = 'Updating ('+ req.body.name + ', ' + req.body.subject + ', ' + req.body.score + ')';
        res.json({ message: msg, card: true });
      }
      else{
        var msg = 'Adding ('+ req.body.name + ', ' + req.body.subject + ', ' + req.body.score + ')';
        res.json({ message: msg, card: false });
      }
  })
  .catch((err) => {
      console.log('Error: ' + err);
  });
  
  

};

const saveScoreCard = (req, res) => {
    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((res) => console.log("mongo db connection created"));
    var db = mongoose.connection;
    db.on("error", (err) => console.log(err));
    db.once("open", async () => {
      console.log("opening");
      const existing = await ScoreCard.findOne({'name': req.body.name, 'subject': req.body.subject});
      

      await ScoreCard.updateOne({ 'name': req.body.name, 'subject': req.body.subject}, {$set:{ 'score': req.body.score }},     
            {
              new: true,
              upsert: true // Make this update into an upsert
            }
        ).then((obj) => {
          console.log('Updated - ' + obj);
          console.log(existing);
          if(existing){
            var msg = 'Updating ('+ req.body.name + ', ' + req.body.subject + ', ' + req.body.score + ')';
            res.json({ message: msg });
            db.close();
          }
          else{
            var msg = 'Adding ('+ req.body.name + ', ' + req.body.subject + ', ' + req.body.score + ')';
            res.json({ message: msg, card: true});
            db.close();
          }
      })
      .catch((err) => {
          console.log('Error: ' + err);
          db.close();
      });

    });
    
};


export default saveScoreCard;