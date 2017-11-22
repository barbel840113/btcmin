import { Directive, Input, HostBinding, HostListener, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appDnd]'
})
export class DndDirective {

  @HostBinding('style.background') private background = '#eee';

  @Output() private filesChangeEmiter: EventEmitter<any[]> = new EventEmitter();

  @Input() private allowed_extensions: Array<string> = [];

  constructor() { }


  @HostListener('dragover', ['$event']) public onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#999';
    console.log('fsdf');
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#eee';
    console.log('fsdf');
  }

  @HostListener('drop', ['$event']) public onDrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    let file = evt.dataTransfer.files;
    let valid_files: any[] = [];
    if (file.length > 0) {

      if (file[0].size > 5000000) {
          window.alert("The file is over 5MB" + file[0].size);
      }

      this.background = '#eee';
      console.log('fsdf');
      let ext = file[0].name.split('.')[file[0].name.split('.').length - 1];
      this.allowed_extensions.forEach(element => {
        if (ext === element) {
          valid_files.push(file);
        }
      });

      this.filesChangeEmiter.emit(valid_files);
    }
  }

}
