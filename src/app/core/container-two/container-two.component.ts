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
  ];

  constructor() { }

  ngOnInit() {
    document.getElementById('programmerTab').click();
  }

  changeCard(sectionId: string) {
    const elements: HTMLCollectionOf<Element> = document.getElementsByClassName('description');
    const tabs: HTMLCollectionOf<Element> = document.getElementsByClassName('tab');

    for (let i = 0; i < elements.length; i++) {
      (elements[i] as HTMLElement).style.display = 'none';
    }

    for (let i = 0; i < tabs.length; i++) {
      tabs[i].className = tabs[i].className.replace('active', '');
    }

    document.getElementById(sectionId).style.display = 'block';
    document.getElementById(sectionId + 'Tab').className += ' active';
  }

}
