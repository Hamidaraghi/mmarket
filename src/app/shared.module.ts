import {NgModule} from "@angular/core";
import { JalaliPipe } from './../pipes/jalali/jalali';

@NgModule({
    declarations: [ JalaliPipe ],
    exports: [ JalaliPipe ]
})
export class SharedModule {}