import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wordcloud',
  templateUrl: './wordcloud.component.html',
  styleUrls: ['./wordcloud.component.scss']
})
export class WordcloudComponent implements OnInit {

  color = this.getRandomColor();

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    var event = new Event('wordcloudReady');
    document.dispatchEvent(event);
  }

  getRandomColor() {
    //var elements = document.getElementsByClassName('wordcloud_topic');
    var colorList = [];
    for (var i = 0; i < 6; i++) {
        var color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        colorList.push(color);
        //elements[i].style.color= color;
    }
    console.log(colorList);
    return colorList;
  }

  explore() {
    console.log('explore called');
    return false;
  }
}

