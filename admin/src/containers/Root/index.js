import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as RootActions from '../../actions/RootActions'

class Root extends Component {
    render() {
        return (
            <div className='app'>
                <div className='app-container'>
                    {/*<Aside />*/}
                    <section className='app-content'>
                        { this.props.children }
                    </section>
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        page: state.page
    }
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(RootActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Root)