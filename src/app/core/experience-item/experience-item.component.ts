import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.scss']
})
export class ExperienceItemComponent implements OnInit {

  @Input() imageSrc: string;
  @Input() companyName: string;
  @Input() position: string;
  @Input() dates: string;

  constructor() { }

  ngOnInit() {
  }

  get getImageSrc(): string {
    return 'url(' + this.imageSrc + ')';
  }

}
