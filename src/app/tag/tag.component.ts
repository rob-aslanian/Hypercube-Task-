import { Component, OnInit, Input } from "@angular/core";
import { ITag } from "../models/tag";
import { TagsService } from "../services/tags.service";

@Component({
  selector: "app-tag",
  templateUrl: "./tag.component.html",
  styleUrls: ["./tag.component.css"]
})
export class TagComponent implements OnInit {
  @Input() tag: ITag;

  constructor(private tagService: TagsService) {}

  ngOnInit() {}

  deleteTag(id: number) {
    if (confirm("Do you really want delete this tag ?")) {
      this.tagService.deleteTag(id);
    }
  }
}
