const http = require("http");

const port = 8081;

http.createServer((req, res)=>{
    const {method, url} =req;
    //console.log(method, url)

    if(url == "/todos"){
        console.log("todos route")
    }else if(url == "/"){
    console.log("/ home default route")
    }

    res.end();
})
.listen(port,()=>{
    console.log("NodeJs Server Started Running on Port ${port}" );
})