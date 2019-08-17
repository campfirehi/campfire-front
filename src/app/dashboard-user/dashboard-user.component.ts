import { Component, OnInit } from '@angular/core';
import Topic from '../dashboard-topic/topic';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.scss']
})
export class DashboardUserComponent implements OnInit {

  topics = [
    new Topic("Homelessness", "Prototyping", 20, "dfasdf5dfsdf", "http://olympiawa.gov/~/media/Images/CPD/Homelessness/homelessness-header.jpg", "https://www.washingtonpost.com/resizer/vEzxCuJswotoP3M-uUKGT0hLhHc=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/EC3FMFHM4MI6PFLOXLVDLD4XEU.jpg"),
    new Topic("Education", "Brainstorming", 17, "dfasdfddaf5dfsdf","https://www.timeshighereducation.com/sites/default/files/styles/the_breaking_news_image_style/public/istock-499343530.jpg?itok=4ObUNN41", "https://timryan.house.gov/sites/timryan.house.gov/files/styles/congress_featured_image/public/featured_image/issues/Education-OpportunitySmall.jpg?itok=4TOUyO9s"),
    new Topic("Community Recycling", "Brainstorming", 32, "dfasdf56dfsdf", "https://upload.wikimedia.org/wikipedia/commons/4/44/Recycle001.svg", "https://www.eastpikeland.org/vertical/Sites/%7B3F7567AD-BA35-41A6-9117-FD7892D5A0DA%7D/uploads/Recycling.png"),
    new Topic("Public Transportation", "User Feedback", 14, "dfasd34f5dfsdf", "https://student-energy.s3.amazonaws.com/assets/673/Transportation.jpg", "https://ewscripps.brightspotcdn.com/dims4/default/abf92e4/2147483647/strip/true/crop/640x360+0+60/resize/1280x720!/quality/90/?url=https%3A%2F%2Fmediaassets.abcactionnews.com%2Fphoto%2F2018%2F05%2F04%2Fcars%20on%20highway_1525415354950.jpg_85828396_ver1.0_640_480.jpg"),
    // new Topic("Elderly Care", "Defining HMW", 25, "dfasdfdxcv5dfsdf", "http://olympiawa.gov/~/media/Images/CPD/Homelessness/homelessness-header.jpg", "http://olympiawa.gov/~/media/Images/CPD/Homelessness/homelessness-header.jpg"),
    // new Topic("Teenage Support", "Brainstorming", 13, "dfasdf5dafasfdfsdf", "http://olympiawa.gov/~/media/Images/CPD/Homelessness/homelessness-header.jpg", "http://olympiawa.gov/~/media/Images/CPD/Homelessness/homelessness-header.jpg"),
  ]

  constructor() { }

  ngOnInit() {
  }

}
