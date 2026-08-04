
// coin setting
const coinViewer = document.getElementById("show-coin");
coinViewer.innerText = 100; // default coin

// Copy Count
const copyCount = document.getElementById("copy-count");
copyCount.innerText = 0; // default copy

const heartCount = document.getElementById("heart-count");
heartCount.innerText = 0; // default heartcount

document.getElementById("card-section").addEventListener('click', ((event)=>{
    // console.log(event.target.classList.value);
    if(event.target.classList.contains("class-heart")){
        console.log("found");
        const currentHeartCount = document.getElementById("heart-count"); // current heart count
        let getHeartCount = parseInt(currentHeartCount.innerText);
        getHeartCount += 1;
        currentHeartCount.innerText = getHeartCount;
    }else{
        console.log("There is some issues!");
    }
}))


