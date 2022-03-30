import React from "react";
import Activity from "./activity";

export default function ActivityList(props) {
  return (
    <div className="mt-3">
      {props.activities.map((item) => (
        <Activity
          key={item.id}
          item={item}
          deleteActivity={props.deleteActivity}
          editActivity={props.editActivity}
        />
      ))}
    </div>
  );
}
