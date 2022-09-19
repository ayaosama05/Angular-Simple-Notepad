import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/helpers/MyErrorStateMatcher';
import { Note } from 'src/models/note';

@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.css'],
})
export class NoteAddComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  @Output() note: EventEmitter<Note> = new EventEmitter();

  registerForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });
  submitted = false;

  matcher = new MyErrorStateMatcher();
  _note = new Note('', '');

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      description: ['', [Validators.required]],
    });
  }

  createNote() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this._note = {
      title: this.registerForm.get('title')?.value,
      description: this.registerForm.get('description')?.value,
      id: 0,
      date: new Date(),
    };

    this.note.emit(this._note);
    this.registerForm.reset();
    this.submitted = false;
  }
}
