import Title from "../Title/Title";
import DatePicker from "./DatePicker";
import ScheduleList from "./ScheduleList";

const MovieSchedule = () => {
  return (
    <div className="w-full sm:w-[635px] md:w-[760px] lg:w-[1024px] xl:w-[1200px] 2xl:w-[1400px] flex justify-center relative">
      <div className="w-[80%]">
        <div className="flex xl:justify-center flex-col pl-5 w-[75svw] sm:w-full mt-15 xl:mt-0 h-[250px] sm:h-[200px] lg:h-[250px] bg-sky-50 rounded-lg pt-6 sm:pt-4">
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
