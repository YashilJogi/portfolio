import pht from './photo2.JPG';
import '../App.css';
function HomePage() {
return (
    <div className='content-2'>
    <img class="pro" src = {pht} alt="photo" />
    <div className='content'>
    <h2 >Yashil Jogi</h2><br/>
    <p>
        Hi, I am a student of computer engineering persuing BE(Bachelor of engineering).<br/>
        I am fully motivated and dedicated to my work . Always trying to learn new things.<br/>
        Out of box thinker and good problem solving skills.<br/>
        Good knowledge of programming languages and data structure.<br/>
        Good team member , always eager to collaborate with like minded people.<br/>
        Recent graduate looking for opportunity in web development.</p><br/><br/>
        <p>
        <h2>Education</h2>
        <br/><br/>
  <table class="table-style">
    <tr>
      <td>B E</td>&nbsp;&nbsp;
      <td>2019-2023</td>
    </tr>
    <tr>
      <td>HSC</td>&nbsp;&nbsp;
      <td>2018-2019</td>
    </tr>
    <tr>
      <td>SSC</td>&nbsp;&nbsp;
      <td>2016-2017</td>
    </tr>
    
  </table>
</p>
<br/><br/>
<p>
     <h2>Skills</h2><br/><br/>
    <table class="table-style">
      <tr>
        <td>HTML</td>  
      </tr>
      <tr>
        <td>CSS</td> 
      </tr>
      <tr>
        <td>Javascript</td> 
      </tr>
      <tr>
        <td>Java</td>
      </tr>
      <tr>
        <td>React</td>
      </tr>
      <tr>
        <td>MySQL</td>
        
      </tr>
    </table>
  </p>
    </div>
    
    </div>
);
}

export default HomePage;