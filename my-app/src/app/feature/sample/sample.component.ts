import {Component, OnDestroy, OnInit} from '@angular/core';
import {PrService} from './shared/state/pr.service';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit, OnDestroy {
  private subscription: Subscription | undefined;
  content: string;

  constructor(
    private service: PrService,
  ) {
    this.getPr();
  }

  async getPr(): Promise<void> {
    try {
      const res = await this.service.getPr().toPromise();
      console.log(res);
      this.content = '成功になるはずがない';
    } catch (e) {
      console.log(e);
      this.content = 'errorだったよ';
    }
  }

  ngOnInit() { }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
