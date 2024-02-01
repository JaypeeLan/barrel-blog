function formatDateToMonthDDYYYY(dateString) {
  // Ensure dateString is a valid string before creating a Date object
  if (typeof dateString !== "string") {
    return "";
  }

  const date = new Date(dateString);

  // Array of month names
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get the day, month, and year from the date
  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  // Format the date in "MonthName dd, year" format
  const formattedDate = `${month} ${day}, ${year}`;

  return formattedDate;
}

export default formatDateToMonthDDYYYY;
