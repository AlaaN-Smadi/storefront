import React from 'react';
import WrongMessage from '../images/WrongMessage.png'

class ShowError extends React.Component {
    render() {
        return (
            <>
                <div style={{ position: "relative", marginRight: "20%", textAlign: "center", marginLeft: "20%", marginTop: "10px", border: "1px solid #000150", borderRadius: "30px" }}>
                    <div style={{ textAlign: "center", bordertRadius: "30px" }}>
                        <img style={{ width: "100%", height: "500px", borderRadius: "30px",zIndex:"1" }} alt="Error" src={WrongMessage} />

                    </div>
                    <div style={{ position: "absolute", width: "100%", height: "500px", borderRadius: "30px", backgroundColor: "#4b4ca3", opacity: "0.3", top: "0" }}>  </div>

                </div>
            </>
        )
    }
}

export default ShowError
