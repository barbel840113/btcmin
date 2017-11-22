import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-uploadfile',
  templateUrl: './uploadfile.component.html',
  styleUrls: ['./uploadfile.component.css']
})
export class UploadfileComponent implements OnInit {

  constructor() { }

  public fileList: any = [];

  ngOnInit() {
  }

  onFilesChange(fileList: FileList) {
    // do stuff here
    console.log(fileList);
    this.fileList = fileList;
  }

  




}
