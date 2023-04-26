var button = document.getElementById("start")

button.addEventListener("click", function(event) {
    navigator.bluetooth.requestDevice({ filters: [{ services: ['battery_service'] }] })
    .then(device => {
        console.log(device.name);

        return device.gatt.connect();
    })
    .then(server => { /* ... */ })
    .catch(error => { console.error(error); })
});