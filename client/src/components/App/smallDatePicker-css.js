const datePicker = {
    margin: '18px auto',
    width: '280px',
    display: 'flex',
    flexFlow: 'column',
    backgroundColor: 'white'
}

const weekDayNames = {
    display: 'flex',
    borderRadius: '3px',
    backgroundColor: 'rgb(83, 161, 235)',

}

const weekDayShort = {
    fontSize: '14px',
    width: '40px',
    height: '30px',
    display: 'flex'
}

const weekDayShortP = {
    margin: 'auto'
}

const dayPicker = {
    display: 'flex',
    flexWrap: 'wrap',
    width: '280px'
}

const day = {
    margin: 'auto',
    width: '40px',
    height: '40px',
    backgroundColor: 'white',
    display: 'flex'
}

const dayRound = {
    margin: 'auto',
    width: '30px',
    height: '30px',
    backgroundColor: 'white',
    display: 'flex',
}

// const dayRound:hover = {
//     borderRadius: '25px',
//     margin: 'auto',
//     width: '30px',
//     height: '30px',
//     backgroundColor: 'rgb(221, 221, 221)',
//     display: 'flex'
// }

const thisDayRound = {
    backgroundColor: 'rgb(83, 161, 235)',
    borderRadius: '25px',
    margin: 'auto',
    width: '30px',
    height: '30px'
}

const dayRoundP = {
    fontSize: '14px',
    margin: 'auto'
}

const picker = {
    height: '30px',
    backgroundColor: 'white'
}

const pickerP = {
    margin: 'auto 6px'
}

const monthPicker = {
    height: '25px',
    display: 'flex',
    justifyContent: 'space-between'
}

const arrows = {
    margin: 'auto 10px',
    width: '50px',
    display: 'flex',
    justifyContent: 'space-around'
}

const right = {
    border: 'solid black',
    borderWidth: '0 2px 2px 0',
    display: 'inline-block',
    padding: '3px',
    transform: 'rotate(-45deg)',
    // -webkit-transform: 'rotate(-45deg)'
}

const left = {
    border: 'solid black',
    borderWidth: '0 2px 2px 0',
    display: 'inline-block',
    padding: '3px',
    transform: 'rotate(135deg)',
    // -webkit-transform: 'rotate(135deg)'
}

module.exports = {
    datePicker,
    weekDayNames,
    weekDayShort,
    weekDayShortP,
    dayPicker,
    day,
    dayRound,

    thisDayRound,
    dayRoundP,
    picker,
    pickerP,
    monthPicker,
    arrows,
    // i,
    right,
    left
}