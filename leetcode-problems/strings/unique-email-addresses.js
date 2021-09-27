/**
 * @param {string[]} emails
 * @return {number}
 */
const removePeriods = (char) => char !== '.';

const formatEmail = (uniqueEmails, email, i, emails) => {
  let [local, domain] = email.split('@');

  const beforePlus = local.split('+')[0];
  const withoutPeriods = beforePlus.split('').filter(removePeriods);

  withoutPeriods.push(domain);
  const totalFilteredEmail = withoutPeriods.join('@');
  uniqueEmails.add(totalFilteredEmail);

  return i === emails.length - 1 ? uniqueEmails.size : uniqueEmails;
};

let numUniqueEmails = (emails) => emails.reduce(formatEmail, new Set());

numUniqueEmails(['a@leetcode.com', 'b@leetcode.com', 'c@leetcode.com']);
