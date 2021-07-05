import React from 'react';
import FormPage from './form';
import TablePage from './Table';
import Map from './map';
import axios from 'axios';

class Main extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            jsonData: {},
            cityName: '',
            zoom: 10,
            showMap: false
        }
    }

    // pk.d7056802aacd70f241c6719bb2bf361a	

    submitBut = async (e) => {
        e.preventDefault();

        let cityName = e.target.cityName.value

        let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_KEY}&q=${cityName}&format=json`
        let data = await axios.get(url);

        // console.log(data);

        await this.setState({
            jsonData: data.data[0],
            cityName: data.data[0].display_name,
            showMap: true


        })

        console.log(data.data[0])
        console.log(this.state.jsonData)
        // console.log(this.state.jsonData)

    }



    render() {
        return (
            <div style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_Map_Blank.svg')", backgroundSize: "100%", backgroundRepeat: "no-repeat" }}>
                <FormPage submitBut={this.submitBut} />

                {this.state.showMap &&
                    <TablePage cityInfo={this.state.jsonData} />
                }
                {this.state.showMap &&
                    <Map setZoom={this.setZoom} zoom={this.state.zoom} lon={this.state.jsonData.lon} lat={this.state.jsonData.lat} />
                }
            </div>
        )
    }
}

export default Main
