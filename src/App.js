import './App.css';
import AboutCard from './Components/AboutCard/AboutCard';
//import Comment from './Components/Comments/Comment';
//import CommentButton from './Components/CommentButton/CommentButton'
import CommentsContainer from './Components/Comments/CommentsContainer/CommentsContainer';
function App() {
  return (

    <div className='container ' >
      <div className='row mt-5' >
        <div className='col-lg-8 col-12' >
          <CommentsContainer/>
        </div>
        <div className='col-lg-4 col-12 mt-1 '>
          <AboutCard />
        </div>

      </div>


    </div>


  );
}

export default App;
