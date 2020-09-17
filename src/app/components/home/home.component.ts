import { BrowserService } from 'src/app/services/browser.service';
import { Component, OnInit } from '@angular/core';
import { INewReleases } from 'src/interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newReleases: INewReleases
  constructor(private browserService: BrowserService) {
    this.browserService.newReleases()
      .then(observ => { observ.subscribe(releases => { this.newReleases = releases }) })
      .catch(console.log)

  }

  ngOnInit(): void {
  }

}
