import React , {Component} from 'react'


class Rating extends Component{
    constructor (props){
        super(props)
    }
    render(){
        let stars =[]
        for (let i=0 ; i<5 ; i++){
            if(this.props.rating>i){
                stars.push(<i onClick={()=>this.props.newRate(i+1)} className="fas fa-star 2x"></i>)
            }else {
                stars.push(<i onClick={()=>this.props.newRate(i+1)} className="far fa-star 2x"></i>)
            }
        }
        return (
<div className='Star'> {stars} </div>
        )
    }
}
export default Rating
