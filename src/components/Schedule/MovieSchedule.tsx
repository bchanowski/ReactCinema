import Title from "../Title/Title";
import DatePicker from "./DatePicker";
import ScheduleList from "./ScheduleList";

const MovieSchedule = () => {
  return (
    <div className="w-full sm:w-[635px] mdw-[760px] lg:w-[1024px] xl:w-[1200px] 2xl:w-[1400px] flex justify-center relative">
      <div className="w-[80%] h-[250px] lg:h-[300px] bg-sky-50 rounded-lg">
        <div className="flex xl:justify-center flex-col h-full ml-5 w-[80%] sm:w-[60%] mt-15 xl:mt-0">
          <Title text="CURRENT SCHEDULE" side="left" color="black" />
          <p>Now Playing! Location Cinema</p>
          <p>Next weeks schedule every Monday at 5PM!</p>
        </div>
        <DatePicker />
        <ScheduleList />
      </div>
    </div>
  );
};

export default MovieSchedule;
