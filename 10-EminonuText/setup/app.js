// lorem text
const text = [
  `Eminönü is a former district of Istanbul in Turkey, currently a quarter within the Fatih district, which is the capital district of Istanbul and of Istanbul Province. Eminönü covers roughly the area on which the ancient city of Byzantium was built. The Galata Bridge crosses the Golden Horn and connects Karaköy (historic Galata) at north with Eminönü at south.`,
  `Eminönü is located at the point where the Golden Horn connects with the southern entrance of the Bosphorus strait, near the Sea of Marmara. Up on the hill stands Topkapı Palace, the Blue Mosque (Sultanahmet Camii) and Hagia Sophia (Aya Sofya). It was a part of the Fatih district until 1928, which covered the whole peninsular area (the old Stamboul) within the Roman city walls - that area which was formerly the Byzantine capital Constantinople.`,
  `In the daytime there is a wide range of different foods, and in particular the area is covered with 'lokanta' serving soups, stews and hot vegetable dishes at lunchtime. You will find these in all the bazaars and shopping streets, for example the street called Hocapaşa near Sirkeci station has a great variety.`,
  `Eminönü offers any number of fast foods and snacks including döner, lahmacun and the grilled mackerel sandwiches on the waterfront by the ferry docks. These used to be sold from boats, this is now banned but you can still find mackerel grillers in the area.`,
  `In Sirkeci, across the road from the railway station, Konyali is one of Istanbul's oldest eateries, well known for its pastries. Behind the Spice Bazaar is Haci Muhittin, one of the oldest sweet-makers, famous for Turkish Delight and many other traditional sweets from Ottoman times, even drinks made of tamarind.`,
  `The köfte restaurants of Sultanahmet are famous throughout Istanbul. Much of the quarter is closed down in the evening although you will still find food in the following places: up in Sultanahmet, where there are so many hotel guests; in the fish restaurants of Kumkapi; and in one or two other well-known spots such as Hamdi Restaurant near Yeni Cami or the Balikci Sabahattin fish restaurant in Cankurtaran.`,
  `The area is heaving with shoppers; especially at weekends people come from all over the city, looking for discount clothing or plastic accessories, stationery and cheap toys in the streets behind the Spice Bazaar. You will not find the classy boutiques of the big shopping centres here. The clientele in Eminönü is traditional and working class.`,
  `Eminönü is crawling with thousands of people hawking goods on handcarts, makeshift stalls or a blanket laid out in the street, as well as the millions of little shops and workshops in the streets, bazaars and the big stone fortresses from the Ottoman era called Han in Turkish. Every inch is retail space, even the underpasses taking people from the ferries are lined with shops, kebab grillers and boys selling cigarettes.`,
];

const form = document.querySelector('.paragraph-form');
const amount = document.getElementById('amount');
const result = document.querySelector('.eminönü-text');

form.addEventListener('submit',function(e){
  e.preventDefault();
  const value = parseInt(amount.value);
  const random = Math.floor(Math.random()*text.length);
  console.log(isNaN(value));
  // empty
  // -1
  // > 9
  if(isNaN(value) || value <= 0 || value > 8){
    result.innerHTML = `<p class="result">${text[random]}</p>`;
  }
  else{
    let tempText = text.slice(0,value);
    tempText = tempText.map(function(item){
      return `<p class="result">${item}</p>`;
    }).join('');
    result.innerHTML = tempText;
  }

});