//create connection
var connectionuserCount = new signalR.HubConnectionBuilder().withUrl("/hubs/userCount").build();

//connect to methods that hub invoke
connectionuserCount.on("updateTotalViews", (val) => {
    var newCountSpan = document.getElementById("totalViewsCount")
    newCountSpan.innerText = val.toString();
})

connectionuserCount.on("updateTotalUsers", (val) => {
    var newCountSpan = document.getElementById("totalUsersCount")
    newCountSpan.innerText = val.toString();
})


//invoke hub methods and send notification

function newWindowLoadedOnClient() {
    connectionuserCount.send("NewWindowLoaded");
}

//start
function fulfilled() {
    console.log('Connection success')
    newWindowLoadedOnClient()
}
function rejected() {
    console.log('Connection failed')
}


connectionuserCount.start().then(fulfilled, rejected)