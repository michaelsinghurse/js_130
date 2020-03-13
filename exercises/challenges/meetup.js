// meetup.js

function getDayIndexFromDayString(day) {
  const DAYS_OF_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 
    'Friday', 'Saturday'];
  
  let dayIndex = DAYS_OF_WEEK.indexOf(day);
  
  if (dayIndex === undefined) {
    throw new Error("Invalid day of the week");
  }
  
  return dayIndex;
}

function getDatesForYearMonthAndDay(year, month, day) {
  let dates = [];
  let counter = 1;
  
  while (true) {
    let date = new Date(year, month, counter);
    
    if (date.getMonth() !== month) break;
    
    if (date.getDay() === day) {
      dates.push(date.getDate());  
    }
    
    counter += 1;
  }
  
  return dates;
}

function findDateMatchingTheDescriptor(dates, descriptor) {
  let date;
  
  switch (descriptor) {
    case '1st':
      date = dates[0];
      break;
    case '2nd':
      date = dates[1];
      break;
    case '3rd':
      date = dates[2];
      break;
    case '4th':
      date = dates[3];
      break;
    case '5th':
      date = dates[4];
      if (!date) {
        throw new Error("There are not 5 of the given day in this month.");
      }
      break;
    case 'last':
      date = dates[dates.length - 1];
      break;
    case 'teenth':
      date = dates.find(val => val >= 13 && val <= 19);
      break;
    default:
      throw new Error("Invalid descriptor");
  }
  
  return date;
}

function meetupDay(yearNumber, monthIndex, dayString, descriptor) {
  let dayIndex = getDayIndexFromDayString(dayString);
  
  let dates = getDatesForYearMonthAndDay(yearNumber, monthIndex, dayIndex);
  
  let date = findDateMatchingTheDescriptor(dates, descriptor);

  return new Date(yearNumber, monthIndex, date);
}

module.exports = meetupDay;

