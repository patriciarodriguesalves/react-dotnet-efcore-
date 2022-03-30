import "./App.css";
import React, { useState, useEffect } from "react";
import FormActivity from "./components/formActivity";

import ActivityList from "./components/activityList";

function App() {
  const [index, setIndex] = useState(0);
  const [activities, setActivities] = useState([]);
  const [activity, setActivity] = useState({ id: 0 });

  useEffect(() => {
    activities.length <= 0
      ? setIndex(1)
      : setIndex(
          Math.max.apply(
            Math,
            activities.map((item) => item.id)
          ) + 1
        );
  }, [activities]);

  function updateActivity(editedActivity) {
    setActivities(
      activities.map((item) =>
        item.id === editedActivity.id ? editedActivity : item
      )
    );
    setActivity({ id: 0 });
  }

  function addActivity(activ) {
    setActivities([...activities, { ...activ, id: index }]);
  }

  function cancelActivity() {
    setActivity({ id: 0 });
  }

  function deleteActivity(id) {
    const filteredActivities = activities.filter((a) => a.id !== id);
    setActivities([...filteredActivities]);
  }

  function editActivity(id) {
    const activity = activities.filter((a) => a.id === id);
    setActivity(activity[0]);
  }

  return (
    <>
      <FormActivity
        addActivity={addActivity}
        updateActivity={updateActivity}
        cancelActivity={cancelActivity}
        selectedActivity={activity}
        activities={activities}
      />
      <ActivityList
        activities={activities}
        deleteActivity={deleteActivity}
        editActivity={editActivity}
      />
    </>
  );
}

export default App;
