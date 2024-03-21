'use strict';
// document.body.onload = addElements;
// function addElements() {
// };
// создаем элементы для страницы
const main = document.body.id = 'main';
// let recordsResults=[]; //результаты игры


const wrapper = document.createElement('div');
wrapper.classList.add('wrapper')
document.body.append(wrapper);

const gameWrapper = document.createElement('div');
gameWrapper.classList.add('game__wrapper')
wrapper.append(gameWrapper);

const buttonsWrapper = document.createElement('div');
buttonsWrapper.classList.add('buttons__wrapper')
wrapper.append(buttonsWrapper);

const timerWrapper = document.createElement('div');
timerWrapper.classList.add('timer__wrapper')
gameWrapper.append(timerWrapper);

const buttonShowPuzzle = document.createElement('button');
buttonShowPuzzle.classList.add('show-puzzle_button')
buttonShowPuzzle.textContent = 'Solution'
buttonsWrapper.append(buttonShowPuzzle);
// ----
const saveGameBtn = document.createElement('button');
saveGameBtn.classList.add('save-game_button')
saveGameBtn.textContent = 'Save Game'
buttonsWrapper.append(saveGameBtn);

const loadGameBtn = document.createElement('button');
loadGameBtn.classList.add('load-game_button')
loadGameBtn.textContent = 'Load Game'
buttonsWrapper.append(loadGameBtn);
// ---
const clearPuzzle = document.createElement('button');
clearPuzzle.classList.add('clear-puzzle_button')
clearPuzzle.textContent = 'Reset game'
buttonsWrapper.append(clearPuzzle);


// =========================

const createSmallPuzzleForm = () => {
  const formSmallPuzzle = document.createElement('form');
  const selectElement = document.createElement('select');

  selectElement.id = 'puzzle__small';
  // default option
  // const optionDefault = document.createElement('option');
  // optionDefault.disabled = true;
  // optionDefault.selected = true;
  // optionDefault.value = 'default';
  // optionDefault.textContent = 'Nonograms';

  const optionBomb = document.createElement('option');
  optionBomb.value = 'bomb';
  optionBomb.textContent = 'Bomb 5x5';

  const optionRoboface = document.createElement('option');
  optionRoboface.value = 'roboface';
  optionRoboface.textContent = 'Roboface 5x5';

  const optionBat = document.createElement('option');
  optionBat.value = 'bat';
  optionBat.textContent = 'Bat 5x5';

  const optionDog = document.createElement('option');
  optionDog.value = 'dog';
  optionDog.textContent = 'Dog 5x5';

  const optionSmile = document.createElement('option');
  optionSmile.value = 'smile';
  optionSmile.textContent = 'Smile 5x5';

  const optionLeaf = document.createElement('option');
  optionLeaf.value = 'leaf';
  optionLeaf.textContent = 'Leaf 10x10';

  const optionAmbulance = document.createElement('option');
  optionAmbulance.value = 'ambulance';
  optionAmbulance.textContent = 'Ambulance 10x10';

  const optionSnail = document.createElement('option');
  optionSnail.value = 'snail';
  optionSnail.textContent = 'Snail 10x10';

  const optionQuestion = document.createElement('option');
  optionQuestion.value = 'question';
  optionQuestion.textContent = 'Question 10x10';

  const optionClown = document.createElement('option');
  optionClown.value = 'clown';
  optionClown.textContent = 'Clown 10x10';

  const optionDuck = document.createElement('option');
  optionDuck.value = 'duck';
  optionDuck.textContent = 'Duck 15x15';

  const optionMouse = document.createElement('option');
  optionMouse.value = 'mouse';
  optionMouse.textContent = 'Mouse 15x15';

  const optionMobile = document.createElement('option');
  optionMobile.value = 'mobile';
  optionMobile.textContent = 'Mobile 15x15';

  const optionMonkey = document.createElement('option');
  optionMonkey.value = 'monkey';
  optionMonkey.textContent = 'Monkey 15x15';

  const optionFlower = document.createElement('option');
  optionFlower.value = 'flower';
  optionFlower.textContent = 'Flower 15x15';

  // selectElement.append(optionDefault);
  selectElement.append(optionBomb);
  selectElement.append(optionRoboface);
  selectElement.append(optionBat);
  selectElement.append(optionDog);
  selectElement.append(optionSmile);
  selectElement.append(optionLeaf);
  selectElement.append(optionAmbulance);
  selectElement.append(optionSnail);
  selectElement.append(optionQuestion);
  selectElement.append(optionClown);
  selectElement.append(optionDuck);
  selectElement.append(optionMouse);
  selectElement.append(optionMobile);
  selectElement.append(optionMonkey);
  selectElement.append(optionFlower);
  formSmallPuzzle.append(selectElement);
  buttonsWrapper.append(formSmallPuzzle);
}
createSmallPuzzleForm();
// ==========================


//звуки кликов и победы
// const clickSounds = {
//   click1: new Audio('asset/audio/click1.mp3'),
//   click2: new Audio('asset/audio/click2.mp3'),
//   win: new Audio('asset/audio/win.mp3')
// };

const clickSounds = {
  click1: new Audio('asset/audio/click1.mp3'),
  click2: new Audio('asset/audio/click2.mp3'),
  win: new Audio('asset/audio/win.mp3'),
  playing: false,

};

function playSound(sound) {
  const mute = muteBtn.classList.contains('muted')

  if ((!clickSounds.playing) && (mute)) {
    clickSounds.playing = true;
    sound.currentTime = 0;
    sound.play();
    setTimeout(() => {
      clickSounds.playing = false;
    }, sound.duration * 100);
  }
}

// Создаем таблицу размером 6х6

const SMALL_SIZE = 6
const MEDIUM_SIZE = 11
const BIG_SIZE = 16

const deleteTable = () => {
  const table = document.querySelector('table');
  if (table) { table.remove() }
}

function createTable(SIZE) {
  deleteTable();


  const table = document.createElement('table');
  // Создаем ячейки и добавляем их в таблицу
  for (let i = 0; i < SIZE; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < SIZE; j++) {
      const cell = document.createElement('td');
      if (i < 1 || j < 1) {
        cell.classList.add('hint'); // добавляем класс 'hint' для оставшихся ячеек
        cell.classList.add(`x${i}${j}`);
      } else {
        cell.classList.add('cell'); // добавляем класс 'cell' для оставшихся ячеек
        cell.classList.add(`c${i}${j}`);
        // cell.setAttribute('exist', 'false')
      }
      row.appendChild(cell);
    }
    table.appendChild(row);
    // ===================================== 




  }

  // Добавляем таблицу
  gameWrapper.append(table);
}

const makeHints = () => {
  // TODO
  // Выбираем все элементы с классом "hint" и содержащие определенные классы
  const hintCellsColumn = document.querySelectorAll('.hint');
  // Перебираем найденные элементы и добавляем внутрь каждого из них div с классом "divHint"
  for (let i = 1; i < hintCellsColumn.length / 2; i++) {
    const divColHint = document.createElement('div');
    divColHint.classList.add(`div-col__hint`);
    hintCellsColumn[i].append(divColHint);
    // console.log(hintCellsColumn)
  }

  // Выбираем все элементы с классом "hint" и содержащие определенные классы
  const hintCellsRow = document.querySelectorAll('.hint');
  // Перебираем найденные элементы и добавляем внутрь каждого из них div с классом "divHint"
  for (let i = (Math.floor(hintCellsRow.length + 1) / 2); i < hintCellsRow.length; i++) {
    const divRowHint = document.createElement('div');
    divRowHint.classList.add(`div-row__hint`);
    hintCellsRow[i].append(divRowHint);
  }

  // =============================================
  // добавим span для div
  const divRowHintAll = document.querySelectorAll('.div-row__hint');
  for (let i = 0; i < divRowHintAll.length; i++) {
    const spanRowHint = document.createElement('span');
    spanRowHint.classList.add('span-cell', `span-row__hint${i + 1}`);
    divRowHintAll[i].append(spanRowHint);
  }

  const divColHintAll = document.querySelectorAll('.div-col__hint');
  for (let i = 0; i < divColHintAll.length; i++) {
    const spanColHint = document.createElement('span');
    spanColHint.classList.add('span-cell', `span-col__hint${i + 1}`);
    divColHintAll[i].append(spanColHint);
  }
  // ================================
}
createTable(SMALL_SIZE);

//TODO
// создание матрицы рисунка из атрибутов

const fieldMatrixSmall = [
  {
    picturesClassMatrixSmall: [ //bomb
      [false, false, true, false, false],
      [false, true, false, false, true],
      [true, true, true, false, false],
      [true, false, true, false, false],
      [true, true, true, false, false]
    ],
    columnArrHints: [3, '1 2', '1 3', 1, 1],
    rowArrHints: [2, '1 1', 3, '1  1', 3]
  },
  {
    picturesClassMatrixSmall: [ //roboface
      [true, true, true, true, true],
      [false, false, true, false, false],
      [false, false, true, false, false],
      [false, false, false, false, false],
      [true, true, true, true, true]
    ],
    columnArrHints: ['1 1 ', '2 2', '3 1', '2 2', ' 1 1'],
    rowArrHints: [5, 3, 1, '1  1', 5]
  },
  {
    picturesClassMatrixSmall: [ //bat
      [false, true, false, true, false],
      [true, true, true, true, true],
      [true, true, true, true, true],
      [true, false, true, false, true],
      [true, false, false, false, true]
    ],
    columnArrHints: [4, 3, 3, 3, 4],
    rowArrHints: ['1 1', 5, 5, '1 1 1', '1 1']
  },
  {
    picturesClassMatrixSmall: [ //dog
      [false, false, false, true, false],
      [true, false, true, true, true],
      [false, true, true, true, false],
      [false, true, false, true, false],
      [false, true, false, true, false]
    ],
    columnArrHints: [1, 3, 2, 5, 1],
    rowArrHints: [1, '1 3', 3, '1  1', '1 1']
  },
  {
    picturesClassMatrixSmall: [ //smile
      [true, true, false, true, true],
      [true, true, false, true, true],
      [false, false, false, false, false],
      [true, false, false, false, true],
      [false, true, true, true, false]
    ],
    columnArrHints: ['2 1', '2 1', 1, '2 1', '2 1'],
    rowArrHints: ['2 2', '2 2', ' ', '1  1', 3]
  },
  // --------------------
  {
    picturesClassMatrixSmall: [ //leaf 10x10
      [false, false, false, false, false, true, true, true, true, true],
      [false, false, false, true, true, false, true, true, false, true],
      [false, false, true, true, true, false, true, false, true, true],
      [false, false, true, false, true, true, false, true, true, false],
      [false, true, true, false, true, false, true, false, true, false],
      [false, true, true, true, false, true, true, true, true, false],
      [false, true, true, false, true, false, false, true, false, false],
      [false, true, false, true, true, true, true, true, false, false],
      [true, true, true, true, true, true, false, false, false, false],
      [true, false, false, false, false, false, false, false, false, false]
    ],
    columnArrHints: [2, 5, '5 1', '2 1 2', '4 3', '1 1 1 2', '3 2 1', '2 1 3', '1 4', '1 3'],
    rowArrHints: [5, '2 2 1', '3 1 2', '1 2 2', '2 1 1 1', '3 4', '2 1 1', '1 5', 6, 1]
  },
  {
    picturesClassMatrixSmall: [ //ambulance 10x10
      [false, false, false, true, true, false, false, false, false, false],
      [false, true, true, true, true, true, true, true, true, true],
      [true, true, false, true, true, true, true, false, true, true],
      [true, false, false, true, true, true, false, false, false, true],
      [true, false, false, true, true, true, true, false, true, true],
      [true, true, true, true, true, true, true, true, true, true],
      [true, true, true, true, true, true, true, true, true, true],
      [false, true, false, true, false, false, false, true, false, true],
      [false, false, true, false, false, false, false, false, true, false],
      [true, true, true, true, true, true, true, true, true, true]
    ],
    columnArrHints: ['5 1', '2 3 1', '1 2 2', '8 1', '7 1', '6 1', '2 3 1', '1 3 1', '2 3 2', '7 1'],
    rowArrHints: [2, 9, '2 4 2', '1 3 1', '1 4 2', 10, 10, '1 1 1 1', '1 1', 10]
  },
  {
    picturesClassMatrixSmall: [ //snail 10x10
      [false, false, true, true, true, true, false, false, false, false],
      [false, true, true, false, true, true, true, false, false, false],
      [true, true, true, true, false, true, true, true, false, false],
      [true, false, true, true, true, false, true, true, false, false],
      [true, true, true, true, true, false, true, true, false, false],
      [true, true, true, true, false, true, true, false, false, false],
      [true, true, true, true, true, true, true, false, true, true],
      [true, true, true, true, true, true, false, false, false, true],
      [false, true, true, true, true, true, true, true, true, true],
      [true, true, true, true, true, true, true, true, true, false]
    ],
    columnArrHints: ['6 1', '2 6', 10, '1 8', '2 2 4', '3 5', '6 2', '3 2', '1 2', 2],
    rowArrHints: [4, '2 3', '4 3', '1 3 2', '5 2', '4 2', '7 1', '6 1', 9, 9]
  },
  {
    picturesClassMatrixSmall: [ //question 10x10
      [false, false, true, true, true, true, true, true, false, false],
      [false, true, true, false, false, false, false, true, true, false],
      [false, true, true, false, false, false, false, true, true, false],
      [false, false, false, false, false, false, false, true, true, false],
      [false, false, false, false, false, false, true, true, true, false],
      [false, false, false, false, true, true, true, true, false, false],
      [false, false, false, false, true, true, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, true, true, false, false, false, false],
      [false, false, false, false, true, true, false, false, false, false]
    ],
    columnArrHints: [' ', 2, 3, 1, '1 2 2', '1 2 2', '1 2', 5, 4, ' '],
    rowArrHints: [6, '2 2', '2 2', 2, 3, 4, 2, ' ', 2, 2]
  },
  {
    picturesClassMatrixSmall: [ //clown 10x10
      [false, false, false, true, true, true, true, false, false, false],
      [false, false, true, false, false, true, true, true, false, false],
      [true, true, true, true, true, true, true, true, true, true],
      [false, true, false, true, false, false, true, false, true, false],
      [true, false, false, false, true, true, false, false, false, true],
      [true, false, false, false, true, true, false, false, false, true],
      [false, true, false, false, false, false, true, false, true, false],
      [false, true, false, false, true, true, false, false, true, false],
      [false, false, true, false, false, false, false, true, false, false],
      [false, true, true, true, true, true, true, true, true, false]
    ],
    columnArrHints: ['1 2 ', '2 2 1', '2 2', '1 2 1', '1 1 2 1 1', '3 2 1 1', '4 1 1', '2 2', '2 2 1', '1 2'],
    rowArrHints: [4, '1 3', 10, '1 1 1 1', '1 2 1', '1 2 1', '1 1 1', '1 2 1', '1 1', 8]
  },
  // -----------------------------
  {
    picturesClassMatrixSmall: [ // Duck 15x15
      [false, false, false, false, false, false, false, false, false, true, true, true, false, false, false],
      [false, false, false, false, false, false, false, false, true, true, true, true, true, false, false],
      [false, false, false, false, false, false, false, true, true, true, true, false, true, true, true],
      [false, false, false, false, false, false, false, true, true, true, true, true, true, true, false],
      [false, false, false, false, false, false, false, false, true, true, true, true, true, false, false],
      [false, false, false, false, false, false, false, false, false, true, true, true, false, false, false],
      [false, false, false, false, false, false, false, false, true, true, true, true, true, false, false],
      [true, false, false, false, false, false, true, true, true, true, true, true, true, true, false],
      [true, true, true, false, false, true, true, true, false, false, false, true, true, true, false],
      [true, true, true, true, true, true, true, false, true, true, true, false, true, true, false],
      [false, true, true, true, true, true, false, true, true, true, true, false, true, true, false],
      [false, true, true, true, true, true, true, true, true, false, false, true, true, false, false],
      [false, false, true, true, true, true, true, true, true, true, true, true, false, false, false],
      [false, false, false, false, true, true, false, true, true, true, false, false, false, false, false],
      [false, false, false, false, false, false, true, true, true, true, true, true, false, false, false]
    ],
    columnArrHints: [3, 4, 5, 4, 5, 6, '3 2 1', '2 2 5', '4 2 6', ' 8 2 3', '8 2 1 1', '2 6 2 1', '4 6', '2 4', 1],
    rowArrHints: [3, 5, '4 3', 7, 5, 3, 5, '1 8', '3 3 3', '7 3 2', '5 4 2', '8 2', 10, '2 3', 6]
  },
  {
    picturesClassMatrixSmall: [ // Mouse 15x15
      [false, false, false, false, false, false, false, false, false, false, false, false, true, true, true],
      [false, false, false, false, false, true, true, true, true, false, false, true, true, false, true],
      [false, false, false, true, true, true, false, false, true, false, false, true, false, true, false],
      [true, true, true, false, true, false, false, true, true, false, false, true, false, false, false],
      [true, true, false, false, false, false, false, true, false, false, false, true, true, false, false],
      [false, true, true, true, true, false, false, true, true, false, false, false, true, true, false],
      [false, false, false, false, true, true, false, false, true, true, false, false, false, true, true],
      [false, false, false, false, false, true, false, false, false, true, true, true, false, false, true],
      [false, false, false, false, false, true, true, false, false, false, false, true, true, false, true],
      [false, false, false, true, true, true, true, false, false, false, false, false, true, true, true],
      [false, false, false, true, false, true, false, false, true, true, false, false, false, true, true],
      [false, false, false, false, false, true, false, false, true, false, false, false, false, true, false],
      [false, false, false, false, false, false, true, false, true, false, false, false, false, true, false],
      [false, false, false, false, false, true, true, true, true, true, false, false, true, true, false],
      [false, false, false, true, true, true, false, true, true, false, true, true, true, false, false]
    ],
    columnArrHints: [2, 3, ' 1 1', '1 1 2 1', '2 2 1 1', '2 6 2', '1 2 2', '1 3 2', '3 2 5', '2 1 1', '1 1', '4 2 1', '2 2 2 2', '1 1 2 5', '2 5'],
    rowArrHints: [3, '4 2 1', '3 1 1 1', '3 1 2 1', '2 1 2', '4 2 2', '2 2 2', '1 3 1', '2 2 1', '4 3', '1 1 2 2', '1 1 1', '1 1 1', '5 2', '3 2 3']
  },
  {
    picturesClassMatrixSmall: [ // Mobile 15x15
      [false, false, false, false, false, false, false, false, false, false, true, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, true, true, false, false, false, false],
      [false, true, true, false, false, false, false, false, false, true, true, false, false, false, false],
      [false, true, false, false, true, true, true, true, true, true, true, false, false, false, false],
      [false, true, false, false, true, true, true, true, true, true, true, false, false, false, false],
      [true, true, false, false, true, true, false, false, false, true, true, false, false, false, false],
      [true, true, false, false, true, true, false, false, false, true, true, false, false, false, false],
      [false, false, false, false, true, true, true, true, true, true, true, false, false, false, false],
      [false, false, false, false, true, false, false, false, false, false, true, false, false, true, true],
      [false, false, false, false, true, false, true, false, true, false, true, false, false, true, false],
      [false, false, false, false, true, false, false, true, false, false, true, false, true, true, false],
      [false, false, false, false, true, false, true, false, true, false, true, false, true, true, false],
      [false, false, false, false, true, false, false, true, false, false, true, false, false, false, false],
      [false, false, false, false, true, false, true, false, true, false, true, false, false, false, false],
      [false, false, false, false, true, true, true, true, true, true, true, false, false, false, false]
    ],
    columnArrHints: [2, 5, 1, ' ', 12, '5 1', '2 1 1 1 2', '2 1 1 1 1', '2 1 1 1 2', '7 1', 15, '', 2, 4, 1],
    rowArrHints: [1, 2, '2 2', '1 7', '1 7', '2 2 2', '2 2 2', 7, '1 1 2', '1 1 1 1 1', '1 1 1 2', '1 1 1 1 2', '1 1 1', '1 1 1 1', 7]
  },
  {
    picturesClassMatrixSmall: [ // Monkey 15x15
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, true, false, false, false, false, false, false, false, false, true, false],
      [false, false, false, true, true, true, false, false, false, false, false, false, true, false, true],
      [false, false, true, false, false, true, true, false, false, false, false, false, false, false, true],
      [false, true, false, true, false, true, false, false, false, false, false, false, false, true, false],
      [true, false, false, false, false, true, true, true, true, true, true, true, true, false, false],
      [true, true, true, true, true, true, false, false, false, false, false, false, true, false, false],
      [false, false, false, false, true, false, false, false, false, false, false, false, true, false, false],
      [false, false, false, false, true, true, true, true, true, true, true, true, true, false, false],
      [false, false, false, false, true, false, false, false, false, false, false, true, false, false, false],
      [false, false, false, false, true, false, false, false, false, false, false, true, false, false, false],
      [false, false, false, true, true, false, false, false, false, false, true, true, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    ],
    columnArrHints: [2, '1 1', '1 1', '1 1 1 1', '2 6', '5 1', ' 1 1 1', '1 1', '1 1', '1 1', '1 1 1', '1 4', '1 4', '1 1', 2],
    rowArrHints: ['', '', '', '1 1', '3 1 1', '1 2 1', '1 1 1 1', '1 8', '6 1', '1 1', 9, '1 1', '1 1', '2 2', '']
  },
  {
    picturesClassMatrixSmall: [ // Flower 15x15
      [false, false, false, false, false, true, false, true, false, true, false, false, false, false, false],
      [false, false, false, false, false, true, true, false, true, true, false, false, false, false, false],
      [false, false, false, false, false, true, true, true, true, true, false, false, false, false, false],
      [false, false, false, false, false, true, true, true, true, true, false, false, false, false, false],
      [false, false, false, false, false, false, true, true, true, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, true, false, false, false, false, false, false, false],
      [false, false, true, true, true, false, false, true, false, false, false, false, false, false, false],
      [false, false, false, true, true, true, false, true, false, false, true, true, true, false, false],
      [false, false, false, false, true, true, true, true, false, true, true, true, false, false, false],
      [false, false, false, false, false, false, false, true, true, true, true, false, false, false, false],
      [false, false, false, false, false, false, false, true, false, false, false, false, false, false, false],
      [false, false, false, false, true, true, true, true, true, true, true, false, false, false, false],
      [false, false, false, false, true, true, true, true, true, true, true, false, false, false, false],
      [false, false, false, false, false, true, true, true, true, true, false, false, false, false, false],
      [false, false, false, false, false, true, true, true, true, true, false, false, false, false, false]
    ],
    columnArrHints: ['', '', 1, 2, '3 2', '4 2 4', '4 1 4', '1 13', '4 1 4', '4 2 4', '3 2', 2, 1, '', ''],
    rowArrHints: ['1 1 1', '2 2', 5, 5, 3, 1, '3 1', '3 1 3', '4 3', 4, 1, 7, 7, 5, 5]
  }
]


function addPicturesToTable(picturesClassMatrix) {
  const cellElements = document.querySelectorAll('.cell');
  for (let i = 0; i < picturesClassMatrix.length; i++) {
    for (let j = 0; j < picturesClassMatrix[i].length; j++) {
      cellElements[i * picturesClassMatrix[i].length + j].setAttribute('exist', picturesClassMatrix[i][j]);
    }
  }
}
// addPicturesToTable(fieldMatrixSmall[2].picturesClassMatrixSmall)



//добавляем подсказки:
const addHintsToTable = (...[arrCol, arrRow]) => {
  const hintCells = document.querySelectorAll('.span-cell')
  // console.log(colHint)
  for (let i = 0; i < Math.floor(hintCells.length) / 2; i++) { // columns
    hintCells[i].textContent = arrCol[i]
  }
  for (let i = 0; i < Math.floor(hintCells.length / 2); i++) { // rows
    hintCells[i + Math.floor(hintCells.length / 2)].textContent = arrRow[i];
  }
}
// addHintsToTable(columnArrHints, rowArrHints);
// addHintsToTable(fieldMatrixSmall[2].columnArrHints, fieldMatrixSmall[2].rowArrHints);

// выбираем матрицы в зависимости от формы:


function selectMatrix() {
  let selectElement = document.querySelector('#puzzle__small');
  selectElement.addEventListener('change', () => {
    let selectedValue = selectElement.options[selectElement.selectedIndex].value;
    // console.log(selectedValue)

    switch (selectedValue) {
      case 'bomb':
        clearAllActiveCells();
        createTable(SMALL_SIZE);
        makeHints();
        addPicturesToTable(fieldMatrixSmall[0].picturesClassMatrixSmall);
        addHintsToTable(fieldMatrixSmall[0].columnArrHints, fieldMatrixSmall[0].rowArrHints);
        changeCellColor()
        addCrossToCell();
        stopTimer();
        startTimer();
        break;
      case 'roboface':
        clearAllActiveCells();
        createTable(SMALL_SIZE)
        makeHints();
        addPicturesToTable(fieldMatrixSmall[1].picturesClassMatrixSmall);
        addHintsToTable(fieldMatrixSmall[1].columnArrHints, fieldMatrixSmall[1].rowArrHints);
        changeCellColor()
        addCrossToCell();
        stopTimer();
        startTimer();
        break;
      case 'bat':
        clearAllActiveCells();
        createTable(SMALL_SIZE)
        makeHints();
        addPicturesToTable(fieldMatrixSmall[2].picturesClassMatrixSmall);
        addHintsToTable(fieldMatrixSmall[2].columnArrHints, fieldMatrixSmall[2].rowArrHints);
        changeCellColor()
        addCrossToCell();
        stopTimer();
        startTimer();
        break;
      case 'dog':
        clearAllActiveCells();
        createTable(SMALL_SIZE)
        makeHints();
        addPicturesToTable(fieldMatrixSmall[3].picturesClassMatrixSmall);
        addHintsToTable(fieldMatrixSmall[3].columnArrHints, fieldMatrixSmall[3].rowArrHints);
        changeCellColor()
        addCrossToCell();
        stopTimer();
        startTimer();
        break;
      case 'smile':
        clearAllActiveCells();
        createTable(SMALL_SIZE)
        makeHints();
        addPicturesToTable(fieldMatrixSmall[4].picturesClassMatrixSmall);
        addHintsToTable(fieldMatrixSmall[4].columnArrHints, fieldMatrixSmall[4].rowArrHints);
        changeCellColor()
        addCrossToCell();
        stopTimer();
        startTimer();
        break;
      // default:
      case 'leaf':
        clearAllActiveCells();
        createTable(MEDIUM_SIZE);
        makeHints();
        addPicturesToTable(fieldMatrixSmall[5].picturesClassMatrixSmall);
        addHintsToTable(fieldMatrixSmall[5].columnArrHints, fieldMatrixSmall[5].rowArrHints);
        changeCellColor()
        addCrossToCell();
        stopTimer();
        startTimer();
        break;
      case 'ambulance':
        clearAllActiveCells();
        createTable(MEDIUM_SIZE);
        makeHints();
        addPicturesToTable(fieldMatrixSmall[6].picturesClassMatrixSmall);
        addHintsToTable(fieldMatrixSmall[6].columnArrHints, fieldMatrixSmall[6].rowArrHints);
        changeCellColor()
        addCrossToCell();
        stopTimer();
        startTimer();
        break;
      case 'snail':
        clearAllActiveCells();
        createTable(MEDIUM_SIZE);
        makeHints();
        addPicturesToTable(fieldMatrixSmall[7].picturesClassMatrixSmall);
        addHintsToTable(fieldMatrixSmall[7].columnArrHints, fieldMatrixSmall[7].rowArrHints);
        changeCellColor()
        addCrossToCell();
        stopTimer();
        startTimer();
        break;
      case 'question':
        clearAllActiveCells();
        createTable(MEDIUM_SIZE);
        makeHints();
        addPicturesToTable(fieldMatrixSmall[8].picturesClassMatrixSmall);
        addHintsToTable(fieldMatrixSmall[8].columnArrHints, fieldMatrixSmall[8].rowArrHints);
        changeCellColor()
        addCrossToCell();
        stopTimer();
        startTimer();
        break;
      case 'clown':
        clearAllActiveCells();
        createTable(MEDIUM_SIZE);
        makeHints();
        addPicturesToTable(fieldMatrixSmall[9].picturesClassMatrixSmall);
        addHintsToTable(fieldMatrixSmall[9].columnArrHints, fieldMatrixSmall[9].rowArrHints);
        changeCellColor()
        addCrossToCell();
        stopTimer();
        startTimer();
        break;
      case 'duck':
        clearAllActiveCells();
        createTable(BIG_SIZE);
        makeHints();
        addPicturesToTable(fieldMatrixSmall[10].picturesClassMatrixSmall);
        addHintsToTable(fieldMatrixSmall[10].columnArrHints, fieldMatrixSmall[10].rowArrHints);
        changeCellColor()
        addCrossToCell();
        stopTimer();
        startTimer();
        break;
      case 'mouse':
        clearAllActiveCells();
        createTable(BIG_SIZE);
        makeHints();
        addPicturesToTable(fieldMatrixSmall[11].picturesClassMatrixSmall);
        addHintsToTable(fieldMatrixSmall[11].columnArrHints, fieldMatrixSmall[11].rowArrHints);
        changeCellColor()
        addCrossToCell();
        stopTimer();
        startTimer();
        break;
      case 'mobile':
        clearAllActiveCells();
        createTable(BIG_SIZE);
        makeHints();
        addPicturesToTable(fieldMatrixSmall[12].picturesClassMatrixSmall);
        addHintsToTable(fieldMatrixSmall[12].columnArrHints, fieldMatrixSmall[12].rowArrHints);
        changeCellColor()
        addCrossToCell();
        stopTimer();
        startTimer();
        break;
      case 'monkey':
        clearAllActiveCells();
        createTable(BIG_SIZE);
        makeHints();
        addPicturesToTable(fieldMatrixSmall[13].picturesClassMatrixSmall);
        addHintsToTable(fieldMatrixSmall[13].columnArrHints, fieldMatrixSmall[13].rowArrHints);
        changeCellColor()
        addCrossToCell();
        stopTimer();
        startTimer();
        break;
      case 'flower':
        clearAllActiveCells();
        createTable(BIG_SIZE);
        makeHints();
        addPicturesToTable(fieldMatrixSmall[14].picturesClassMatrixSmall);
        addHintsToTable(fieldMatrixSmall[14].columnArrHints, fieldMatrixSmall[14].rowArrHints);
        changeCellColor()
        addCrossToCell();
        stopTimer();
        startTimer();
        break;
      default:

    }
  });
}
selectMatrix()



const clearAllActiveCells = () => {
  const cell = document.querySelectorAll('.cell');
  cell.forEach(e => {
    if (e.classList.contains('active')) {
      e.classList.remove('active')
    }
  })
}

// ========================================

// показываем скрытый рисунок
// const showHiddenElements = function () {
//   const cellElementsAtr = document.querySelectorAll('.cell[exist=true]');
//   for (const cell of cellElementsAtr) {
//     cell.style.backgroundColor = 'red';
//   }
//   return cellElementsAtr;
// };

// document.querySelector('.show-puzzle_button').addEventListener('click', () => {
//   const cellElementsAtr = showHiddenElements();
//   setTimeout(() => {
//     for (const cell of cellElementsAtr) {
//       cell.style.backgroundColor = ''; // убираем цвет через 5 секунд
//     }
//   }, 5000);
// });


const showHiddenElements = function () {
  const cellElementsAtr = document.querySelectorAll('.cell[exist=true]');
  for (const cell of cellElementsAtr) {
    if (cell.style.backgroundColor === 'red') {
      cell.style.backgroundColor = ''; // Сброс цвета фона, если он уже красный
    } else {
      cell.style.backgroundColor = 'red'; // Установка красного цвета фона, если его нет
    }
  }
  return cellElementsAtr;
};

document.querySelector('.show-puzzle_button').addEventListener('click', () => {
  const cellElementsAtr = showHiddenElements();
});




// условия победы

function winGameConditions() {
  const cellsWithExistAttr = document.querySelectorAll('.cell[exist=true]');
  const activeCellsWithExistAttr = document.querySelectorAll('.cell[exist=true].active');
  const inactiveCellsWithoutExistAttr = document.querySelectorAll('.cell[exist=false].active');
  const mute = muteBtn.classList.contains('muted')


  if (cellsWithExistAttr.length === activeCellsWithExistAttr.length
    && inactiveCellsWithoutExistAttr.length === 0
    && (cellsWithExistAttr.length && activeCellsWithExistAttr.length > 0)) {
    scores.textContent = ''
    putFiveDataRecordstoTable(getDataFromLocalStorage())
    clearInterval(interval);
    winMessage();
    if (mute) { clickSounds.win.play(); }

    // playSound(clickSounds.win);
  }

  return (
    cellsWithExistAttr.length === activeCellsWithExistAttr.length &&
    inactiveCellsWithoutExistAttr.length === 0 &&
    cellsWithExistAttr.length > 0 &&
    activeCellsWithExistAttr.length > 0
  );
}


const winMessage = () => {
  const timer = document.querySelector('.timer');
  let substring;
  if (timer.textContent.indexOf(':') !== -1) {
    substring = timer.textContent.slice(timer.textContent.indexOf(':') + 1);
    const time = substring.trim().split(':')
    const minutes = Number(time[0]);
    const seconds = Number(time[1]);
    const totalSeconds = minutes * 60 + seconds;
    // ---------------
    const selectElement = document.getElementById('puzzle__small');
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const selectedOptionText = selectedOption.text;
    getResultsOfGame(totalSeconds, selectedOptionText)
    // ---------------
    timer.textContent = `Great! You have solved the nonogram in ${totalSeconds} seconds! `
  }
}

// смена цвета ячейки по нажатию левой кнопки
const changeCellColor = () => {
  const selectElement = document.querySelector('#puzzle__small');
  // Получить опцию с значением `default`
  // const optionDefault = selectElement.querySelector('option[value="default"]');
  document.querySelector('table').addEventListener('click', (elem) => {
    if (elem.target.classList.contains('cell')
      && elem.target.textContent === ''
    ) {
      elem.target.classList.toggle('active')
      // clickSounds.click1.play();
      playSound(clickSounds.click1);
      winGameConditions();
    }
    // console.log(elem.target)
  })
};


// крестик по нажатию правой кнопки
const addCrossToCell = () => {
  const selectElement = document.querySelector('#puzzle__small');
  // const optionDefault = selectElement.querySelector('option[value="default"]');
  const table = document.querySelector('table');

  if (table) {
    table.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      if (event.target && event.target.classList.contains('cell')) {
        if (event.target.textContent === '' && !event.target.classList.contains('active')) {
          event.target.textContent = '✖';
        } else {
          event.target.textContent = '';
        }
        // clickSounds.click2.play();
        playSound(clickSounds.click2);
      }
    });
  } else {
    console.error('Table element not found');
  }
};


// =============================
const clearButton = document.querySelector('.clear-puzzle_button');
clearButton.addEventListener('click', () => {
  document.querySelectorAll('.cell').forEach((elem) => {
    if (elem.textContent === '✖' || elem.classList.contains('active')) {
      elem.textContent = '';
      elem.classList.remove('active');
    }
  })
})


// ====================================
let interval; // Объявляем переменную для хранения интервала
let minutes = 0;
let seconds = 0;

const updateTimer = () => {
  seconds++;
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }
  document.querySelector('.timer').innerHTML = `Time solving nonogram is:
  ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  // Добавляем условие для остановки таймера при условии победы
  if (winGameConditions()) {
    stopTimer();
  }
};

const timerDiv = document.createElement('div');
timerDiv.classList.add('timer');
timerWrapper.append(timerDiv);

const startTimer = () => {
  const timerDiv = document.createElement('div');
  timerDiv.classList.add('timer');
  timerWrapper.append(timerDiv);

  document.querySelector('table').addEventListener('click', (elem) => {
    const cellsWithExistAttr = document.querySelectorAll('.cell[exist=true]');
    const activeCellsWithExistAttr = document.querySelectorAll('.cell[exist=true].active');

    if (elem.target.classList.contains('cell') && (cellsWithExistAttr.length && activeCellsWithExistAttr.length > 0)) {
      if (!interval) {
        interval = setInterval(updateTimer, 1000);
      }
    }
  });




};

const stopTimer = () => {
  clearInterval(interval); // Останавливаем интервал
  document.querySelector('.timer').innerHTML = '';
  minutes = 0; // Сбрасываем минуты
  seconds = 0; // Сбрасываем секунды
  interval = null; // Сбрасываем переменную интервала
};


// Сохранения и запись в local starage
saveGameBtn.addEventListener('click', () => {
  const cells = document.querySelectorAll('.cell');
  const cellsData = Array.from(cells).map(cell => {
    const cellData = {
      content: cell.textContent,
      active: cell.classList.contains('active'),
    };
    return cellData;
  });

  const selectElement = document.getElementById('puzzle__small');
  const selectedValue = selectElement.value;

  // Сохраняем данные в локальное хранилище
  localStorage.setItem('cellsData', JSON.stringify(cellsData));
  localStorage.setItem('selectedValue', selectedValue);

  // console.log('Game saved:', cellsData);
  // console.log('Selected value:', selectedValue);
});

// Получение данных из в local starage
loadGameBtn.addEventListener('click', () => {

  const valueNonogram = localStorage.getItem('selectedValue');
  const puzzleSelect = document.getElementById('puzzle__small');
  puzzleSelect.value = valueNonogram;
  puzzleSelect.dispatchEvent(new Event('change'));

  const cells = document.querySelectorAll('.cell');
  const infoData = JSON.parse(localStorage.getItem('cellsData'));
  for (const [index, cellData] of infoData.entries()) {
    // Устанавливаем текст контента
    cells[index].textContent = cellData.content;

    // Устанавливаем класс active
    if (cellData.active) {
      cells[index].classList.add('active');
    } else {
      cells[index].classList.remove('active');
    }
  }
});


// темный режим
const lightDarkBtn = document.createElement('button');
lightDarkBtn.classList.add('theme-changer');
lightDarkBtn.textContent = 'Dark \u263D';

const muteBtn = document.createElement('button');
muteBtn.classList.add('mute-button');
muteBtn.classList.add('muted');
muteBtn.textContent = ' Mute sound';




const scoreTable = document.createElement('div')
scoreTable.classList.add('score-table')
scoreTable.textContent = 'Scores Table'





const scores = document.createElement('div')
scores.classList.add('scores')
scoreTable.append(scores)

const scoreThemeWrapper = document.createElement('div')
scoreThemeWrapper.classList.add('score-theme__wrapper')
scoreThemeWrapper.append(lightDarkBtn, muteBtn, scoreTable)


gameWrapper.parentNode.insertBefore(scoreThemeWrapper, gameWrapper);





// timerWrapper.parentNode.insertBefore(lightDarkBtn, timerWrapper);
// gameWrapper.parentNode.insertBefore(lightDarkBtn, gameWrapper);

// на старте тёмная тема не установлена
const theme = document.querySelector("#theme-link");
document.querySelector('#main').classList.add('theme-light')

lightDarkBtn.addEventListener('click', () => {
  if (theme.getAttribute("href") == "style.css") {
    // ... переключаем на "style.css"
    theme.href = "style-dark.css";
    document.querySelector('#main').classList.replace('theme-light', 'theme-dark');
    lightDarkBtn.textContent = 'Light \u2600';

  } else {
    // ... переключаем на "light-theme.css"
    document.querySelector('#main').classList.replace('theme-dark', 'theme-light');
    lightDarkBtn.textContent = 'Dark \u263D';
    theme.href = "style.css";
  }
});

// random game
const randomGameBtn = document.createElement('button');
randomGameBtn.classList.add('random-game');
randomGameBtn.textContent = 'Random Game';
buttonsWrapper.append(randomGameBtn);

// console.log(valueArray);
randomGameBtn.addEventListener('click', () => {
  const selectElement = document.getElementById('puzzle__small');
  const options = Array.from(selectElement.options);
  // const nonDefaultOptions = options.filter(({ value }) => value !== 'default');
  const nonDefaultOptions = options.filter((elem) => elem.value !== 'default');
  // console.log(nonDefaultOptions)
  // const valueArray = nonDefaultOptions.map(({ value }) => value);
  const valueArray = nonDefaultOptions.map((elem) => elem.value);
  // console.log(valueArray)
  const randomIndexValueArray = Math.floor(valueArray.length * Math.random());
  const randomPuzzleValue = valueArray[randomIndexValueArray]
  // console.log(typeof randomPuzzleValue)
  selectElement.value = randomPuzzleValue;
  selectElement.dispatchEvent(new Event('change'));
})

// TODO
// таблица рекордов
const getResultsOfGame = (time, puzzleName) => {
  // const results = [];
  const nameOfPuzzle = puzzleName.slice(0, puzzleName.indexOf(' ')).trim()
  const difficulityLevel = puzzleName.slice(puzzleName.indexOf(' ')).trim()
  let level = ''
  if (difficulityLevel === '5x5') {
    level = 'easy'
  } else if (difficulityLevel === '10x10') {
    level = 'medium'
  }
  else { level = 'hard' }
  const resultsObj = {
    time: time,
    puzzle: nameOfPuzzle,
    level: level
  }

  addDataToLocalStorage(resultsObj);
}

function addDataToLocalStorage(data) {
  let existingData = JSON.parse(localStorage.getItem('results')) || [];

  if (!Array.isArray(existingData)) {
    existingData = []; // Initialize as an empty array if it's not already an array
  }

  existingData.push(data);
  localStorage.setItem('results', JSON.stringify(existingData));
}

const getDataFromLocalStorage = () => {
  let existingData = JSON.parse(localStorage.getItem('results')) || [];
  // console.log(Array.isArray(existingData))

  if (!Array.isArray(existingData)) {
    existingData = []; // Initialize as an empty array 
  }
  const lastFiveResults = existingData.sort((a, b) => a.time - b.time);
  // console.log(lastFiveResults)
  return lastFiveResults;
}
getDataFromLocalStorage()

function putFiveDataRecordstoTable(localStorageData) {
  const LastFiveReults = localStorageData.slice(-5)
  for (const result of LastFiveReults) {

    // console.log(result);
    // Создайте новый span для каждого результата
    const scoreSpan = document.createElement('span');
    scoreSpan.classList.add('heroes')
    scoreSpan.textContent = JSON.stringify(result); // Отобразите весь объект result
    scoreSpan.textContent =
      `time: ${result.time},
     puzzle: ${result.puzzle},
     difficulty: ${result.level}.`

    // Добавьте span в div с классом scores
    scores.append(scoreSpan);
  }
}

scoreTable.addEventListener('click', () => {
  scores.textContent = ''
  putFiveDataRecordstoTable(getDataFromLocalStorage())
  document.querySelector('.scores').classList.toggle('active')
})


//mute sounds
muteBtn.addEventListener('click', () => {
  if (muteBtn.classList.contains('muted')) {
    muteBtn.classList.remove('muted')
    muteBtn.classList.add('unmuted')
    muteBtn.textContent = ' Unmute Sounds'

  } else {
    muteBtn.classList.remove('unmuted')
    muteBtn.classList.add('muted')
    muteBtn.textContent = ' Mute Sounds'

  }
}
)


clearAllActiveCells();
createTable(SMALL_SIZE);
makeHints();
addPicturesToTable(fieldMatrixSmall[0].picturesClassMatrixSmall);
addHintsToTable(fieldMatrixSmall[0].columnArrHints, fieldMatrixSmall[0].rowArrHints);
changeCellColor()
addCrossToCell();
stopTimer();
startTimer();
