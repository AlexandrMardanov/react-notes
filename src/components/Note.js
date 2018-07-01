import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Note.scss'

class Note extends Component {
    state = {
        isVisible: true
    }

    handleDelete = () => this.props.handleNoteDelete(this.props.id)

    handleHide = () => this.setState({ isVisible: !this.state.isVisible })

    render() {
        const { children, title } = this.props

        return (
            <div className='Note'>
                <span
                    className='Note__delete'
                    onClick={this.handleDelete}
                >
                    &#10005;
                </span>
                <div
                    className='Note__title'
                    onClick={this.handleHide}
                >
                    {title}
                </div>
                {
                    this.state.isVisible &&
                    <div className='Note__text'>{children}</div>
                }
            </div>
        )
    }
}

Note.propTypes = {
    children: PropTypes.string.isRequired,
    handleNoteDelete: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
}

export default Note
