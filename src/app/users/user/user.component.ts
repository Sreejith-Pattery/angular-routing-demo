import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  userSubscription:Subscription;

  constructor(private currentRoute:ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id:this.currentRoute.snapshot.params['id'],
      name:this.currentRoute.snapshot.params['name']
    };

    this.currentRoute.params.subscribe(()=>{
      this.user = {
        id:this.currentRoute.snapshot.params['id'],
        name:this.currentRoute.snapshot.params['name']
      };
    })
  }


  ngOnDestroy(): void {
    //this.userSubscription.unsubscribe();
  }

}
