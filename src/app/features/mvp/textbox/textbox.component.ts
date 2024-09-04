import { Component } from '@angular/core';

interface Item {
  image: string;
  subtitleImage: string;
  showText: boolean;
  textContent: string;
}

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss']
})
export class TextboxComponent {
  items: Item[] = [
    { image: '/assets/images/verdari-img/a1.svg', subtitleImage: '/assets/images/verdari-img/s1.svg', showText: false, textContent: 'VIP access to the closed gates Dani Verdari community.' },
    { image: '/assets/images/verdari-img/a2.svg', subtitleImage: '/assets/images/verdari-img/s2.svg', showText: false, textContent: 'Become a creator & learn the skills and tools.' },
    { image: '/assets/images/verdari-img/a3.svg', subtitleImage: '/assets/images/verdari-img/s3.svg', showText: false, textContent: 'Become a part of Dani\'s content edits & on her social channels.' },
    { image: '/assets/images/verdari-img/a4.svg', subtitleImage: '/assets/images/verdari-img/s4.svg', showText: false, textContent: 'Gaining access to the holders-only merch drops.' },
    { image: '/assets/images/verdari-img/a5.svg', subtitleImage: '/assets/images/verdari-img/s5.svg', showText: false, textContent: 'Access to the future in Real Life & Virtual Events.' },
    { image: '/assets/images/verdari-img/a6.svg', subtitleImage: '/assets/images/verdari-img/s6.svg', showText: false, textContent: 'What you can win Worth more than 2000$' },
  ];

  private slideDownText(item: Item) {
    const textContentElement = document.querySelector(`#text-content-${this.items.indexOf(item)}`) as HTMLElement | null;
    if (textContentElement) {
      textContentElement.classList.remove('slide-up');
      void textContentElement.offsetHeight; 
      textContentElement.classList.add('slide-down');
    }
  }

  private slideUpText(item: Item) {
    const textContentElement = document.querySelector(`#text-content-${this.items.indexOf(item)}`) as HTMLElement | null;
    if (textContentElement) {
      textContentElement.classList.remove('slide-down'); 
      void textContentElement.offsetHeight;
      textContentElement.classList.add('slide-up');
    }
  }

  toggleText(item: Item) {
    if (item.showText) {
      this.slideDownText(item);
    } else {
      setTimeout(() => {
        this.slideUpText(item);
      }, 0);
    }
    item.showText = !item.showText;
  }
}
