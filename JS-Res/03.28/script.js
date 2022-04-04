'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  email: 'jonas@mail.com'
};

account1.movements = account1.movements.map(function (el) {
  var month = Math.floor(Math.random() * 12);
  var day;
  if (month == 1) {
    day = Math.floor(Math.random() * 28) + 1;
  } else if ((month < 7 && month % 2 == 0) || (month >= 7 && month % 2 == 1)) {
    day = Math.floor(Math.random() * 31) + 1;
  } else {
    day = Math.floor(Math.random() * 30) + 1;
  }
  return {
    value: el,
    date: new Date(2022, month, day).toLocaleDateString()
  }
})

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  email: 'jessica@mail.com'
};

account2.movements = account2.movements.map(function (el) {
  var month = Math.floor(Math.random() * 12);
  var day;
  if (month == 1) {
    day = Math.floor(Math.random() * 28) + 1;
  } else if ((month < 7 && month % 2 == 0) || (month >= 7 && month % 2 == 1)) {
    day = Math.floor(Math.random() * 31) + 1;
  } else {
    day = Math.floor(Math.random() * 30) + 1;
  }
  return {
    value: el,
    date: new Date(2022, month, day).toLocaleDateString()
  }
})

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  email: 'steven@mail.com'
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  email: 'sarah@mail.com'
};
account3.movements = account3.movements.map(function (el) {
  var month = Math.floor(Math.random() * 12);
  var day;
  if (month == 1) {
    day = Math.floor(Math.random() * 28) + 1;
  } else if ((month < 7 && month % 2 == 0) || (month >= 7 && month % 2 == 1)) {
    day = Math.floor(Math.random() * 31) + 1;
  } else {
    day = Math.floor(Math.random() * 30) + 1;
  }
  return {
    value: el,
    date: new Date(2022, month, day).toLocaleDateString()
  }
})

account4.movements = account4.movements.map(function (el) {
  var month = Math.floor(Math.random() * 12);
  var day;
  if (month == 1) {
    day = Math.floor(Math.random() * 28) + 1;
  } else if ((month < 7 && month % 2 == 0) || (month >= 7 && month % 2 == 1)) {
    day = Math.floor(Math.random() * 31) + 1;
  } else {
    day = Math.floor(Math.random() * 30) + 1;
  }
  return {
    value: el,
    date: new Date(2022, month, day).toLocaleDateString()
  }
})

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

let loggedUser;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  const email = inputLoginUsername.value;
  const user = accounts.find(user => user.email == email);
  if (user) {
    if (user.pin === +inputLoginPin.value) {
      loggedUser = user;
      updateUi(user);
    } else {
      alert('err')
    }
  } else {
    alert('err')
  }
});

function updateUi(user){
  containerApp.style.opacity = 1;
  updateList(user.movements);
}

function updateList(list){
  containerMovements.innerHTML = '';
  list.forEach((el , index) => {
    const type = el.value < 0 ? "withdrawal" : "deposit"
    containerMovements.insertAdjacentHTML('afterbegin' , `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${index + 1} ${type}</div>
        <div class="movements__date">${el.date}</div>
        <div class="movements__value">${el.value}€</div>
      </div>
    `)
  })
}