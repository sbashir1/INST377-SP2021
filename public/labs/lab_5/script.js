/* eslint-disable max-len */
function mapInit() {
  // follow the Leaflet Getting Started tutorial here
  const mymap = L.map('mapid').setView([38.987, -76.9378], 13);
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic2Jhc2hpcjEiLCJhIjoiY2ttM3gxeWZiMDc4bzJvcDlrMHgwYnQzbiJ9.GiU7BgOoznhctC2rNcvJQA'
  }).addTo(mymap);
  console.log('mymap', mymap);
  return mymap;
}

// mapInit();

async function dataHandler(mapObjectFromFunction) {
  const form = document.querySelector('.userform');
  const search = document.querySelector('#zip');
  const targetList = document.querySelector('.target-list');

  const request = await fetch('/api');
  const data = await request.json();

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    console.log('submit fired');
    const d = data.filter(
      ((record) => record.zip.includes(search.value) && record.geocoded_column_1)
    );
    const display = d.reduce((unique, o) => {
      if (!unique.some((obj) => obj.address_line_1 === o.address_line_1 && obj.city === o.city && obj.state === o.state)) {
        unique.push(o);
      } return unique;
    }, []);
    while (targetList.firstChild) {
      targetList.removeChild(targetList.firstChild);
    }
    const target = display.slice(0, 5);
    target.forEach((item) => {
      const coord = item.geocoded_column_1.coordinates;
      console.log('marker coord', coord[0], coord[1])
      const marker = L.marker([coord[1], coord[0]]).addTo(mapObjectFromFunction);
      const appendItem = document.createElement('li');
      const html = target.map((place) => (`
          <li>
            <span class='name'>${place.name}</span> 
            <span class='category'>${place.category}</span>
            <span class='address'>${place.address_line_1}</span>
            <span class='location'>${place.city}, ${place.state}</span>
            <span class='zip'>${place.zip}</span>
          </li>
        `));
      if (search.value.length === 0) { html.length = 0; } else html.length = 5;
      targetList.innerHTML = html.join('');
    });
    console.log(target);
    console.table(target);

    target.forEach((item)) => {
    const coordinate = item.geocoded_column_1;
    console.log(coordinate)
    } 

 //   mapObjectFromFunction.panTo([coordinate[1]], coordinate[0], 0);
 //   console.log(target)
 //   console.log(mapObjectFromFunction)

  });

  search.addEventListener('input', (event) => {
    console.log('input', event.target.value);
  });
}
// use your assignment 1 data handling code here
// and target mapObjectFromFunction to attach markers

async function windowActions() {
  const map = mapInit();
  await dataHandler(map);
}

window.onload = windowActions;