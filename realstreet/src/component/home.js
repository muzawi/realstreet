import MultiStepForm from './MultiStepForm.js';
import Right from './Right.js'
import'./home.css';

const Home = () => {
    <>
    <div className='righside'><Right/>
    <div className="container mt-4">
        {/* Multi-Step Form displayed on the home page */}
        <MultiStepForm />
      </div></div>
      </>
}
export default Home;