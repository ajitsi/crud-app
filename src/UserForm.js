import React, { Component } from 'react';
import classNames from 'classnames';


class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            firstName: '',
            lastName: '',
            age: '',
            address: ''
        };
    }

    onChange = (e) => {
        var state = this.state;
        state[e.target.name] = e.target.value;

        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();

        //handle form processing here....
    }


    render() {
        var { email, firstName, lastName, age, address } = this.state;
        var formGroupClass = classNames('form-group');

        return (
            <div className="container" title={this.props.text}>
                <form className="form-user" style={{ margin: "30px 0px 10px 150px" }} onSubmit={this.onSubmit}>
                    <h2 className="form-user-create">Person</h2>
                    <div className={formGroupClass} >
                        <label className="form-label">Email Address: </label> <br />
                        <input type="text" name="email" className="form-control"
                            placeholder="Email address" value={email} onChange={this.onChange} autoFocus />
                    </div>
                    <br />
                    <div className={formGroupClass}>
                        <label className="form-label">First Name: </label> <br />
                        <input type="text" name="firstName" className="form-control"
                            placeholder="First Name" value={firstName} onChange={this.onChange} />
                    </div>
                    <br />
                    <div className={formGroupClass}>
                        <label className="form-label" > Last Name: </label> <br />
                        <input type="text" name="lastName" className="form-control"
                            placeholder="Last Name" value={lastName} onChange={this.onChange} />
                    </div>
                    <br />
                    <div className={formGroupClass}>
                        <label className="form-label">Age: </label> <br />
                        <input type="text" name="age" className="form-control"
                            placeholder="Age" value={age} onChange={this.onChange} />
                    </div>
                    <br />
                    <div className={formGroupClass}>
                        <label className="form-label">Address: </label><br />
                        <input type="text" name="address" className="form-control"
                            placeholder="Address" value={address} onChange={this.onChange} />
                    </div>
                    <br />
                    <div className="text-right" style={{ margin: "0px 0px 0px 40px" }}>
                        <input type="submit" value="Submit" style={{ backgroundColor: "lightBlue", }} />
                    </div>
                </form>
            </div>
        );
    }
}

export default UserForm;