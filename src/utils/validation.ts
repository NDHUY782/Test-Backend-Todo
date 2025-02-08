export const validateTask = (
  name: string,
  startDate?: string,
  endDate?: string
) => {
  if (!name || name.trim().length === 0 || name.length > 80) {
    throw new Error("Invalid task name");
  }
  if (endDate && !startDate) {
    throw new Error("Start date is required if end date is provided");
  }
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (startDate && !dateRegex.test(startDate)) {
    throw new Error("Invalid start date format");
  }
  if (endDate && !dateRegex.test(endDate)) {
    throw new Error("Invalid end date format");
  }
};
