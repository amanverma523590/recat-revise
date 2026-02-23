export function Student({ student }) {
  return (
    <div>
      <h3>Student</h3>
      {student.map((student, index) => (
        <div key={index}>
          <ul style={{ listStyle: "none" }} >
            <li>Name: {student.Name}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}
