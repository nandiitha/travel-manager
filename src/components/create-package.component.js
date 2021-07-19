import React, { Component } from 'react';
import axios from 'axios';


export default class CreatePackage extends Component {
    constructor(props) {
        super(props);

        this.onChangeId = this.onChangeId.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangePlace = this.onChangePlace.bind(this);
        this.onChangeDays = this.onChangeDays.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            id: 0,
            name: '',
            type: '',
            price: 0,
            place: '',
            days: 0,
            package: []
        }
    }

    onChangeId(e) {
        this.setState({
            id: e.target.value
        })
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }

    onChangeType(e) {
        this.setState({
            type: e.target.value
        })
    }

    onChangePrice(e) {
        this.setState({
            price: e.target.value
        })
    }

    onChangePlace(e) {
        this.setState({
            place: e.target.value
        })
    }

    onChangeDays(e) {
        this.setState({
            days: e.target.value
        })
    }



    onSubmit(e) {
        e.preventDefault();

        const Package = {
            id: this.state.id,
            name: this.state.name,
            type: this.state.type,
            price: this.state.price,
            place: this.state.place,
            days: this.state.days
        }
        console.log(Package);
        axios.put('http://localhost:5000/package/', Package)
            .then(res => console.log(res.data))
        window.location = '/';
    }

    render() {
        return (
            <div>
                <h3>Create Package</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Id: </label>
                        <input
                            className="form-control"
                            value={this.state.id}
                            onChange={this.onChangeId}
                        />

                    </div >
                    <div className="form-group">
                        <label>Name: </label>
                        <input
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                        />

                    </div >
                    <div className="form-group">
                        <label>Type: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.type}
                            onChange={this.onChangeType}
                        />
                    </div>

                    <div className="form-group">
                        <label>Price: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.price}
                            onChange={this.onChangePrice}
                        />
                    </div>
                    <div className="form-group">
                        <label>Place: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.place}
                            onChange={this.onChangePlace}
                        />
                    </div>
                    <div className="form-group">
                        <label>Days: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.days}
                            onChange={this.onChangeDays}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Package" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}

