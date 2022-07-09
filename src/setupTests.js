export const MockDate = require('mockdate');
const frameTime = 10;

global.requestAnimationFrame = (cb) => {
    setTimeout(cb, frameTime)
}

global.timeTravel = (time = frameTime) => {
    const tickTravel = () => {

        const now = Date.now()
        MockDate.set(new Date(now + frameTime))

        jest.advanceTimersByTime(frameTime)
    }

    const frames = time / frameTime
    let framesEllapsed
    for (framesEllapsed = 0; framesEllapsed < frames; framesEllapsed++) {
        tickTravel()
    }
}