import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { GuideRoutingModule } from './guide.routing'
import { ElModule } from '../../../../src/index'
import { ExSharedModule } from '../../shared/module'
import { ExGuideMainComponent } from './main/main.component'
import { ExInstallComponent } from './install/install.component'

@NgModule({
  declarations: [
    ExGuideMainComponent,
    ExInstallComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    GuideRoutingModule,
    ElModule,
    ExSharedModule,
  ],
  exports: [ExGuideMainComponent],
  providers: [],
})
export class GuideModule {
}