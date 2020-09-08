import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appShowImage]'
})
export class ShowImageDirective implements OnInit {

  @Input('appShowImage')
  product: any;
  path: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.path = this.product.image[0];
    const imgCard = this.el.nativeElement;
    this.renderer.setAttribute(imgCard, 'src', `assets/${this.path}.jpg`);
    }

}
