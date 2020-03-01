import React, { useState } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import StudentField from './container/StudentUploadField';
import StudentForm from './container/Form';
import History from './container/History';
import './tailwind.css';


function App() {
  return (
    <div className="w-full relative">
      <div className="absolute top-0 flex justify-around md:justify-center w-full p-2 shadow-md">
        <Link to='/' className="mx-2">Compare</Link>
        <Link to='/history' className="mx-2">History</Link>
      </div>
      <Switch>
        <Route exact path="/">
          <StudentForm />
        </Route>
        <Route exact path="/history">
          <History />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
