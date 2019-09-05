const datePicker = {
    margin: '2px auto',
    width: '1500px',
    display: 'flex',
    flexFlow: 'column',
    backgroundColor: 'white'
}

const dayNumberBlock = {
    display: 'flex',
    flexFlow: 'column',
    textSize : '8px'
}

const dayNumber = {
    margin: '8px 0px 0px 190px'

}

const todos = {
    margin: 'auto 10px'
}

const singleTab = {

    green : {
        display:'flex',
        marginLeft: '5px',
        borderRadius: '10px',
        backgroundColor: 'green',
        height: '30px',
        width: '200px'
    },
    red : {
        display:'flex',
        marginLeft: '5px',
        borderRadius: '10px',
        backgroundColor: 'red',
        height: '30px',
        width: '200px'
    },
    orange : {
        display:'flex',
        marginLeft: '5px',
        borderRadius: '10px',
        backgroundColor: 'orange',
        height: '30px',
        width: '200px'
    },
    blue : {
        display:'flex',
        marginLeft: '5px',
        borderRadius: '10px',
        backgroundColor: 'blue',
        height: '30px',
        width: '200px'
    }

}

const leftTab = {

    green : {
        display:'flex',
        marginLeft:'10px',
        borderTopLeftRadius: '10px',
        borderBottomLeftRadius: '10px',
        backgroundColor: 'green',
        height: '30px',
        width: '200px'
    },
    red : {
        display:'flex',
        marginLeft:'10px',
        borderTopLeftRadius: '10px',
        borderBottomLeftRadius: '10px',
        backgroundColor: 'red',
        height: '30px',
        width: '200px'
    },
    orange : {
        display:'flex',
        marginLeft:'10px',
        borderTopLeftRadius: '10px',
        borderBottomLeftRadius: '10px',
        backgroundColor: 'orange',
        height: '30px',
        width: '200px'
    },
    blue : {
        display:'flex',
        marginLeft:'10px',
        borderTopLeftRadius: '10px',
        borderBottomLeftRadius: '10px',
        backgroundColor: 'blue',
        height: '30px',
        width: '200px'
    }

}

const rightTab = {

    green : {
        borderTopRightRadius: '10px',
        borderBottomRightRadius: '10px',
        backgroundColor: 'green',
        height: '30px',
        width: '205px'
    },
    red : {
        borderTopRightRadius: '10px',
        borderBottomRightRadius: '10px',
        backgroundColor: 'red',
        height: '30px',
        width: '205px'
    },
    orange : {
        borderTopRightRadius: '10px',
        borderBottomRightRadius: '10px',
        backgroundColor: 'orange',
        height: '30px',
        width: '205px'
    },
    blue : {
        borderTopRightRadius: '10px',
        borderBottomRightRadius: '10px',
        backgroundColor: 'blue',
        height: '30px',
        width: '205px'
    }

}

const middleTab = {

    green : {
        backgroundColor: 'green',
        height: '30px',
        width: '210px'
    },
    red : {
        backgroundColor: 'red',
        height: '30px',
        width: '210px'
    },
    orange : {
        backgroundColor: 'orange',
        height: '30px',
        width: '210px'
    },
    blue : {
        backgroundColor: 'green',
        height: '30px',
        width: '210px'
    }

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
    picker,
    pickerP,
    monthPicker,
    arrows,
    right,
    left,
    dateSelectors,
    dayNumberBlock,
    dayNumber,
    // todo,
    singleTab,
    leftTab,
    rightTab,
    middleTab,
    todos
}