const express = require('express');
const businessRoutes = express.Router();
const multer = require('multer');
const crypto = require('crypto');
var path = require('path')



const storage = multer.diskStorage({
  destination: './br/',
  filename: function (req, file, cb) {
    crypto.pseudoRandomBytes(16, function (err, raw) {
      if (err) return cb(err)

      cb(null, raw.toString('hex') + path.extname(file.originalname))
    })
  }
})


const upload = multer({storage:storage})

// Require Business model in our routes module
let Business = require('./file.model');

// Defined store route
businessRoutes.route('/add').post(upload.single('file'),function (req, res) {
  let business = new Business({

    file:req.file.path
     });
    //  if (!req.file) return res.send('Please upload a file')
  business.save()
    .then(business => {
        res.status(200).json({'business': 'business is added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});
// Defined get data(index or listing) route
businessRoutes.route('/').get(function (req, res) {
    Business.find(function(err, businesses){
    if(err){
      console.log(err);
    }
    else {
      res.json(businesses);
    }
  });
});

// Defined edit route
businessRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Business.findById(id, function (err, business){
      res.json(business);
  });
});

//  Defined update route
businessRoutes.route('/update/:id').post(function (req, res) {
    Business.findById(req.params.id, function(err, business) {
    if (!business)
      res.status(404).send("data is not found");
    else {
      
        business.file= req.body.file;
        business.save().then(business => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
businessRoutes.route('/delete/:id').get(function (req, res) {
    Business.findByIdAndRemove({_id: req.params.id}, function(err, business){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});


module.exports = businessRoutes;