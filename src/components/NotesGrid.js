import React from 'react'
import PropTypes from 'prop-types'

import Note from './Note'

const NotesGrid = (props) => {
    const { notes, handleNoteDelete } = props

    return (
        <div className='NotesGrid'>
            {
                notes.map(note => {
                    return <Note
                        key={note.id}
                        id={note.id}
                        handleNoteDelete={handleNoteDelete}
                    >
                        {note.text}
                    </Note>
                })
            }
        </div>
    )
}

NotesGrid.propTypes = {
    notes: PropTypes.array.isRequired,
    handleNoteDelete: PropTypes.func.isRequired
}

export default NotesGrid
