import React, { Component } from 'react'
import Header from '../components/Header'
import * as action from '../actions/IndexPageAction'
import { connect } from 'react-redux'

class IndexPageContainer extends Component{
    constructor(){
        super()
        this.state = {

        }
    }
    
    componentDidMount() {
        this.props.initload()
    }

    render() {
        return(
            <Header {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items.listItem,
        itemLength: state.items.itemLength,
        activePage: state.items.activePage
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        initload: () => {
            dispatch(action.getListItem())
        }
    }
} 
export default connect(mapStateToProps, mapDispatchToProps)(IndexPageContainer);