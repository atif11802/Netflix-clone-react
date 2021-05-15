
import './App.css';
import Row from "./Row";
import requests from './request';

function App() {
  return (
    <div className="App">
     <Row title="NEtflix Originals"  
     fetchUrl={
       requests.fetchNetflixOriginals
     }
     />
     <Row title="trending now"
     fetchUrl={requests.fetchTrending}
      />
     
     


    </div>
  );
}

export default App;
