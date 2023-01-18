import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent {
@Input()
avatar_url: string="";
@Input()
name: string="";
@Input()
bio: string="";
@Input()
location: string="";
@Input()
twitter_username: string="";
@Input()
html_url: string="";
}
