export class UploadImage {
  static readonly type = '[Mvp] Upload image';
  constructor(public files: FormData[]) {}
}
