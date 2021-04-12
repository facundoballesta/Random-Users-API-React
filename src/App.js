import './App.css';
import User from './components/User'
import RecomendedUsers from './components/RecomendedUsers'

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 text-center mt-4">
          <User/>
        </div>
        <div className="col-md-4 mt-4">
          <RecomendedUsers/>
        </div>
      </div>
    </div>
  );
}

export default App;
