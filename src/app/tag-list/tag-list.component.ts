import { Component, OnInit } from "@angular/core";
import { TagsService } from "../services/tags.service";

@Component({
  selector: "app-tag-list",
  templateUrl: "./tag-list.component.html",
  styleUrls: ["./tag-list.component.css"]
})
export class TagListComponent implements OnInit {
  constructor(private tagService: TagsService) {}

  deleteTags() {
    if (confirm("Do you want delete all tags ?")) {
      this.tagService.deleteTags();
    }
  }
  ngOnInit() {}
}
