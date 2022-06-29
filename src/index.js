module.exports = function toReadable(n) {
    let str = String(n); //число в строку
    let arr = str.split(""); //строку в массив
    let readableStr; //пустая строка для заполнения
    //если в массиве одна цифра---------------------------------------------------------------
    if (arr.length == 1) {
        if (arr[0] == 0) readableStr = "zero";
        if (arr[0] == 1) readableStr = "one";
        if (arr[0] == 2) readableStr = "two";
        if (arr[0] == 3) readableStr = "three";
        if (arr[0] == 4) readableStr = "four";
        if (arr[0] == 5) readableStr = "five";
        if (arr[0] == 6) readableStr = "six";
        if (arr[0] == 7) readableStr = "seven";
        if (arr[0] == 8) readableStr = "eight";
        if (arr[0] == 9) readableStr = "nine";
    }

    //если в массиве две цифры-----------------------------------------------------------------
    if (arr.length == 2) {
        if (arr[0] == 1) {
            if (arr[1] == 0) readableStr = "ten";
            if (arr[1] == 1) readableStr = "eleven";
            if (arr[1] == 2) readableStr = "twelve";
            if (arr[1] == 3) readableStr = "thirteen";
            if (arr[1] == 4) readableStr = "fourteen";
            if (arr[1] == 5) readableStr = "fifteen";
            if (arr[1] == 6) readableStr = "sixteen";
            if (arr[1] == 7) readableStr = "seventeen";
            if (arr[1] == 8) readableStr = "eighteen";
            if (arr[1] == 9) readableStr = "nineteen";
        }
        if (arr[0] == 2) {
            readableStr = "twenty ";
            duble();
        }
        if (arr[0] == 3) {
            readableStr = "thirty ";
            duble();
        }
        if (arr[0] == 4) {
            readableStr = "forty ";
            duble();
        }
        if (arr[0] == 5) {
            readableStr = "fifty ";
            duble();
        }
        if (arr[0] == 6) {
            readableStr = "sixty ";
            duble();
        }
        if (arr[0] == 7) {
            readableStr = "seventy ";
            duble();
        }
        if (arr[0] == 8) {
            readableStr = "eighty ";
            duble();
        }
        if (arr[0] == 9) {
            readableStr = "ninety ";
            duble();
        }
    }
    function duble(i) {
        if (arr[1] == 0) readableStr = readableStr.slice(0, -1);
        if (arr[1] == 1) readableStr += "one";
        if (arr[1] == 2) readableStr += "two";
        if (arr[1] == 3) readableStr += "three";
        if (arr[1] == 4) readableStr += "four";
        if (arr[1] == 5) readableStr += "five";
        if (arr[1] == 6) readableStr += "six";
        if (arr[1] == 7) readableStr += "seven";
        if (arr[1] == 8) readableStr += "eight";
        if (arr[1] == 9) readableStr += "nine";
    }

    //если в массиве три цифры--------------------------------------------------------------------
    if (arr.length == 3) {
        if (arr[0] == 1) readableStr = "one hundred ";
        if (arr[0] == 2) readableStr = "two hundred ";
        if (arr[0] == 3) readableStr = "three hundred ";
        if (arr[0] == 4) readableStr = "four hundred ";
        if (arr[0] == 5) readableStr = "five hundred ";
        if (arr[0] == 6) readableStr = "six hundred ";
        if (arr[0] == 7) readableStr = "seven hundred ";
        if (arr[0] == 8) readableStr = "eight hundred ";
        if (arr[0] == 9) readableStr = "nine hundred ";
        if (arr[1] == 0) {
            if (arr[2] == 0) readableStr = readableStr.slice(0, -1);
            if (arr[2] == 1) readableStr += "one";
            if (arr[2] == 2) readableStr += "two";
            if (arr[2] == 3) readableStr += "three";
            if (arr[2] == 4) readableStr += "four";
            if (arr[2] == 5) readableStr += "five";
            if (arr[2] == 6) readableStr += "six";
            if (arr[2] == 7) readableStr += "seven";
            if (arr[2] == 8) readableStr += "eight";
            if (arr[2] == 9) readableStr += "nine";
        }
        if(arr[1] == 1){
            if (arr[2] == 0) readableStr += "ten";
            if (arr[2] == 1) readableStr += "eleven";
            if (arr[2] == 2) readableStr += "twelve";
            if (arr[2] == 3) readableStr += "thirteen";
            if (arr[2] == 4) readableStr += "fourteen";
            if (arr[2] == 5) readableStr += "fifteen";
            if (arr[2] == 6) readableStr += "sixteen";
            if (arr[2] == 7) readableStr += "seventeen";
            if (arr[2] == 8) readableStr += "eighteen";
            if (arr[2] == 9) readableStr += "nineteen";
        }
        if (arr[1] == 2) {
            readableStr += "twenty ";
            dubles();
        }
        if (arr[1] == 3) {
            readableStr += "thirty ";
            dubles();
        }
        if (arr[1] == 4) {
            readableStr += "forty ";
            dubles();
        }
        if (arr[1] == 5) {
            readableStr += "fifty ";
            dubles();
        }
        if (arr[1] == 6) {
            readableStr += "sixty ";
            dubles();
        }
        if (arr[1] == 7) {
            readableStr += "seventy ";
            dubles();
        }
        if (arr[1] == 8) {
            readableStr += "eighty ";
            dubles();
        }
        if (arr[1] == 9) {
            readableStr += "ninety ";
            dubles();
        }
    }
    function dubles() {
        if (arr[2] == 0) readableStr = readableStr.slice(0, -1);
        if (arr[2] == 1) readableStr += "one";
        if (arr[2] == 2) readableStr += "two";
        if (arr[2] == 3) readableStr += "three";
        if (arr[2] == 4) readableStr += "four";
        if (arr[2] == 5) readableStr += "five";
        if (arr[2] == 6) readableStr += "six";
        if (arr[2] == 7) readableStr += "seven";
        if (arr[2] == 8) readableStr += "eight";
        if (arr[2] == 9) readableStr += "nine";
    }
    //-----------------------------------------------------------------------------------------------
    return readableStr;
}
