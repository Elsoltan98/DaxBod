import { IconType } from "react-icons";

type Employee = {
  title: string;
  icon: IconType;
  count: number;
  bgColor: string;
};

interface CardProps {
  employee: Employee;
}

const Card = ({ employee }: CardProps) => {
  return (
    <div className="bg-white p-6 rounded-2xl flex items-center gap-4 dark:bg-gray-600 dark:text-gray-400">
      <span
        className={`${employee.bgColor} px-3 rounded-2xl py-6 text-2xl dark:bg-gray-500`}
      >
        <employee.icon />
      </span>
      <div>
        <h2 className="text-xl">
          <span className="text-2xl font-bold">{employee.count}</span>/250
        </h2>
        <p className="font-bold">{employee.title}</p>
      </div>
    </div>
  );
};

export default Card;
