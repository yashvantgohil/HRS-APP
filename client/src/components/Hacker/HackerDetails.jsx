import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentHacker } from "../../store/hacker/actions";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import PeopleIcon from "@material-ui/icons/People";

export default function HackerDetails(props) {
  const id = props.match.params.id;
  const hacker = useSelector((state) => state.hacker.selectedHacker);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentHacker(id));
  }, [dispatch, id]);

  return (
    hacker && (
      <div>
        {/* <pre>{JSON.stringify(hacker, null, 2)}</pre> */}
        <div className="card mb-3 m-5">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="https://picsum.photos/500/500"
                style={{ width: "100%", height: "100%" }}
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{hacker.name}</h5>
                <div className="card-text">
                  <div className="d-flex flex-column flex-sm-row justify-content-between mt-3">
                    <div className="text-warning">
                      <PeopleIcon /> Overall Rank {hacker.overallRank}
                    </div>
                    <div className="text-primary">
                      <PermIdentityIcon /> Followers {hacker.followers}
                    </div>
                    <div className="text-danger">
                      <PermIdentityIcon /> Following {hacker.following}
                    </div>
                  </div>
                  <div className="d-flex flex-column flex-sm-row justify-content-between mt-3">
                    <div className="text-success">
                      <ArrowUpwardIcon /> Solutions Submitted{" "}
                      {hacker.solutionsSubmitted}
                    </div>
                    <div className="text-primary">
                      <ArrowDownwardIcon /> Solutions Accepted{" "}
                      {hacker.solutionsAccepted}
                    </div>
                  </div>
                  <div className="mt-3 text-success">
                    <AssignmentTurnedInIcon /> Challanges Solved{" "}
                    {hacker.challangesSolved}
                  </div>
                  <p className="card-text mt-3">
                    {hacker.name} is currently ranked {hacker.overallRank} and
                    has completed {hacker.challangesSolved} Challanges{" "}
                  </p>
                  <p className="card-text mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </p>
                </div>
                <p className="card-text mt-3">
                  <small className="text-muted">Last updated 3 mins ago</small>
                  <span
                    className="text-primary ml-4 d-inline"
                    style={{ float: "right", cursor: "pointer" }}
                    onClick={() => props.history.push("/hackers")}
                  >
                    Back
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
