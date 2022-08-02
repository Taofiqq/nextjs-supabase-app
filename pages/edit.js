import Link from "next/link";
import React, { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";
import { useRouter } from "next/router";

const Edit = () => {
  const [workouts, setWorkouts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getWorkouts();
  }, []);

  const getWorkouts = async () => {
    const user = supabase.auth.user();
    const { data, error } = await supabase
      .from("workouts")
      .select("*")
      .eq("user_id", user?.id);
    if (error) throw error;
    setWorkouts(data);
    // router.push("/");
  };

  const deleteWorkout = async (id) => {
    try {
      const user = supabase.auth.user();
      const { data, error } = await supabase
        .from("workouts")
        .delete()
        .eq("id", id)
        .eq("user_id", user?.id);
      //   getWorkouts();
      console.log(data);
      if (error) throw error;
      alert("Workout deleted successfully");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <p>Edit</p>

      {workouts.map((workout) => (
        <div key={workout.id}>
          <p>{workout.title}</p>
          <button onClick={() => deleteWorkout(workout.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Edit;
