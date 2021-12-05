import WebSocket from 'ws';
import express from 'express';
import dotenv from "dotenv-defaults";
import mongoose from 'mongoose';
import cors from 'cors';
import { sendData, sendStatus, initData } from './wssConnect';
import Message from './models/message';
dotenv.config();

const http = require('http');
const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// init middleware
app.use(cors())

// define routes
// app.use('/api', cardRoute)

const port = process.env.PORT || 5000


const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
mongoose.connect('mongodb+srv://user:password0225@cluster0.j5vmi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log("mongo db connection created"));
const db = mongoose.connection;

const broadcastMessage = (data, status) => {
    wss.clients.forEach((client) => {
      sendData(data, client);
      sendStatus(status, client);
    });
  };
  


db.once('open', () => {
    console.log("db inside");
    wss.on('connection', (ws) => {
        initData(ws);
        ws.onmessage = async (byteString) => {
          const { data } = byteString
          const [task, payload] = JSON.parse(data)
          console.log("\n\ndata: ", data, "\n\n");
          switch (task) {
            case 'input': {
              const { name, body } = payload
              const message
                = new Message({ name, body })
              try { await message.save();
              } catch (e) { throw new Error
                ("Message DB save error: " + e);
              }
            //   sendData(['output', [payload]], ws);
            //   sendStatus({
            //     type: 'success',
            //     msg: 'Message sent.'
            //   }, ws);
              broadcastMessage(['output', [payload]], { type: 'success', msg: 'Message sent.'});
            break
            }
            case 'clear': {
                Message.deleteMany({}, () => {
                //   sendData(['cleared'], ws);
                //   sendStatus({ type: 'info', msg: 'Message cache cleared.'}, ws);
                  broadcastMessage(['cleared'], { type: 'info', msg: 'Message cache cleared.'});
                });
                
                break
            }          
            default: break
          }
        }
    })
    const PORT = process.env.port || 4000
    server.listen(PORT, () => {
        console.log(`Listening on http://localhost:${PORT}`);
    })
    
    
})


