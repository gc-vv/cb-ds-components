import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  inject,
  input,
  output,
  signal,
  ViewChild
} from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';

import type { DropzoneFile } from './dropzone.types';

@Component({
  selector: 'cb-dropzone',
  standalone: true,
  imports: [NgClass, NgFor, NgIf],
  templateUrl: './dropzone.component.html',
  styleUrl: './dropzone.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropzoneComponent {
  readonly title       = input<string>('');
  readonly description = input<string>('');
  readonly label       = input<string>('Arraste e solte os arquivos aqui ou clique para fazer upload');
  readonly accept      = input<string>('*');
  readonly maxSizeMb   = input<number>(500);
  readonly multiple    = input<boolean>(true);
  readonly files       = input<DropzoneFile[]>([]);
  readonly className   = input<string>('');

  readonly onFilesAdded   = output<File[]>();
  readonly onFileRemoved  = output<string>();

  protected readonly isDragOver = signal(false);

  @ViewChild('fileInput') private fileInputRef!: ElementRef<HTMLInputElement>;

  private cdr = inject(ChangeDetectorRef);

  protected openFileDialog(): void {
    this.fileInputRef.nativeElement.click();
  }

  protected onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.emitFiles(Array.from(input.files));
      input.value = '';
    }
  }

  @HostListener('dragover', ['$event'])
  protected onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.isDragOver.set(true);
  }

  @HostListener('dragleave', ['$event'])
  protected onDragLeave(event: DragEvent): void {
    event.preventDefault();
    this.isDragOver.set(false);
  }

  @HostListener('drop', ['$event'])
  protected onDrop(event: DragEvent): void {
    event.preventDefault();
    this.isDragOver.set(false);
    const dropped = event.dataTransfer?.files;
    if (dropped?.length) {
      this.emitFiles(Array.from(dropped));
    }
  }

  protected removeFile(id: string): void {
    this.onFileRemoved.emit(id);
  }

  protected formatSize(bytes: number): string {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  }

  private emitFiles(files: File[]): void {
    this.onFilesAdded.emit(files);
    this.cdr.markForCheck();
  }
}
