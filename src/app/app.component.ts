import { Component, ViewChild, ElementRef, OnInit, AfterViewChecked } from '@angular/core';
import { LoadingConfigService } from './utility/services/loading/loading-config.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewChecked {

  minHeight = 100;
  screenHeight = 100;
  private minHeightAdjusted = false;

  @ViewChild('navbar', { read: ElementRef, static: false }) navbar;
  @ViewChild('footer', { read: ElementRef, static: false }) footer;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((routeEvent) => {
      if (routeEvent instanceof NavigationEnd) {
        const contentHeight = this.getContentHeight()
        this.screenHeight = contentHeight
      }
    });
  }


  ngAfterViewChecked() {
    if (!this.minHeightAdjusted) {
      setTimeout(() => {
        this.minHeight = this.getMinContentHeight()
        this.minHeightAdjusted = true;

        if (this.screenHeight < this.minHeight) {
          this.screenHeight = this.minHeight
        }
      }, 0)
    }
  }

  vh2Px(vh) {
    const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return vh * h / 100;
  }

  getContentHeight() {
    const navBarElement = this.navbar.nativeElement;
    const footerElement = this.footer.nativeElement;

    return footerElement.getBoundingClientRect().top - (navBarElement.getBoundingClientRect().top + this.navbar.nativeElement.offsetHeight)
  }

  getMinContentHeight() {
    const maxHeight = this.vh2Px(100);
    return maxHeight - this.navbar.nativeElement.offsetHeight - this.footer.nativeElement.offsetHeight;
  }
}