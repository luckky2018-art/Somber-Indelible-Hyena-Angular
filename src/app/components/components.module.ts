import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { Contact1 } from './contact1/contact1.component'
import { CTA3 } from './cta3/cta3.component'
import { Hero2 } from './hero2/hero2.component'
import { Navbar4 } from './navbar4/navbar4.component'

@NgModule({
  declarations: [Contact1, CTA3, Hero2, Navbar4],
  imports: [CommonModule, RouterModule],
  exports: [Contact1, CTA3, Hero2, Navbar4],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
