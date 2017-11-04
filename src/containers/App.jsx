import React, { Component } from 'react';
import './App.css';
import Notes from '../components/Notes';
import uuid from 'uuid';

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

  render() {
    const {notes} = this.state;
    return (
      <div className="App">
        <button onClick={this.addNote}>+</button>
        <Notes notes={notes} onDelete={this.deleteNote} />
      </div>
    );
  }
}

export default App;
