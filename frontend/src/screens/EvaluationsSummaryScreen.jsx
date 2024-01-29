import React from "react";
import Table from "react-bootstrap/Table";
import { evalSummary } from "../data.js";

const EvaluationsSummaryScreen = () => {
  // const numStudents = evalSummary.length;
  const numPrograms = evalSummary[0].evals.length;

  return (
    <>
      <Table bordered hover responsive style={{ textAlign: "center" }}>
        <thead>
          <tr>
            <th>S.No.</th>
            {Array.from({ length: numPrograms }).map((_, index) => (
              <th key={index} colSpan={2}>{`P-${index + 1}`}</th>
            ))}
          </tr>
          <tr>
            <th></th>
            {Array.from({ length: numPrograms }).map((_, index) => (
              <>
                <th>T. Code</th>
                <th>Marks</th>
              </>
            ))}
          </tr>
        </thead>
        <tbody>
          {evalSummary.map((student, ind) => (
            <tr>
              <td>{ind + 1}</td>
              {student.evals.map((evaluation) => (
                <>
                  <td>{evaluation.evaluator}</td>
                  <td>{evaluation.marks}</td>
                </>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default EvaluationsSummaryScreen;
