// 랜덤번호 지정 
// 유저가 번호를 입력한다 그리고 go라는 버튼을 누름 
//만약에 유저가 랜덤번호 맞추면 맞췄습니다. 
// 랜덤번호가 < 유저번호 Down 
// 랜덤번호가 > 유저번호 up 
// Reset 버튼을 누르면 게임이 리셋된다 

// 5번의 기회를 다쓰면 게임이 끝난다 
// 더이상 추측버튼 클릭 불가 버튼이 disable 
// 범위를 넘어서는 숫자를 입력하는 경우 알려줌 기회를 깍지 않는다 
// 유저가 이미 입력한 숫자를 또 입력하면 알려준다, 기회를 깍지 않는다 
let computerNum = 0;
let playBtn = document.getElementById("btn1");
let userNum = document.getElementById("userNum");

let resultArea = document.getElementById("result_area");
let resetBtn = document.getElementById("ResetBtn");

let chanceArea = document.getElementById("chanceArea");

let chances = 5;
let gameOver = false;
let history = [];

playBtn.addEventListener("click", play);
resetBtn.addEventListener("click", reset);
userNum.addEventListener("focus", function () {
    userNum.value = "";
})

function pickRandomNum() {
    computerNum = Math.floor(Math.random()*100)+1;
    console.log(computerNum);
}

function play() {
    let userValue = userNum.value;
    if (userValue < 0 || userValue > 100){
        resultArea.textContent = "1부터 100사이의 숫자만 입력하세요";
        return; //여기서 종료되버림
    }

    if(history.includes(userValue)){
        resultArea.textContent = "이미 입력한 숫자입니다"
        return;
    }

    chances--;
    chanceArea.textContent = `남은 기회: ${chances}`
    if (userValue > computerNum){
        resultArea.textContent = "Down"
        
    } else if(userValue < computerNum){
        
        resultArea.textContent = "Up";
    }else if (userValue ==computerNum){
        resultArea.textContent = "정답입니다"
        gameOver = true;
    }

    history.push(userValue);
    console.log(history);

    if(chances == 0){
        gameOver = true;
    }
    if (gameOver == true){
        playBtn.disabled = true;
    }
}
function reset() {
    //user input창 깨끗하게 정리
    userNum.value = "";
    //새로운 번호 생성
    pickRandomNum();
    resultArea.textContent = "결과값이 여기 나옵니다"
}

pickRandomNum();
