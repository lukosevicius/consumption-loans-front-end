import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let customers = [
            {id: 1, loan: 10100, income: 1200, name: 'Tomas', surname: 'Martinkėnas', status: 'patvirtina', date: 2017},
            {id: 2, loan: 3000, income: 1200, name: 'John', surname: 'Boo', status: 'patvirtina', date: 2016},
            {id: 3, loan: 1300, income: 1200, name: 'Michael', surname: 'Robinson', status: 'atmesta', date: 2016},
            {id: 4, loan: 14000, income: 1000, name: 'Alexander', surname: 'Robson', status: 'patvirtina', date: 2016},
            {id: 5, loan: 6500, income: 1100, name: 'Jennifer', surname: 'Pinsker', status: 'patvirtina', date: 2016},
            {id: 6, loan: 5600, income: 3000, name: 'Bob', surname: 'Robson', status: 'atmesta', date: 2016},
            {id: 7, loan: 1700, income: 1200, name: 'Michael', surname: 'Robinson', status: 'nepatikrinta', date: 2015},
            {id: 8, loan: 1800, income: 2200, name: 'Vaida', surname: 'Kisieliūtė', status: 'nepatikrinta', date: 2016},
            {id: 9, loan: 1900, income: 1200, name: 'John', surname: 'Jones', status: 'atmesta', date: 2016},
            {id: 10, loan: 2000, income: 5000, name: 'Mantas', surname: 'Lukoševičius', status: 'patvirtina', date: 2016},
            {id: 11, loan: 0, income: 2000, name: 'Jonas', surname: 'Jonaitis', status: '', date: 2016},
            {id: 12, loan: 0, income: 5000, name: 'Conor', surname: 'McGregor', status: '', date: 2016}
        ];
        return {customers};
    }
}

// {id: 1, loan: 10100, income: 1200, name: 'Tomas', surname: 'Martinkėnas', status: 'patvirtina', date: 2017, draft:false},
// {id: 2, loan: 3000, income: 1200, name: 'John', surname: 'Boo', status: 'patvirtina', date: 2016, draft:false},
// {id: 3, loan: 1300, income: 1200, name: 'Michael', surname: 'Robinson', status: 'atmesta', date: 2016, draft:false},
// {id: 4, loan: 14000, income: 1000, name: 'Alexander', surname: 'Robson', status: 'patvirtina', date: 2016, draft:false},
// {id: 5, loan: 6500, income: 1100, name: 'Jennifer', surname: 'Pinsker', status: 'patvirtina', date: 2016, draft:false},
// {id: 6, loan: 5600, income: 3000, name: 'Bob', surname: 'Robson', status: 'atmesta', date: 2016, draft:false},
// {id: 7, loan: 1700, income: 1200, name: 'Michael', surname: 'Robinson', status: 'nepatikrinta', date: 2015, draft:false},
// {id: 8, loan: 1800, income: 2200, name: 'Vaida', surname: 'Kisieliūtė', status: 'nepatikrinta', date: 2016, draft:false},
// {id: 9, loan: 1900, income: 1200, name: 'John', surname: 'Jones', status: 'atmesta', date: 2016, draft:false},
// {id: 10, loan: 2000, income: 5000, name: 'Mantas', surname: 'Lukoševičius', status: 'patvirtina', date: 2016, draft:false},
// {id: 11, loan: 0, income: 2000, name: 'Jonas', surname: 'Jonaitis', status: '', date: 2016, draft: true},
// {id: 12, loan: 0, income: 5000, name: 'Conor', surname: 'McGregor', status: '', date: 2016, draft: true}

// {id: 1, loan: 10100, income: 1200, name: 'Tomas', surname: 'Martinkėnas', status: 'patvirtina', date: 2017},
// {id: 2, loan: 3000, income: 1200, name: 'John', surname: 'Boo', status: 'patvirtina', date: 2016},
// {id: 3, loan: 1300, income: 1200, name: 'Michael', surname: 'Robinson', status: 'atmesta', date: 2016},
// {id: 4, loan: 14000, income: 1000, name: 'Alexander', surname: 'Robson', status: 'patvirtina', date: 2016},
// {id: 5, loan: 6500, income: 1100, name: 'Jennifer', surname: 'Pinsker', status: 'patvirtina', date: 2016},
// {id: 6, loan: 5600, income: 3000, name: 'Bob', surname: 'Robson', status: 'atmesta', date: 2016},
// {id: 7, loan: 1700, income: 1200, name: 'Michael', surname: 'Robinson', status: 'nepatikrinta', date: 2015},
// {id: 8, loan: 1800, income: 2200, name: 'Vaida', surname: 'Kisieliūtė', status: 'nepatikrinta', date: 2016},
// {id: 9, loan: 1900, income: 1200, name: 'John', surname: 'Jones', status: 'atmesta', date: 2016},
// {id: 10, loan: 2000, income: 5000, name: 'Mantas', surname: 'Lukoševičius', status: 'patvirtina', date: 2016},
// {id: 11, loan: 0, income: 2000, name: 'Jonas', surname: 'Jonaitis', status: '', date: 2016},
// {id: 12, loan: 0, income: 5000, name: 'Conor', surname: 'McGregor', status: '', date: 2016}