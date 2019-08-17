import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'campfire';
  height = 100;

  @ViewChild('navbar', { read: ElementRef, static: false }) navbar;
  @ViewChild('footer', { read: ElementRef, static: false }) footer;

  ngAfterViewInit() {
    setTimeout(() => {
      const maxHeight = this.vh2Px(100);
      console.log(this.navbar.nativeElement.offsetHeight)
      this.height = maxHeight - this.navbar.nativeElement.offsetHeight - this.footer.nativeElement.offsetHeight;
      console.log()

    }, 0)
  }

  vh2Px(vh) {
    const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return vh * h / 100;
  }
}