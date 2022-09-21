
/*************** Làm Bài Tập***************/


/*************** NGUYỄN THANH TIẾN***************/
// function dom id
function getId(id) {
    return document.getElementById(id);
}
// function close and open
function tabOpen(e) {
    var rotate = e.target.getAttribute('id');
    var openRotate = document.getElementById(rotate);

    var showTab = e.target.getAttribute('data-Tab');
    var show = document.getElementById(showTab);

    if (show.style.display === "block") {
        show.style.display = 'none'
        openRotate.style.transform = 'rotate(0deg)';
    } else {
        show.style.display = 'block'
        openRotate.style.transform = 'rotate(180deg)';
    }
}


//Globle
/**
 inpuput: người dùng nhập vào 1 số
 
 process: mỗi lần người dùng nhập 1 input lấy số đó push vô mảng output và render ra giao diện
  output: push số đó vô mảng
 */
  var arrayName = [];

function addValue() {
    var userType = +getId('num1').value;
    
    arrayName.push(userType );
    var renderNum = getId('tagNumber');
    renderNum.innerHTML = arrayName;
    
}



// Bài Tập 1: Tính Tổng Số Dương
/**
    input: array = người dùng nhập vào

    process: chạy vòng lặp kiểm tra số dương và cộng dồn vô 1 biến sum


    output: Tổng số dương
 */

function calcNum() {
    // input : var arrayName Global scope
    
    // ouput: sum = 0;
    var sum = 0;
    // prcess:
    for (var i = 0; i < arrayName.length; i++) {
        if (arrayName[i] >= 0) {
            sum += arrayName[i]
        }
    }
    getId('calcAll').innerHTML = 'Tổng Số Dương Là: ' + sum;
}

// Bài 2: Đếm Số Dương;

/**
 input: người dùng nhập vào 1 array

process: var count = 0; mỗi lần kiểm tra ra số đó nếu là số dương count + thêm 1

 output: đếm số dương
 */

 function countNum() {
    var count = 0;
    for (var i = 0; i < arrayName.length; i++) {
        if (arrayName[i] >= 0) {
            count++
        }
    }
    getId('tagCountNum').innerHTML = 'Số Dương: ' + count;
 }


 // bài 3: tìm số nhỏ nhất
 /**
    input: nguoi dùng nhập vô 1 array

    process: var smallestNum = array[0] chạy vòng lặp for so sánh smallestNum vs các số trong array

    ouput: số nhỏ nhất
  */

function smallNum() {
    var smallestNum = arrayName[0];
    for (var i = 0; i < arrayName.length; i++) {
        if (smallestNum > arrayName[i]) {
            smallestNum = arrayName[i];
        }
    }
    getId('smallNum').innerHTML = 'Số Nhỏ Nhất: ' + smallestNum;
}

// bài 4: Tìm Số dương nhỏ nhất
/**
input: cho người dùng nhập vô 1 array

process: 
tạo 1 biến tạm để chứa index dương của mảng
chạy vòng lặp ngoài kiểm tra số dương
chạy vòng lặp trong so sánh index nếu là số dương nhỏ nhất sẽ gán giá trị index vô biến output

output: số dương nhỏ nhất
 */
function NumOn() {
    
    var countNumber = [];
    var comparNum = 0;

    for (var i = 0; i < arrayName.length; i++) {
        
        if (arrayName[i] >= 0) {
            countNumber += arrayName[i]; 
        }
    }
    if (countNumber.length > 0) {
        for (var k = 0; k < countNumber.length; k++) {
            
            comparNum = countNumber[k];
            
            if (countNumber[k] < countNumber[k + 1]) {
                comparNum = countNumber[k + 1];
            }
        }
    }else {
        comparNum = 'Không có số dương trong mảng';
    }

    getId('onNumber').innerHTML = comparNum;
}


// bài 5: tìm số chẵn cuối cùng
/**
input: cho người dùng nhập vô 1 mảng 

process: dùng vòng lặp for kiểm tra số chẵn theo thứ tự index và gán lần lượt cho 1 biến cho đến số chẵn của thứ tự index cuối cùng

output: in ra số chẵn cuối cùng của mảng
 */

function evenNum() {
    var evenNum = [];
    
    var i = 0;
    while(i < arrayName.length) {
        if (arrayName[i] % 2 === 0) {
            evenNum = arrayName[i]
        }
        i++
    }
    getId('evenNumber').innerHTML = evenNum;
    // easy game :))
}

// bài 6 đổi chỗ

/**
 * input: người dùng nhập vào 1 mảng, cho người dùng nhập vào 2 vị trí muốn đổi chỗ cho nhau
 * 
 * process:
 * tạo ra 2 biến chứa giá trị array vị trí index người dụng nhập vào,
 * thay đổi vị trị index
 * 
 * 
 * output: array thứ tự sau khi đổi
 */

function changePosition() {
    var index1 = parseFloat(getId('index1').value)
    var index2 = parseFloat(getId('index2').value)

    var newIndex1 = arrayName[index1 - 1];
    var newIndex2 = arrayName[index2 -1];
    arrayName.splice(index1 - 1, 1, newIndex2);
    arrayName.splice(index2 - 1, 1, newIndex1);
    getId('changePosition').innerHTML = arrayName;
}

// bai 7: sap xep so tang dan
/**
input: cho người dùng nhập vô 1 mảng

process: dùng phương pháp bubble sort 
chạy 2 vòng lặp for để so sánh từng cặp số và đưa số lớn hơn về sau

output: in ra 1 mảng theo thứ tự tăng dần
 */
function sort() {

    for (var k = arrayName.length - 1; k >= 0; k--) {
        for (var i = 0; i < k; i++) {
            
            if (arrayName[i] > arrayName[i + 1]){
                var temp = arrayName[i];
                arrayName[i] = arrayName[i + 1];
                arrayName[i + 1] = temp;
            }
        }
    }

    getId('sortResult').innerHTML = 'Thứ Tự Của Mảng Tăng Dần: ' + arrayName;
}



// bai 8: tìm số nguyên tố đầu tiên
/**
    input: cho người dùng nhập vào 1 mảng

    process:
    chạy vòng lặp kiểm tra số nguyên tố trong mảng 
    nếu là số nguyên tố đâu tiên được tìm thấy thì gán vô output và thoat vong lap;

    output: số nguyên tố đầu tiên
 */
function primeNum() {
    var primeNumber = 0;
    
   for (var i = 0; i < arrayName.length; i++) {
    var traSNT = true;    
    for (var h = 2; h < Math.sqrt(arrayName[i]); h++) {
        if (arrayName[i] % h === 0) {
            traSNT = false;
            break;
        }
    } 
    if (traSNT) {
        primeNumber = arrayName[i];
        break;
    }else {
        primeNumber = -1;
    }

   }
    getId('resultPrimeNum').innerHTML = 'số nguyên tố đầu tiên là: ' + primeNumber;
}
// bài 9: Đếm số nguyên

/**
input: cho người dùng nhập vào 1 mảng số 

process: dùng vòng lặp kiểm tra từng số trong mảng nếu số đó là số nguyên thì cộng 1 vào biến kết quả


output: đếm số nguyên
 */
var arrayInteger = [];
function addInteger() {
    
    var integerNum = +getId('integer').value;
    
    arrayInteger.push(integerNum);
    var iNum = getId('arrayInteger');
    iNum.innerHTML = arrayInteger;
    
}

function integerNum() {
    var sumInteger = 0;

    for (var i = 0; i < arrayInteger.length; i++) {
        if (Number.isInteger(arrayInteger[i])) {
            sumInteger += 1;
        }
    }
    getId('intergerResult').innerHTML = 'Tổng số nguyên là: ' + sumInteger;

}

// bài 10: so sánh số âm và số dương trong mảng

/**
input: cho người dùng nhập vô 1 mảng

process: tạo 1 biến đếm số âm và 1 biến đếm số dương
dùng vòng lặp kiểm tra từng số trong mảng, nếu là số dương tăng biến dương lên 1 nếu là số âm tăng biến âm lên 1, và so sánh 2 biến tra kết quả ra output;

output: so sánh số âm và số dương
 */

function compar() {
    var resultCompar = '';

    var positive = 0;
    var negative = 0;

    for (var hi = 0; hi < arrayName.length; hi++) {
        if (arrayName[hi] >= 0) {
            positive += 1;
        }else {
            negative += 1;
        }
    }
    if (positive > negative) {
        resultCompar = 'Số Dương > Số Âm';
    }else if (positive < negative) {
        resultCompar = 'Số Dương < Số Âm';
    }else{
        resultCompar = 'Số Dương = Số Âm';
    }
    
    getId('ComparResult').innerHTML = resultCompar;
}

