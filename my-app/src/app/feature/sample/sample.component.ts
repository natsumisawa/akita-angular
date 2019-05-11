import {Component, OnDestroy, OnInit} from '@angular/core';
import {Chara, CharaListService} from './shared/state/charaList.service';
import {Observable, Subscription} from 'rxjs';
import {CharaListQuery} from './shared/state/charaList.query';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit, OnDestroy {
  charaForm = new FormGroup({
    charaName: new FormControl(''),
    description: new FormControl(''),
  });
  private subscription: Subscription | undefined;
  charaList$: Observable<Chara[]>;

  constructor(
    private service: CharaListService,
    private charaListQuery: CharaListQuery
  ) {
    this.initFetch();
  }

  async initFetch(): Promise<void> {
    try {
      await this.service.getCharas();
      // quieryから受け取るのはObservable
      this.charaList$ = this.charaListQuery.selectAll();
    } catch (e) {
      console.log(e);
    }
  }

  ngOnInit() { }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
