import React from 'react'
import Band from './Band'

export default class Bands extends React.Component {


    render(){
        console.log(this.props)
        return(
            <div>
                <ul>
                    {this.props.bands.map(band => <Band key={band.id} band={band} />)}
                </ul>
            </div>
        )
    }



}