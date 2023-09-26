import Card from "./components/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className='containier'>
      <Card img='https://wikiparazit.ru/wp-content/uploads/2020/08/evropeyskaya-koshka-dikiy-kot1.jpg'>
        <h5 className='card-title'>Card title</h5>
        <p className='card-text'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href='#' className='btn btn-primary'>
          Go somewhere
        </a>
      </Card>
      <Card>
        <h5 className='card-title'>Card title</h5>
        <p className='card-text'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href='#' className='btn btn-primary'>
          Go somewhere
        </a>
      </Card>
    </div>
  );
}

export default App;
