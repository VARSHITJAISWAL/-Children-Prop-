import style from "./App.module.css";
import ComA from "./ComA";
import Container from "./Container.jsx";

function Varshit(){
  return (
    <>
    <Container>
    <center>
    <div  className={style.size}><h1 className={style.head}>Computer Componets</h1> 
    <ComA/></div>
    </center>
    </Container>
    <Container>
      <center>
      <h1>This are my Computer componts.</h1>
      </center>
    </Container>
    </>
    
  )
}
export default Varshit;
