import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IArtist } from 'src/interface';

@Component({
  selector: 'app-artist-pildora',
  templateUrl: './artist-pildora.component.html',
  styles: [
  ]
})
export class ArtistPildoraComponent implements OnInit {
  @Input() artist: IArtist;
  @Output() artista = new EventEmitter<IArtist>()
  constructor() {

  }

  click() {
    this.artista.emit(this.artist)
  }
  ngOnInit(): void {
  }

}
