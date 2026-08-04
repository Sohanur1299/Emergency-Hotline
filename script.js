
// coin setting
const coinViewer = document.getElementById("show-coin");
coinViewer.innerText = 100; // default coin

// Copy Count
const copyCount = document.getElementById("copy-count");
copyCount.innerText = 0; // default copy

const heartCount = document.getElementById("heart-count");
heartCount.innerText = 0; // default heartcount

// call history holder
const callHistoryHolder = [];

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


    const btn = event.target.closest(".copy-btn-class"); // starting from where I clicked, upward asking does it have copy btn class? no? go upward
    if (btn) {
        const getCoinsElement = document.getElementById("show-coin");
        const availableCoins = parseInt(getCoinsElement.innerText);
        if (availableCoins >= 20) {
            // console.log(btn.innerText);
            // console.log(btn.parentNode.parentNode);
            // nthCard = btn.parentNode.parentNode; // whole card 
            nthCard = btn.closest(".nth-card"); // whole nth card
            // console.log(nthCard);
            // element.querySelector(selector) - searches inside the element only
            serviceName = nthCard.querySelector(".service-name");
            serviceNumber = nthCard.querySelector(".service-number");
            console.log(serviceName.innerText, serviceNumber.innerText);
            alert(`Service Name: ${serviceName.innerText}\nService Number:${serviceNumber.innerText}`);

            // update coins
            newCoins = availableCoins - 20;
            getCoinsElement.innerText = newCoins;

            // store into call history
            const callHistory = {
                serName: serviceName.innerText,
                serNumber: serviceNumber.innerText,
                time: new Date().toLocaleString()
            }
            callHistoryHolder.push(callHistory); // stored into the holder
            // console.log(callHistory, callHistoryHolder);

            if (callHistoryHolder.length > 0) {
                const callHistParent = document.getElementById("call-history-parent");

                callHistParent.innerText = "";
                for (const hist of callHistoryHolder) {
                    const newDiv = document.createElement("div");
                    newDiv.classList.add(
                        "flex", "justify-between", "items-center", "bg-[#FAFAFA]", "rounded-lg", "p-2", "mt-2"
                    );
                    newDiv.innerHTML = `<div class="mt-2">
                        <h2 class="text-sm font-bold">${hist.serName}</h2>
                        <p class="text-sm">${hist.serNumber}</p>
                    </div>
                    <div>
                        <p>${hist.time}</p>
                    </div>`;

                    callHistParent.appendChild(newDiv);
                }

            } else {
                console.log("Something wrong Happend!");

            }

        }
        else {
            alert("You do not enough coins.")
            return;
        }



    } else {
        console.log('not the COPY button!');
    }
}))


