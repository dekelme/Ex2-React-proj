import React, { Component } from 'react';
import Form from './Form';
import LineList from './LineList';
import listData from './../Data/list.json';

class Data extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lines: [],
            isNew: true,
            formFields: {
                id: null,
                date: "",
                name: "",
                city: ""
            }
        }

        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
        this.add = this.add.bind(this);
        this.nextId = this.nextId.bind(this);
        this.formUpdate = this.formUpdate.bind(this);
    }

    componentDidMount() {
        listData.map(item => this.add({ id: item.id, date: item.date, name: item.name, city: item.city }));
    }

    update(newLine, id) {
        this.setState(prevState => ({
            lines: prevState.lines.map(
                (line) => line.id !== id ? line : {
                    id: newLine.id,
                    date: newLine.date,
                    name: newLine.name,
                    city: newLine.city
                })
        }));
    }

    delete(id) {

        this.setState(prevState => ({
            lines: prevState.lines.filter(line => line.id !== id)
        }))
    }

    add({ id = null, date = 'default date', name = 'default name', city = 'default city' }) {
        this.setState(prevState => ({
            lines: [
                ...prevState.lines, {
                    id: id !== null ? id : this.nextId(prevState.lines),
                    date: date,
                    name: name,
                    city: city
                }]
        }))
    }

    nextId(lines = []) {
        let max = lines.reduce((prev, curr) => prev.id > curr.id ? prev.id : curr.id, 0);
        return ++max;
    }

    formUpdate(index) {
        this.setState({
            isNew: false,
            formFields: {
                id: this.state.lines[index].id,
                date: this.state.lines[index].date,
                name: this.state.lines[index].name,
                city: this.state.lines[index].city
            }
        })

    }

    render() {
        return (
            <div className="main">
                <div className="wrapper">
                    <LineList lines={this.state.lines} formUpdate={this.formUpdate} onEdit={this.update} onDelete={this.delete} />
                    <Form onSave={this.add} onUpdate={this.update} isNew={this.state.isNew} formFields={this.state.formFields} />
                </div>

            </div>
        )
    }
}

export default Data;