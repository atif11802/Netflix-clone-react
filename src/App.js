
import './App.css';
import Row from "./Row";
import requests from './request';

function App() {
  return (
    <div className="app">
     <Row title="NETFLIX ORIGINAL"  
     fetchUrl={
       requests.fetchNetflixOriginals
     }
     />
     <Row title="Trending Now"
     fetchUrl={requests.fetchTrending}
      />
       <Row title="Top Rated"
     fetchUrl={requests.fetchTopRated}
      />
      
      <Row title="Action Movies"
     fetchUrl={requests.fetchActionMovies}
      />
      
      <Row title="Comedy Movies"
     fetchUrl={requests.fetchComedyMovies}
      />
      
      <Row title="Romance Movies"
     fetchUrl={requests.fetchRomanceMovies}
      />
      <Row title="Horror Movies"
     fetchUrl={requests.fetchHorrorMovies}
      />
      
      <Row title="Documentaries"
     fetchUrl={requests.fetchDocumentaries}
      />
      

      
      
     
     


    </div>
  );
}

export default App;
