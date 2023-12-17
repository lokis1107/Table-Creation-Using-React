import { useState } from "react";
import "./App.css";
import DataTable from "react-data-table-component";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const coloum = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Age",
      selector: (row) => row.age,
      sortable: true,
    },
    {
      name: "Mail",
      selector: (row) => row.mail,
      sortable: true,
    },
  ];

  const data = [
    {
      id: 1,
      name: "Loki",
      age: 19,
      mail: "lokisjjsd@gmail.com",
    },
    {
      id: 2,
      name: "Vicky",
      age: 19,
      mail: "vickyjjsd@gmail.com",
    },
    {
      id: 3,
      name: "Arun",
      age: 19,
      mail: "arunjjsd@gmail.com",
    },
    {
      id: 4,
      name: "Andru",
      age: 19,
      mail: "andrujjsd@gmail.com",
    },
    {
      id: 5,
      name: "Mathan",
      age: 19,
      mail: "mathanjjsd@gmail.com",
    },
    {
      id: 6,
      name: "Mari",
      age: 14,
      mail: "marijjsd@gmail.com",
    },
    {
      id: 7,
      name: "Vinoth",
      age: 21,
      mail: "vinothjjsd@gmail.com",
    },
    {
      id: 8,
      name: "Kavi",
      age: 18,
      mail: "kavijjsd@gmail.com",
    },
    {
      id: 9,
      name: "Mathi",
      age: 19,
      mail: "mathijjsd@gmail.com",
    },
    {
      id: 10,
      name: "Ram",
      age: 19,
      mail: "ramjjsd@gmail.com",
    },
    {
      id: 11,
      name: "vino",
      age: 19,
      mail: "vinojjsd@gmail.com",
    },
    {
      id: 12,
      name: "janani",
      age: 18,
      mail: "jananijjsd@gmail.com",
    },
  ];

  const [records, setRecords] = useState(data);

  const handleFilter = (event) => {
    const newData = data.filter((row) => {
      return row.name.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setRecords(newData);
  };
  return (
    <div className="mx-80 mt-10">
      <div className=" text-end">
        <input placeholder="Search" type="text" onChange={handleFilter} />
      </div>
      <DataTable
        columns={coloum}
        data={records}
        selectableRows
        fixedHeader
        pagination
        noContextMenu
      ></DataTable>
    </div>
  );
}

export default App;
