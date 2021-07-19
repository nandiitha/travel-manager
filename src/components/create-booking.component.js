import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

export default class CreateBooking extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeContact = this.onChangeContact.bind(this);
        this.onChangePackageId = this.onChangePackageId.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            contact: 0,
            package: '',
            packageId: 0,
            date: new Date(),
            packages: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/package/')
            .then(response => {
                console.log(response.data)
                if (response.data.length > 0) {
                    this.setState({
                        packages: response.data

                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }

    onChangeContact(e) {
        this.setState({
            contact: e.target.value
        })
    }



    onChangePackageId(e) {
        this.setState({
            packageId: e.target.value
        })
    }

    onChangeDate(date) {
        this.setState({
            date: date
        })
    }



    onSubmit(e) {
        e.preventDefault();

        const booking = {
            name: this.state.name,
            contact: this.state.contact,

            packageId: this.state.packageId,
            date: this.state.date
        }
        console.log(booking);

        axios.post('http://localhost:5000/booking/', booking)
            .then(res => console.log(res.data))
        //window.location = '/';
    }

    render() {
        return (
            <div>
                <h3>Booking</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}

                        />
                    </div >
                    <div className="form-group">
                        <label>Contact: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.contact}
                            onChange={this.onChangeContact}
                        />
                    </div>

                    {/* <div className="form-group">
                        <label>PackageId: </label>
                        <select ref="idInput"
                            required
                            className="form-control"
                            value={this.state.packages}
                            onChange={this.onChangePackageId}>
                            {
                                this.state.packages.map(function (pack) {
                                    return <option
                                        key={pack}
                                        value={pack} > {pack}
                                    </option>;
                                })
                            }
                        </select>
                    </div> */}

                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Confirm Booking" className="btn btn-primary" />
                    </div>
                </form>
            </div >
        )
    }
}

