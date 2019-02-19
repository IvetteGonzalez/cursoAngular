import { NgModule } from "@angular/core";
import { HeadersComponent } from "./headers/headers.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { BreadcrumbsComponent } from "./breadcrumbs/breadcrumbs.component";
import { NotpagefoundComponent } from "./notpagefound/notpagefound.component";


@NgModule({
    declarations : [
        NotpagefoundComponent,
        HeadersComponent,
        SidebarComponent,
        BreadcrumbsComponent
    ],
    exports : [
        HeadersComponent,
        SidebarComponent,
        BreadcrumbsComponent
    ],
    imports : [

    ]

})

export class SharedModule{}