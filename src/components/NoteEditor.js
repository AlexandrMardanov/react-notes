import React from 'react'
import PropTypes from 'prop-types'

import './NoteEditor.scss'

const NoteEditor = (props) => {
    const { text, handleTextChange, handleNoteAdd } = props

    return (
        <div className='NoteEditor'>
            <textarea
                rows={5}
                placeholder='Enter note'
                className='NoteEditor__textarea'
                value={text}
                onChange={handleTextChange}
            />
            <button
                className='NoteEditor__button'
                onClick={handleNoteAdd}
            >
                Add note
            </button>
        </div>
    )
}

NoteEditor.propTypes = {
    text: PropTypes.string.isRequired,
    handleTextChange: PropTypes.func.isRequired,
    handleNoteAdd: PropTypes.func.isRequired
}

export default NoteEditor
