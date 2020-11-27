import {getAgeDiff} from "./age.service";
import moment from "moment";

test('it can calculate age accurate to hours', () => {
    expect(getAgeDiff(moment())).toBe('<1 hour');
    expect(getAgeDiff(moment().subtract(10, 'year').subtract(4, 'day').subtract(1, 'hour'))).toBe('10 years 4 days 1 hour');
});
