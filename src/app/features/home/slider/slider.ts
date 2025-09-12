import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-slider',
  imports: [CommonModule],
  templateUrl: './slider.html',
  styleUrl: './slider.scss'
})
export class Slider implements OnInit, OnDestroy, AfterViewInit{
  move: number = 0
  widthInner!: number
  widthContainer!: number
  widthSlide!: number
  intervalId: any = 0
  
  @ViewChild('innerEl') innerEl!: ElementRef
  @ViewChild('containerEl') containerEl!: ElementRef
  @ViewChildren('slideEl') slideEls!: QueryList<ElementRef>
  
  slides = [
    { type: 'text', content: 'live'},
    { type: 'image', content: 'assets/images/snowman.png'},
    { type: 'text', content: 'create'},
    { type: 'image', content: 'assets/images/christmas-trees.png'},
    { type: 'text', content: 'love'},
    { type: 'image', content: 'assets/images/christmas-tree-ball.png'},
    { type: 'text', content: 'dream'},
    { type: 'image', content: 'assets/images/fairytale-house.png'},
  ];
  
  slideToNext() {
    if (this.move > 0) {
      this.move = -(this.widthInner - this.widthContainer)
    } else {
      this.move += this.widthSlide
    }
    
  }
  
  slideToPrev() {
    this.move -= this.widthSlide
    if (this.move < -(this.widthInner - this.widthContainer)) {
      this.move = 0
    }
  }
  
  startAutoplay() {
    this.intervalId = setInterval(() => {
      this.slideToPrev();
    }, 1000);
  }
  
  stopAutoplay() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
  
  ngOnInit(): void {
    this.startAutoplay()
  }
  
  ngOnDestroy(): void {
    this.stopAutoplay();
  }
  
  ngAfterViewInit(): void {
    this.widthInner = this.innerEl.nativeElement.offsetWidth
    this.widthContainer = this.containerEl.nativeElement.offsetWidth
    
    this.slideEls.forEach((el) => {
      this.widthSlide = el.nativeElement.offsetWidth;
    })
  }
  
}
