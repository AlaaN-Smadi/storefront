import React from 'react';
import WrongMessage from '../images/WrongMessage.png'

class ShowError extends React.Component {
    render() {
        return (
            <>
            <div style={{ marginRight: "20%",textAlign:"center",background:"#4b4ca3", marginLeft: "20%",marginTop:"10px", border: "1px solid #000150", borderRadius: "30px" }}>
                <div style={{ textAlign: "center", bordertRadius: "30px" }}>
                    <img style={{ width: "100%", height: "500px", borderRadius: "30px" }} alt="Error" src={WrongMessage} />
                </div>


            </div>
            </>
        )
    }
}

export default ShowError
