
const blueColor = 'rgb(83, 161, 235)'

const todoha = {
    height: '50px',
    display: 'flex',
    justifyContent: 'space-between',
    but: {
        height: '30px',
        width: '40px',
        borderRadius: '4px',
        marginTop: '10px',
        marginRight: '10px'
    },
    info: {
        display: 'flex',
        flexFlow: 'column'
    },
    todosConstainer: {
        width: '400px',
        backgroundColor: 'white',
        margin: '0 auto',
        borderRadius: '4px'

    },
    plus: {
        height: '30px',
        width: '40px',
        borderRadius: '4px'

    }

}

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

const modalHead = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px'
}

const but = {
    // marginLeft: '440px',
    // marginTop : '10px',
    height: '25px',
    width: '50px',
    borderRadius: '3px'
}

const triangle = {
    border: '20px solid transparent',
    borderRight: '20px solid green',
    margin: '43px 0px 0px 10px'
}

const modal = {
    open: {
        flexFlow: 'column',
        display: 'flex',
        // marginLeft: '-212px',
        // margin: 'auto',
        // marginTop: '-1px',
        position: 'absolute',
        zIndex: '4',
        // height: '600px',
        paddingBottom: '40px',
        width: '500px',
        backgroundColor: blueColor,
        borderRadius: '3px'
    },
    close: {
        display: 'none'
    }
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
    backgroundColor: blueColor,
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
    triangle,
    singleTab,
    leftTab,
    rightTab,
    middleTab,
    todos,
    modal,
    but,
    modalHead,
    todoha
}