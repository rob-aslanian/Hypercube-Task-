import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ITag } from "../models/tag";
import { TagsService } from "../services/tags.service";

@Component({
  selector: "app-tag-form",
  templateUrl: "./tag-form.component.html",
  styleUrls: ["./tag-form.component.css"]
})
export class TagFormComponent implements OnInit {
  @Input() loadData: boolean = false;

  @Output() tags: EventEmitter<Array<any>> = new EventEmitter<Array<any>>();
  @Output() showModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  regex: RegExp = /(-?[0-9]+)([,|;|\n$]+)/g;
  tagsForm: FormGroup;
  valid: boolean = true;

  constructor(private f: FormBuilder, private tagService: TagsService) {
    this.tagsForm = f.group({
      tag: ["", Validators.required]
    });
  }

  validateForm() {
    this.valid = this.tagsForm.valid;
    return this.valid;
  }

  /**
   * Remove comma , semicolon and line break from tags
   * and also convert string value to number
   *
   * @param tags [Array]
   */
  removeDimensionFromTag(tags: Array<any>) {
    return tags.map((tag: string) => {
      tag = tag.replace(/;|\n|,/, "");
      return +tag;
    });
  }

  /**
   * Submit form if valid and emit tags array to parent
   * @param tagsForm
   */
  submitForm(tagsForm: FormGroup) {
    if (this.validateForm()) {
      let tag = tagsForm.controls.tag.value,
        getTags = tag.match(this.regex);

      if (getTags !== null) {
        getTags = this.removeDimensionFromTag(getTags);
        this.tags.emit(getTags);
      }

      if (this.loadData) this.showModal.emit(false);

      //** Clear textfield */
      return tagsForm.controls.tag.setValue(null);
    }
  }

  ngOnInit() {
    /**
     * Set old tags values to form
     */
    if (this.loadData) {
      let editedTags = this.tagService
        .getTags()
        .map(tag => tag.value)
        .join(",");

      if (editedTags.length > 0) {
        this.tagsForm.controls.tag.setValue(editedTags + ",");
      }
    }
  }
}
