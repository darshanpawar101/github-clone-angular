import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-repo-container',
  templateUrl: './repo-container.component.html',
  styleUrls: ['./repo-container.component.css']
})
export class RepoContainerComponent {
  @Input()
  name: string = '';
  @Input()
  description: string = '';
  @Input()
  topics: any[] =[];
  @Input()
  repourl: string = '';
}
