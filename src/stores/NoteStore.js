import React from 'react'
import uuid from 'uuid'

export default class NoteStore {
  constructor() {
    this.notes = [
      {
        id: uuid.v4(),
        task: 'Learn React'
      },
      {
        id: uuid.v4(),
        task: 'Do Laundry'
      }
    ]
  }
}
