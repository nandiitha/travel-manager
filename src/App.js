import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component"
import BookingList from "./components/booking-list.component";
import PackageList from "./components/package-list.component";
import CreatePackage from "./components/create-package.component";
import CreateBooking from "./components/create-booking.component";
import EditBooking from "./components/edit-booking.component";
import EditPackage from "./components/edit-package.component";


function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/booking" exact component={BookingList} />
        <Route path="/package" exact component={PackageList} />
        <Route path="/create" component={CreatePackage} />
        <Route path="/package/:id" component={EditPackage} />
        <Route path="/user" component={CreateBooking} />
        <Route path="/booking/:id" component={EditBooking} />
      </div>
    </Router>

  );
}

export default App;
