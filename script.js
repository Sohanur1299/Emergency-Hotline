
// coin setting
const coinViewer = document.getElementById("show-coin");
coinViewer.innerText = 100; // default coin

// Copy Count
const copyCount = document.getElementById("copy-count");
copyCount.innerText = 0; // default copy

const heartCount = document.getElementById("heart-count");
heartCount.innerText = 0; // default heartcount

// Implemented using event delegation technique
document.getElementById("card-section").addEventListener('click', ((event) => {
    // console.log(event.target.classList.value);
    if (event.target.classList.contains("class-heart")) {
        // console.log("found");
        const currentHeartCount = document.getElementById("heart-count"); // current heart count
        let getHeartCount = parseInt(currentHeartCount.innerText);
        getHeartCount += 1;
        currentHeartCount.innerText = getHeartCount;
    }

    // copy-btn-class
    // if (event.target.classList.contains("copy-btn-class")) {
    //     console.log('this is copy button class!');
    //     console.log(event.target.classList.value);
    // }
    // else{
    //     console.log('not a copy button cclass');
    // }
    const btn = event.target.closest(".copy-btn-class"); // starting from where I clicked, upward asking does it have copy btn class? no? go upward
    if (btn) {
        // console.log(btn.innerText);
        // console.log(btn.parentNode.parentNode);
        // nthCard = btn.parentNode.parentNode; // whole card 
        nthCard = btn.closest(".nth-card"); // whole nth card
        // console.log(nthCard);
        // element.querySelector(selector) - searches inside the element only
        serviceName = nthCard.querySelector(".service-name");
        serviceNumber = nthCard.querySelector(".service-number");
        console.log(serviceName.innerText, serviceNumber.innerText);
        
        
        
    } else {
        console.log('not the COPY button!');
    }
}))


