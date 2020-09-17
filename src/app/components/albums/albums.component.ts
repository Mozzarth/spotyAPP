import { Component, OnInit, Input } from '@angular/core';
import { IAlbum } from '../../../interface'

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styles: [
  ]
})
export class AlbumsComponent implements OnInit {
  @Input("album") album: IAlbum
  constructor() { }

  ngOnInit(): void {
  }

}
