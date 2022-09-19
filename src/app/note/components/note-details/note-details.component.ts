import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from 'src/models/note';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css'],
})
export class NoteDetailsComponent implements OnInit {
  @Input() item: Note = new Note('', '');
  @Output() deleteThisNote = new EventEmitter();
  @Output() editThisNote = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  deleteNote(id: number) {
    this.deleteThisNote.emit(id);
  }

  editNote(item: Note) {
    this.editThisNote.emit(item);
  }
}
