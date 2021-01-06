import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {

  userName = '';

  sample='';

  constructor(private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.userName = this.activatedRouter.snapshot.paramMap.get('user');
  }

}
