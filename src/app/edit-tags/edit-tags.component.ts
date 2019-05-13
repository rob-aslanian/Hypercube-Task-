import { Component, OnInit } from "@angular/core";
import { TagsService } from "../services/tags.service";
import { ITag } from "../models/tag";

@Component({
  selector: "app-edit-tags",
  templateUrl: "./edit-tags.component.html",
  styleUrls: ["./edit-tags.component.css"]
})
export class EditTagsComponent implements OnInit {
  showModal: boolean = false;

  constructor(private tagsService: TagsService) {}
  editTags(tags: Array<any>) {
    let oldTags: ITag[] = this.tagsService.getTags();
    for (let i = 0; i < oldTags.length; i++) {
      // If there is a new tag in edit textfield just ignore it
      if (tags[i]) {
        // Compare new value of tag and old , if they equal , ignore it
        if (tags[i] !== oldTags[i].value) {
          return this.tagsService.updateTag({
            id: oldTags[i].id,
            value: tags[i]
          });
        }
      }
    }
  }
  ngOnInit() {}
}
