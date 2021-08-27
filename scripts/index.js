const inputs = document.querySelectorAll('input');
const buttons = document.querySelectorAll('button')
const tbody = document.querySelector('tbody');
const paragraph = document.querySelectorAll('p');


const dataFromServer = {...JSON.parse(localStorage.getItem('data'))}

const infoArray= [
  dataFromServer.name, 
  dataFromServer.email, 
  dataFromServer.firstPhone, 
  dataFromServer.secondaryPhone,
  dataFromServer.desc
]

const workersList = dataFromServer.workers;

const prepearedWorkersArray = () => {
  const workerArray = []
  
  workersList.forEach(worker => {
    const workersList = {
      fullName: `${worker.firstName} ${worker.lastName}` || '',
      dob: worker.dob,
      job: worker.job,
      experience: worker.experience,
      gender: worker.gender
    }
    workerArray.push(workersList)
  })

  return workerArray;
}

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    prepearedWorkersArray();
    fillGeneralInfo(e);
    createTable(prepearedWorkersArray())
  })
})

const fillGeneralInfo = e => {
  if(e.target.innerHTML === 'Fill') {
    inputs.forEach((element, i) => {
      element.value = infoArray[i]
      if(element.value) {
        document.querySelectorAll('label')[i].setAttribute('data-shrink', true)
        document.querySelectorAll('label')[i].classList.add('MuiInputLabel-shrink')
        document.querySelectorAll('label')[i].classList.add('MuiFprmLabel-filled')
      }
    })
  }
}

const createTable = (workersList) => {
  
  workersList.forEach(worker => {
    let row = document.createElement('tr');
    console.log('Calling worker: ', worker)

    Object.values(worker).forEach((cellData, i) => {
      if(i === 0) {
        console.log('gear')
        let cell = document.createElement('th')
        cell.appendChild(document.createTextNode(cellData));
        row.appendChild(cell)
      } else {
        let cell = document.createElement('td')
        cell.appendChild(document.createTextNode(cellData));
        row.appendChild(cell)
      }
    });
    let cell = document.createElement('td')
    let div = document.createElement('div')
    tbody.appendChild(row)
    stylingTd()
    stylingTr()
    stylingTh()
  })
}

const stylingTd = () => {
  const td = document.querySelectorAll('td');
  td.forEach(element => {
    element.classList.add(`MuiTableCell-root`)
    element.classList.add(`MuiTableCell-body`)
    element.classList.add(`MuiTableCell-alignRight`)
    element.classList.add(`MuiTableCell-sizeSmall`)
  })
}

const stylingTr = () => {
  const tr = document.querySelectorAll('tr');
  tr.forEach(element => {
    element.classList.add('MuiTableRow-root')
  })
}

const stylingTh = () => {
  const th = document.querySelectorAll('th');
  th.forEach(element => {
    element.classList.add(`MuiTableCell-root`)
    element.classList.add(`MuiTableCell-body`)
    element.classList.add(`MuiTableCell-center`)
    element.classList.add(`MuiTableCell-sizeSmall`)
    element.setAttribute('role', 'cell')
    element.setAttribute('scope', 'row')
  })
}
