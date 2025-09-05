import { Component, Input, ContentChild, TemplateRef } from '@angular/core'

@Component({
  selector: 'app-contact1',
  templateUrl: 'contact1.component.html',
  styleUrls: ['contact1.component.css'],
})
export class Contact1 {
  @ContentChild('email1')
  email1: TemplateRef<any>
  @ContentChild('content2')
  content2: TemplateRef<any>
  @ContentChild('phone1')
  phone1: TemplateRef<any>
  @ContentChild('address1')
  address1: TemplateRef<any>
  @ContentChild('content3')
  content3: TemplateRef<any>
  @ContentChild('content1')
  content1: TemplateRef<any>
  constructor() {}
}
