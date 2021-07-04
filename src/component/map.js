import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

class Map extends React.Component {
    constructor(props){
        super(props)
        this.state={
            zoom: 10
        }
    }


    setZoom = (x) =>{
        this.setState({
            zoom: x
        })
    }
    render() {
        return (
            <div style={{marginRight:"20%",marginLeft:"20%",border:"1px solid #000150",borderRadius:"30px"}}>
                <div style={{opacity:"0.6",textAlign:"center",backgroundColor:"#4b4ca3",borderTopLeftRadius:"30px",borderTopRightRadius:"30px",paddingTop:"5px",paddingBottom:"15px"}}>
                    <Button onClick={()=>{this.setZoom(20)}} > X 20 </Button>
                    <Button onClick={()=>{this.setZoom(15)}} style={{marginLeft:"15px",marginRight:"15px"}}> X 15 </Button>
                    <Button onClick={()=>{this.setZoom(10)}} > X 10 </Button>
                </div>

                <div style={{borderBottomLeftRadius:"30px",borderBottomRightRadius:"30px"}}>
                    <img style={{width:"100%",height:"500px",borderBottomLeftRadius:"30px",borderBottomRightRadius:"30px"}} alt="Map" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_KEY}&center=${this.props.lat},${this.props.lon}&zoom=${this.state.zoom}`} />
                </div>
            </div>
        )
    }
}

export default Map
