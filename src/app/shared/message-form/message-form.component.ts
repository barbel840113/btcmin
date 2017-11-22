import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import { Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MessageFormComponent implements OnInit {

  constructor(  public dialogRef: MatDialogRef<MessageFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
