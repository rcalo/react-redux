const PadLeft = (number) => {
    const pad = '00'
    return pad.substring(0, pad.length - number.length) + number
}

const FormattedTime = (secs) => {
    const minutes = parseInt(secs /60, 10)
    const seconds = parseInt(secs % 60, 10)
    return `${PadLeft(minutes.toString())} : ${PadLeft(seconds.toString())}`  
}

export default FormattedTime;