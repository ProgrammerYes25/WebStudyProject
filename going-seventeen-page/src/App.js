import './css/App.css';

function App() {
  const [mode, setMode] =useState('HOME');
  const [id, setId] =useState(null);

  const going = [
          {id:1, title:'돈’t lie', body:'그 누구도 믿을 수 없다. 상금이 걸렸있는 마피아와 시민의 심리싸움, 고잉 세븐틴 첫 시리즈 \"돈\'t Lie\"'},
          {id:2, title:'논리나잇', body:'논리가 있어도 있는 게 아니다, 논리가 없어도 없는 게 아니다. 고품격 무논리 토크쇼 SVT \"논리나잇\"~!'},
          {id:3, title:'BAD CLUE', body:'하나같이 수상한 12명의 인물과 1명의 탐정 사이이 숨어있는 범임을 찾아라. 본격 추리 롤 플레잉 컨텐츠\"BAD CLUE\"'},
          {id:4, title:'불면제로', body:'세븐틴 밈의 고장, 잘 잠드는 사람이 먼저 퇴근하는 세계관, 멤버들의 방해를 이겨내 빨리 퇴근하자 \"불면제로\"'},
          {id:5, title:'TTT', body:'세븐틴이 다 함께 즐기는 본격 MT 콘텐츠, MT SEVENTEEN REALITY \"TTT\"'},
          {id:6, title:'8월의 크리스마스', body:'우리가 여름의 크리스마스를 호주에서 즐길 수 없다면 여름에 크리스마스를 즐기겠다. 8월에 즐기는 게임 퇴근내기 '},
          {id:7, title:'부승관의 옛날예능', body:''},
          {id:8, title:'고잉시리즈', body:''},
          {id:10, title:'고잉상황극', body:''}
        ]

  let content = null;
  if(mode === 'HOME'){
    content = <Main title='세븐틴에 입문하고 싶은 당신을 위한 고잉세븐틴 안내서'
             body='고잉 세븐틴과 함께 세븐틴의 다양한 매력에 빠져 보세요!'></Main>
  }
  else if(mode === 'READ'){
    let title, body = null;
    for(let i = 0; i < going.length; i++){
      if(going[i].id === id){
        title = going[i].title;
        body = going[i].body;
      }
    }
    content = <Main title={title} body={body}></Main>
  }
  return (
    <div className="App">
        <Header onChangeMode={()=>{
          setMode('HOME');
        }}></Header>
      <div id="grid">
        <Nav going={going} onChangeMode={(_id)=>{
          setMode('READ');
          setId(_id)
        }}></Nav>
        {content}
      </div>

    </div>
  );
}
export default App;
