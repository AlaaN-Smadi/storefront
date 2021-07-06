import React from 'react';
import Table from 'react-bootstrap/Table';


class Movies extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posterLink: 'https://image.tmdb.org/t/p/w500'
        }
    }


    render() {
        return (
            <div style={{ marginLeft: "25%", marginRight: "25%", textAlign: "center", backgroundColor: "#4b4ca3" }}>
                <Table striped bordered hover>
                    <thead style={{ color: "wheat", background: "#01011c" }}>
                        <tr style={{ color: "wheat" }}><th colSpan="2"> City's Movies </th></tr>
                    </thead>


                    {this.props.moviesObject.map((item, index) => {
                        return (
                            <>
                                <tbody key={index}>
                                    <tr style={{ color: "wheat", background: "darkblue" }}><th colSpan="2"> {item.title} </th></tr>

                                    <tr style={{ color: "wheat" }}>
                                        <td> Released  Date </td>
                                        <td> {item.release_date} </td>

                                    </tr>
                                    <tr style={{ color: "wheat" }}>
                                        <td> Popularity </td>
                                        <td> {item.popularity} </td>

                                    </tr>
                                    <tr style={{ color: "wheat" }}>
                                        <td> Total  Votes </td>
                                        <td> {item.vote_count} </td>

                                    </tr>
                                    <tr style={{ color: "wheat" }}>
                                        <td> Average  Votes </td>
                                        <td> {item.vote_average} </td>

                                    </tr>

                                    <tr style={{ color: "wheat" }}>
                                        <td> OverView </td>
                                        <td> {item.overview} </td>

                                    </tr>

                                    <tr style={{ color: "wheat" }}><th colSpan="2"> Movie  Poster </th></tr>

                                    <tr style={{ color: "wheat" }}><th colSpan="2"> <img alt='poster' src={`${this.state.posterLink + item.poster_path}`} /> </th></tr>
                                    {/* <tr style={{ color: "wheat" }}><th colSpan="2"> {this.state.posterLink + item.poster_path} </th></tr> */}
                                </tbody>
                            </>
                        )
                    })

                    }




                </Table>
            </div>
        )
    }
}

export default Movies
