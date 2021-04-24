import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllHacker } from "../../store/hacker/actions";
import { NavLink } from "react-router-dom";

export default function Hacker() {
  const hackers = useSelector((state) => state.hacker.hackers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllHacker());
  }, [dispatch]);

  return (
    <div>
      {/* <pre>{JSON.stringify(hackers, null, 2)}</pre> */}
      {/* <div className="mt-5 list-group d-flex flex-lg-row justify-content-md-around"> */}
      <div className="container mt-4">
        <div className="row">
          {hackers &&
            hackers.map((hacker) => (
              <div className="col-lg-6">
                <NavLink
                  to={`/hackers/${hacker._id}`}
                  className="list-group-item list-group-item-action my-1 mx-lg-2 "
                  aria-current="true"
                  key={hacker._id}
                >
                  <div className="d-flex w-100 align-items-center justify-content-between ">
                    <h3 className="col-7 text-break">{hacker.name}</h3>
                    <div className="col-5 ml-auto">
                      <img
                        src="https://picsum.photos/150/150"
                        style={{
                          maxWidth: "100%",
                          maxHeight: "100%",
                          float: "right",
                          borderRadius: "75px",
                        }}
                        alt="..."
                      />
                    </div>
                  </div>
                </NavLink>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
