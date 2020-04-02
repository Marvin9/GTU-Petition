import emailCC from '../../../emaiCC';

export const extractMainCC = (zoneId) => {
  let mainCC = emailCC.map((email) => {
    if (email.scope === 'all') return email.email;
    return false;
  }).filter(Boolean);
  mainCC = [...mainCC, emailCC[zoneId].email];
  return mainCC;
};

export const subjectUtil = () => 'Petition%20of%20Pressure';

export const bodyUtil = () => 'Respected%20Sir%2FMadam%2C%0D%0A%0D%0AIt%20is%20known%20that%20due%20to%20corona%20outbreak%2C%20whole%20India%20is%20closed%20till%2014th%20April%20(Counting%2021%20days).%20However%20observing%20graph%20given%20in%20https%3A%2F%2Fwww.covid19india.org%2F%20%2C%20Lockdown%20is%20more%20likely%20to%20be%20extended.%0D%0A%0D%0AThere%20are%20no%20official%20dates%20for%20End%20semester%20exams%20given%20by%20GTU.%20Still%20some%20GTU%20affiliated%20colleges%20are%20panicked%20regarding%20vivas%2C%20Question%20banks%2C%20Projects%2C%20Group%20projects%2C%20Design%20Engineering%20Sheets.%20Few%20decided%20final%20submissions%20and%20that%20too%20during%20lockdown.%20Currently%2C%20Every%20student%20is%20not%20at%20fair%20level.%20Not%20everyone%20have%20enough%20resources%2C%20materials%20and%20access%20to%20stationaries%20to%20complete%20submission%20successfully.%0D%0A%0D%0AOn%20behalf%20of%20all%20GTU%20Students%2C%20My%20humble%20request%20is%20to%20official%20announcement%20to%20not%20to%20put%20extra%20pressure%20related%20to%20submissions%20on%20students%20during%20lockdown.';

export const mailLinkGenerator = (zoneId) => {
  const mainCCBody = extractMainCC(zoneId).join(',');
  const subject = subjectUtil();
  const body = bodyUtil();

  return `mailto:${mainCCBody}?subject=${subject}&body=${body}`;
};
