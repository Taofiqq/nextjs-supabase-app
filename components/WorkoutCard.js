import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../styles/WorkoutCard.module.css";
import { supabase } from "../utils/supabase";
import { BsTrash } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { formatDistanceToNow } from "date-fns/";

const WorkoutCard = ({ data, handleDelete }) => {
  return (
    <div className={styles.workoutContainer}>
      {data?.map((item) => (
        <div key={item.id} className={styles.container}>
          <p className={styles.title}>
            {" "}
            Title: {""}
            {item.title}
          </p>
          <p className={styles.load}>
            {" "}
            Load(kg): {"  "}
            {item.loads}
          </p>
          <p className={styles.reps}>Reps:{item.reps}</p>
          <p className={styles.time}>
            created:{" "}
            {formatDistanceToNow(new Date(item.inserted_at), {
              addSuffix: true,
            })}
          </p>

          <div className={styles.buttons}>
            <Link href={`/edit/${item.id}`}>
              <a className={styles.edit}>
                <FiEdit />
              </a>
            </Link>
            <button
              onClick={() => handleDelete(item.id)}
              className={styles.delete}
            >
              <BsTrash />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkoutCard;
