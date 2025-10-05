import Title from "../Title/Title";
import DatePicker from "./DatePicker";
import ScheduleList from "./ScheduleList";

const MovieSchedule = () => {
  return (
    <div className="w-full sm:w-[635px] md:w-[1024px] xl:w-[1200px] 2xl:w-[1400px] flex justify-center relative">
      <div className="w-[80%] h-[300px] bg-sky-50 rounded-lg">
        <div className="flex justify-center flex-col h-full ml-5 w-[60%]">
          <Title text="CURRENT SCHEDULE" side="left" color="black" />
          <p>Now Playing! Location Cinema</p>
          <p>Next weeks schedule every Monday ay 5PM!</p>
        </div>
        <DatePicker />
        <ScheduleList />
      </div>
    </div>
  );
};

export default MovieSchedule;
