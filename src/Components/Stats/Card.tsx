import React from "react";
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
  return <div>{employee.title}</div>;
};

export default Card;
