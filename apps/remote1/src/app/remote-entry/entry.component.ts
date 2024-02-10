import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';
import { LayoutComponent } from '@angular-monorepo/layout';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent, LayoutComponent],
  selector: 'angular-monorepo-remote1-entry',
  template: `<angular-monorepo-nx-welcome></angular-monorepo-nx-welcome>`,
})
export class RemoteEntryComponent {}
