function getDegree(object, mouseEvent) {

    const objectPos = {
        x: object.getBoundingClientRect().left + object.clientWidth / 2,
        y: object.getBoundingClientRect().top + object.clientHeight / 2
    }

    const x = objectPos.x - mouseEvent.clientX;
    const y = objectPos.y - mouseEvent.clientY;

    const radian = Math.atan2(y, x); // atan2함수
    const degree = radian * 180 / Math.PI - 90;  // radian -> 

    return Number((degree < 0 ? degree + 360 : degree).toFixed(0));
}