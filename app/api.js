// API.js -- POST AND GET
var express = require('express');
var app = express.Router();

// Database
var knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : '127.0.0.1',
    user     : 'root',
    password : 'root',
    database : 'ask',
    port: 3306
  }
});

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

app.get('/question/std/:std/',function(req,res){
  // get Question by ID
  knex('questions')
    .where({
      std_id: req.params.std
    })
    .select('*')
    .then(function(data){
      res.json(data);
    });

});

// # FRESHMAN API #
// --------------------

app.post('/login',function(req,res){
  var id = req.body.std_id;
  console.log(id);

  knex('freshman').where('stdID', id).then(function(data){
    console.log('query',data)
    res.json(data);
  });
});

app.post('/question/',function(req,res){
  // .. ส่งคำถาม

  knex('questions')
    .returning('id')
    .insert(
      {
        question: req.body.content,
        std_id: req.body.std_id,
      })
    .then(function(data){
      console.log("Send Question",data);
      req.app.io.emit('teacher',{success: true});
      setTimeout(function(){
        res.json({ success: true, response: data});
      },1000);
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
    }).then(function(data){
      knex('questions').where({id: element}).select('std_id').then(function(data){
        req.app.io.emit('asker',{ std_id : data[0].std_id });
      })
    });

    if(index == data.length-1){
      res.json({ success: true, response: data});
      req.app.io.emit('teacher',{ refresh : true});
      req.app.io.emit('presentation',{ data : data });
    }
  });
});

// # PRESENTATION API #
// --------------------


// # DASHBOARD API #
// -----------------
app.get('/sending_feedback',function(req,res){
  req.app.io.emit('asker',{ feedback : true });
});

app.post('/feedback',function(req,res){
  // .. ส่งคำถามขึ้นหน้าจอ

  knex('freshman')
  .where({
    stdId: req.body.std_id
  })
  .update({
    after_question: req.body.content
  })
  .then(function(data){
    res.send({data:true});
  });

});


module.exports = app;
