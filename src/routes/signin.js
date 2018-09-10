const express = require('express');
const router = express.Router();

// Task Model
const User = require('../models/User');

// GET all Tasks
router.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// GET all Tasks
router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

// ADD a new task
router.post('/', async (req, res) => {
  const { primerNombre,apellido,email,contraseña  } = req.body;
  
  if(!primerNombre)
  {
      res.end({
          success:false,
          message:"error:primer nombre no puede estar en blanco"
      });
  }
  if(!apellido)
  {
      res.end({
          success:false,
          message:"error:apellido no puede estar en blanco"
      });
  }
  if(!email)
  {
      res.end({
          success:false,
          message:"error:email no puede estar en blanco"
      });
  }
  if(!contraseña)
  {
      res.end({
          success:false,
          message:"error:contraseña no puede estar en blanco"
      });
  }
  //email= email.toLowerCase();
  /*
  User.find({
      email: email
      },(err,previousUsers)=>{
        if(err){
            res.end({
                success:false,
                message:"error:Server error"
            });
        }else if (previousUsers.length>0)
        {
            res.end({
                success:false,
                message:"error:cuenta ya existente"
            });
        }
      }
  );
      */
  
  const user = new User({primerNombre,apellido, email,contraseña});
  //user.contraseña=user.generateHash(contraseña);
  await user.save();
  res.json({status: 'User Saved'});
});

// UPDATE a new task
router.put('/:id', async (req, res) => {
const { primerNombre,apellido, email,contraseña } = req.body;
const newUser = {primerNombre,apellido, email,contraseña};
await User.findByIdAndUpdate(req.params.id, newUser);
res.json({status: 'User Updated'});
});

router.delete('/:id', async (req, res) => {
 await User.findByIdAndRemove(req.params.id);
 res.json({status: 'User Deleted'});
});

module.exports = router;