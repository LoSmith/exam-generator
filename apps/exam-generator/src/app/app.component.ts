import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Message } from "@exam-generator/api-interfaces";
import { PrimeNGConfig } from "primeng/api";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  hello$ = this.http.get<Message>("/api/hello");
  constructor(private http: HttpClient, private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
