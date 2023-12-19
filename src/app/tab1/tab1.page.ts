import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Tab1Page implements OnInit {

  color?: string;
  bgColor?: string;

  cards: Array<any> = [];
  cards$ = new BehaviorSubject<any>([]);

  constructor(
    private navController: NavController,
    private cd: ChangeDetectorRef,
  ) {}

  async ngOnInit() {
    this.color = 'white';
    this.bgColor = 'black';
    for (let i = 0; i < 500; ++i) {
      let props: any = {
        counter: i
      };
      // 20 props per
      for (let e = 0; e < 20; ++e) {
        props[`prop_${e}`] = `value_${e}`;
      }

      this.cards.push(props);
    }

    // simulate network
    await new Promise(res => setTimeout(res, 250));
    this.cards$.next(this.cards);


    this.cd.markForCheck();
  }

  doNav() {
    this.navController.navigateForward('/tabs/tab1/subpage')
  }


}
