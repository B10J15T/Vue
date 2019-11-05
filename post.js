let http=require('http');
http.createServer(function (req,res) {
    res.writeHead(200,{'content-type':'text/html;charset=utf-8'});
    let allDate='';
        req.on('data',function (chunk) {
        allDate+=chunk;
    });
        req.on('end',function () {
            let obj=JSON.parse(allDate);
          /*  console.log(obj.user);
            console.log(obj.pass)*/
          if(obj.user==='user'&&obj.pass==='123'||obj.user==='123'&&obj.pass==='user'){
              res.end('1');
          }else{
              res.end('-1');
          }
        });

}).listen(3000,()=>{
    console.log('服务器已启动')
})