import { FC } from "react";

type User = {
  name: string;
  country: string;
  role: string;
  image: string;
  bgColor: string;
};

interface MemberProps {
  user: User;
}

const Member: FC<MemberProps> = ({ user }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img
          src={user.image}
          alt="user"
          className="w-12 h-12 flex rounded-full"
        />

        <div>
          <h2 className="text-xl font-bold">{user.name}</h2>
          <span className="font-semibold text-gray-400 text-sm">
            {user.country}
          </span>
        </div>
      </div>
      <span
        className={`${user.bgColor} p-3 rounded-full text-xs text-gray-700 font-semibold dark:bg-gray-500 dark:text-gray-300`}
      >
        {user.role}
      </span>
    </div>
  );
};

export default Member;
