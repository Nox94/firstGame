// все ячейки поля
const cells = document.querySelectorAll(".game__cell");
const againButton = document.querySelector(".game__button");

console.log(cells);

// счетчик для подсчета количества кликов по ячейкам
let i = 0;

// обработчик по клику на ячейку поля
function handleCellClick(cell) {
  ++i; // при каждом клике +1 к числу кликов
  if (i % 2 === 0) {
    // проверяет, четное ли число кликов, чтобы отображать разные картинки
    cell.insertAdjacentHTML("beforeend", '<p class="game__cell-null">o</p>'); // иконка нолика
    cell.setAttribute("disabled", "true");
    console.log("click");
  } else {
    cell.insertAdjacentHTML("beforeend", '<p class="game__cell-christ">+</p>'); // иконка крестика
    cell.setAttribute("disabled", "true");
    console.log("click");
  }
  checkForWin();
}

function handleButtonClick() {
  console.log("click button");
  return cells.forEach((cell) => {
    cell.innerText = "";
    cell.style.backgroundColor = "aliceblue";
    cell.removeAttribute("disabled");
  });
}

function checkForWin() {
  if (
    (cells[0].innerText == "o" && cells[1].innerText == "o" && cells[2].innerText == "o") ||
    (cells[3].innerText == "o" && cells[4].innerText == "o" && cells[5].innerText == "o") ||
    (cells[6].innerText == "o" && cells[7].innerText == "o" && cells[8].innerText == "o") || // все по горизонтали 0
    (cells[0].innerText == "o" && cells[4].innerText == "o" && cells[8].innerText == "o") || // первая косая 0
    (cells[2].innerText == "o" && cells[4].innerText == "o" && cells[6].innerText == "o") || // вторая косая 0
    (cells[0].innerText == "o" && cells[3].innerText == "o" && cells[6].innerText == "o") ||
    (cells[1].innerText == "o" && cells[4].innerText == "o" && cells[7].innerText == "o") ||
    (cells[2].innerText == "o" && cells[5].innerText == "o" && cells[8].innerText == "o") || // все по вертикали 0
    (cells[0].innerText == "+" && cells[1].innerText == "+" && cells[2].innerText == "+") ||
    (cells[3].innerText == "+" && cells[4].innerText == "+" && cells[5].innerText == "+") ||
    (cells[6].innerText == "+" && cells[7].innerText == "+" && cells[8].innerText == "+") || // все погоризонтали +
    (cells[0].innerText == "+" && cells[4].innerText == "+" && cells[8].innerText == "+") || // первая косая +
    (cells[2].innerText == "+" && cells[4].innerText == "+" && cells[6].innerText == "+") || // вторая косая +
    (cells[0].innerText == "+" && cells[3].innerText == "+" && cells[6].innerText == "+") ||
    (cells[1].innerText == "+" && cells[4].innerText == "+" && cells[7].innerText == "+") ||
    (cells[2].innerText == "+" && cells[5].innerText == "+" && cells[8].innerText == "+")    // все по вертикали +
  ) {
    console.log("you won!");
    cells.forEach((cell) => {
      cell.setAttribute("disabled", "true");
      cell.style.backgroundColor = "#86d986";
    });
  }
}

// слушатель по клику на каждую ячейку
cells.forEach((cell) => cell.addEventListener("click", () => handleCellClick(cell)));

againButton.addEventListener("click", handleButtonClick);
