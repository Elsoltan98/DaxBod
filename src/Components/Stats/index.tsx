import { empolyeesData } from "../../constants";
import Balance from "./Balance";
import Card from "./Card";

// interface StatsProps {
//   darkMode?: boolean;
// }

const Stats = () => {
  return (
    <div className="flex flex-col gap-5 md:flex-row">
      <div className="flex flex-col gap-4 h-full">
        {empolyeesData.map((employee, index) => (
          <Card key={index} employee={employee} />
        ))}
      </div>
      <Balance />
    </div>
  );
};

export default Stats;
