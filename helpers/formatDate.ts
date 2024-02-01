function formatDateToDDMMYYYY(dateString) {
  // Ensure dateString is a valid string before splitting
  if (typeof dateString !== "string") {
    throw new Error(
      "Invalid input: Please provide a valid date string in YYYY-MM-DD format."
    );
  }

  const dateParts = dateString.split("-");

  // Validate the length of the dateParts array to ensure it's in YYYY-MM-DD format
  if (dateParts.length !== 3) {
    throw new Error("Invalid date format: Expected YYYY-MM-DD format.");
  }

  // Rearrange the parts to DD-MM-YYYY format
  const formattedDate = dateParts[2] + "-" + dateParts[1] + "-" + dateParts[0];

  return formattedDate;
}

export default formatDateToDDMMYYYY;
