
import {Observable} from 'rxjs/Observable'; // only for autocomplete filter

export class MyModel{
    public UserName: string = 'MyName';
    public UserDate: Date = new Date('2017-01-01');
    public UserOptions: Array<string> = new Array('RED', 'GREEN', 'BLUE', '2017-01-01', 'Ana', 'MyName', 'true', 'false');
    public filteredOptions: Observable<String[]>;
}