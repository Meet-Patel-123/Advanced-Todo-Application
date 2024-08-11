"use server";

import React from "react";
import ReadingTask from "./components/reading-task";

export default async function ReadingTaskPage() {
  return (
    <>
      <ReadingTask type="reading" />
    </>
  );
}
