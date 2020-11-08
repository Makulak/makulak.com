import { TranslateService } from '@ngx-translate/core';
import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CodeEditorComponent implements OnInit, AfterViewInit {

  constructor(private translate: TranslateService) { }

  private get programmerContent(): string {
    const university = this.translate.instant('code.university');
    const english = this.translate.instant('code.english');
    const spanish = this.translate.instant('code.spanish');

    return `public Programmer SetBasicInfo()
    {
    return new ProgrammerBuilder()
    .SetName('Jonasz')
    .SetSurname('Makulak')
    .SetDateOfBirth('1997-02-28')
    .Graduate('${university}', TimeSpan.FromYears(2020-2016))
    .Learn('${english}', Level.B2)
    .Learn('${spanish}', Level.A1)
    .Create();
    }`;
  }

  private get aboutContent(): string {
    const guitar = this.translate.instant('code.guitar');
    const brewery = this.translate.instant('code.brewery');
    const hitchhiking = this.translate.instant('code.hitchhiking');
    const hackathons = this.translate.instant('code.hackathons');

    return `public Programmer SetAdditionalInfo()
    {
    return SetBasicInfo()
    .SetHobby('${guitar}')
    .SetHobby('${brewery}')
    .SetHobby('${hitchhiking}')
    .SetInterest('${hackathons}')
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
  }

  ngAfterViewInit() {
    document.getElementById('programmerTab').click();
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
