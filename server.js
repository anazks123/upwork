const path = require("path");
const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const { response, Router } = require("express");
const fileUpload = require("express-fileupload");
const app = express()
//
const server = require('http').Server(app)
const io = require('socket.io')(server)
const { ExpressPeerServer } = require('peer');
const peerServer = ExpressPeerServer(server, {
  debug: true
});

const { v4: uuidV4 } = require('uuid');
const { stringify } = require("querystring");

app.use('/peerjs', peerServer);

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/images", express.static(__dirname + "public/images"));

app.use(fileUpload());

app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "upwork",
});
connection.connect(function (error) {
  if (!!error) console.log(error);
  else console.log("Database is Connected!!!");
});

app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.render("index");
  });
  app.get("/register", (req, res) => {
    res.render("register");
  });
  app.get("/companyreg", (req, res) => {
    res.render("companyreg");
  });
  app.get("/profile", (req, res) => {
    res.render("profile");
  });
  app.get("/updatepro", (req, res) => {
    res.render("updatepro");
  });
  app.get("/updatepro", (req, res) => {
    res.render("updatepro");
  });
  app.get("/company", (req, res) => {
    res.render("company");
  });
  app.get("/comapnyprofile", (req, res) => {
    res.render("comapnyprofile");
  });
  app.get("/addjob", (req, res) => {
    res.render("addjob");
  });
  app.get("/jobs", (req, res) => {
    res.render("jobs");
  });
 
  app.get("/uploadmywork", (req, res) => {
    res.render("uploadmywork");
  });
  app.get("/googleoay", (req, res) => {
    res.render("googleoay");
  });
  app.get("/uploadwork", (req, res) => {
    res.render("uploadwork");
  });
  app.post("/user", (req, res) => {
    var img_name;
    if (!req.files) return res.status(400).send("No files were uploaded.");
  
    var file = req.files.uploaded_image;
    var img_name = file.name;
    let sql = "INSERT INTO user SET ?";
  
    console.log(img_name);
    if (
      file.mimetype == "image/jpeg" ||
      file.mimetype == "image/png" ||
      file.mimetype == "image/gif"
    ) {
      file.mv("public/images/user/" + file.name, function (err) {
        if (err) return res.status(500).send(err);
        console.log(img_name);
  
        let data = {
          name: req.body.name,
          password: req.body.password,
          email: req.body.email,
          mobile: req.body.mobile,
         img : img_name,
         
        };
  
        let query = connection.query(sql, data, (err, results) => {
          if (err) console.log(err);
          else {
            res.render("index");
          }
        });
      });
    }
  });


  app.post("/userlogin", (req, res) => {
    var email = req.body.email;
    var pass = req.body.password;
    var sql2 ="SELECT * FROM myworks where  email =?"
    
    connection.query(
      "select * from user where email=? and password=?",
      [email, pass],
      function (error, result, fields) {
  
        if (error) {
          console.log(error);
        }
        if (result.length > 0) {
            let query = connection.query(sql2,[email],(error,row)=>{
              if(error) {console.log(error)}else{
                console.log(row)
                res.render("profile", { user: result, row :row });
              }
            })

          
        }
        
        
        else {
          res.redirect("/");
        }
      }
    );
  });

  app.post("/updatepro", (req, res) => {
    var mail = req.body.email;
    data ={
      profession:req.body.profession,
      education:req.body.	education,
      strength:req.body.strength,
      dis:req.body.dis
    }
    let sql = "UPDATE user SET ? Where 	email = ? ";
    let sql2 = "SELECT * FROM user Where email = ?";
    // SQL3
    let sql3 = "SELECT * FROM myworks where email = ?";
    
    let query = connection.query(sql,[data,mail], (err, result) => {
      if (err) console.log(err);
      else{
          let query = connection.query(sql2,[mail],(error,row) =>{
            if(error){
              console.log(error)
            }else{
              let query = connection.query(sql3,[mail],(err,rows)=>{
                if(err) console.log(err)
                else{
                  res.render("profile",{user:row,row:rows});
                }
              })
              
            }
          })
      }
     
    });
  });

  app.post("/cregister", (req, res) => {
    var img_name;
    if (!req.files) return res.status(400).send("No files were uploaded.");
  
    var file = req.files.uploaded_image;
    var img_name = file.name;
    let sql = "INSERT INTO company SET ?";
  
    console.log(img_name);
    if (
      file.mimetype == "image/jpeg" ||
      file.mimetype == "image/png" ||
      file.mimetype == "image/gif"
    ) {
      file.mv("public/images/company/" + file.name, function (err) {
        if (err) return res.status(500).send(err);
        console.log(img_name);
  
        let data = {
          name: req.body.name,
          password: req.body.password,
          email: req.body.email,
          mobile: req.body.mobile,
         img : img_name,
         section :req.body.section
         
        };
  
        let query = connection.query(sql, data, (err, results) => {
          if (err) console.log(err);
          else {
            res.render("companyreg");
          }
        });
      });
    }
  });

  app.post("/clogin", (req, res) => {
    var email = req.body.email;
    var pass = req.body.password;
    
    connection.query(
      "select * from company where email=? and password=?",
      [email, pass],
      function (error, result, fields) {
  
        if (error) console.log(error);
        if (result.length > 0) {
          res.render("comapnyprofile", { user: result });
        } else {
          res.redirect("/");
        }
      }
    );
  });

  app.post("/addjob", (req, res) => {
    var mail = req.body.mailid;
   
    let sql = "INSERT INTO addjob SET ?";
    let sql2 = "SELECT * FROM company Where email = ?";
    let query = connection.query(sql,req.body, (err, result) => {
      if (err) console.log(err);
      else{
          let query = connection.query(sql2,[mail],(error,row) =>{
            if(error){
              console.log(error)
            }else{
              res.render("comapnyprofile",{user:row});
            }
          })
      }
     
    });
  });



  app.get("/jobs/:mail", (req, res) => {
    var mailid = req.params.mail;
    let sql = "SELECT * FROM addjob WHERE mailid =?";
    let query = connection.query(sql, [mailid], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.render("jobs", { user: result });
      }
    });
  });


  app.get("/viewworks/:mail", (req, res) => {
    var mailid = req.params.mail;
    let sql = "SELECT * FROM works WHERE cemail =?";
    let query = connection.query(sql, [mailid], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result)
        res.render("viewworks", { user: result });
      }
    });
  });


  app.get("/applayjob/:mail", (req, res) => {
    var mailid = req.params.mail;

    res.render("applayjob",{user:mailid})
  });

  app.get("/requests/:mail", (req, res) => {
    var mailid = req.params.mail;
    console.log(mailid)
    sql ="SELECT * FROM applayjob WHERE cemail = ? and status ='requested'"
    let query = connection.query(sql,[mailid],(err,result)=>{
      if(err){
        console.log(err)
      }
      else
      {
          console.log(result)
          res.render("requests",{user:result})
      }
    } )
   
  });


  
  app.post("/pay", (req, res) => {
    var mail = req.body.cemail;
  
    sql ="INSERT INTO pay SET ? "
    let query = connection.query(sql,req.body,(err,result)=>{
      if(err){
        console.log(err)
      }
      else
      {
          console.log(result)
          res.render("googleoay",{user:mail})
      }
    } )
   });





  app.get("/employee/payment/:mail", (req, res) => {
    var mailid = req.params.mail;
    console.log(mailid)
    sql ="SELECT * FROM applayjob WHERE cemail = ?"
   
          res.render("payment",{user:mailid})
     
  });


  app.get("/employee/:mail", (req, res) => {
    var mailid = req.params.mail;
    console.log(mailid)
    sql ="SELECT * FROM applayjob WHERE cemail = ? and status = 'aproved' "
    let query = connection.query(sql,[mailid],(err,result)=>{
      if(err){
        console.log(err)
      }
      else
      {
          console.log(result)
          res.render("employee",{user:result})
      }
    } )
   
  });

  app.get("/requests/viewprofile/:mail", (req, res) => {
    var mailid = req.params.mail;
    sql ="SELECT * FROM user WHERE email = ?"
    sql2 = "SELECT * FROM myworks WHERE email = ?"
    let query = connection.query(sql,[mailid],(err,result)=>{
      if(err){console.log(err)}else{
          let query = connection.query(sql2,[mailid],(error,row)=>{
            if(error){console.log(error)}else{
              res.render("viewprofile",{user:result,row:row})
            }
          })
        
      }
    } )
   
  });


  app.get("/employee/viewprofile/:mail", (req, res) => {
    var mailid = req.params.mail;
    sql ="SELECT * FROM user WHERE email = ?"
    sql2 = "SELECT * FROM myworks WHERE email = ?"
    let query = connection.query(sql,[mailid],(err,result)=>{
      if(err){console.log(err)}else{
          let query = connection.query(sql2,[mailid],(error,row)=>{
            if(error){console.log(error)}else{
              res.render("viewprofile",{user:result,row:row})
            }
          })
        
      }
    } )
   
  });

  app.post("/uplayjob", (req, res) => {
    var mailid = req.body.email;
    let sql = "INSERT INTO applayjob SET ?";
    let sql2  ="SELECT * FROM user WHERE email = ?"
    var sql3 ="SELECT * FROM myworks where  email =?"
    let query = connection.query(sql, req.body, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        let query = connection.query(sql2,[mailid],(error,row)=>{
          if(error) console.log(error)
          else{
            let query = connection.query(sql3,[mailid],(er,rows)=>{
              if(er) {console.log(er)}else{
                res.render("profile", { user: row, row:rows });
              }
            })
            
          }
        })
       
      }
    });
  });



  app.post("/uploadmywork", (req, res) => {
    var img_name;
    if (!req.files) return res.status(400).send("No files were uploaded.");
  
    var file = req.files.uploaded_image;
    var img_name = file.name;
    let sql = "INSERT INTO myworks SET ?";
    let sql2 ="SELECT * FROM user WHERE email = ? "
    let sql3 = "SELECT * FROM myworks WHERE email = ?"
  
    console.log(img_name);
    
      file.mv("public/images/user/requests/works/" + file.name, function (err) {
        if (err) return res.status(500).send(err);
        console.log(img_name);
  
        let data = {
          name: req.body.name,
          dis: req.body.dis,
          email: req.body.email,
          file : img_name,
         
        };
        let query = connection.query(sql, data, (err, results) => {
          if (err) console.log(err);
          else {
            let query = connection.query(sql2,[req.body.email],(error,row)=>{
              if(error){console.log(error)}
              else{
                let query =  connection.query(sql3,[req.body.email],(err,rows)=>{
                  if(err){
                    console.log(err)
                  }else{
                    res.render("profile",{user:row,row:rows});
                  }
                })
                
              }
            })
          }
        });
      });
    
  });
  app.get("/jobcards", (req, res) => {

    let sql =  "SELECT * FROM  addjob"

    let query = connection.query(sql,(err,result)=>{
      if(err){
        console.log(err)
      }else{
        console.log(result)
        res.render("jobcards",{user:result});
      }
    })
});


app.post("/aprove", (req, res) => {
  var mail = req.body.mail;
  var cmail = req.body.cmail;
  let sql =  "UPDATE applayjob SET 	status = 'aproved' WHERE email = ?"
  let sql2  ="SELECT * FROM applayjob WHERE cemail = ?"

  let query = connection.query(sql,[mail],(err,result)=>{
    if(err){
      console.log(err)
    }else{
      let query = connection.query(sql2,[cmail],(error,row)=>{
        if(error){
          console.log(error)
        }else{
          console.log(result)
          res.render("requests",{user:row});
        }
      })
     
    }
  })
});



app.post("/search", (req, res) => {
   var name = req.body.name;
  let sql =  "SELECT * FROM  addjob where name = ?"

  let query = connection.query(sql,[name],(err,result)=>{
    if(err){
      console.log(err)
    }else{
      console.log(result)
      res.render("jobcards",{user:result});
    }
  })
});
app.get("/requests",(req,res)=>{
  res.render("requests")
})
app.post("/goback",(req,res)=>{

  var email = req.body.mail;
    
    
    connection.query(
      "select * from company where email=?",
      [email],
      function (error, result, fields) {
  
        if (error) console.log(error);
          res.render("comapnyprofile", { user: result });
        
      }
    );
})

















app.post('/fileUpload',(req,res)=>{
  var img_name;
if (!req.files) return res.status(400).send("No files were uploaded.");

var file = req.files.uploaded_image;
var img_name = file.name
let sql = "INSERT INTO works SET ?";

console.log(img_name);
  file.mv("public/images/user/works/" + file.name, function (err) {
    if (err) return res.status(500).send(err);
    console.log(img_name);

    let data = {
      file:img_name,
      dis:req.body.dis,
      cemail:req.body.cemail,
      mail:req.body.mail
    };

    let query = connection.query(sql, data, (err, results) => {
      if (err) console.log(err);
      else {
        res.render("uploadwork");
      }
    })
    });
  });
  server.listen(process.env.PORT||9002)