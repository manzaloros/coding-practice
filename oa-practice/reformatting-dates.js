/* Given a date string in the format Day Month Year where:

Day is in set {"1st", "2nd", "3rd", "4th", "5th", "6th", .... , "31st"}.

Month is in set {"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep" , "Oct" , "Nov", "Dec"}.

Year is in the inclusive range [1900, 2100]

For Example:

"1st Mar 1984" -> "1984-03-01"
"2nd Feb 2013" -> "2013-02-02"
"4th Apr 1990" -> "1990-04-04"
Function Description: Complete the function reformateDate in the editor below.
The function must return an array of converted date strings in the order presented.

reformateDate has the following parameter(s):

dates[dates[0], ..., dates[n-1]]: an array of date strings in the format Day Month Year
Constraints:

The values of Day, Month, Year are restricted to the value ranges specified above.

The given dates are guaranteed to be valid so no error handling is necessary.

1 <= n <= 10000

 Sample Input 0:
 10
 20th Oct 2052
 6th Jun 1933
 26th May 1960
 20th Sep 1958
 16th Mar 2068
 25th May 1912
 16th Dec 2018
 26th Dec 2061
 4th Nov 2030
 28th Jul 1963

 Sample Output 0:
 2052-10-20
 1933-06-06
 1960-05-26
 1958-09-20
 2068-03-16
 1912-05-25
 2018-12-16
 2061-12-26
 2030-11-04
 1963-07-28 */

const months = {
  Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06', Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: 12,
};
const reformatDates = (dates) => dates.map((date) => {
  const split = date.split(' ');
  let output = '';
  let converted = '';

  split.forEach((element, i) => {
    if (i === 0) {
      converted = element.slice(0, -2).padStart(2, '0');
    } else if (i === 1) {
      converted = months[element];
    } else if (i === 2) {
      converted = element;
    }
    output = `${converted}-${output}`;
  });

  output = output.substring(0, output.length - 1);

  return output;
});

reformatDates(['20th Oct 2052',
  '6th Jun 1933',
  '26th May 1960',
  '20th Sep 1958',
  '16th Mar 2068',
  '25th May 1912',
  '16th Dec 2018',
  '26th Dec 2061',
  '4th Nov 2030',
  '28th Jul 1963']);
