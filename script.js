const tableBody = document.getElementById('table__body');

const destinations = [
  'MADRID',
  'BELGRADE',
  'NEW YORK',
  'OMAN',
  'DUBAI',
  'FRAMKFURT',
  'LONDON',
];

const remarks = ['IN TIME', 'DELAYED', 'CANCELLED'];
let hour = 19;

let flights = [
  {
    time: '08:11',
    destination: 'OMAN',
    flight: 'OX 203',
    gate: 'A 01',
    remarks: 'ON TIME',
  },
  {
    time: '12:39',
    destination: 'LONDON',
    flight: 'CL 320',
    gate: 'C 31',
    remarks: 'CANCELLED',
  },
  {
    time: '13:21',
    destination: 'DUBAI',
    flight: 'DXB 201',
    gate: 'A 19',
    remarks: 'CANCELLED',
  },
  {
    time: '14:01',
    destination: 'FRANKFURT',
    flight: 'FR 402',
    gate: 'B 02',
    remarks: 'ON TIME',
  },
  {
    time: '15:22',
    destination: 'TOKYO',
    flight: 'TK 211',
    gate: 'A 32',
    remarks: 'DELAYED',
  },
];

const populateTable = () => {
  for (const flight of flights) {
    const tableRow = document.createElement('tr');

    for (const flightDetails in flight) {
      const tableCell = document.createElement('td');

      //   Seperate each letter from the word
      const word = Array.from(flight[flightDetails]);
      for (const [index, letter] of word.entries()) {
        const letterElement = document.createElement('div');

        setTimeout(() => {
          letterElement.classList.add('flip');
          letterElement.textContent = letter;

          tableCell.append(letterElement);
        }, 100 * index);
      }

      tableRow.append(tableCell);
    }

    tableBody.append(tableRow);
  }
};

populateTable();

// Random Letter
const generateRandomLetter = () => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  return alphabet.charAt(Math.floor(Math.random() * alphabet.length));
};

// Random Number
const generateRandomNumber = (maxNumber) => {
  const numbers = '0123456789';
  if (maxNumber) {
    const newNumbers = '012345';
    return newNumbers.charAt(Math.floor(Math.random() * newNumbers.length));
  }
  return numbers.charAt(Math.floor(Math.random() * numbers.length));
};

// Random Time
const generateTime = () => {
  let displayHour = hour;

  if (hour < 24) {
    hour++;
  }

  if (hour >= 24) {
    hour = 1;
    displayHour = hour;
  }

  if (hour < 10) {
    displayHour = '0' + hour;
  }

  return displayHour + ':' + generateRandomNumber(5) + generateRandomNumber();
};

const shuffleUp = () => {
  flights.shift();
  flights.push({
    time: generateTime(),
    destination: destinations[Math.floor(Math.random() * destinations.length)],
    flight:
      generateRandomLetter() +
      generateRandomLetter() +
      ' ' +
      generateRandomNumber() +
      generateRandomNumber() +
      generateRandomNumber(),
    gate:
      generateRandomLetter() +
      ' ' +
      generateRandomNumber() +
      generateRandomNumber(),
    remarks: remarks[Math.floor(Math.random() * remarks.length)],
  });

  tableBody.textContent = '';
  populateTable();
};

setInterval(shuffleUp, 2000);
