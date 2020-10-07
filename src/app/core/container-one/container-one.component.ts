import { Component, OnInit } from '@angular/core';
import { CoreService } from '../core.service';

@Component({
  selector: 'app-container-one',
  templateUrl: './container-one.component.html',
  styleUrls: ['./container-one.component.scss']
})
export class ContainerOneComponent implements OnInit {

  constructor(public coreService: CoreService) { }

  ngOnInit() {
  }

}
