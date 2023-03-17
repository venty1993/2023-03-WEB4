function countUp(target, targetCount, duration, framePerSec) {
    const totalFrame = framePerSec * (duration / 1000);

    for (let i = 0; i < totalFrame; i++) {
        setTimeout(() => {
            printCount(Math.floor(targetCount * easeOutQuart(i / totalFrame)));
        }, i * (1000 / framePerSec));
    }
    setTimeout(() => {
        printCount(targetCount)
    }, duration);

    // 확인용 콘솔 타이머
    for (let i = 0; i < duration / 1000; i++) {
        setTimeout(() => {
            console.log(`${i + 1}s`)
        }, i * 1000);
    }

    function printCount(number) {
        // toLocaleString()이라는 메서드는 세자리수마다 쉼표를 찍어주는 친구입니다.
        target.innerText = number.toLocaleString();
    }

    // 가속도 수식
    function easeOutQuart(x) {
        return 1 - Math.pow(1 - x, 8);
    }
}