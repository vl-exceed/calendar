import React from 'react';

class Todo extends React.Component {
    constructor(props) {
        super(props)

        this.st = this.st.bind(this)
    }

    st() {
        if (this.props.event.place === 'singleTab') {
            return this.props.styles.singleTab
        }
    }

    render() {
        const { event, styles } = this.props
        return (
            <div style={
                (event.place === 'single') ? (event.color === 'green') ? styles.singleTab.green :
                                             (event.color === 'red') ? styles.singleTab.red :
                                             (event.color === 'orange') ? styles.singleTab.orange :
                                             styles.singleTab.blue :
                (event.place === 'left') ?   (event.color === 'green') ? styles.leftTab.green :
                                             (event.color === 'red') ? styles.leftTab.red :
                                             (event.color === 'orange') ? styles.leftTab.orange :
                                             styles.leftTab.blue :   
                (event.place === 'right') ?  (event.color === 'green') ? styles.rightTab.green :
                                             (event.color === 'red') ? styles.rightTab.red :
                                             (event.color === 'orange') ? styles.rightTab.orange :
                                             styles.rightTab.blue :   
                (event.color === 'green') ? styles.middleTab.green :
                                             (event.color === 'red') ? styles.middleTab.red :
                                             (event.color === 'orange') ? styles.middleTab.orange :
                                             styles.middleTab.blue
                } 
                className="todo">
                    <p style={styles.todos}>
                        {(event.place !== 'middle' && event.place !== 'right') ? event.title : ''}
                    </p>
            </div>
        )
    }
}

export default Todo;