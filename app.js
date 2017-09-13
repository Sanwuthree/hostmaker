const {app,BrowserWindow} = require("electron");



app.on("ready",(evt,info)=>{
    console.log("ready");
    let main_win=new BrowserWindow({
        width:800,
        height:600
    })
    main_win.loadURL(`file://${__dirname}/views/index.html`)
})
app.on("window-all-closed",()=>{
    console.log("all close");
    app.exit();
})