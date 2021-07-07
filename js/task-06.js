const inputRef = document.querySelector("#validation-input");
function onInputRefChange() {
  if (inputRef.value.length === Number(inputRef.dataset.length)) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
    // console.log("true");
    return;
  }
  if (inputRef.value.length === 0) {
    inputRef.classList.remove("valid");
    inputRef.classList.remove("invalid");
    // console.log("false 0");
  }
  inputRef.classList.add("invalid");
  inputRef.classList.remove("valid");
  // console.log("false");
}
inputRef.addEventListener("blur", onInputRefChange);

// const inputRef = document.querySelector("#validation-input");
// inputRef.addEventListener("focus", focusInputRef);

// function focusInputRef(event) {
//   const inputLength = Number(event.target.dataset.length);
//   const inputValue = event.target.value.length;
//   if (inputLength === inputValue) {
//     inputRef.classList.add("valid");
//     inputRef.classList.remove("invalid");
//   } else {
//     inputRef.classList.remove("valid");
//     inputRef.classList.add("invalid");
//   }
//   console.log(inputLength);
//   console.log(inputValue);
//   console.log(inputLength === inputValue);
// }
