import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-base',
  templateUrl: './container-base.component.html',
  styleUrls: ['./container-base.component.scss']
})
export class ContainerBaseComponent implements OnInit {

  @Input() title: string;
  @Input() titleColor: string;

  constructor() { }

  ngOnInit() {
  }
}
