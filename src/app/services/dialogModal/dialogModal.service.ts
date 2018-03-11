import { Injectable } from '@angular/core';
import { LoadingbarComponent } from '../../shared/loadingbar/loadingbar.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {UtilityService } from '../utility/utility.service';
import { MessageFormComponent} from '../../shared/message-form/message-form.component';
import {MatSnackBar , MatSnackBarVerticalPosition} from '@angular/material';



@Injectable()
export class DialogAppService {


  public snackVertical : MatSnackBarVerticalPosition;

  constructor( public dialog: MatDialog, public utilityService : UtilityService,public snackBar: MatSnackBar) { }
  public dialogref: any;
  public messageDialogRef: any;
  
  public openDialog() : void{
    this.dialogref = this.dialog.open(LoadingbarComponent, {
     width: '250px',
     data: ''
    }); 
  }

  public openMessageDialog(): void{
    this.messageDialogRef = this.dialog.open(MessageFormComponent ,{
      width: '250px',
      data: ''      
    });
  }

 /**
  * Open Snack Bar
  * @param text Test to be display
  */
  public openSnackBar(text ? : any) 
  {
    this.snackBar.open(text, "Close" , {
      duration: 20000,
      verticalPosition : this.snackVertical,
    });
  }
 

  /**
   * 
   * @param url Close dialog
   */
    public closedDialog(url? : string): void {
      //close dialog
      this.dialog.closeAll();
      if(url != '')
      {
         this.utilityService.navigate(url);
      }
    }

    public closedMessageDialog(url? : string) :void{
       this.dialog.closeAll();
       
    }
  

}
