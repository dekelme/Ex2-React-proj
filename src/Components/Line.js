import React, { Component } from 'react';

import {IconButton} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

class Line extends Component {
    constructor(props) {
        super(props);

        this.edit = this.edit.bind(this);
        this.delete = this.delete.bind(this);

    }

    edit() {
        this.props.onEdit(this.props.index)
    }

    delete() {
        this.props.onDelete(this.props.id)
    }

    render() {
        return (
            <tr className="line">
                {this.props.children}
                <td className="icons">
                    <IconButton onClick={this.edit} size={'small'} style={{ color: '#ffffff', background: '#ee4d47', marginRight: '3%' }}>
                        <EditIcon />
                    </IconButton>
                    <IconButton onClick={this.delete} size={'small'} style={{ color: '#ffffff', background: '#ee4d47' }}>
                        <DeleteIcon />
                    </IconButton>
                </td>
            </tr>
        )
    }
}

export default Line;