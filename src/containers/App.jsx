import React, { Component } from 'react';
import './App.css';
import Notes from '../components/Notes';
import uuid from 'uuid';
import connect from '../libs/connect';

class App extends Component {
  // The constructor is called before it is mounted
  // It is the place to initiliaze state
  constructor(props) {
    // Call super(props) before any other statement, otherwise this.props
    // will be undefined in the constructor
    super(props);

    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: "Learn React"
        },
        {
          id: uuid.v4(),
          task: "Do Laundry"
        }
      ]
    };
  }

  // Add a note
  addNote = () => {
    this.setState({
      notes: this.state.notes.concat([{
        id: uuid.v4(),
        task: "New Task"
      }])
    });
  }

  // Delete a note
  deleteNote = (id, e) => {
    // Avoid bubbling to edit
    // Avoid triggering possible other events elsewhere in the structure on delete
    e.stopPropagation();

    this.setState({
      notes: this.state.notes.filter(note => note.id !== id)
    });
  }

  // Activate Editing Input
  activateNoteEdit = (id) => {
    this.setState({
      notes: this.state.notes.map(note => {
        if(note.id === id) {
          note.editing = true;
        }
        return note;
      })
    });
  }

  editNote = (id, task) => {
    this.setState({
      notes: this.state.notes.map(note => {
        if(note.id === id) {
          note.editing = false;
          note.task = task;
        }
        return note;
      })
    });
  }

  render() {
    const {notes} = this.state;

    return (
      <div>
        {this.props.test}
        <button className="add-note" onClick={this.addNote}>+</button>
        <Notes
          notes={notes}
          onNoteClick={this.activateNoteEdit}
          onEdit={this.editNote}
          onDelete={this.deleteNote}
        />
      </div>
    )
  }
}

export default connect(() => ({
  test: 'test'
}))(App);
