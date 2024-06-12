let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll('button');

let string = "";
let ans = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerHTML;
        if (buttonText == '=') {
            try {
                string = eval(string);
                input.value = string;
                ans = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        } else if (buttonText == 'AC') {
            string = "";
            input.value = string;
        } else if (buttonText == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else if (buttonText == 'Ans') {
            string += ans;
            input.value = string;
        } else {
            string += buttonText;
            input.value = string;
        }
    });
});