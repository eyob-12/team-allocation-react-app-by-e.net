
import girl from './img/girl.png';
import turbo from './img/turbo.jpg';
const Employees = ({employees,selectedTeam,handleEmployeeCardClick,handleTeamSelectionChange}) => {
  
    
      return (
          <main className='container'>
              <div className='row justify-content-center mt-3 mb-3'>
                  <div className='col-6'>
                      <select className='form-select form-select'value={selectedTeam} onChange={handleTeamSelectionChange}>
                          <option value="TeamA">TeamA</option>
                          <option value="TeamB">TeamB</option>
                          <option value="TeamC">TeamC</option>
                          <option value="TeamD">TeamD</option>
                      </select>
                  </div>
              </div>
              <div className='row justify-content-center mt-3 mb-3'>
                  <div className='col-8'>
                      <div className='card-collection'>
                      {
                          employees.map((employee) => (
                              <div key={employee.id} id={employee.id} className={(employee.teamName === selectedTeam ?
                                  'card m-2 standout' : 'card m-2')} style={{ cursor: "pointer" }}
                               onClick={handleEmployeeCardClick}>
                                  {
                                      (employee.gender === 'male') ? <img src={turbo} className='card-img-top' />
                                                                     :<img src={girl} className='card-img-top' />}
                                  <div className='card-body'>
                                      <h4 className='card-title'>Full Name: {employee.fullName}</h4>
                                      <h5 className='card-text'>Designation:<b>{employee.designation}</b></h5>
                                  </div>
                              </div>
                          ))
                      }
                      </div>
                  </div>
            </div>
        </main>
      ); 
    };

export default Employees