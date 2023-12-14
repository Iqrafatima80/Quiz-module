import {
  faComments,
  faGauge,
  faSheetPlastic,
  faUsersLine,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navlink = ({ path }) => {
  const pathname = usePathname();

  const color = pathname.includes(path) ? "#7F56D9" : "#ffffff";

  return (
    <Link
      href={`${path}`}
      className={`${
        pathname.includes(path) ? "bg-white rounded-md" : ""
      } flex justify-center items-center p-4`}
    >
      {path === "/dashboard" ? (
        <FontAwesomeIcon icon={faGauge} color={color} size="lg" />
      ) : path === `/messages` ? (
        <FontAwesomeIcon icon={faComments} color={color} size="lg" />
      ) : path === `/meet` ? (
        <FontAwesomeIcon icon={faVideo} color={color} size="lg" />
      ) : path === `/forums` ? (
        <FontAwesomeIcon icon={faUsersLine} color={color} size="lg" />
      ) : path === `/Quiz` ? (
        <FontAwesomeIcon icon={faSheetPlastic} color={color} size="lg" />
      ) : (
        <></>
      )}
    </Link>
  );
};

export default Navlink;
