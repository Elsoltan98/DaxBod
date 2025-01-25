import { IoIosArrowForward } from "react-icons/io";
import { shortcutLink } from "../../constants";
import Title from "../../ui/Title";

const ShortCuts = () => {
  return (
    <div className="flex flex-col gap-4 bg-white p-4 rounded-lg dark:bg-gray-600">
      <Title>Shortcuts</Title>
      {shortcutLink.map((link, index) => (
        <div
          key={index}
          className="flex justify-between items-center cursor-pointer rounded-sm"
        >
          <div className="flex gap-4 items-center">
            <span className="bg-blue-100 p-2 rounded-full w-8 h-8 flex items-center justify-center dark:bg-gray-800 dark:text-gray-300">
              <link.icon />
            </span>
            <h3>{link.title}</h3>
          </div>
          <span>
            <IoIosArrowForward />
          </span>
        </div>
      ))}
    </div>
  );
};

export default ShortCuts;
