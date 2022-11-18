import { Component, OnInit } from '@angular/core';
import { SaveButtonService } from "../../assets/service/save-button.service"
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-froala1',
  templateUrl: './froala1.component.html',
  styleUrls: ['./froala1.component.css']
})
export class Froala1Component implements OnInit {

  public SaveButtons: any
  saveParam: any;


  constructor(private _SaveButtonService: SaveButtonService,
              private http: HttpClient) { }

  ngOnInit(): void {

      this._SaveButtonService.getData().subscribe(
        res => {
          this.SaveButtons = res;
          console.log(res)
        }
      );
  }


}
