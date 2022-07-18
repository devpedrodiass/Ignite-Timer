import { useContext } from "react";
import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";

import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../../../../contexts/CyclesContext";

function NewCycleForm() {
  const { activeCycle, cycles } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <FormContainer>
      <label htmlFor="task"> Im going to work on</label>
      <TaskInput
        id="task"
        type="text"
        placeholder="Give a name to your project"
        list="task-suggestions"
        disabled={!!activeCycle}
        {...register("task")}
      />
      <datalist id="task-suggestions">
        {cycles.map((cycle) => (
          <option key={cycle.id} value={cycle.task}>
            {cycle.task}
          </option>
        ))}
      </datalist>

      <label htmlFor="minutesAmount">for</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        disabled={!!activeCycle}
        step={5}
        min={5}
        max={60}
        {...register("minutesAmount", { valueAsNumber: true })}
      />

      <span>minutes.</span>
    </FormContainer>
  );
}

export default NewCycleForm;
