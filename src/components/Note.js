import React from 'react'
import PropTypes from 'prop-types'

import './Note.scss'

const Note = (props) => {
    const { children, handleNoteDelete, id } = props

    const handleDelete = () => handleNoteDelete(id)

    return (
        <div className='Note'>
            <span
                className='Note__delete'
                onClick={handleDelete}
            >
                &#10005;
            </span>
            {children}
        </div>
    )
}

Note.propTypes = {
    children: PropTypes.string.isRequired,
    handleNoteDelete: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired
}

export default Note
