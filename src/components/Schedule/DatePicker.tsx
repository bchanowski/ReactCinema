const today = new Date();
const dayLong = today.toLocaleDateString("eng", { weekday: "long" });
const dayShort = String(today.getDate()).padStart(2, "0");
const month = today.toLocaleString("eng", { month: "long" });

const dates: Date[] = [];

for (let i = 0; i < 7; i++) {
  const day = new Date();
  if (i !== 0) day.setDate(day.getDate() + i);
  dates.push(day);
}

const DatePicker = () => {
  return (
    <div className="text-white flex">
      {dates.map((date, index) => (
        <p key={index}>
          {date.toLocaleDateString("eng", { weekday: "long" })}
          <p>
            {String(date.getDate()).padStart(2, "0")}{" "}
            {date.toLocaleString("eng", { month: "long" })}
          </p>
        </p>
      ))}
    </div>
  );
};

export default DatePicker;
