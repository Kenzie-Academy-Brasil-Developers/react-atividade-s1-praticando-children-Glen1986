import './style.css'; 

function Children({name}){
  return(
    <div className="CenteredCard">
      <span>
        <h1>children {name}</h1>
      </span>
    </div>
  );
}

export default Children;
