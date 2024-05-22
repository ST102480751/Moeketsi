let count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else if (styles.contains("reset")) { // Check for "reset" class
      count = 0;
    }
    value.textContent = Pad(count); // Call Pad function here to format count
  });
});

function Pad(unit) {
  return ("0" + unit).slice(-2); // Adjusted to always return 2 characters
}











