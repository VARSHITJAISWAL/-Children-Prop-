import style from "./ComA.module.css";
function ComA(){
  let elements=["Moniter","Mouse","KeyBoard","CPU","UPS"]
  return (
    
    <div>
      {
      elements.map((item)=>

  <ol className={`list-group `}>
  <li className={`list-group-item ${style.fsize} ${style.bg}`}>{item}</li>
  
</ol>
      )
    }
      
      
    
    </div>
  )
}
export default ComA;