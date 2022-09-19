import { Component, OnInit } from '@angular/core';
import { Note } from 'src/models/note';
import { NoteService } from 'src/services/note.service';

@Component({
  selector: 'app-note-page',
  templateUrl: './note-page.component.html',
  styleUrls: ['./note-page.component.css'],
})
export class NotePageComponent implements OnInit {
  notes: Note[] = [];
  constructor(private NoteService: NoteService) {}

  note: Note = new Note('', '');

  ngOnInit(): void {
    this.SetNotes();
  }

  deleteNote(num: number) {
    console.log(num);
    this.NoteService.deleteNoteByNum(num);
  }

  editNote(note: Note) {
    this.note = note;
  }

  AddOrEditNote(note: Note) {
    if (this.NoteService.getNoteByID(note.id) !== undefined) {
      this.NoteService.EditNote(note);
    } else {
      this.NoteService.AddNote(note);
    }

    this.SetNotes();
  }

  SetNotes() {
    this.notes = this.NoteService.getAllNotes();
  }
}
