import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Package = props => (
    <tr>
        <td>{props.package.id}</td>
        <td>{props.package.name}</td>
        <td>{props.package.type}</td>
        <td>{props.package.price}</td>
        <td>{props.package.place}</td>
        <td>{props.package.days}</td>
        <td>
            <Link to={"/package/" + props.package._id}>edit</Link> | <a href="#" onClick={() => { props.deletePackage(props.package._id) }}>delete</a>
        </td>
    </tr>
)

export default class PackageList extends Component {
    constructor(props) {
        super(props);

        this.deletePackage = this.deletePackage.bind(this)

        this.state = { package: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/package/')
            .then(response => {
                this.setState({ package: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deletePackage(id) {
        axios.delete('http://localhost:5000/package/' + id)
            .then(response => { console.log(response.data) });

        this.setState({
            package: this.state.package.filter(el => el._id !== id)
        })
    }

    packageList() {
        return this.state.package.map(currentpackage => {
            return <Package package={currentpackage} deletePackage={this.deletePackage} key={currentpackage._id} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Packages</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Price</th>
                            <th>Place</th>
                            <th>Days</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.packageList()}
                    </tbody>
                </table>
            </div>
        )
    }
}