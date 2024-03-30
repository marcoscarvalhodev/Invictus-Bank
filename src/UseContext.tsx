import React from "react";
import { careerProps } from "./Components/SubPages/Careers/Careers";

const UserContext = React.createContext<careerProps | null>(null);

export default UserContext