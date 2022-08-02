// import React from "react";
// import { supabase } from "../utils/supabase";
// import toast, { Toaster } from "react-hot-toast";
// import { useRouter } from "next/router";

// const Workout = ({ workout }) => {
//   //   console.log(workout);

//   const router = useRouter();

//   const handleDelete = async (id) => {
//     try {
//       const user = supabase.auth.user();
//       const { data, error } = await supabase
//         .from("workouts")
//         .delete()
//         .match({ id })
//         .eq("userId", user?.id);
//       if (error) throw error;
//       toast.success("Workout deleted successfully");
//       router.push("/");
//       console.log(data);
//     } catch (error) {
//       alert(error.message);
//     }
//   };
//   return (
//     <div>
//       Workout
//       <p>{workout.title}</p>
//       <button onClick={() => handleDelete(workout.id)}>Delete</button>
//       <Toaster />
//     </div>
//   );
// };

// export default Workout;

// export async function getStaticPaths() {
//   const { data, error } = await supabase.from("workouts").select("id");
//   const paths = data.map((workout) => ({
//     params: { id: JSON.stringify(workout.id) },
//   }));
//   return {
//     paths,
//     fallback: true,
//   };
// }

// export async function getStaticProps({ params }) {
//   const { id } = params;
//   const { data } = await supabase
//     .from("workouts")
//     .select()
//     .filter("id", "eq", id)
//     .single();
//   return {
//     props: {
//       workout: data,
//     },
//   };
// }
