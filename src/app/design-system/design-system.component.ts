import { Component, computed, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-design-system',
  standalone: true,
  templateUrl: './design-system.component.html',
  styleUrl: './design-system.component.scss'
})
export class DesignSystemComponent {
  private readonly sanitizer = inject(DomSanitizer);

  protected readonly zeroheightUrl = environment.zeroheightUrl;

  protected readonly safeZeroheightUrl = computed<SafeResourceUrl>(() =>
    this.sanitizer.bypassSecurityTrustResourceUrl(this.zeroheightUrl)
  );
}
