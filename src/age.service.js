import moment from "moment";

export function getAgeDiff(dob) {
    if (!dob instanceof moment) {
        dob = moment(dob);
    }
    let duration = moment.duration(moment().diff(dob));
    let diff = [];
    let years = duration.years();
    if (years) {
        diff.push(years + ' ' + (years > 1 ? 'years' : 'year'));
    }
    let days = duration.days();
    if (days) {
        diff.push(days + ' ' + (days ? 'days' : 'day'));
    }
    let hours = duration.hours();
    if (hours) {
        diff.push(hours + ' ' + (hours > 1 ? 'hours' : 'hour'));
    }
    if (diff.length === 0) {
        diff.push('<1 hour');
    }
    return diff.join(' ');
}
