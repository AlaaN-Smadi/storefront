import React from 'react';
import Table from 'react-bootstrap/Table';



class WheatherTable extends React.Component {
    render() {
        return (
            <div style={{ marginLeft: "25%", marginRight: "25%", textAlign: "center", backgroundColor: "#4b4ca3", opacity: "0.6" }}>


                <Table striped bordered hover>
                    <thead style={{ color: "wheat" }}>
                        <tr style={{ color: "wheat" }}><th colSpan="2"> Wheather </th></tr>
                    </thead>

                    <tbody>
                        {
                            <tr style={{ color: "wheat" }}>
                                <td> {this.props.wheatherData.data.datetime} </td>
                                <td> heigh of {this.props.wheatherData.data.max_temp}, and low of {this.props.wheatherData.data.low_temp} with {this.props.wheatherData.data.description} </td>

                            </tr>
                        }



                    </tbody>
                </Table>



            </div>
        )
    }
}

export default WheatherTable