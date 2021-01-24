import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "",
            name: "",
            city: ""
        }
        this.inputChanged = this.inputChanged.bind(this);
        this.save = this.save.bind(this);
    }

    inputChanged(e) {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    save(e) {
        e.preventDefault();
        const tmp = {
            date: this.state.date,
            name: this.state.name,
            city: this.state.city
        }
        this.setState({
            date: "",
            name: "",
            city: ""
        })
        if (this.props.isNew) {
            this.props.onSave(tmp);
        }
        else {
            tmp["id"] = this.props.formFields.id
            this.props.onUpdate(tmp, this.props.formFields.id);
        }

    }

    componentDidUpdate(prevProps) {
        if (this.props.formFields !== prevProps.formFields) {
            this.setState({
                date: this.props.formFields.date,
                name: this.props.formFields.name,
                city: this.props.formFields.city
            })
        }
    }

    render() {
        return (
            <form className="form">
                <input type="text" name="date" className="date" onChange={this.inputChanged} value={this.state.date} />
                <input type="text" name="name" className="name" onChange={this.inputChanged} value={this.state.name} />
                <input type="text" name="city" className="city" onChange={this.inputChanged} value={this.state.city} />
                <button className="save" onClick={this.save} >
                    {this.props.isNew ? "Save" : "Update"}
                </button>
            </form>
        )
    }


}
export default Form;