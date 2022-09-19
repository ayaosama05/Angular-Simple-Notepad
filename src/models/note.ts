export class Note {
  id: number = 0;
  title: string | any;
  description: string | any;
  date: Date = new Date();

  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
  }
}
