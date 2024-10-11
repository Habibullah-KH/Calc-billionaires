// univarsal billionaires data

let fetchData = [];

// load billionaires data

const listData = () => {
    fetch(`https://forbes400.onrender.com/api/forbes400?limit=10`)
    .then((res) => res.json())
    .then((data) => {
      fetchData = data;
      showList(fetchData);

    })
    .catch((error) => console.log(error));
};
listData()


const showList = (obj) => {
obj?.forEach((item, position) => {

    const tbodyContainer = document.getElementById('tbody_container');
    const tbody = document.createElement('tr');
    tbody.innerHTML =`
            <td><a href="#" onclick="showDetail('${position}')">${item.person.name} <i class="fa-solid fa-eye"></i> </a></td>
            <td>${item.countryOfCitizenship}</td>
            <td>${item.industries[0]}</td>
            <td>${item.rank}</td>
            <td>$${item.finalWorth}</td>
          
          <!-- row end -->
    `;
    tbodyContainer.appendChild(tbody);

});
};


// get billioner data
const showDetail = (data) => {
  const billionerData = fetchData[data];
  document.getElementById('modalBtn').click();

  const modalBox = document.getElementById('modalBox');
  
  // Check if there's already a content div; if not, create one
  let contentDiv = modalBox.querySelector('.modal-content');
  
  // If the contentDiv doesn't exist, create it
  if (!contentDiv) {
    contentDiv = document.createElement('div');
    contentDiv.className = 'modal-content';
     // Optional: add a class for styling
    modalBox.appendChild(contentDiv);
  }

  contentDiv.innerHTML=`
  <div class="text_container flex flex-col justify-center items-center">
  <h1 class="text-3xl font-bold"> ${billionerData.person.name} </h1>
  <img class="h-52 rounded-3xl my-5" src="${billionerData.person.squareImage}">
  </div>
  `;

};

// show billioneer data modal
