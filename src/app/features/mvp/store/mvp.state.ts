import { Action, State, StateContext } from '@ngxs/store';
import { Injectable, NgZone } from '@angular/core';

import {
  MvpStateModel} from './mvp-state.model';
import { MvpService } from '../services/mvp.service';
import { Router } from '@angular/router';

@State<MvpStateModel>({
  name: 'mvp',
})
@Injectable()
export class MvpState {
  constructor(
    private mvpService: MvpService,
    private zone: NgZone,
    private router: Router,
  ) {}


}
