const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const socketio = require('@feathersjs/socketio');
const moment = require('moment');
const path = require('path')

// Idea Service
class ActivityService {
  constructor(){
    this.activity = [];
  }

  async find() {
    return this.activity;
  }

  async create(data){
    const activity = {
      id: this.activity.length,
      text: data.text,
      viewer: data.viewer
    }

    activity.time = moment().format('h:mm:ss a');

    this.activity.push(activity);

    return activity;
  }
}

const app = express(feathers());
// Parse JSON
app.use(express.json());
// Config Socket.io realtime APIs
app.configure(socketio());
// Enable REST services
app.configure(express.rest());
// Register services
app.use('/activity', new ActivityService());
let pathName = __dirname;
// console.log(pathName)
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
})
// New connections connect to stream channel
app.on('connection', conn => app.channel('stream').join(conn));
// Publish events to stream
app.publish(data => app.channel('stream'))

const PORT = process.env.PORT || 3030;

app.listen(PORT).on('listening', () => console.log(`Realtime service running on port ${PORT}`))
