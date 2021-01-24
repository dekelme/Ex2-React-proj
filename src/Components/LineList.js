import React, { Component } from 'react';
import Line from './Line';


class LineList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
        this.eachLine = this.eachLine.bind(this);
        this.formUpdate = this.formUpdate.bind(this);
    }


    update(index) {
        this.props.onEdit(index)
    }

    delete(index) {
        this.props.onDelete(index)
    }

    eachLine(item, i) {
        return (<Line key={item.id} index={i} id={item.id} onDelete={this.delete} onEdit={this.formUpdate}>
            <td>{item.id}</td>
            <td>{item.date}</td>
            <td>{item.name}</td>
            <td>{item.city}</td>
        </Line>

        )
    }

    formUpdate(index) {
        this.props.formUpdate(index)
    }

    render() {
        return (
            <div className="lineList">
                <table>
                    <tbody style={{ height: 'fit-content' }} >
                        {this.props.lines.map(this.eachLine)}
                    </tbody>
                </table>
            </div>


        )
    }


}

export default LineList