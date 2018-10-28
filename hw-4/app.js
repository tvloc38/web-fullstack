const express = require('express');
const path = require('path');
const axios = require('axios');
const fs = require('fs');
let app = express();

app.use(express.static('templates'));

app.get('/', (rep, res) => {
    res.sendFile(path.resolve(__dirname, './templates/index.html'));
})

app.get('/:classroom', (req, res) => {
    const classroomName = req.params.classroom;

    console.log(req.query);
    //req.query
    //req.params.param

    axios.get("https://btvn-web15s.herokuapp.com/api/" + classroomName)
    
    //.then...
    res.send('<h1>' + classroomName + '</h1>');
});

// app.get('/web15', (req, res) => {
//     axios.get("https://btvn-web15s.herokuapp.com/api/web15")
//       .then(res => {
//           fs.writeFileSync("./templates/web15.json", JSON.stringify(res.data), (err) => {
//               console.log("Error");
              
//           })
//       })
//       .catch(err => {
//         console.log(err);
//       });
    
//     res.sendFile(path.resolve(__dirname, "./templates/web15.json"))
// })

// app.get('/web14', (req, res) => {
//     axios.get("https://btvn-web15s.herokuapp.com/api/web14")
//       .then(res => {
//           fs.writeFileSync("./templates/web14.json", JSON.stringify(res.data), (err) => {
//               console.log("Error");
//           })
//       })
//       .catch(err => {
//         console.log(err);
//       });
    
//     res.sendFile(path.resolve(__dirname, "./templates/web14.json"))
// })

 
// app.get('/web13', (req, res) => {
//     axios.get("https://btvn-web15s.herokuapp.com/api/web13")
//       .then(res => {
//           fs.writeFileSync("./templates/web13.json", JSON.stringify(res.data), (err) => {
//               console.log("Error");
//           })
//       })
//       .catch(err => {
//         console.log(err);
//       });
    
//     res.sendFile(path.resolve(__dirname, "./templates/web13.json"))
// })      


// app.get('/web12', (req, res) => {
//     axios.get("https://btvn-web15s.herokuapp.com/api/web12")
//       .then(res => {
//           fs.writeFileSync("./templates/web12.json", JSON.stringify(res.data), (err) => {
//               console.log("Error");
//           })
//       })
//       .catch(err => {
//         console.log(err);
//       });
    
//     res.sendFile(path.resolve(__dirname, "./templates/web12.json"))
// });


// app.get('/web11', (req, res) => {
//     axios.get("https://btvn-web15s.herokuapp.com/api/web11")
//       .then(res => {
//           fs.writeFileSync("./templates/web11.json", JSON.stringify(res.data), (err) => {
//               console.log("Error");
//           })
//       })
//       .catch(err => {
//         console.log(err);
//       });
    
//     res.sendFile(path.resolve(__dirname, "./templates/web11.json"))
// });


// app.get('/web10', (req, res) => {
//     axios.get("https://btvn-web15s.herokuapp.com/api/web10")
//       .then(res => {
//           fs.writeFileSync("./templates/web10.json", JSON.stringify(res.data), (err) => {
//               console.log("Error");
//           })
//       })
//       .catch(err => {
//         console.log(err);
//       });
    
//     res.sendFile(path.resolve(__dirname, "./templates/web10.json"))
// })


app.listen(3000, (err) => {
    if(err) console.log(err);
    else console.log("Server is listening at port 3000!");
    
    
})