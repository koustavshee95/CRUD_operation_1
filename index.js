
const  express = require('express') ;
const  mongoose = require('mongoose');
const productRoute = require('./routes/product.route.js')
const app = express();


//middleware:
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//routes:
app.use('/api/products',productRoute)


app.get('/',(req,res)=>{
    res.send("This is express server!.Hi I am Koustav")
});




app.listen(3000,()=>{
    console.log('Server is running port 3000!');
});



mongoose.connect('mongodb+srv://koustavshee95:ziL2mAC4SEOuq9oZ@backenddb.g6p48nx.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
.then(()=>{
    console.log("Connected to the database!");
}).catch(()=>{
    console.log("Connection faield!");
});


