import { Component, Input, ContentChild, TemplateRef } from '@angular/core'

@Component({
  selector: 'app-hero2',
  templateUrl: 'hero2.component.html',
  styleUrls: ['hero2.component.css'],
})
export class Hero2 {
  @ContentChild('action1')
  action1: TemplateRef<any>
  @ContentChild('content1')
  content1: TemplateRef<any>
  @Input()
  image1Alt: string = 'image'
  @ContentChild('heading1')
  heading1: TemplateRef<any>
  @ContentChild('action2')
  action2: TemplateRef<any>
  @Input()
  image1Src: string =
    'https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTEzODIwNzF8MA&ixlib=rb-4.0.3&w=1500'
  constructor() {}
}
