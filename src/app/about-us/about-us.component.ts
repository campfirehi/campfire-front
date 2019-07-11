import { Component, OnInit } from '@angular/core';


class TeamMember {

  constructor(
    public name: string,
    public role: string,
    public bio: string,
    public img: string
  ) { }
}

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  members: TeamMember[] = [
    new TeamMember('Man chon Kuok', 'The Go-To Person', 'I am good', 'assets/img/people/mckuok.jpg'),
    new TeamMember('Romin Valdez', 'The Cooportate Person', 'I am better', ''),
    new TeamMember('Jason Leong', 'The "I can do that" Person', 'I amd da best', '')
  ];

  constructor() { }

  ngOnInit() {
  }

}
