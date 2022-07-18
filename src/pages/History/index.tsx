import { useContext } from "react";
import { CyclesContext } from "../../contexts/CyclesContext";
import { HistoryContainer, HistoryList, Status } from "./styles";
import { formatDistanceToNow } from "date-fns";

export default function History() {
  const { cycles } = useContext(CyclesContext);
  return (
    <HistoryContainer>
      <h1>My History</h1>
      <HistoryList>
        <table>
          <thead>
            <th>Task</th>
            <th>Duration</th>
            <th>Start</th>
            <th>Status</th>
          </thead>
          <tbody>
            {cycles ? (
              cycles.map((cycle) => (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>
                    {cycle.minutesAmount}{" "}
                    {cycle.minutesAmount === 1 ? "minute" : "minutes"}
                  </td>
                  <td>
                    {formatDistanceToNow(new Date(cycle.startDate), {
                      addSuffix: true,
                    })}
                  </td>
                  <td>
                    {cycle.finishedDate && (
                      <Status statusColor="green">Done</Status>
                    )}
                    {cycle.interruptedDate && (
                      <Status statusColor="red">Interrupted</Status>
                    )}
                    {!cycle.finishedDate && !cycle.interruptedDate && (
                      <Status statusColor="yellow">In progress...</Status>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <h1>Empty Table</h1>
            )}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
