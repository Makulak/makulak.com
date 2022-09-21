import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CodeEditorComponent implements OnInit {

  linesArr = new Array(12);

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    document.getElementById('programmerTab').click();
  }

  changeCard(sectionId: string) {
    const tabs: HTMLCollectionOf<Element> = document.getElementsByClassName('tab');

    for (let i = 0; i < tabs.length; i++) {
      tabs[i].className = tabs[i].className.replace('active', '');
    }

    document.getElementById(sectionId + 'Tab').className += ' active';

    switch (sectionId) {
      case 'programmer':
        this.setProgrammerContent();
        break;
      case 'about':
        this.setAboutContent();
        break;
      case 'job':
        this.setJobContent();
        break;
      default:
        this.setProgrammerContent();
        break;
    }
  }

  setProgrammerContent(): void {
    this.translate.stream(['code.university', 'code.english', 'code.spanish', 'code.seeBelow'])
      .subscribe({
        next: (translations: any) => {
          const content =
            `public Programmer SetBasicInfo()
          {
          return new ProgrammerBuilder()
          .SetName('Jonasz')
          .SetSurname('Makulak')
          .SetDateOfBirth('1997-02-28')
          .SetEmail('moc.liamg@kalukam.j')
          .Graduate('${translations['code.university']}', TimeSpan.FromYears(2020-2016))
          .Learn('${translations['code.english']}', Level.B2)
          .AddExperience('${translations['code.seeBelow']}')
          .Create();
          }`;

          document.getElementById('code-content').innerHTML = this.formatContent(content);
        }
      });
  }

  setAboutContent(): void {
    this.translate.stream(['code.playingGuitar', 'code.homeBreweryAndWineMaking',
      'code.hitchhiking', 'code.hackathons', 'code.mobileTechnologies'])
      .subscribe({
        next: (translations: any) => {
          const content =
            `public Programmer SetAdditionalInfo()
          {
          return SetBasicInfo()
          .SetHobby('${translations['code.playingGuitar']}')
          .SetHobby('${translations['code.homeBreweryAndWineMaking']}')
          .SetHobby('${translations['code.travelling']}')
          .SetInterest('${translations['code.hackathons']}')
          .SetInterest('${translations['code.mobileTechnologies']}')
          .Create();
          }`;
          document.getElementById('code-content').innerHTML = this.formatContent(content);
        }
      });
  }

  setJobContent(): void {
    this.translate.stream(['code.remoteWork', 'code.learnAndDevelopSkills',
      'code.greatTeam', 'code.newTechnologies', 'code.interestingProjects', 'code.money'])
      .subscribe({
        next: (translations: any) => {
          const content =
            `public Job CreateDreamJob()
          {
          return new JobBuilder()
          .AddRequirement('${translations['code.remoteWork']}')
          .AddRequirement('${translations['code.learnAndDevelopSkills']}')
          .AddRequirement('${translations['code.greatTeam']}')
          .AddRequirement('${translations['code.newTechnologies']}')
          .AddRequirement('${translations['code.interestingProjects']}')
          .AddRequirement('${translations['code.money']}')
          .Create();
          }`;
          document.getElementById('code-content').innerHTML = this.formatContent(content);
        }
      });
  }

  formatContent(content: string): string {

    if (!content) {
      return;
    }

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
    content = content.replace(/\.[A-Z][\w]+/g, match => {
      return '<span class="yellow-text">' + match + '</span>';
    });
    content = content.replace(/TimeSpan|Level|Job |Programmer /g, match => {
      return '<span class="green-text">' + match + '</span>';
    });
    content = content.replace(/'.*'/g, match => {
      return '<span class="orange-text">' + match + '</span>';
    });
    content = content.replace(/'.+@.+'/g, match => {
      return '<span class="email-text">' + match + '</span>';
    });

    return content;
  }
}
