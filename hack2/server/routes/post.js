import express from 'express'
import Post from '../models/post'
import moment from 'moment'
import mongoose from 'mongoose'

const router = express.Router()

// TODO 2-(1): create the 1st API (/api/allPosts)
router.get('/allPosts', (req, res) => {
    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((res) => console.log("mongo db connection created"));
    const db = mongoose.connection;
    db.on("error", (err) => console.log(err));
    db.once("open", async () => {
        try {
            const Data = await Post.find().sort({'timestamp' : -1});
            console.log("Data: ",Data);
            res.status(200).send({ message: 'success', data: Data});
            db.close();
        } catch (e) { 
            res.status(403).send({ message: 'error', data: null});
            db.close();
            throw new Error("Database query failed"); 
        }
    });
  })


// TODO 3-(1): create the 2nd API (/api/postDetail)
router.get('/postDetail', (req, res) => {
    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((res) => console.log("mongo db connection created"));
    const db = mongoose.connection;
    db.on("error", (err) => console.log(err));
    db.once("open", async () => {
        try {
            Post.findOne({ postId: req.query.pid}, function (err, result){ 
                if (err) { // if there will be any error
                    console.log(err);
                } else { /// in success case in which records from DB is fetched
                    console.log(result);
                    db.close();
                    res.status(200).send({ message: 'success', post: result});
                }
              });
        } catch (e) { 
            res.status(403).send({ message: 'error', post: null});
            db.close();
            throw new Error("Database query failed"); 
        }
    });
  })


// TODO 4-(1): create the 3rd API (/api/newPost)
router.post('/newPost', (req, res) => {
    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((res) => console.log("mongo db connection created"));
    var db = mongoose.connection;
    db.on("error", (err) => console.log(err));
    const myobj = new Post(
        {
            postId: req.body.postId,
            title: req.body.title,
            content: req.body.content,
            timestamp: req.body.timestamp
        }
    ) 
    console.log(myobj)
    db.once("open", async () => {
        try{
            await myobj.save();
            res.status(200).send({ message: 'success'});
            db.close();
        }
        catch(err){
            res.status(403).send({ message: 'error', post: null});
            db.close();
        }
    });
})


// TODO 5-(1): create the 4th API (/api/post)
router.delete('/post', (req, res) => {
    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((res) => console.log("mongo db connection created"));
    const db = mongoose.connection;
    db.on("error", (err) => console.log(err));
    let myquery = {postId: req.query.pid };
    db.once("open", async () => {
        try {
            await Post.deleteOne(myquery);
            res.status(200).send({ message: 'success'});
            db.close();
        } catch (err) { 
            res.status(403).send({ message: 'error', post: null});
            db.close();
        }
    });
})



export default router