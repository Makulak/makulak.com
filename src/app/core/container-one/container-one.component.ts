import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CoreService } from '../core.service';

@Component({
  selector: 'app-container-one',
  templateUrl: './container-one.component.html',
  styleUrls: ['./container-one.component.scss']
})
export class ContainerOneComponent implements OnInit {

  @Output() test = new EventEmitter();

  constructor(public coreService: CoreService) { }

  ngOnInit() {
  }
}
