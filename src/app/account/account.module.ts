import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// Routing component mange routing and import custom component.
import { AccountRoutingModule } from "./account-routing.module";

// Import shared module
import { SharedModule } from "../shared/shared.module";

// Import google autocomplete address module
import { AutocompleteComponent } from "./google-places.component";

// Import your AvatarModule
import { AvatarModule } from "ngx-avatar";

import { Ng5SliderModule } from "ng5-slider";

// For slider
import { OwlModule } from "ngx-owl-carousel";

// Import your library
import { SlickCarouselModule } from "ngx-slick-carousel";

// For Masonry
import { NgxMasonryModule } from "ngx-masonry";

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { FormsModule } from "@angular/forms";
import { TagInputModule } from "ngx-chips";
import { VideoPortalModule } from "../academy/academy.module";

//export const options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
  declarations: [AccountRoutingModule.component, AutocompleteComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedModule,
    OwlModule,
    NgxMasonryModule,
    SlickCarouselModule,
    AvatarModule,
    Ng5SliderModule,
    CKEditorModule,
    AngularMultiSelectModule,
    FormsModule,
    TagInputModule,
    VideoPortalModule
  ],
})
export class AccountModule {}
