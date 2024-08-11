"use server";

import React from "react";
import MicrotTasks from "./components/micro-tasks";

export default async function MicroTasksPage() {
  return (
    <>
      <MicrotTasks type="microTasks" duration="13H" />
    </>
  );
}
