export default function executable(DELAY) {
    let startTime = -new Date();

    return function () {
        if (new Date() - startTime > DELAY) {
            startTime = new Date();

            return true;
        }
    };
}