import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss']
})
export class CodeEditorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById('programmerTab').click();
  }

  changeCard(sectionId: string) {
    const elements: HTMLCollectionOf<Element> = document.getElementsByClassName('code-content');
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
