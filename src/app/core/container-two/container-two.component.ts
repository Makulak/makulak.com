import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-two',
  templateUrl: './container-two.component.html',
  styleUrls: ['./container-two.component.scss']
})
export class ContainerTwoComponent implements OnInit {

  skillsList: string[] = [
    'C#',
    '.NET Core',
    'EntityFramework',
    'WinForms',
    'WPF',
    'DevExpress',
    'SQL',
    'HTML 5',
    'CSS',
    'JavaScript/TypeScript',
    'Angular',
    'PrimeNG'
  ]

  constructor() { }

  ngOnInit() {
  }

}
