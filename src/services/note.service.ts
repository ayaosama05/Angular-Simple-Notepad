import { Injectable } from '@angular/core';
import { Note } from 'src/models/note';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  notes: Note[] = [];

  constructor() {}

  getAllNotes() {
    const cartInStorage = localStorage.getItem('MyNotes');
    if (cartInStorage) {
      this.notes = JSON.parse(cartInStorage);
    }
    return this.notes;
  }

  getNoteByID(id: number): Note | undefined {
    return this.notes.find((a) => a.id === id);
  }

  saveNotesInLocalStorage() {
    localStorage.setItem('MyNotes', JSON.stringify(this.notes));
  }

  AddNote(note: Note): Note {
    // Create a unique id that is one larger than the current largest id
    note.id = Math.max(...this.notes.map((note) => note.id), 0) + 1;
    this.notes.push(note);
    this.saveNotesInLocalStorage();
    return note;
  }

  EditNote(note: Note): void {
    this.notes.splice(note.id - 1, 1, note);
    this.saveNotesInLocalStorage();
  }

  findIndexToUpdate(newItem: any) {
    return newItem.id === this;
  }

  deleteNote(note: Note): boolean {
    let flag = false;
    const index = this.notes.findIndex((a) => a.id === note.id);
    if (index !== -1) {
      this.notes.splice(index, 1);
      this.saveNotesInLocalStorage();
      flag = true;
    }
    return flag;
  }

  deleteNoteByNum(num: Number): boolean {
    let flag = false;
    const index = this.notes.findIndex((a) => a.id === num);
    if (index !== -1) {
      this.notes.splice(index, 1);
      this.saveNotesInLocalStorage();
      flag = true;
    }
    return flag;
  }
}
