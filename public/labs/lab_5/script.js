/* eslint-disable max-len */
function mapInit() {
  // follow the Leaflet Getting Started tutorial here
  const map = L.map('mapid').setView([51.505, -0.09], 13);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic2Jhc2hpcjEiLCJhIjoiY2ttM3gxeWZiMDc4bzJvcDlrMHgwYnQzbiJ9.GiU7BgOoznhctC2rNcvJQA'
  }).addTo(map);
  console.log(map);
  return map;
}

// async function dataHandler(mapObjectFromFunction) {
// form.addEventListener('submit', async (event) => {
// event.preventDefault();
//    console.log("submit fired");
//  const d = data.filter(
//   ((record) => record.category.toUpperCase().includes(search.value.toUpperCase())))
//    const display = d.reduce((unique, o) => {
// eslint-disable-next-line max-len
//    if(!unique.some(obj => obj.address_line_1 === o.address_line_1 && obj.city === o.city && obj.state === o.state)) {
//    unique.push(o);
// } return unique;
//    },[]);
//  while (targetList.firstChild) {
//    targetList.removeChild(targetList.firstChild)
// };
//    display.forEach((item) => {
//      const appendItem = document.createElement("li");
//    const html = display.map(place => {
//    return (`
//  <li>
//  <span class='name'>${place.name}</span>
//            <span class='category'>${place.category}</span>
//          <span class='address'>${place.address_line_1}</span>
//        <span class='location'>${place.city}, ${place.state}</span>
//      <span class='zip'>${place.zip}</span>
//  </li>
//        `);
// })
//  if (search.value.length === 0) {html.length = 0}
// else html.length = 75;
// targetList.innerHTML = html.join('');
// use your assignment 1 data handling code here
// and target mapObjectFromFunction to attach markers
// }

// async function windowActions() {
// const map = mapInit();
//  await dataHandler(map);
// }

// window.onload = windowActions;

// async function windowActions() {
//  console.log('Window loaded');
//  const form = document.querySelector('.userform');
//  const search = document.querySelector('#zip');
//  const targetList = document.querySelector('.target-list');

//  const request = await fetch('/api');
//  const data = await request.json();

//  form.addEventListener('keyup', async (event) => {
//    event.preventDefault();
//    console.log('submit fired');
//    const d = data.filter(
//      ((record) => record.zip.toUpperCase().includes(search.value.toUpperCase()))
//    );
//    const display = d.reduce((unique, o) => {
//      if (!unique.some((obj) => obj.address_line_1 === o.address_line_1 && obj.city === o.city && obj.state === o.state)) {
//        unique.push(o);
//      } return unique;
//    }, []);
//    while (targetList.firstChild) {
//      targetList.removeChild(targetList.firstChild);
//    }
//    display.forEach((item) => {
//      const appendItem = document.createElement('li');
//      const html = display.map((place) => (`
//            <li>
//              <span class='name'>${place.name}</span>
//              <span class='category'>${place.category}</span>
//              <span class='address'>${place.address_line_1}</span>
//              <span class='location'>${place.city}, ${place.state}</span>
//              <span class='zip'>${place.zip}</span>
//            </li>
//          `));
//      if (search.value.length === 0) { html.length = 0; } else html.length = 5;
//      targetList.innerHTML = html.join('');
//    });
//    console.log(display);
//    console.table(display);
//  });

//  search.addEventListener('input', (event) => {
//    console.log('input', event.target.value);
//  });
// }

// window.onload = windowActions;