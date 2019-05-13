import { Injectable } from "@angular/core";
import { ITag } from "../models/tag";

@Injectable({
  providedIn: "root"
})
export class TagsService {
  tags: ITag[] = [];

  constructor() {}

  /**
   * Save tags to local Sotage
   */
  private setItemToLS() {
    return localStorage.setItem("tags", JSON.stringify(this.tags));
  }

  /**
   * Add new tag and save it to local storage
   *
   * @param tag [Itag]
   */
  addTag(tag: ITag) {
    if (tag) {
      tag.id = this.tags.length;
      this.tags.push(tag);

      this.setItemToLS();
    }
  }

  /**
   * Update tags
   *
   * @param tag [ITag]
   */
  updateTag(tag: ITag) {
    if (tag) {
      let indexOfTag = this.tags.findIndex(el => el.id == tag.id);
      if (indexOfTag !== -1) {
        this.tags[indexOfTag] = tag;
        this.setItemToLS();
      }
    }
  }

  /**
   * Delete tag by tag id
   *
   * @param tagId [Number]
   */
  deleteTag(tagId: number) {
    let indexOfTag = this.tags.findIndex(el => el.id == tagId);

    if (indexOfTag !== -1) {
      this.tags.splice(indexOfTag, 1);
      this.setItemToLS();
    }
  }

  /**
   * Delete all tags and clear local storage
   */
  deleteTags() {
    this.tags = [];
    localStorage.clear();
  }

  /**
   * Get All Tags
   * @return [ITag|null]
   */
  getTags(): ITag[] {
    if (this.tags.length !== 0) {
      return this.tags;
    }
    return (this.tags =
      localStorage.getItem("tags") !== null
        ? JSON.parse(localStorage.getItem("tags"))
        : []);
  }
}
