import { Component } from '@angular/core';
import { Person } from '../../shared/interfaces/person';
import { Step3PersonTableInput } from '../step3-person-table-input/step3-person-table-input';

@Component({
  imports: [Step3PersonTableInput],
  selector: 'app-step4-for-directive',
  styleUrl: './step4-for-directive.css',
  templateUrl: './step4-for-directive.html',
})
export class Step4ForDirective {
  persons: Person[] = [
    {"firstname":"Brigitte","lastname":"Biagi","email":"bbiagi0@meetup.com"},
    {"firstname":"Orson","lastname":"MacNalley","email":"omacnalley1@pbs.org"},
    {"firstname":"Symon","lastname":"Wittey","email":"swittey2@mail.ru"},
    {"firstname":"Lillian","lastname":"Linwood","email":"llinwood3@tinypic.com"},
    {"firstname":"Christean","lastname":"Riply","email":"criply4@fema.gov"},
    {"firstname":"Rosa","lastname":"Milsap","email":"rmilsap5@zdnet.com"},
    {"firstname":"Bax","lastname":"Park","email":"bpark6@bigcartel.com"},
    {"firstname":"Debbi","lastname":"Dicky","email":"ddicky7@cafepress.com"},
    {"firstname":"D'arcy","lastname":"Briffett","email":"dbriffett8@vimeo.com"},
    {"firstname":"Merry","lastname":"Hardiman","email":"mhardiman9@yahoo.com"},
    {"firstname":"Alley","lastname":"Coweuppe","email":"acoweuppea@ehow.com"},
    {"firstname":"Wakefield","lastname":"Gawthrop","email":"wgawthropb@seattletimes.com"},
    {"firstname":"Suki","lastname":"Gentry","email":"sgentryc@businessweek.com"},
    {"firstname":"Cull","lastname":"Tissell","email":"ctisselld@hostgator.com"},
    {"firstname":"Manuel","lastname":"Thonason","email":"mthonasone@answers.com"},
    {"firstname":"Clementina","lastname":"Hoggetts","email":"choggettsf@si.edu"},
    {"firstname":"Fairlie","lastname":"Jiggle","email":"fjiggleg@engadget.com"},
    {"firstname":"Tabbie","lastname":"Trimby","email":"ttrimbyh@list-manage.com"},
    {"firstname":"Klement","lastname":"Doumic","email":"kdoumici@wufoo.com"},
    {"firstname":"Janos","lastname":"Mapplebeck","email":"jmapplebeckj@ebay.com"}
 ]
}
