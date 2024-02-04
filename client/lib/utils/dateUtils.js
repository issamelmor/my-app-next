export const currentDayName = () => {
  const date = new Date();
  return date.toLocaleString("en-us", { weekday: "long" });
};
