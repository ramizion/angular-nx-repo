import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent, LeftComponent } from '@angular-monorepo/layout';
import { InfraModule } from '@angular-monorepo/infra';

@Component({
  selector: 'angular-monorepo-nx-welcome',
  standalone: true,
  imports: [CommonModule, LayoutComponent,LeftComponent, InfraModule],
  template: `remote1 new
  <!-- <layout-rami-layout></layout-rami-layout>
  <layout-rami-left></layout-rami-left>-->
  <sys2-using></sys2-using>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
