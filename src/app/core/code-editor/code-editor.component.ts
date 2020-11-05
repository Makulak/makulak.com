import { Component, OnInit, ViewEncapsulation } from '@angular/core';
enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}
@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CodeEditorComponent implements OnInit {

  constructor() { }

  private get programmerContent(): string {
    return `public Programmer SetBasicInfo()
    {
    return new ProgrammerBuilder()
    .SetName('Jonasz')
    .SetSurname('Makulak')
    .SetDateOfBirth('1997-02-28')
    .SetUniversity('Uniwerystet Jagielloński, Computer Science', TimeSpan.FromYears(2020-2015))
    .LearnLanguage('English', Level.B2)
    .LearnLanguage('Spanish', Level.A1)
    .Create();
    }`;
  }

  private get aboutContent(): string {
    return `public Programmer SetAdditionalInfo()
    {
    return SetBasicInfo()
    .SetHobby('Playing guitar')
    .SetHobby('Home brewery')
    .SetHobby('Hitch-hiking')
    .SetInterest('Hackathons')
    .Create();
    }`;
  }

  private get jobContent(): string {
    return `public Job CreateDreamJob()
    {
    return new JobBuilder()
    .AddRequirement('Dynamiczny zespół', EImportance.High)
    .AddRequirement('Owocowe środy', EImportance.Medium)
    .AddRequirement('Kartofel pod keczupem', EImportance.Low)
    .Create();
    }`;
  }

  ngOnInit() {
    document.getElementById('programmerTab').click();
    const x = Direction.Down;
  }

  changeCard(sectionId: string) {
    const tabs: HTMLCollectionOf<Element> = document.getElementsByClassName('tab');
    const article: HTMLElement = document.getElementById('code-content');

    for (let i = 0; i < tabs.length; i++) {
      tabs[i].className = tabs[i].className.replace('active', '');
    }

    document.getElementById(sectionId + 'Tab').className += ' active';

    switch (sectionId) {
      case 'programmer':
        article.innerHTML = this.formatContent(this.programmerContent);
        break;
      case 'about':
        article.innerHTML = this.formatContent(this.aboutContent);
        break;
      case 'job':
        article.innerHTML = this.formatContent(this.jobContent);
        break;
      default:
        article.innerHTML = this.formatContent(this.programmerContent);
        break;
    }
  }

  formatContent(content: string): string {

    const spaces = window.innerWidth > 400 ? '   ' : ' ';

    content = content.replace(/\n/g, ''); // remove all new lines
    content = content.replace(/ {2,}/g, ''); // remove all white spaces
    content = content.replace(/\{/g, '\n\{\n'); // new line before and after opening bracket
    content = content.replace(/\}/g, '\n\}\n'); // new line before and after closing bracket
    content = content.replace(/\)\./g, '\)\n' + spaces + '\.'); // new line and tab before dot

    content = content.replace(/{[\s\S]*?}/g, match => { // add spaces to bracket's content
      return match.replace(/\n/g, '\n' + spaces);
    });

    content = content.replace(/   \}/g, '\}'); // remove tab before closing bracket

    // colors
    content = content.replace(/new|public/g, match => {
      return '<span class="blue-text">' + match + '</span>';
    });
    content = content.replace('return', match => {
      return '<span class="purple-text">' + match + '</span>';
    });
    content = content.replace(/\.[\w]+/g, match => {
      return '<span class="yellow-text">' + match + '</span>';
    });
    content = content.replace(/'.*'/g, match => {
      return '<span class="orange-text">' + match + '</span>';
    });
    content = content.replace(/EImportance|TimeSpan|Level|Job |Programmer /g, match => {
      return '<span class="green-text">' + match + '</span>';
    });

    return content;
  }
}
