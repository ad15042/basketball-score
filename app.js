/**
 * 得点表機能
 */
const plyOneBtn = document.querySelector('#plyOneBtn');
const plyTwoBtn = document.querySelector('#plyTwoBtn');
const resetBtn = document.querySelector('#resetBtn');

const plyOneScore = document.querySelector('#plyOneScore');
const plyTwoScore = document.querySelector('#plyTwoScore');

let oneScore = 0;
let twoScore = 0;

plyOneBtn.addEventListener('click', function (e) {
    e.preventDefault();
    oneScore++;
    plyOneScore.innerText = oneScore;
});

plyTwoBtn.addEventListener('click', function (e) {
    e.preventDefault();
    twoScore++;
    plyTwoScore.innerText = twoScore;
});

resetBtn.addEventListener('click', function (e) {
    e.preventDefault();
    oneScore = 0;
    twoScore = 0;
    plyOneScore.innerText = oneScore;
    plyTwoScore.innerText = twoScore;
})

/**
 * タイマー機能
 */
const minutesInput = document.querySelector('#minutes');
const secondsInput = document.querySelector('#seconds');
const dispTimer = document.querySelector('#timer');

let isBtnPushFirstFlg = true;
let totalSeconds;
let timer;
const startTimeBtn = document.querySelector("#startTime");
const stopTimeBtn = document.querySelector("#stopTime");
const resetTimeBtn = document.querySelector("#resetTime");

stopTimeBtn.disabled = true;

startTimeBtn.addEventListener('click', function (e) {
    if (isBtnPushFirstFlg) {

        isBtnPushFirstFlg = false;

        // 合計時間（秒）を計算
        totalSeconds = parseInt(minutesInput.value) * 60 + parseInt(secondsInput.value);

        if (totalSeconds <= 0 || isNaN(totalSeconds)) {
            alert('正しい時刻を入力してください（時刻が０以下または空欄');
            return
        }

        timer = setInterval(calculateTime, 1000)

    } else {
        timer = setInterval(calculateTime, 1000)

    }

    startTimeBtn.disabled = true;
    resetTimeBtn.disabled = true;
    stopTimeBtn.disabled = false;

})

function calculateTime() {
    // タイマーが０になった時
    if (totalSeconds <= 0) {
        clearInterval(timer);
        alert('タイムアップ');
        // タイマー1秒毎に切り替わる時
    } else {
        // 分を計算
        let minutes = Math.floor(totalSeconds / 60);
        // 秒を計算
        let seconds = totalSeconds % 60;

        // 現在の時刻を表示
        dispTimer.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        // 1秒経過させる
        totalSeconds--

    }
}

stopTimeBtn.addEventListener('click', function () {
    clearInterval(timer);
    startTimeBtn.disabled = false;
    resetTimeBtn.disabled = false;
    stopTimeBtn.disabled = true;
})

resetTimeBtn.addEventListener('click', function () {
    clearInterval(timer)
    minutesInput.value = 0;
    secondsInput.value = 0;
    dispTimer.textContent = '0:00';
    totalSeconds = 0;
})