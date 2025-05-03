import './nav.module.css';

function Nav(props){
  const [isOpen, setIsOpen] =useState(false);
  const goingList =[];

  console.log(props);
  if(props.going){
    for(let i = 0; i < props.going.length; i++){
      let t = props.going[i];
      goingList.push(
      <a id={t.id} href={'/read/'+t.id} ><li class="navtext2" onClick={(event)=>{
        event.preventDefault();
        props.onChangeMode(Number(t.id));
      }}>{t.title}</li></a>);
    }
  }

  return (<nav>
    <ul>
        <a href="/" ><li class="navtext1">소개</li></a>
        <a href="/" onClick={(event)=>{
            event.preventDefault();
            setIsOpen(!isOpen);
          }}><li class="navtext1">시리즈</li></a>
          {isOpen && (
                <ul class="list2">
                  {goingList}
                </ul>  
          )}
        <a href="/"><li class="navtext1">난이도별</li></a>
    </ul>  
</nav>)
}