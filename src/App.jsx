
import Header from "./components/Header";
import Footer from "./components/Footer";
import StudentList from "./components/StudentList";
import "./App.css";

function App() {
  const students = [
    {
      name: "Rahul Sharma",
      rollNo: "101",
      department: "Computer Science",
      semester: 6,
      cgpa: 8.7,
      photo: "https://i.pravatar.cc/150?img=12"
    },
    {
      name: "Priya Das",
      rollNo: "102",
      department: "Information Technology",
      semester: 6,
      cgpa: 9.2,
      photo: "https://i.pravatar.cc/150?img=47"
    },
    {
      name: "Amit Roy",
      rollNo: "103",
      department: "Computer Applications",
      semester: 6,
      cgpa: 7.8,
      photo: "https://i.pravatar.cc/150?img=11"
    },
    {
      name: "Sneha Ghosh",
      rollNo: "104",
      department: "Computer Science",
      semester: 6,
      cgpa: 9.5,
      photo: "https://i.pravatar.cc/150?img=44"
    }
  ];

  return (
    <>
      <Header />
      <StudentList students={students} />
      <Footer />
    </>
  );
}

export default App;