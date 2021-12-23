import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
        <Link to="/register">
            <button>Register</button>
        </Link>
        
        <Link to='login'>
            <button>Sign In</button>
        </Link>

        <div>
            <h2> Water those plants! </h2>
        </div>

        <div>
            <h4>Healthy Plants</h4>
            {/*map over api healthy plants and display here*/}
            <h4>thirsty Plants</h4>
            {/*map over api thirsty plants and display here*/}
        </div>

    </div>
  );
}

export default Home;