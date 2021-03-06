import {Component} from '@angular/core';
import {Control} from '@angular/common';
import {Observable} from 'rxjs/Observable';
import {WikipediaService} from '../service/wikipedia.service';

@Component({
    selector: 'app',
    template: `<div class="container">
    <h2>Wikipedia Search</h2>
    <input type="text" [ngFormControl]="term"/>
    <ul>
      <li *ngFor="let item of items | async">{{item}}</li>
    </ul>
</div>`,
    providers: [WikipediaService]
})
export class AppComponent {
  items: Observable<Array<string>>;
  term = new Control();

  constructor(private wikipediaService: WikipediaService) {
    this.items = wikipediaService.search(this.term.valueChanges);
  }
}
