import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increase } from '../Redux/Action/counter'

class App extends Component {
    render() {
        let { increase, count } = this.props

        return (
            <div className="box">
                <span
                    className="opration"
                    onClick={() => {
                        increase(5)
                    }}
                >
                    +
                </span>
                <span className="content">{count}</span>
                <span className="opration">-</span>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.counter.count
    }
}

// let actions = {
//     increase
// }

// function mapDispatchToProps(dispatch) {
//     // return {
//     //   increase: (...args) => dispatch(increase(...args))
//     // }
//     // return bindActionCreators(actions, dispatch)
// }

const mapDispatchToProps = {
  increase
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
