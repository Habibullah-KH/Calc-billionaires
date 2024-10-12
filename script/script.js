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
            // <td>${item.rank}</td>
            <td>$${item.finalWorth}</td>

    `;
    tbodyContainer.appendChild(tbody);

});
};


// get billioner data modal
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



// sort by rank
const sortDisord = () => {

  const sortData = async() => {
    const url = `https://forbes400.onrender.com/api/forbes400/`
    const res = await fetch(url);
    const data = await res.json();

    sortEach(data);
  };


const sortEach = (info) => {
  console.log(info);

  const modalbox = document.getElementById('tbody_container');
  modalbox.innerHTML ="";

  info.forEach((item, index) => {
    
      const sortTr = document.createElement('tr');
      sortTr.innerHTML=`
                  <td><a href="#" onclick="showDetail('${index}')">${item.person.name} <i class="fa-solid fa-eye"></i> </a></td>
                  <td>${item.countryOfCitizenship}</td>
                  <td>${item.industries[0]}</td>
                  <td>${item.rank}</td>
                  <td>$${item.finalWorth}</td>
      
      `;
      modalbox.appendChild(sortTr);


  });
};
sortData()



    // when click button selected effect
  const allBtn = document.querySelectorAll('.button');
  allBtn.forEach(button => button.classList.remove('border'));
  const sortBtn = document.getElementById('sort');
  sortBtn.classList.add('border');

  
};


// calculate wealth

const calc = () =>{

  // when click button selected effect
    const allBtn = document.querySelectorAll('.button');
    allBtn.forEach(button => button.classList.remove('border'));
  const calcMoney = document.getElementById('calcMoney');
  calcMoney.classList.add('border');
}
