const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose')
const User = require('./models/userModel.js');


app.use(cors());
app.use(express.json());


mongoose.connect("mongodb://127.0.0.1:27017/instanextJSapp")
.then(console.log("DB connected"))
.catch(err => console.log(err))

app.post('/auth/register/',async (req, res) => {
    try{
        await User.create({
            email: req.body.email,
            name: req.body.name,
            username: req.body.username,
            password: req.body.password
        })
        res.json({status:"ok"})
    }catch(err){
        res.json({status: 'error', error: err})
    }
});

app.post('/auth/login', async (req, res) => {
	const user = await User.findOne({
		email: req.body.email,
        password: req.body.password,
	})

	if (user) {
		return res.json ({ status: 'ok', user: true });
	}
    else{
		return res.json ({ status: 'ok', user: false });
    }
})

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});