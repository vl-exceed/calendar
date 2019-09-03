const datePicker = {
    margin: '2px auto',
    width: '1500px',
    display: 'flex',
    flexFlow: 'column',
    backgroundColor: 'white'
}

const weekDayNames = {
    display: 'flex'
}

const weekDayShort = {
    margin: '1px',
    fontSize: '14px',
    width: '212px',
    height: '30px',
    backgroundColor: 'rgb(83, 161, 235)',
    borderRadius: '3px',
    display: 'flex'
}

const weekDayShortP = {
    margin: 'auto'
}

const dayPicker = {
    display: 'flex',
    flexWrap: 'wrap',
    width: '1500px'
}

const day = {
    border: '1px solid rgb(83, 161, 235)',
    borderRadius: '3px',
    margin: '1px',
    width: '210px',
    height: '130px',
    backgroundColor: 'white',
    display: 'flex'
}

const dayRound = {
    margin: '10px 10px 0px 185px',
    backgroundColor: 'white',
    display: 'flex',
}

const thisDayRound = {
    backgroundColor: 'rgb(83, 161, 235)',
    borderRadius: '25px',
    // margin: 'auto',
    // width: '30px',
    // height: '30px'
}

const dayRoundP = {
    fontSize: '14px'
    // margin: 'auto'
}

const picker = {
    height: '30px',
    backgroundColor: 'white'
}

const pickerP = {
    margin: 'auto 6px'
}

const monthPicker = {
    fonstSize: '30px',
    height: '40px',
    width: '200px',
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

const dateSelectors = {
    display: 'flex',
    justifyContent: 'space-around'
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
    right,
    left,
    dateSelectors
}