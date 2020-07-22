// Variabel untuk menyimpan keadaan
let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';
// Fungsi untuk membuat tampilan input bisa ditambahkan
// beberapa angka
// Dan kondisi jika tampilan angka 0
// jika diklik angka maka akan mengganti angka terlebih dahulu
// baru tambahkan beberapa angka
const inputNumber = (number)=>{
	if(currentNumber === '0'){
		currentNumber = number;
	}else{
		currentNumber += number;
	}
}

// Fungsi untuk menyimpan angka 
// dan menyimpan operator
// juga kondisi jika operator sebelumnya kosong dan
// maka angka sebelumnya tetap angak yang sekarang
const inputOperator = (operator)=>{
	if(calculationOperator === ''){
		prevNumber = currentNumber;
	}
	calculationOperator = operator;
	currentNumber = '';
}



// Tampilan Input Hasil dan Tombol Angka

// Mengambil elemen input dengan class calculator-screen
// Dan menyimpan ke sebuah variabel
const calculatorScreen = document.querySelector('.calculator-screen');

// Fungsi untuk memperbarui tampilan input
// dengan mengisi atribut valuenya dengan button yang diklik
const updateScreen = (number) =>{
	calculatorScreen.value = number;
}


// Mengambil banyak elemen HTML dengan class tertentu
// Dan menyimpan ke sebuah variabel
// Mengambil elemen button dengan class number
const numbers = document.querySelectorAll('.number');
console.log(numbers);


// Untuk mengambil nilai (value) dari elemen(tombol) yang di klik\
// Method addEventListener untuk mengambil value jika tombol diklik
// Yang nantinya valuenya diisikan difungsi updateScreen
numbers.forEach((number)=>{
	number.addEventListener('click', (event)=>{
		inputNumber(event.target.value);
		updateScreen(currentNumber);
	});
});


// Operator

// Mengambil elemen button yang mempunyai class operator
const operators = document.querySelectorAll('.operator');

// Fungsi operator
// menjalankan fungsi didalam inputOperator
operators.forEach((operator)=>{
	operator.addEventListener('click', (event) =>{
		inputOperator(event.target.value);
	});
});


// Kalkulasi

// Mengambil elemen button dengan class equal-sign
const equalSign = document.querySelector('.equal-sign');

// Fungsi Kalkulasi tergantung operatornya
const calculate = ()=>{
	let result = '';
	switch(calculationOperator){
		case "+":
			result = parseFloat(prevNumber) + parseFloat(currentNumber);
			break;
		case "-":
			result = parseFloat(prevNumber) - parseFloat(currentNumber);
			break;
		case "*":
			result = parseFloat(prevNumber) * parseFloat(currentNumber);
			break;
		case "/":
		result = parseFloat(prevNumber) / parseFloat(currentNumber);
			break;
		default:
			break;
	}
	// Mengubah hasil variabel currentNumber
	// Dan mereset calculationOperator
	currentNumber = result;
	calculationOperator = '';
}

// Fungsi menampilkan hasil dari fungsi calculate
equalSign.addEventListener('click', ()=>{
	calculate();
	updateScreen(currentNumber);
});


// Tombol All Clear

// Mengambil elemen button dengan class all-clear
const clearBtn = document.querySelector('.all-clear');

// Fungsi menghapus semua nilai variabel menyimpan keadaan
const clearAll = ()=>{
	prevNumber = '';
	calculationOperator = '';
	currentNumber = '0';
}

// Fungsi untuk menjalankan fungsi clearAll
// Dan memperbarui tampilan input hasil
clearBtn.addEventListener('click', ()=>{
	clearAll();
	updateScreen(currentNumber);
});

// Tombol Desimal

// Mengambil elemen button dengan class decimal
const decimal = document.querySelector('.decimal');


// Fungsi menambahkan desimal/koma
const inputDecimal = (dot)=>{
	if (currentNumber.includes('.')) {
		return;
	}
	currentNumber += dot;
}

// Fungsi menjalankan fungsi inputDecimal
// Dan menampilkan ke input hasil
decimal.addEventListener('click', (event)=>{
	inputDecimal(event.target.value);
	updateScreen(currentNumber);
});








