"use server";

import React from "react";
import Habits from "./components/habits";

export default async function HabitsPage() {
  return (
    <>
      <Habits type="goodHabit" margin="mr-4" />
      <Habits type="badHabit" margin="ml-4" />
    </>
  );
}
