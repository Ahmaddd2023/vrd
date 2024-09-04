import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';


@Component({
  selector: 'app-mvp-1',
  templateUrl: './mvp-1.component.html',
  styleUrls: ['./mvp-1.component.scss'],
})
export class Mvp1Component implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
  }
}
