const express = require('express');
const app = express();
const port = process.env.port || 5000;
app.set('view engine','ejs');
app.set('views','./src/views');
app.use(express.static('public'));
app.listen(port,function(){
    console.log("server is active on port"+port);
})
app.get('/',function(req,res){
    res.render("index");
});
app.get('/ugproject',function(req,res){
    res.sendFile('public/image/department_website_aswin.docx', {root: __dirname});
});
app.get('/pgproject',function(req,res){
    res.sendFile('public/image/exam_scheduling_system_aswin.docx', {root: __dirname});
});