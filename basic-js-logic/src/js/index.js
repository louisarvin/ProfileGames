const board = document.querySelector(".board");
console.log(board);
const levelTxt = document.getElementById("levelTxt");
const title = document.getElementById("title__1");
const title2 = document.querySelector(".wrapper");
const coinTxt = document.getElementById("coinTxt");
// const ig = "https://www.instagram.com/aftlah_/";

const randomPosition = () => ~~(Math.random() * 20) + 1;

let config = {
  speed: 200,
  level: 0,
  level5: 0,
  player: {
    x: randomPosition(),
    y: randomPosition(),
  },
  food: {
    x: randomPosition(),
    y: randomPosition(),
  },
  velocity: {
    x: 0,
    y: 0,
  },
  showTittle() {
    title.style.animation = "fadeIn 1s";
    title.style.opacity = "1";
    title.style.visibility = "visible";
    title.style.zIndex = "1";

    setTimeout(function () {
      title.style.opacity = "0";
      title.style.visibility = "hidden";
      title.style.zIndex = "-1";
    }, 5000);
  },
};
// METODE
const games = {
  createFood() {
    // console.log('food created on position: ', config.food.x)
    board.innerHTML = `<div class="food" style="grid-area: ${config.food.y} / ${config.food.x}"></div>`;
  },
  createPlayer() {
    // console.log('player created on position ', config.player.x)
    board.innerHTML += `<div class="player" id="player" style="grid-area: ${config.player.y} / ${config.player.x}"></div>`;
    // PAKE += SUPAYA TIDAK MENIMPA DIV.FOOD / MENAMBAHKAN DIV BARU
  },
  movePlayer() {
    config.player.x += config.velocity.x;
    config.player.y += config.velocity.y;
  },
  // MERISET KETIKA PLAYER MELEBIHI LEBAR LAYAR
  resetPlayerPosition() {
    return config.player.x <= 0
      ? ((config.player.x = 21), (config.player.y = config.player.y))
      : config.player.x >= 21
      ? ((config.player.x = 1), (config.player.y = config.player.y))
      : config.player.y <= 0
      ? ((config.player.y = 21), (config.player.x = config.player.x))
      : config.player.y >= 21
      ? ((config.player.y = 1), (config.player.x = config.player.x))
      : false;
  },
  levelUp() {
    config.level += 1;
    config.level % 5 == 0 ? (config.level5 += 1) : false;
  },
  txtLevelUp() {
    if (config.level === 1 || config.level == 2) {
      title.innerHTML = "WELLCOME TO MY PROFILEE !!!)";
    } else if (config.level === 3) {
      title.innerHTML = "TEMUKAN PROFILE SAYA";
    } else if (config.level === 5) {
      title.innerHTML = "YEY KAMU SUDAH NAIK LEVEL";
    } else if (config.level === 7) {
      title.innerHTML = "DIKIT LAGI DAPET PROFILE SAYA";
    } else if (config.level === 10) {
      title2.style.opacity = "1";
      title2.style.visibility = "visible";
      title2.style.zIndex = "1";
      title2.style.position = randomPosition();
    } else if (config.level === 11) {
      title.innerHTML = "MAKASIH SUDAH BERMAIN";
    } else if (config.level === 13) {
      title.innerHTML = "ENJOY!!!";
    } else {
      title.innerHTML = '';
    }
  },

  isWin() {
    if (config.player.x == config.food.x && config.player.y == config.food.y) {
      this.levelUp();
      this.txtLevelUp();

      config.showTittle();
      levelTxt.innerHTML = config.level5;
      coinTxt.innerHTML = config.level;

      console.log({ Level: config.level });
      console.log({ Level: config.level5 });
      return true;
    }
    return false;
  },
  randomFoodPosition() {
    config.food.x = randomPosition();
    config.food.y = randomPosition();
  },
};

// MOVEMENT ON PHONE
function _kanan() {
  config.velocity.x = 1;
  config.velocity.y = 0;
}
function _kiri() {
  config.velocity.x = -1;
  config.velocity.y = 0;
}
function _atas() {
  config.velocity.y = -1;
  config.velocity.x = 0;
}
function _bawah() {
  config.velocity.y = 1;
  config.velocity.x = 0;
}

function movement(listen) {
  switch (listen.key) {
    case "ArrowUp":
      config.velocity.y = -1;
      config.velocity.x = 0;
      break;

    case "ArrowDown":
      config.velocity.y = 1;
      config.velocity.x = 0;
      break;

    case "ArrowLeft":
      config.velocity.x = -1;
      config.velocity.y = 0;
      break;

    case "ArrowRight":
      config.velocity.x = 1;
      config.velocity.y = 0;
      break;

    default:
      break;
  }
}

//MENGATUR ARAH KEPALA PLAYER
function Headmovement() {
  const playerStyle = document.getElementById("player");
  return config.velocity.x == 1 ? (playerStyle.style.transform = "scaleX(-1)")
       : config.velocity.y == 1 ? (playerStyle.style.transform = "rotate(-90deg)")
       : config.velocity.y == -1 ? (playerStyle.style.transform = "rotate(90deg)")
       : false;

}

function start() {
  games.createFood();
  games.createPlayer();
  games.movePlayer();
  games.resetPlayerPosition();
  Headmovement();

  const win = games.isWin();
  if (win) games.randomFoodPosition();

  // console.table({ player_position: config.player });
}

setInterval(start, config.speed);

document.addEventListener("keydown", movement);

//REMOVE CARD
const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  title2.remove();
  btn.remove();
});











// DASAR JS/ LOGIC JS
// const myHobby = document.getElementById("myHobby");
// const hobbyInput = document.getElementById ("hobbyInput")
// const from = document.getElementById ("from")
// const to = document.getElementById ("to") 

// let hobbyList = []

// function getHobby() {
//     const hobby = hobbyInput.value
//     hobbyList.push(hobby)

//     myHobby.innerHTML = hobbyList
//     // return hobbyInput.value
// }

// // function switcher() {
// //     const _from = from.value
// //     const _to = to.value

// //     const _temp = hobbyList [_from - 1]
// //     hobbyList [_from - 1] = hobbyList [_to - 1]
// //     hobbyList [_to - 1] = _temp
// //     myHobby.innerHTML = hobbyList
// // }

// function isValidInput (from, to) {
// 
// } 

// function switcher() {
//     const _from = from.value
//     const _to = to.value

//     const valid = isValidInput (_from, _to);

//     if(valid){
//         const _temp = hobbyList [_from - 1]
//         hobbyList [_from - 1] = hobbyList [_to - 1]
//         hobbyList [_to - 1] = _temp
//         myHobby.innerHTML = hobbyList
//     }
// }
