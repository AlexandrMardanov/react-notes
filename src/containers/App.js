import React, { Component } from 'react'

import NotesGrid from '../components/NotesGrid'
import NoteEditor from '../components/NoteEditor'

import { NOTES } from '../api/notes'

import './App.scss'

class App extends Component {
    state = {
        notes: NOTES,
        text: '',
        title: ''
    }

    componentDidMount = () => {
        const savedNotes = JSON.parse(localStorage.getItem('notes'))

        if (savedNotes) {
            this.setState({ notes: savedNotes })
        }
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.notes !== this.state.notes) {
            this.saveToLocalStorage()
        }
    }

    handleTextChange = (e) => {
        this.setState({ text: e.target.value })
    }

    handleTitleChange = (e) => {
        this.setState({ title: e.target.value })
    }

    handleNoteAdd = () => {
        if (this.state.text && this.state.title) {
            const note = {
                text: this.state.text,
                id: Date.now(),
                title: this.state.title
            }

            this.setState({
                notes: [note, ...this.state.notes]
            })

            this.clearText()
        }
    }

    clearText = () => {
        this.setState({ text: '', title: '' })
    }

    saveToLocalStorage = () => {
        const notes = JSON.stringify(this.state.notes)

        localStorage.setItem('notes', notes)
    }

    handleNoteDelete = (id) => {
        this.setState({
            notes: this.state.notes.filter(note => note.id !== id)
        })
    }

    render() {
        return (
            <section className='App'>
                <h1>React Notes</h1>

                <NoteEditor
                    title={this.state.title}
                    text={this.state.text}
                    handleTextChange={this.handleTextChange}
                    handleTitleChange={this.handleTitleChange}
                    handleNoteAdd={this.handleNoteAdd}
                />

                <NotesGrid
                    notes={this.state.notes}
                    handleNoteDelete={this.handleNoteDelete}
                />
            </section>
        )
    }
}

export default App
