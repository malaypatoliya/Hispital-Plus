const express = require('express');
const cors = require('cors');
require('./DB/Config');
const User = require('./DB/Users');
const Doctors = require('./DB/Doctors');
const Medicals = require('./DB/Medicals');
const BloodBank = require('./DB/BloodBank');
const Queries = require("./DB/Queries");
const Appointment = require("./DB/Appointment");
const Booking = require("./DB/Booking")

const app = express(); 

//middleware
app.use(express.json());
app.use(cors());

// ---------------------------- Registration ----------------------------
// make register API (routes)
app.post('/register', async (req, res)=>{
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    res.send(result);
})

// ---------------------------- Login ----------------------------
// make login API
app.post('/login', async (req, res)=>{
    // console.log(req.body);
    if(req.body.email && req.body.password)
    {
        let user = await User.findOne(req.body).select('-password');
        if(user){
            res.send(user);
        }else{
            res.send({result:"User not Found !!!"})
        }
    }else{
        res.send({result:"User not Found !!!"})
    }
})


// ---------------------------- Doctors ----------------------------
// Make add-doctor API
app.post('/add-doctor', async (req, res)=>{
    let doctors = new Doctors(req.body);
    let result = await doctors.save();
    res.send(result);
})

// Make list API
app.get('/doctors', async (req, res)=>{
    let doctors = await Doctors.find();
    if(doctors.length > 0){
        res.send(doctors);
    }else{
        res.send({result: "No Doctor Found !!!"})
    }
})

// Make delete API
app.delete('/doctors/:id', async (req, res)=>{
    const result = await Doctors.deleteOne({_id: req.params.id});
    res.send(result);
})

// Make update API
app.get('/doctors/:id', async (req, res)=>{
    let result = await Doctors.findOne({_id: req.params.id});
    if(result){
        res.send(result);
    }else{
        res.send({result: 'No record Found !!!'});
    }
})

app.put('/update-doctor/:id', async (req, res)=>{
    let result = await Doctors.updateOne(
        { _id: req.params.id },
        {
            $set: req.body
        }
    )
    res.send(result)
})



// ---------------------------- Medical Stroes ----------------------------
// Make add-medical API
app.post('/add-medical', async (req, res)=>{
    let medicals = new Medicals(req.body);
    let result = await medicals.save();
    res.send(result);
})

// Make list API
app.get('/medicals', async (req, res)=>{
    let medicals = await Medicals.find();
    if(medicals.length > 0){
        res.send(medicals);
    }else{
        res.send({result: "No Medical Found !!!"})
    }
})

// Make delete API
app.delete('/medical/:id', async (req, res)=>{
    const result = await Medicals.deleteOne({_id: req.params.id});
    res.send(result);
})

// Make update API
app.get('/medical/:id', async (req, res)=>{
    let result = await Medicals.findOne({_id: req.params.id});
    if(result){
        res.send(result);
    }else{
        res.send({result: 'No record Found !!!'});
    }
})

app.put('/update-medical/:id', async (req, res)=>{
    let result = await Medicals.updateOne(
        { _id: req.params.id },
        {
            $set: req.body
        }
    )
    res.send(result)
})



// ---------------------------- Blood Bank ----------------------------
// Make add-blood API
app.post('/add-blood-bank', async (req, res)=>{
    let bloodbank = new BloodBank(req.body);
    let result = await bloodbank.save();
    res.send(result);
})

// Make list API
app.get('/blood-banks', async (req, res)=>{
    let bloodbanks = await BloodBank.find();
    if(bloodbanks.length > 0){
        res.send(bloodbanks);
    }else{
        res.send({result: "No Medical Found !!!"})
    }
})

// Make delete API
app.delete('/blood-bank/:id', async (req, res)=>{
    const result = await BloodBank.deleteOne({_id: req.params.id});
    res.send(result);
})

// Make update API
app.get('/bloodbank/:id', async (req, res)=>{
    let result = await BloodBank.findOne({_id: req.params.id});
    if(result){
        res.send(result);
    }else{
        res.send({result: 'No record Found !!!'});
    }
})

app.put('/update-blood-bank/:id', async (req, res)=>{
    let result = await BloodBank.updateOne(
        { _id: req.params.id },
        {
            $set: req.body
        }
    )
    res.send(result)
})


// ---------------------------- Queries ----------------------------
app.post("/queries", async (req, resp) => {
    let queries = new Queries(req.body);
    let result = await queries.save();
    // console.log(result);
    resp.send(result);
  });

  app.get('/queries', async (req, res)=>{
    let queries = await Queries.find();
    if(queries.length > 0){
        res.send(queries);
    }else{
        res.send({result: "No Queries Found !!!"})
    }
})

// ---------------------------- Appoinments ----------------------------
//store data of appointment letter to database
app.post('/booking', async (req, res)=>{
    let booking = new Booking(req.body);
    let result = await booking.save();
    console.log(result);
    res.send(result);
})

  app.get('/booking', async (req, res)=>{
    let booking = await Booking.find();
    if(booking.length > 0){
        res.send(booking);
    }else{
        res.send({result: "No Appointments Found !!!"})
    }
})

  
app.listen(5000);
