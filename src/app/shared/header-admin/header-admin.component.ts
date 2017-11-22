import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Input, Output, EventEmitter, ElementRef,Renderer2} from '@angular/core';

import { OverlayContainer } from '@angular/cdk/overlay';
import { AccountService } from '../../services/account/account.service';
import { ApplicationService } from '../../services/application/application.service';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';
import { Router, NavigationEnd } from '@angular/router';
import { Subject} from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { UserService} from '../../services/users/user.service';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None

})
export class HeaderAdminComponent implements OnInit, OnDestroy {

  //timer to be subuscribe
  public timer: any;
  public dark = false;
  

  public timerSubscription$ : Observable<any>;
  public timer$ :any;

  //shor or hide
  public shorOrHide: any;

  //username
  public username: any;
  public userNameSubscription$: any;

  //subscribe profile information
  public profileSubscribe$ : any;

  public roleSubscription$ : any;
  public roleUserName: any

  @Output("toggleSideBar") toogleSideBar : EventEmitter<any> = new EventEmitter();

  //time subscription
  public dateTimeValue: any

  constructor(
    public _accountService: AccountService,
    public _applicationService: ApplicationService,
    public cd: ChangeDetectorRef,
    public router: Router,    
    public _element: ElementRef,
    public _renderer: Renderer2,
    public _overlayContainer: OverlayContainer,
    public _userService :UserService
  ) {
    this.shorOrHide = false;
   
    this.timerSubscription$ = Observable.timer(1000,1000);
    
    this.timer$ =  this.timerSubscription$.subscribe(res =>{
           let date = new Date(Date.now());
           this.dateTimeValue = date;
           this.cd.markForCheck();
          
        });

    this.roleSubscription$ = this._userService.userRoleSubscription$.subscribe(res => { this.roleUserName = res;});

    this.profileSubscribe$ = this._applicationService.profileUserContainer$.subscribe(
      (result) =>{
         if(result != null)
         {
             this.username = result.email;
         }
      },
      (error : any) =>{}
    );

  this.userNameSubscription$ = this._userService.userNameSubscription$.subscribe(
    (res) => 
    {
      this.username = res;
    },
    (error :any) =>{
      
    });

  


  
  }

  ngOnInit() {
    this._applicationService.slidenavigationbarSubject$.next(false);
  }

  ngOnDestroy() {
    this.profileSubscribe$.unsubscribe();  
    this.timer$.unsubscribe();
    this.roleSubscription$.unsubscribe();
    this.userNameSubscription$.unsubscribe();
    
  }


  logout(): void {
    this._accountService.logout();
  }

  public openSideBar()
  {
    this.toogleSideBar.emit(true);
  }

  settings()
  {
     this.router.navigate(['/settings']);
  }


  toggleFullscreen() {
    let elem = this._element.nativeElement.querySelector('.demo-content');
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullScreen) {
      elem.webkitRequestFullScreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.msRequestFullScreen) {
      elem.msRequestFullScreen();
    }
  }

  toggleTheme() {
    const darkThemeClass = 'unicorn-dark-theme';

    this.dark = !this.dark;

    if (this.dark) {
      this._renderer.addClass(this._element.nativeElement, darkThemeClass);
      this._overlayContainer.getContainerElement().classList.add(darkThemeClass);
    } else {
      this._renderer.removeClass(this._element.nativeElement, darkThemeClass);
      this._overlayContainer.getContainerElement().classList.remove(darkThemeClass);
    }
  }
}
