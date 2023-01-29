import { useRouter } from "next/router";
import React, { useEffect, useReducer } from "react";
import { FaCalendar, FaHome, FaSearch, FaUser } from "react-icons/fa";
import { FiCalendar, FiHome, FiSearch, FiUser } from "react-icons/fi";

type ACTIONTYPE =
  | { type: "home-clicked" }
  | { type: "search-clicked" }
  | { type: "calendar-clicked" }
  | { type: "profile-clicked" };

const initialState = {
  homeClicked: false,
  searchClicked: false,
  calendarClicked: false,
  profileClicked: false,
};

const reducer = (_state: typeof initialState, action: ACTIONTYPE) => {
  switch (action.type) {
    case "home-clicked":
      return {
        ...initialState,
        homeClicked: true,
      };
    case "search-clicked":
      return {
        ...initialState,
        searchClicked: true,
      };
    case "calendar-clicked":
      return {
        ...initialState,
        calendarClicked: true,
      };
    case "profile-clicked":
      return {
        ...initialState,
        profileClicked: true,
      };
    default:
      throw new Error();
  }
};
const Navigator = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const router = useRouter();

  const { homeClicked, searchClicked, calendarClicked, profileClicked } = state;

  useEffect(() => {
    ((route: string) => {
      router.push(route);
      if (route.includes("profile")) {
        return dispatch({ type: "profile-clicked" });
      }

      if (route.includes("search")) {
        return dispatch({ type: "search-clicked" });
      }

      if (route.includes("calendar")) {
        return dispatch({ type: "calendar-clicked" });
      }

      return dispatch({ type: "home-clicked" });
    })(router.asPath);
  }, [router.asPath]);

  return (
    <div className="fixed bottom-0 right-0 left-0 flex items-center justify-around bg-white py-6 text-2xl text-gray-600">
      <button
        className="outline-none "
        onClick={() => {
          router.push("/");
          dispatch({ type: "home-clicked" });
        }}
      >
        {!homeClicked ? <FiHome /> : <FaHome />}
      </button>
      <button
        className="outline-none"
        onClick={() => dispatch({ type: "search-clicked" })}
      >
        {!searchClicked ? <FiSearch /> : <FaSearch />}
      </button>
      <button
        className="outline-none"
        onClick={() => dispatch({ type: "calendar-clicked" })}
      >
        {!calendarClicked ? <FiCalendar /> : <FaCalendar />}
      </button>
      <button
        className="outline-none"
        onClick={() => {
          router.push("/profile");
          dispatch({ type: "profile-clicked" });
        }}
      >
        {!profileClicked ? <FiUser /> : <FaUser />}
      </button>
    </div>
  );
};

export default Navigator;
