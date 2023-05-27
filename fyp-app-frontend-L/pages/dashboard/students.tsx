import React, { useEffect, useState } from 'react';
import Layout from 'example/containers/Layout';

type StudentData = {
  _id: string;
  regNumber: string;
  batch: string;
  // Add any additional properties of a student
};

const IndexPage: React.FC = () => {
  const [studentsData, setStudentsData] = useState<StudentData[]>([]);
  const [regNumber, setRegNumber] = useState("");
  const [batch, setBatch] = useState("");
  const [result, setResult] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new URLSearchParams();
    formData.append("regNumber", regNumber);
    formData.append("batch", batch);

    try {
      const response = await fetch("http://127.0.0.1:5000/api/student", {
        body: formData.toString(),
        method: "post",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/api/student');
        const data = await response.json();
        console.log(data);
        setStudentsData(data.students);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const StudentCard: React.FC<StudentData> = ({ _id, regNumber, batch }) => {
    return (
      <div className="card bg-blue-500 text-white p-4 mb-4">
        <h2 className="text-2xl font-bold mb-2">Student ID: {_id}</h2>
        <p className="text-lg font-bold mb-1">Registration Number: {regNumber}</p>
        <p className="text-lg font-bold">Batch: {batch}</p>
      </div>
    );
  };

  const StudentsContainer: React.FC = () => {
    return (
      <div className="cards-container">
        {studentsData.map((student) => (
          <StudentCard key={student._id} {...student} />
        ))}
      </div>
    );
  };

  return (
    <Layout>
      <div className="container mx-auto">
        <h1 className="text-white text-3xl font-bold mb-4">Student Data</h1>

        <StudentsContainer />

        <div className="mt-8">
          <h2 className="text-white text-2xl font-bold mb-4">Add Student</h2>

          <form onSubmit={handleSubmit} className="flex gap-4">
            <input
              className="border p-2 rounded-md flex-1"
              placeholder="Registration Number"
              name="regNumber"
              value={regNumber}
              onChange={(e) => setRegNumber(e.target.value)}
              required
            />

            <input
              className="border p-2 rounded-md flex-1"
              placeholder="Batch"
              name="batch"
              value={batch}
              onChange={(e) => setBatch(e.target.value)}
              required
            />

            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Submit"}
            </button>
          </form>

          <div className="result mt-8">
            <h2 className="text-white text-2xl font-bold mb-2">Result:</h2>
            <pre className="bg-gray-100 p-4 rounded-md">
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
