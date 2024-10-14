function dientichHT(bankinh) {
    var PI = 3.14
    return bankinh*bankinh*PI
}

function logging(mesage) {
    console.info("Logging service " + mesage)
}

export {
    dientichHT,
    logging
}

export default logging;