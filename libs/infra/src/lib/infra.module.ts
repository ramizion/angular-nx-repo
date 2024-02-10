import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsingComponent } from './using.component';
import { LayoutComponent, LeftComponent } from '@angular-monorepo/layout';

@NgModule({
    imports: [CommonModule, LayoutComponent, LeftComponent],
    declarations: [UsingComponent],
    exports:[UsingComponent]
})
export class InfraModule {}
