import { College } from "./College";


export function Arr() {

  const collegeData = [
    {
      Name: "East West",
      City: "Bangalore",
      Student: [
        { Name: "Aman", Age: 26 },
        { Name: "Sanam", Age: 25 },
      ],
    },
    {
      Name: "Delhi University",
      City: "Delhi",
      Student: [
        { Name: "Monika", Age: 19 },
        { Name: "Rina", Age: 20 },
      ],
    },
    {
      Name: "KCIET",
      City: "Hisar",
      Student: [
        { Name: "Peter", Age: 32 },
        { Name: "Sam", Age: 29 },
      ],
    },
  ];

  return (
    <div>
      <h1>Nested Looping</h1>
      {
        collegeData.map((college,index)=>(
            <div key={index}>
                <College college={college}/>
            </div>
        ))
      }
    </div>
  );
}
