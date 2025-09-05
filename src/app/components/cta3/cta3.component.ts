import { Component, Input, ContentChild, TemplateRef } from '@angular/core'

@Component({
  selector: 'app-cta3',
  templateUrl: 'cta3.component.html',
  styleUrls: ['cta3.component.css'],
})
export class CTA3 {
  @Input()
  image1Alt: string = 'Image1Alt'
  @ContentChild('action1')
  action1: TemplateRef<any>
  @Input()
  image1Src: string =
    'https://images.unsplash.com/photo-1552083974-186346191183?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1400'
  @ContentChild('content2')
  content2: TemplateRef<any>
  @ContentChild('action2')
  action2: TemplateRef<any>
  @ContentChild('content1')
  content1: TemplateRef<any>
  constructor() {}
}
