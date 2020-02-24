import React, { Component } from 'react'

class Header extends Component{
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        let data = []
        if(this.props.items){
            console.log(this.props.items)
            data = this.props.items.map((item,key) => {
                return(
                        <li>{item.name}</li>
                )
            })
        }
        console.log(data)
        return(
            <div className="Header">
                <ul>
                    {data}
                </ul>
            </div>
        )
    }

}

export default Header;