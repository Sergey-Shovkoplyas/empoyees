import React from 'react';
import ReactDOM from 'react-dom';

import initialProps from './businessLogic/fixture/employees.json'; // todo temporary
import employeesIdActive from './businessLogic/fixture/employeesActive.json'; // todo temporary


import EmployeesEntity from './entities/Employer'

import View from './view/Employees';
import Model from './businessLogic/Employees';
import Repository from './businessLogic/Repository';

import "./styles/Employees.scss"

let model = new Model({
    dependencies: {
        Repository: new Repository(),
        EmployeesEntity
    }
});

// let initialProps = model.getInitialProps().then((result) => console.log(result));
let normalizeInitialProps = model.normalizeInitialProps({employees: initialProps}); // todo temporary

ReactDOM.render(
  <React.StrictMode>
    <View initialData={{employees: normalizeInitialProps.employees, employeesIdActive: employeesIdActive}}/>
  </React.StrictMode>,
  document.getElementById('root')
);
