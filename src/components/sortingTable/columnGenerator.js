function ColumnGenerator(obj) {
  return Object.keys(obj).map((key) => ({
    Header: headerReplacer[key] || key,
    accessor: key,
  }));
}

const headerReplacer = {
  victim: "Victim Name",
  contactType: "Contact Type",
  contact: "Contact Info",
  summary: "Content Summary",
  date: "Date Sent",
};

export default ColumnGenerator;
