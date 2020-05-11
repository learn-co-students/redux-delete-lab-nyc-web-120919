import React from 'react'
import Band from './Band'

export default class Bands extends React.Component {


    render(){
        console.log(this.props)
        return(
            <div>
                <ul>
                    {this.props.bands.map(band => <Band deleteBand={this.props.deleteBand} key={band.id} {...band} />)}
                </ul>
            </div>
        )
    }



}