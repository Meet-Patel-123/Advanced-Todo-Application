"use server";

import React from "react";
import ReflectionTask from "./components/reflection-task";

export default async function ReflectionTaskPage() {
  return (
    <>
      <ReflectionTask type="reflection" />
    </>
  );
}
