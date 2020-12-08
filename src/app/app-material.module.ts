import {NgModule} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  exports: [
    MatInputModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class AppMaterialModule {}
