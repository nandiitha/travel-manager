import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Booking = props => (
    <tr>
        <td>{props.booking.name}</td>
        <td>{props.booking.contact}</td>
        <td>{props.booking.packageId}</td>
        <td>{props.booking.date.substring(0, 10)}</td>
        <td>
            <Link to={"/booking/" + props.booking._id}>edit</Link> | <a href="#" onClick={() => { props.deleteBooking(props.booking._id) }}>delete</a>
        </td>
    </tr>
)

export default class BookingList extends Component {
    constructor(props) {
        super(props);

        this.deleteBooking = this.deleteBooking.bind(this);

        this.state = { bookings: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/booking/')
            .then(response => {
                console.log("response.data", response.data)
                this.setState({ bookings: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteBooking(id) {
        axios.delete('http://localhost:5000/booking/' + id)
            .then(response => { console.log(response.data) });

        this.setState({
            bookings: this.state.bookings.filter(el => el._id !== id)
        })
    }

    BookingList() {
        return this.state.bookings.map(currentbooking => {
            return <Booking booking={currentbooking} deleteBooking={this.deleteBooking} key={currentbooking._id} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Bookings</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Name</th>
                            <th>Contact</th>
                            <th>PackageId</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.BookingList()}
                    </tbody>
                </table>
            </div>
        )
    }
}