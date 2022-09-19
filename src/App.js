import HeartsList from './components/HeartList';
import Heart from './components/Heart'
import Header from './components/Header'
import './App.css';

const message = 'cool cud';

function App() {
    return (
      <>
        <Header />
        <HeartsList msg={message} />
      </>
    );
}

export default App;
