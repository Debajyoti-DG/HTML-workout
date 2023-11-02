function updatedata()
{
    fetch("data.json")
    .then(response => response.json())
    .then(rsp => {
        console.log("Total response : ", rsp); // rsp is response --> ie, the entir json file conatining array of datas
        console.log("First data (data[0]) of response : ", rsp.data[0]); // here data refers to the "data" mentioned in json file and same for "time"
        console.log(rsp.time[0]); // first data of time in json
        //console.log("\n\n");
        console.log("All data obtained from response : ", rsp.data); // rsp.data returns the individual datas present inside the "data" in json file
        console.log(`Id of the first array [0 index] inside the "data" array of json : `, rsp.data[0].id); // the response 's "data" section is an array. Also rsp itself is an array, where the first and only element is "data"
        rsp.data.forEach(element => {
            f_address = element.address;
            f_name= element.name; //we now have got the address and name of elements  
            
            //console.log("fhgdfhfdhfch",f_address);


        });
    })
}

updatedata();


// // Initialize and add the map
// let map;

// async function initMap() {
//   // The location of Uluru
//   const position = { lat: -25.344, lng: 131.031 };
//   // Request needed libraries.
//   //@ts-ignore
//   const { Map } = await google.maps.importLibrary("maps");
//   const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

//   // The map, centered at Uluru
//   map = new Map(document.getElementById("map"), {
//     zoom: 4,
//     center: position,
//     mapId: "DEMO_MAP_ID",
//   });

//   // The marker, positioned at Uluru
//   const marker = new AdvancedMarkerElement({
//     map: map,
//     position: position,
//     title: "Uluru",
//   });
// }

// initMap();