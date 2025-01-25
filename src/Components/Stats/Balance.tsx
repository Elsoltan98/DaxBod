import { FiSend } from "react-icons/fi";
import Title from "../../ui/Title";
import BarChart from "./BarChart";

interface BalanceProps {
  darkMode?: boolean;
}

const Balance = ({ darkMode }: BalanceProps) => {
  return (
    <div className="bg-white p-5 rounded-2xl flex-1 dark:bg-gray-600 dark:text-gray-300">
      <div className="flex items-center justify-between">
        <Title>Balance</Title>
        <FiSend className="bg-gray-500 p-2 rounded-full text-gray-300 w-8 h-8" />
      </div>
      <div>
        <h1 className="font-medium text-2xl">
          $600,000<span className="font-medium">(USD)</span>
        </h1>
        <span>on July 2025</span>
      </div>
      <BarChart darkMode={darkMode} />
    </div>
  );
};

export default Balance;
