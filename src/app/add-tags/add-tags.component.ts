import { Component, OnInit } from "@angular/core";
import { TagsService } from "../services/tags.service";

@Component({
  selector: "app-add-tags",
  templateUrl: "./add-tags.component.html"
})
export class AddTagsComponent implements OnInit {
  constructor(private tagService: TagsService) {}

  ngOnInit() {}

  addTags(tags: Array<any>) {
    tags.forEach((tag: string) => {
      this.tagService.addTag({ value: +tag });
    });
  }
}
