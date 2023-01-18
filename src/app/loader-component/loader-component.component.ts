import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader-component',
  templateUrl: './loader-component.component.html',
  styleUrls: ['./loader-component.component.css']
})
export class LoaderComponentComponent {
@Input()
shouldLoad:boolean=false;
}
