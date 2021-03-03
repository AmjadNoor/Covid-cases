const div = document.querySelector('.mContent');

const request = new XMLHttpRequest();
request.open('GET', 'https://api.covid19india.org/state_district_wise.json');
request.send();

request.addEventListener('load', function() {
  const data = JSON.parse(this.responseText);

  const htmlData = `<div class="live-cases">
   Active Cases: ${data.Bihar.districtData.Kishanganj.active}<br>
   Total Death: ${data.Bihar.districtData.Kishanganj.deceased}<br>
   Total Confirmed: ${data.Bihar.districtData.Kishanganj.confirmed}<br>
   Total Recovered: ${data.Bihar.districtData.Kishanganj.recovered}<br>
    </div>`;
  div.insertAdjacentHTML('beforeend', htmlData);
});