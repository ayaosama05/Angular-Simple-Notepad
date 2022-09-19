import { TestBed } from '@angular/core/testing';
import { Note } from 'src/models/note';
import { NoteService } from './note.service';

describe('NoteService', () => {
  let service: NoteService;
  let mockNotes:Note[] = [{
      id:1,
      title:'first note',
      descption:'first note content',
      date:new Date('2022-05-01')
    },{
      id:2,
      title:'Second note',
      descption:'first Second content',
      date:new Date('2022-08-01')
    },{
      id:3,
      title:'third note',
      descption:'third note content',
      date:new Date('2022-08-10')
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoteService);
    service.notes = mockNotes;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getAllNotes should return all data With size 3 ',() => {
    expect(service.getAllNotes().length).toBe(3);
 })

 it('should getNoteByID',() => {
  expect(service.getNoteByID(2)).toEqual({
    id:2,
    title:'Second note',
    descption:'first Second content',
    date:new Date('2022-08-01')
  })
})

  it('should add note to list',() => {
    const note:Note = {
      id:4,
      title:'new note',
      descption:'test note description',
      date:new Date()
    }
    expect(service.AddNote(note)).toBeInstanceOf(Object);
  })

  it('#getAllNotes should return all data With size 4 after adding element',() => {
     expect(service.getAllNotes()).toHaveSize(4);
  })

  it('should remove item from notes list',() => {
    let note = {
      id:3,
      title:'third note',
      descption:'third note content',
      date:new Date('2022-08-10')
    };
    expect(service.deleteNote(note)).toBe(true);
    expect(service.notes.length).toBeLessThan(4);
  })

});
