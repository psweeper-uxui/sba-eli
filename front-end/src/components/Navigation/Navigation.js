import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import '../../App.css';

const Navigation = () => {
    return (
      <div>
          <ul>
              <li><Link to="/learning_paths" title="Learning Paths">Learning Paths</Link></li>
             {/* <li>Learning Objectives</li>
              <li>Micro Learning Event</li>*/}
          </ul>
      </div>

	)
}

export default Navigation;
