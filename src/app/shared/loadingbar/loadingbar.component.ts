import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import { Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-loadingbar',
  templateUrl: './loadingbar.component.html',
  styleUrls: ['./loadingbar.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class LoadingbarComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<LoadingbarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
 
    ngOnInit() {
    }

    onNoClick(): void{
      this.dialogRef.close();
    }

}
