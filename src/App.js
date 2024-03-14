
import './App.css';

import ReactPlayer from 'react-player'

function App() {
  const videoUrl="https://youtu.be/VWghitAoPhQ"
  return (
    <>
    <div className='main-container'>
      <div className='side-1'>
      <h1 className='main-heading'>Mobishaala</h1>
          <p className='titles'>Create your <span className='highlitedContent'>Digital Classroom</span> in 5 mins for <span className='highlitedContent'>Free</span> & connect to 1+ Million Students.</p>
          <div className='desktop-version'>
            <ul className='list-features'>
              <li>No technical knowledge required</li>
              <li>Quickly setup live class,tests,notes,ebooks and more.</li>
              <li>Reach out to millions of students anywhere,anytime</li>
            </ul>
            <span className='list-features'>Institute/Teacher</span>
            <br/>
            <button className='button-styling'>Get Started</button>
            <br/>
            <span className='list-features'>Student</span>
            <br/>
            <button className='button-styling'>Download App</button>
            <br/>
            <button className='button-styling talkTous-button'>Talk to Us</button>

          </div>
      </div>
      <div className='side-2'>
          <ReactPlayer url={videoUrl} controls className='player-custom'/>
          <div className='center-container'>
            <button className='button-styling'>Buy</button>
            <div className='mobile-version'>
              <p className='list-features'>Institute/Teacher</p>
              <br/>
              <button className='button-styling'>Get Started</button>
              <br/>
              <p className='list-features'>Student</p>
              <br/>
              <button className='button-styling'>Download App</button>
              <br/>
              <button className='button-styling talkTous-button'>Talk to Us</button>
            </div>
          </div>
      </div>
    </div>
    <footer className='footer'>
      <h1 className='footer-headings'>Mobishaala</h1>
      <h1 className='footer-headings'>Vision</h1>
      <p className='fotter-para'>Empower Institutions $ Teachers with state of the art digital classroom Technology</p>
      <h1 className='footer-headings'>Address</h1>
      <p className='footer-headings'><span className='fotter-para'>Registeered Office :</span> 804,5th Cross,9th main,4th block Koramangala,Bangalore,Karnataka 560034</p>
      <p className='footer-headings'><span className='fotter-para'>Corporate Office:</span> 293,Westend Marg,bear Saket,Saidulajab,Saket,New Delhi,110030</p>
      <h1 className='footer-headings'>Quick Links</h1>
      <h1 className='footer-headings'>Blog</h1>
      <h1 className='footer-headings'>Android App</h1>
      <h1 className='footer-headings'>IOS App</h1>  
    </footer>
    </>
  );
}

export default App;
