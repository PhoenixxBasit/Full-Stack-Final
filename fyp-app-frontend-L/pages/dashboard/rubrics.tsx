import React, { useEffect, useState } from 'react';
import Layout from 'example/containers/Layout';

type RubricData = {
  Name: string;
  plo: string;
  maxscore: number;
  year: string;
  // Add any additional properties of a student
};

const IndexPage: React.FC = () => {
  const [studentsData, setStudentsData] = useState<RubricData[]>([]);
  const [rubricName, setrubricName] = useState("");
  const [MappedToPLO, setMappedToPLO] = useState("");
  const [maxScore, setmaxScore] = useState("");
  const [academicYear, setacademicYear] = useState("");
  const [result, setResult] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new URLSearchParams();
    formData.append("rubricName", rubricName);
    formData.append("MappedToPLO", MappedToPLO);
    formData.append("maxScore", maxScore);
    formData.append("academicYear", academicYear);

    try {
      const response = await fetch("http://127.0.0.1:5000/api/rubric", {
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
        const response = await fetch('http://127.0.0.1:5000/api/rubric');
        const data = await response.json();
        console.log(data);
        setStudentsData(data.rubrics);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const StudentCard: React.FC<RubricData> = ({ Name, plo, maxscore, year}) => {
    return (
      <div className="card bg-blue-500 text-white p-4 mb-4">
        <h2 className="text-2xl font-bold mb-2">Name: {Name}</h2>
        <p className="text-lg font-bold mb-1">MappedToPLO: {plo}</p>
        <p className="text-lg font-bold">MaxScore: {maxscore}</p>
        <p className="text-lg font-bold">academicYear: {year}</p>
      </div>
    );
  };

  const StudentsContainer: React.FC = () => {
    return (
      <div className="cards-container">
        {studentsData.map((student) => (
          <StudentCard key={student.Name} {...student} />
        ))}
      </div>
    );
  };

  return (
    <Layout>
      <div className="container mx-auto">
        <h1 className="text-white text-3xl font-bold mb-4">Rubric Data</h1>

        <StudentsContainer />

        <div className="mt-8">
          <h2 className="text-white text-2xl font-bold mb-4">Add Rubric</h2>

          <form onSubmit={handleSubmit} className="flex gap-4">
            <input
              className="border p-2 rounded-md flex-1"
              placeholder="Registration Number"
              name="rubricName"
              value={rubricName}
              onChange={(e) => setrubricName(e.target.value)}
              required
            />

            <input
              className="border p-2 rounded-md flex-1"
              placeholder="PLO"
              name="MappedToPLO"
              value={MappedToPLO}
              onChange={(e) => setMappedToPLO(e.target.value)}
              required
            />

            <input
              className="border p-2 rounded-md flex-1"
              placeholder="Score"
              name="maxScore"
              value={maxScore}
              onChange={(e) => setmaxScore(e.target.value)}
              required
            />

            <input
              className="border p-2 rounded-md flex-1"
              placeholder="Year"
              name="year"
              value={academicYear}
              onChange={(e) => setacademicYear(e.target.value)}
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
