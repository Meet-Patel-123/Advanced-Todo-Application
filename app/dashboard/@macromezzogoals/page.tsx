"use server";

import React from "react";
import MacroMezzoGoals from "./components/macro-mezzo-goals";

export default async function MacroMezzoGoalsPage() {
  return (
    <>
      <MacroMezzoGoals type="macroGoals" />
      <MacroMezzoGoals type="mezzoGoals" />
    </>
  );
}
