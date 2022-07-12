
export default function Contact()
{
    return (
        <>
        <h2><center>For any inquiry Contact me</center></h2>
        <center>
        <form style={{width:"50%",marginTop:"100px",marginLeft:"150px"}}>
  <div class="form-group" >
    
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter Name" />
  </div><br/><br/>
  <div class="form-group">
    
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Enter Email"/>
  </div><br/><br/>
  <div class="form-group">
   
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Message"/>
  </div><br/><br/>
  <button type="button" class="btn btn-primary">Send</button>
</form>
</center>
        </>
    )
}