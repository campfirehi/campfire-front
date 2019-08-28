import { Component, ViewChild, ElementRef, OnInit, AfterViewChecked } from '@angular/core';
import { ScreenDimensionService } from '../../services/screen-dimension/screen-dimension.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit, AfterViewChecked {

  minHeight = 100;
  screenHeight = 100;

  @ViewChild('navbar', { read: ElementRef, static: false }) navbar;
  @ViewChild('footer', { read: ElementRef, static: false }) footer;

  constructor(
    private screenDimService: ScreenDimensionService
  ) { }

  ngOnInit() {
  }
  
  ngAfterViewChecked() {
    if (this.minHeight != this.getMinContentHeight()) {
      setTimeout(() => {
        this.minHeight = this.getMinContentHeight()
        this.screenDimService.setMinHeight(this.minHeight)
      }, 0)
    }

    if (this.screenHeight != this.getContentHeight()) {
      setTimeout(() => {
        this.screenHeight = this.getContentHeight()
        this.screenDimService.setContentHeight(this.screenHeight)
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