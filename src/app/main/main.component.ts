import {
  Component, OnInit, OnDestroy, AfterViewInit, ViewContainerRef,
  ElementRef, ViewEncapsulation, Renderer2, ChangeDetectionStrategy, ChangeDetectorRef
} from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { LoginModel } from '../models/login.model';
import { ProfileModel } from '../models/profile-model';
import { Title } from '@angular/platform-browser';
import { HeaderAdminComponent } from '../shared/header-admin/header-admin.component';
import { NavbarAdminComponent } from '../shared/navbar-admin/navbar-admin.component';
import { ApplicationService } from '../services/application/application.service';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { AccountService } from '../services/account/account.service';
import { AuthTokenService } from '../services/auth-token/auth-token.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None

})
export class MainComponent implements OnInit, OnDestroy {

  //refresher
  public timerRefresher$: Observable<any>;
  public timerRefresherSubject$ = new Subject();

  //navigation on side nav bar
  public navItemsAdministrator = [
    {name: 'Dashboard', route: '/main/dashboards'},
    {name: 'Business Units', route: '/business-unit'},
    {name: 'User Overview', route: '/usersoverview'}
  ];


  //save store
  public authSubscribption$: any;
  //profiel
  public profileState: any;
  public name: any;

  public _opened: any;
  public timeoutSubscription$: any;
  public timeoutValue: any;

  //cureency container
  public currencyContainer$;
  public tokenRefreshSubscription$: any;


  constructor(
    public http: Http,
    public titleService: Title,
    public tokens: AuthTokenService,
    public applicationService: ApplicationService,
    public toasterService: ToasterService,
    public cd: ChangeDetectorRef,
    public vcRef: ViewContainerRef,
    public accountService: AccountService,
    public _element: ElementRef,
    public _renderer: Renderer2,
    public _overlayContainer: OverlayContainer
  ) {

    //get value
    this.applicationService.getAllValues().subscribe(
      (result) => { },
      (error: any) => { }
    );

    this.timeoutSubscription$

    this.timerRefresher$ = Observable.timer(2000, 5000);

    this.timeoutSubscription$ = this.timerRefresher$.subscribe(val => {
      this.timerRefresherSubject$.next(val);
      this.applicationService.getUpdateValue().subscribe();
    });

  }


  ngOnInit(): void {



    //assign state
    this.authSubscribption$ = this.applicationService.profileUserContainer$.subscribe(
      (result) => {
        console.log(result);
        if (result.profile != null) {
          this.profileState = result.profile.exp;
          this.name = result.profile.unique_name;

        }
      },
      (error: any) => { }
    );
  }


  public showToogleBar(event)
  {
      
  }


  ngOnDestroy(): void {

    this.timeoutSubscription$.unsubscribe();
    this.authSubscribption$.unsubscribe();
    this.applicationService.getAllValues();
    // this.tokenRefreshSubscription$.unsubscribe();
  }

  

}


