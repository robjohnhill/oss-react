import React from 'react';

class XTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            initiated: false,
            data: {}
        };
    }

    componentDidMount() {
        fetch('http://localhost:8082/world/cities/greater/1000000')
            .then(res => {
                console.log("test");
                return res.json()
            })
            .then(data => {
                this.setState({
                    initiated: true,
                    data: data
                })
            })
            .catch(error => console.log('Error:', error))
    }

    render() {
        const {initiated, data} = this.state;
        if(!initiated){
            return 'Loading ...';
        }
        console.log("c:", data)
        return (
            <div>
                <ol>
                    {
                        data.cities.map(city => (
                            <li key={city.id} align="start">
                                <div>
                                    <p>{city.name}</p>
                                </div>
                            </li>
                        ))
                    }
                </ol>
            </div>
        );
    }
}

export default XTable;