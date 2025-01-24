function extractClassName(sessionTitle) {
  


   const months = {
    "Januar": "01",
    "Februar": "02",
    "März": "03",
    "Maerz": "03",
    "April": "04",
    "Mai": "05",
    "Juni": "06",
    "Juli": "07",
    "August": "08",
    "September": "09",
    "Oktober": "10",
    "November": "11",
    "Dezember": "12"
};
  const parts= input.split(" ");
  if (parts.length !== 3) {
    return null;
  }