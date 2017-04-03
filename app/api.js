// API.js -- POST AND GET
var express = require('express');
var config = require('../config');
var app = express.Router();

// Database
var knex = require('knex')(config.db);


// Question Status
// status = [0 => pending, 1 => selected, 2 => deleted]
//

// # GENERAL API #
// --------------------

app.get('/question/get/:command',function(req,res){
  var command = req.params.command;

  if(command == 'all'){
    // get All Question
    knex('questions')
    .select('*')
    .then(function(data){
      res.json(data);
    });

  }else if(command == 'ready'){
    knex('questions')
    .where({
      status: 0
    })
    .select('*')
    .then(function(data){
      res.json(data);
    });

  }else if(command == 'completed'){
    knex('questions')
    .where({
      status: 1
    })
    .select('*')
    .then(function(data){
      res.json(data);
    });

  }
});

app.get('/question/id/:id/',function(req,res){
  // get Question by ID
  knex('questions')
    .where({
      id: req.params.id
    })
    .select('*')
    .then(function(data){
      res.json(data[0]);
    });
});


// # ATTENDEES API #
// --------------------


app.post('/question/',function(req,res){
  // Send Question

  knex('config')
  .where({
      name: 'open_answer'
    })
    .select('*')
    .then(function(data){
      console.log(data);
      if(data[0].value == 0)
        res.json({ closed: true, response: data});
      else {
        knex('questions')
        .returning('id')
        .insert(
          {
            question: req.body.content,
            attendee: req.body.attendee,
          })
        .then(function(data){
          console.log("[-- Sended Question --] #" + data + " " + req.body.content + " : " + req.body.attendee);
          req.app.io.emit('teacher',{success: true});
          setTimeout(function(){
            res.json({ success: true, response: data});
          },1000);
        });
      }
    });

});

// # TEACHER API #
// --------------------

app.post('/question/selects',function(req,res){
  // .. ส่งคำถามขึ้นหน้าจอ
  var data = req.body.data;

  data.forEach(function(element, index){
    var x = knex('questions')
    .where({
      id: element
    })
    .update({
      status: 1
    }).then(function(item){
      console.log("[-- Choosen Question --] #" + element);
    });

    if(index == data.length-1){
      res.json({ success: true, response: data});
      req.app.io.emit('teacher',{ refresh : true});
      req.app.io.emit('presentation',{ data : data });
    }
  });
});

app.post('/config/question/', function(req,res){
  var data = req.body.data;
  console.log(data);

  var x = knex('config')
  .where({
    name: 'open_answer'
  })
  .update({
    value: data
  }).then(function(data){
    console.log("[-- OPEN Question --]");
    res.json({ success: true, response: data});
    req.app.io.emit('teacher',{ refresh : true});
  });
});

app.post('/question/delete',function(req,res){
  // .. ลบคำถาม
  var data = req.body;

  var x = knex('questions')
  .where({
    id: data.id
  })
  .update({
    status: 2
  }).then(function(data){
    console.log("[-- Delete Question --] #" + data.id);
    res.json({ success: true, response: data});
    req.app.io.emit('teacher',{ refresh : true});
  });

});

// # REPORT API #
// --------------------
app.get('/report/',function(req,res){
  // get Question by ID
  knex('questions')
    .select('attendee',knex.raw('COUNT(*) as count'))
    .groupBy('attendee')
    .then(function(data){
      console.log(data);
      content = {
        data: data
      }
      res.render('report',content);
    });
});

module.exports = app;
