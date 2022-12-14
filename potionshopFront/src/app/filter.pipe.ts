import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
name: 'filter'
})
export class FilterPipe implements PipeTransform {
transform(items: any[], searchText: string): any[] {
if(!items) return [];
if(!searchText) return items;
searchText = searchText.toLowerCase();
return items.filter( it => {
  if(it.effects==null){
    it.effects = '';
  }
  if(it.wizard_first_name == null){
    it.wizard_first_name = '';
  }
  if(it.wizard_last_name == null){
    it.wizard_last_name = '';
  }
return it.potion_name.toLowerCase().includes(searchText) || 
it.effects.toLowerCase().includes(searchText)|| 
it.wizard_first_name.toLowerCase().includes(searchText)|| 
it.wizard_last_name.toLowerCase().includes(searchText);
});
}
}