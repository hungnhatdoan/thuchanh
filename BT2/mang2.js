let arr = [1,3,5,7,8];
let num = prompt('nhap so nguyen ')
function findNum(num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == num) {
            return "so " + num + " co trong mang o vi tri " + i;
        }
    }
    return 'so khong nam mang';
}
alert(findNum(num));
