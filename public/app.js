const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const socketio = require('@feathersjs/socketio');
const moment = require('moment');


// Idea Service
class ActivityService {
  constructor(){
    this.activities = [];
  }

  async find() {
    return this.activities;
  }

  async create(data){
    const activity = {
      id: this.activities.length,
      text: data.text,
      viewer: data.viewer
    }

    activity.time = moment().format('h:mm:ss a');

    this.activities.push(activity);

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
app.use('/activities', new ActivityService());

// New connections connect to stream channel
app.on('connection', conn => app.channel('stream').join(conn));
// Publish events to stream
app.publish(data => app.channel('stream'))

const PORT = process.env.PORT || 3030;

app.listen(PORT).on('listening', () => console.log(`Realtime service running on port ${PORT}`))
