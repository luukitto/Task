import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-froala',
  templateUrl: './froala.component.html',
  styleUrls: ['./froala.component.css'],
})
export class FroalaComponent implements OnInit {
  postId: any;

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function () {
      $(document).on('click', '.block-source', function (e) {

      })
    });
  }
}
