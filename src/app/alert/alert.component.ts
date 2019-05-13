import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-alert",
  templateUrl: "./alert.component.html"
})
export class AlertComponent implements OnInit {
  isShow: boolean = true;

  ngOnInit() {
    setTimeout(() => (this.isShow = false), 1500);
  }
}
