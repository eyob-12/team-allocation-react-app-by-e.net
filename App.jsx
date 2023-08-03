import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import Header from './Header';
import Employees from './Employees';
import Footer from './Footer';
import GroupedTeamMembers from '/GroupedTeamMembers';
import Nav from './Nav';
import NotFound from './NotFound';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || "TeamB");

  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) ||[
      {
          id: 1,
          fullName: "eyob addis",
          designation: "web designer",
          gender: "male",
          teamName: "TeamA"
      },
      {
          id: 2,
          fullName: "niway addis",
          designation: "javascript developer",
          gender: "male",
          teamName: "TeamA"
      },
      {
          id: 3,
          fullName: "helen addis",
          designation: "Graphic designer",
          gender: "female",
          teamName: "TeamA"
      },
      {
          id: 4,
          fullName: "samson addis",
          designation: "python developer",
          gender: "male",
          teamName: "TeamB"
      },
      {
          id: 5,
          fullName: "soliyana addis",
          designation: "web developer",
          gender: "female",
          teamName: "TeamB"
      },
      {
          id: 6,
          fullName: "chris addis",
          designation: "javascript developer",
          gender: "male",
          teamName: "TeamB"
      },
      {
          id: 7,
          fullName: "bitaniya addis",
          designation: "c++ developer",
          gender: "female",
          teamName: "TeamC"
      },
      {
          id: 8,
          fullName: "james addis",
          designation: "java developer",
          gender: "male",
          teamName: "TeamC"
      },
      {
          id: 9,
          fullName: "hamrawit getachew",
          designation: "backend developer",
          gender: "female",
          teamName: "TeamC"
      },
      {
          id: 10,
          fullName: "Daisy johhnsen",
          designation: "javascript developer",
          gender: "female",
          teamName: "TeamD"
      },
      {
          id: 11,
          fullName: "scott addis",
          designation: "javascript developer",
          gender: "male", 
          teamName: "TeamD"
      },
      {
          id: 12,
          fullName: "Elena Gilbert",
          designation: "javascript developer",
          gender: "female",
          teamName: "TeamD"
      }
  ]);
  useEffect(() => {
    localStorage.setItem('employeeList', JSON.stringify(employees));
  }, [employees]);

  
  useEffect(() => {
    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam));
  }, [selectedTeam]);


  function handleTeamSelectionChange(event) {
      setTeam(event.target.value);
  }
  function handleEmployeeCardClick(event) {
      const transformedEmployees = employees.map((employee) => employee.id === parseInt(event.currentTarget.id)
          ? (employee.teamName === selectedTeam) ? { ...employee, teamName: '' } : { ...employee, teamName: selectedTeam }
                                             :employee);
      
       setEmployees(transformedEmployees);
  }
 
  
    return (
      <Router>
         
          
            <Header selectedTeam={selectedTeam}
        teamMemberCount={employees.filter((employee) => employee.teamName === selectedTeam).length}
     
                />
 <Routes>
    <Nav />
    <Route path="/" 
       element={
       <Employees
        employees={employees}
        selectedTeam={selectedTeam}
        handleTeamSelectionChange={handleTeamSelectionChange}
        handleEmployeeCardClick={handleEmployeeCardClick} />}
                    >
     </Route>         
     <Route path="/GroupedTeamMembers" element={<GroupedTeamMembers employees={employees}
                                                                    selectedTeam={selectedTeam}
                                                                    setTeam={setTeam}
                />}>
     </Route>  

     <Route path="*" element={<NotFound />}>
     </Route>             
  </Routes>
            
             <Footer />
    
    </Router>
  );
}

export default App;
