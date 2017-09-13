const {app,BrowserWindow} = require("electron");

const fs= require("fs");

app.on("ready",(evt,info)=>{
    console.log("ready");
    let main_win=new BrowserWindow({
        width:800,
        height:600
    })
    main_win.loadURL(`file://${__dirname}/views/index.html`);
   // console.log();
   //autoUpadater.autoUpdater.checkForUpdates()

   fs.readFile("C:/Windows/System32/drivers/etc/hosts",(err,data)=>{
       console.log(data.toString())
   })
   try {
        fs.writeFile("C:/a.txt","aaaa")
   } catch (error) {
       
   }
   
})
app.on("window-all-closed",()=>{
    console.log("all close");
    app.exit();
})