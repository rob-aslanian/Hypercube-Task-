import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TagFormComponent } from "./tag-form/tag-form.component";
import { TagListComponent } from "./tag-list/tag-list.component";
import { TagComponent } from "./tag/tag.component";
import { ModalComponent } from "./modal/modal.component";

import { TagsService } from "./services/tags.service";
import { AlertComponent } from "./alert/alert.component";
import { AddTagsComponent } from "./add-tags/add-tags.component";
import { EditTagsComponent } from "./edit-tags/edit-tags.component";

@NgModule({
  declarations: [
    AppComponent,
    TagFormComponent,
    TagListComponent,
    TagComponent,
    ModalComponent,
    AlertComponent,
    AddTagsComponent,
    EditTagsComponent
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [{ provide: TagsService, useClass: TagsService }],
  bootstrap: [AppComponent]
})
export class AppModule {}
