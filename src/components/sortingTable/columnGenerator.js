function ColumnGenerator(obj) {
  return Object.keys(obj).map((key) => ({
    Header: headerReplacer[key] || key,
    accessor: key,
  }));
}

const headerReplacer = {
  suspect: "Suspect Name",
  contactType: "Contact Type",
  contact: "Contact Info",
  summary: "ContentSummary",
  date: "Date Sent",
};

export default ColumnGenerator;
