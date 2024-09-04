import { Component, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements AfterViewInit {

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.setupAnchorLinkListeners();
  }

  private setupAnchorLinkListeners(): void {
    const anchorLinks = this.el.nativeElement.querySelectorAll('.verdari-anchor-link');

    anchorLinks.forEach((anchorLink: HTMLElement) => {
      anchorLink.addEventListener('click', (event) => this.handleAnchorLinkClick(event));
    });
  }

  private handleAnchorLinkClick(event: Event): void {
    event.preventDefault();

    const targetId = (event.target as HTMLElement).getAttribute('href');

    if (targetId) {
      const cleanedTargetId = targetId.substring(1); 
      const targetElement = document.getElementById(cleanedTargetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}