import {useState, useEffect} from 'react'
import firebase from './firebase'
import './index.css';
import {Animated} from "react-animated-css";
import Select from 'react-select';
import Post from './Post'
function App() {
  const [cond, setCond] = useState(false)
  const [condTwo, setCondTwo] = useState(false)
  const [condThree, setCondThree] = useState(false)
  const [trueorfalse, setTrueorfalse] = useState(false)
  const [trueorfalseTwo, setTrueorfalseTwo] = useState(false)
  const [trueorfalseThree, setTrueorfalseThree] = useState(false)
  const [trueinputorfalse, setTrueinputorfalse] = useState(true)
  const [localData, setLocalData] = useState('')  
  const [bold, setBold] = useState(true)
  const [bold2, setBold2] = useState(false)
  const [bold3, setBold3] = useState(false)
  const [bold4, setBold4] = useState(false)
  const [bold0, setBold0] = useState(false)
  const [visibleornot, setVisibleornot] = useState(false)
  const [slider, setSlider] = useState(50);
  const [saythefuck, setSaythefuck] = useState('')
  const [name, setName] = useState('')
  const [roastthefuck, setRoastthefuck] = useState('')
  const [answer, setAnswer] = useState('')
  const [useraskedforchange, setUseraskedforchange] = useState(0)
  // !!!! // const [sumofnum, setSumofnum] = useState([])
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let newarray = []
  let newarray2 = []
  const date = new Date();
  const questions = ["sou2al r9am wahd", "isou2al ithani", "thalth sou2al", "hatha rab3 sou2al"]
  const [questionnumber, setQuestionnumber] = useState(0)
  function handleNewQuestion() {
    if (questionnumber < 3) {
      setQuestionnumber(questionnumber + 1)
    } else {
      setQuestionnumber(0)
    }
  }
  const [ratingEmoji, setRatingEmoji] = useState(slider/10)
  function returnRatingEmoji() {
    if (ratingEmoji == 0 || ratingEmoji == 1 ) {
      return "😡"
    }
    if (ratingEmoji == 2 || ratingEmoji ==  3 || ratingEmoji == 4) {
      return "☹️"
    }
    if (ratingEmoji == 5) {
      return "🙄"
    }
    if (ratingEmoji == 6 || ratingEmoji == 7 || ratingEmoji == 8) {
      return "😎"
    }
    if (ratingEmoji == 9 || ratingEmoji == 10) {
      return "😍"
    }
  }
  // const [didyouclickshare, setDidyouclickshare] = useState(false) //
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  ///////////////this is something new it could be deleted/////////////////////
  const [fucksratings, setFucksratings] = useState([])
  useEffect(() => {
    // Hook to handle the initial fetching of posts
    firebase
      .firestore()
      .collection(JSON.stringify(localStorage.getItem('data')) + "rating")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setFucksratings(data);
      });
  }, [addToPosts]);

  const [fucks, setFucks] = useState([]);
 
  useEffect(() => {
    // Hook to handle the initial fetching of posts
    firebase
      .firestore()
      .collection(JSON.stringify(localStorage.getItem('data')))
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setFucks(data);
      });
  }, [JSON.stringify(localStorage.getItem('data'))]);
  useEffect(() => {
    // Hook to handle the real-time updating of posts whenever there is a
    // change in the datastore (https://firebase.google.com/docs/firestore/query-data/listen#view_changes_between_snapshots)

     firebase
      .firestore()
      .collection(JSON.stringify(localStorage.getItem('data')))
      .onSnapshot((querySnapshot) => {
        const _fucks = [];

        querySnapshot.forEach((doc) => {
          _fucks.push({
            id: doc.id,
            ...doc.data(),
          });
        });

        setFucks(_fucks);
      });
  }, [JSON.stringify(localStorage.getItem('data'))]);

  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  function letstestthefuck() {
    if (JSON.stringify(localStorage.getItem('data2')).slice(0, JSON.stringify(localStorage.getItem('data2')).length - 1).substring(1) === "false") {
      return 'wetestedthefuck'
    }
  }
  function handleChangetherating() {
    setUseraskedforchange(useraskedforchange + 1)
    setBold(true)
    localStorage.setItem('data2',false)
  }
  function handlesaythefuck(e) {
    setSaythefuck(e.target.value)
  }
  function handlename(e) {
    setName(e.target.value)
  }
  function handleroastthefuck(e) {
    setRoastthefuck(e.target.value)
  }
  function handleanswer(e) {
    setAnswer(e.target.value)
  }
  function thefuckingrating() {
    fucksratings.forEach(fuck => fuck.firstrating ? newarray2.push(fuck.firstrating) : newarray.push(fuck.rating))
    return  (newarray.reduce((a, b) => a + b, 0) + newarray2.reduce((a, b) => a + b, 0))/newarray2.length
  }
  function addToPosts() {
    {
      ////////////////////////////////
    }
    if (JSON.stringify(localStorage.getItem('data2')).slice(0, JSON.stringify(localStorage.getItem('data2')).length - 1).substring(1) == "true") {
      alert('you rated the fuck')
    }
    setSaythefuck('')
    setName('')
    setRoastthefuck('')
    setAnswer('')
    if (bold === true) {
      // setDidyouclickshare(true)
      localStorage.setItem('data3',true) 
      localStorage.setItem('data2',true)
      setBold(false)
    }
    if (bold === true && useraskedforchange > 0 ) {
      localStorage.setItem('data5',JSON.stringify(localStorage.getItem('data4')).slice(0, JSON.stringify(localStorage.getItem('data4')).length - 1).substring(1))
    }
    if (bold===true && useraskedforchange === 0) {
      localStorage.setItem('data4',slider)
      if (bold === true) {
        // setDidyouclickshare(true)
        localStorage.setItem('data3',true) 
       // setBold0(true)
       localStorage.setItem('data2',true)
        setBold(false)
      }
     firebase
      .firestore()
      .collection(JSON.stringify(localStorage.getItem('data')) + "rating")
      .add({
        firstrating: JSON.stringify(localStorage.getItem('data4')).slice(0, JSON.stringify(localStorage.getItem('data4')).length - 1).substring(1)/10
   });
    }
    {
      ////////////////////////////////
    }
    if (bold===true && useraskedforchange > 0) {
      localStorage.setItem('data4',slider)
      if (bold === true) {
        // setDidyouclickshare(true)
        localStorage.setItem('data3',true) 
       // setBold0(true)
       localStorage.setItem('data2',true)
        setBold(false)
      }
     firebase
      .firestore()
      .collection(JSON.stringify(localStorage.getItem('data')) + "rating")
      .add({
        //// the idea here is simple , we send always the new rating and we delete the rating that comes before him by just sending that old rating multiplied by -1
        //// this will create a series like that [firstrating = 5 , 6-5 , 7-6, 10-7] = [5, 6, -5, 7, -6, 10, -7] = 10 and that is the new rating
        rating: JSON.stringify(localStorage.getItem('data4')).slice(0, JSON.stringify(localStorage.getItem('data4')).length - 1).substring(1)/10 -JSON.stringify(localStorage.getItem('data5')).slice(0, JSON.stringify(localStorage.getItem('data5')).length - 1).substring(1)/10
   });
    }
    {
      ////////////////////////////////
    }
    if (bold2 === true && saythefuck.length === 0 ) {
      alert("you should type something")
    }
    if (bold3 === true && roastthefuck.length === 0 && name.length < 2) {
      alert("you should type a name and a message")
    } else if (bold3===true && roastthefuck.length === 0) {
      alert("you should type your message")
    } else if (bold3 === true && name.length < 2) {
      alert("you should type a a name")
    }
    if (bold4===true && answer.length === 0) {
      alert("you should type your answer")
    }
    if (bold2===true && saythefuck.length > 0 || bold3===true && name.length > 2 && roastthefuck.length > 0 || bold4===true && answer.length > 0) {
    firebase
     .firestore()
     .collection(JSON.stringify(localStorage.getItem('data')))
     .add({
       saythefuck: saythefuck,
       name: name,
       roastthefuck: roastthefuck,
       question:questions[questionnumber],
       answer:answer,
       upVotesCount: 0,
       downVotesCount: 0,
       funnyvote:0,
       createdAt: date.toUTCString(),
       updatedAt: date.toUTCString()
  })
    }
  }
  firebase
    .firestore()
    .collection("alltheratings")
    .doc(JSON.stringify(localStorage.getItem('data')))
    .set({
      name:JSON.stringify(localStorage.getItem('data')),
      allrating: thefuckingrating()
    })
  if (window.pageYOffset === 2) {
    
  }
  function handleSlider(e) {
    setSlider(e.target.value)
    setRatingEmoji(e.target.value/10)
  }
  function handleButton() {
    setSlider(slider)
    setName('')
    setRoastthefuck('')
    setSaythefuck('')
    setAnswer('')
    if (JSON.stringify(localStorage.getItem('data3')).slice(0, JSON.stringify(localStorage.getItem('data3')).length - 1).substring(1) === 'true' && bold === false) {
     // setBold0(true)
      localStorage.setItem('data2',true)
      setBold(false)
    } else {
     // setBold0(false)
      localStorage.setItem('data2',false)
      setBold(true)
    }
    setBold2(false)
    setBold3(false)
    setBold4(false)
  }
  function handleBold() {
    if (JSON.stringify(localStorage.getItem('data2')).slice(0, JSON.stringify(localStorage.getItem('data2')).length - 1).substring(1) === "true") {
      return 'bolder'
    }
    if (bold === true) {
      return 'bolder'
    }
  }
  function handleButton2() {
    setSlider(slider)
    setName('')
    setRoastthefuck('')
    setAnswer('')
   // setBold0(false)
    localStorage.setItem('data2',false)
    setBold(false)
    setBold2(true)
    setBold3(false)
    setBold4(false)
  }
  function handleBold2() {
    if (bold2 === true) {
      return 'bolder'
    }
  }
  function handleButton3() {
    setSlider(slider)
    setSaythefuck('')
    setAnswer('')
   // setBold0(false)
    localStorage.setItem('data2',false)
    setBold(false)
    setBold2(false)
    setBold3(true)
    setBold4(false)
  }
  function handleBold3() {
    if (bold3 === true) {
      return 'bolder'
    }
  }
  function handleButton4() {
    setSlider(slider)
    setSaythefuck('')
    setName('')
    setRoastthefuck('')
   // setBold0(false)
    localStorage.setItem('data2',false)
    setBold(false)
    setBold2(false)
    setBold3(false)
    setBold4(true)
  }
  function handleBold4() {
    if (bold4 === true) {
      return 'bolder'
    }
  }
  function handletrueinputorfalse() {
    setTrueinputorfalse(!trueinputorfalse)
    {
      ////////////////////////////////////
    }
    setVisibleornot(!visibleornot)
    if (bold ===true) {
      localStorage.setItem('data2',false)
      setBold(false)
      setBold2(false)
      setBold3(false)
      setBold4(false)
    }
    if (bold === false && bold2 === false && bold3 === false && bold4 === false) {
      localStorage.setItem('data2',false)
      setBold(false)
      setBold2(false)
      setBold3(false)
      setBold4(true)
    }
    {
      ////////////////////////////////////
    }
    if (bold2 === true && bold==false && bold3==false && bold4==false) {
      localStorage.setItem('data2',false)
      setBold(false)
      setBold2(false)
      setBold3(false)
      setBold4(false)
    } 
    if (bold2 === false && bold==false && bold3===false && bold4===false) {
      localStorage.setItem('data2',false)
      setBold(false)
      setBold2(true)
      setBold3(false)
      setBold4(false)
    }
    {
      ////////////////////////////////////
    }
    if (bold2 === false && bold==false && bold3==true && bold4==false) {
      localStorage.setItem('data2',false)
      setBold(false)
      setBold2(false)
      setBold3(false)
      setBold4(false)
    } 
    if (bold2 === false && bold==false && bold3===false && bold4===false) {
      localStorage.setItem('data2',false)
      setBold(false)
      setBold2(false)
      setBold3(true)
      setBold4(false)
    }
    {
      ////////////////////////////////////
    }
    if (bold2 === false && bold===false && bold3===false && bold4===true) {
     localStorage.setItem('data2',false)
      setBold(false)
      setBold2(false)
      setBold3(false)
      setBold4(false)
    } 
    if (bold2 === false && bold===false && bold3===false && bold4===false) {
      localStorage.setItem('data2',false)
      setBold(true)
      setBold2(false)
      setBold3(false)
      setBold4(false)
    }
    {
      ////////////////////////////////////
    }
    if (bold2 === false && bold===false && bold3===false && bold4===false && JSON.stringify(localStorage.getItem('data3')).slice(0, JSON.stringify(localStorage.getItem('data3')).length - 1).substring(1) === 'true') {
      localStorage.setItem('data2',false)
      setBold(false)
      setBold2(false)
      setBold3(false)
      setBold4(false)
    }
    if (bold2 === false && bold===false && bold3===false && bold4===false && JSON.stringify(localStorage.getItem('data3')).slice(0, JSON.stringify(localStorage.getItem('data3')).length - 1).substring(1) === 'true') {
      localStorage.setItem('data2',!false)
      setBold(false)
      setBold2(false)
      setBold3(false)
      setBold4(false)
    }
  }
    {
    ////////////////////////////////////
    }
  function handleJellyFishButton() {
    if (trueinputorfalse == true) {
      return {visibility: 'visible'}
    } else {
      return {display: 'none'}
    }
  }
  function handleFirstJellyFishButton() {
    if (trueinputorfalse == true) {
      return {visibility: 'visible', marginTop:"3.1vh"}
    } else {
      return {display: 'none'}
    }
  }
  function vis0() {
   if (visibleornot === true && JSON.stringify(localStorage.getItem('data3')).slice(0, JSON.stringify(localStorage.getItem('data3')).length - 1).substring(1) === "true") {
    return {display: 'none'}
   }
   if (JSON.stringify(localStorage.getItem('data3')).slice(0, JSON.stringify(localStorage.getItem('data3')).length - 1).substring(1) === "true" && JSON.stringify(localStorage.getItem('data2')).slice(0, JSON.stringify(localStorage.getItem('data2')).length - 1).substring(1) === "true"){
     return {visibility: 'visible'}
   } 
   if (JSON.stringify(localStorage.getItem('data2')).slice(0, JSON.stringify(localStorage.getItem('data2')).length - 1).substring(1) === "false") {
      return {display: 'none'}
    }
    if (localStorage.length === 2 && JSON.stringify(localStorage.getItem('data2')).slice(0, JSON.stringify(localStorage.getItem('data2')).length - 1).substring(1) === "true") {
      return {display: 'none'}
    } 
    if (localStorage.length === 1) {
      return {display: 'none'}
    }
    if (localStorage.length === 3) {
      return {display: 'none'}
    }
    if (localStorage.length === 4) {
      return {display: 'none'}
    }
  }
  function vis() {
    if (bold === true) {
      return {visibility: 'visible'}
    } else {
      return {display: 'none'}
    }
  }
  function vis2() {
    if (bold2 === true) {
      return {visibility: 'visible'}
    } else {
      return {display: 'none'}
    }
  }
  function vis3() {
    if (bold3 === true) {
      return {visibility: 'visible'}
    } else {
      return {display: 'none'}
    }
  }
  function vis4() {
    if (bold4 === true) {
      return {visibility: 'visible'}
    } else {
      return {display: 'none'}
    }
  }
  const data = [
    {
      value: 1,
      label: "ISEAHZ"
    },
    {
      value: 2,
      label: "FMT"
    },
    {
      value: 3,
      label: "TBS"
    },
    {
      value: 4,
      label: "FSG"
    },
    {
      value: 5,
      label: "ISET"
    }
  ];
  const [selectedOption, setSelectedOption] = useState(0);
  // handle onChange event of the dropdown
  const handleChange = e => {
    setSelectedOption(e);
  }
  function handleMakeTheFuck() {
    if (selectedOption) {
      localStorage.setItem('data',selectedOption.label)
      setLocalData(JSON.stringify(localStorage.getItem('data')))
    }
  }
  function handleTheCharts() {
    localStorage.setItem('data2',"true")
    setLocalData(localStorage)
    if (JSON.stringify(localStorage.getItem('data3')).slice(0, JSON.stringify(localStorage.getItem('data3')).length - 1).substring(1) === "true" && JSON.stringify(localStorage.getItem('data2')).slice(0, JSON.stringify(localStorage.getItem('data2')).length - 1).substring(1) === "false") {
      setBold(false)
    } 
    if (JSON.stringify(localStorage.getItem('data3')).slice(0, JSON.stringify(localStorage.getItem('data3')).length - 1).substring(1) === "true" && JSON.stringify(localStorage.getItem('data2')).slice(0, JSON.stringify(localStorage.getItem('data2')).length - 1).substring(1) === "true") {
      setBold(false)
    }
  }
  function hero() {
    if (JSON.stringify(localStorage.getItem('data3')).slice(0, JSON.stringify(localStorage.getItem('data3')).length - 1).substring(1) === "true" && JSON.stringify(localStorage.getItem('data2')).slice(0, JSON.stringify(localStorage.getItem('data2')).length - 1).substring(1) === "false") {
      return {visibility: "visible"}
    } else {
      return {}
    }

  }
  function handleDisplay() {
    if (trueorfalse == true) {
      return {visibility: 'visible'}
    } else {
      return {display: 'none'}
    }
  }
  function handleDisplayTwo() {
    if (trueorfalseTwo == true) {
      return {visibility: 'visible'}
    } else {
      return {display: 'none'}
    }
  }
  function handleDisplayThree() {
    if (trueorfalseThree == true) {
      return {visibility: 'visible'}
    } else {
      return {display: 'none'}
    }
  }
  function handleClickTwo() {
    setCondTwo(!condTwo)
   }
  function handleClickThree() {
    setCondThree(!condThree)
  }
  function handleTrueorfalse() {
    setTrueorfalse(!trueorfalse)
  }
  function handleTrueorfalseTwo() {
    setTrueorfalseTwo(!trueorfalseTwo)
  }
  function handleTrueorfalseThree() {
    setTrueorfalseThree(!trueorfalseThree)
  }
  function addToPostsTest() {
    firebase.firestore().collection("ATEST").add({message:"this is just a message"})
  }
  if (localData) {
    return ( 
      <div className="App">
       <div className="header_container">
        <header className="header" style={{marginLeft:"15px"}}>
         <div className="rate_the_fuck">RateTheFuck</div>
         <div></div>
        </header>
       </div>
       <div className="the_body_inside_the_body">
       <div className="second_header">
        <div className="jellyfish_center">
          {JSON.stringify(localStorage.getItem('data')).slice(0, JSON.stringify(localStorage.getItem('data')).length - 1).substring(1)}
        </div>
        <div className="jellyfish_plus" onClick={handletrueinputorfalse}>
          +
        </div>
       </div>
       {
         //////////////////////////////////////////////////////////////////////
       }
      <Animated style={vis0()} animationIn="fadeInDown" animationOut="zoomOut" animationInDuration={1000} animationOutDuration={1000}>
      <div className="input_container_container" >
       <div className="input_container"> 
        <div className="input_container_logo">
          ⭐ 
        </div>
        <div className="input_container_share">
        <div className="input_container_share_rate">
           <div className="the_rating">you rated {JSON.stringify(localStorage.getItem('data')).slice(0, JSON.stringify(localStorage.getItem('data')).length - 1).substring(1)} <span>{JSON.stringify(localStorage.getItem('data4')).slice(0, JSON.stringify(localStorage.getItem('data4')).length - 1).substring(1)/10}</span>/10</div>
           <div className="the_slider">
             <button onClick={handleChangetherating}>change the rating</button>
           </div>
          </div>
        </div>
       </div>
      </div>
      </Animated>
      <Animated style={vis()} animationIn="fadeInDown" animationOut="zoomOut" animationInDuration={1000} animationOutDuration={1000}>
      <div className="input_container_container" >
       <div className="input_container"> 
        <div className="input_container_logo">
          ⭐ 
        </div>
        <div className="input_container_share">
        <div className="input_container_share_rate">
           <div className="the_rating">{slider/10}<span className="devten">/10</span><span>  {returnRatingEmoji()}</span></div>
           <div className="the_slider">
            <input
            className="slider"
            type="range"
            step={10}
            value={slider}
            onChange={handleSlider}
            />
           </div>
          </div>
        </div>
       </div>
      </div>
      </Animated>
      <Animated style={vis2()} animationIn="fadeInDown" animationOut="zoomOut" animationInDuration={1000} animationOutDuration={1000}>
      <div className="input_container_container" >
       <div className="input_container"> 
        <div className="input_container_logo">
        ✍️ 
        </div>
        <div className="input_container_share">
        <div className="input_container_share_rate">
           <textarea 
             value={saythefuck}
             placeholder="iktib lit7ib lihna!!"
             rows="16"
             onChange={handlesaythefuck}
           />
          </div>
        </div>
       </div>
      </div>
      </Animated>
      <Animated style={vis3()} animationIn="fadeInDown" animationOut="zoomOut" animationInDuration={1000} animationOutDuration={1000}>
      <div className="input_container_container" >
       <div className="input_container"> 
        <div className="input_container_logo">
        😀
        </div>
        <div className="input_container_share">
        <div className="input_container_share">
         <div className="input_container_share_talk">
           <div className="the_name">
             <div>
               <input 
                className="the_name_input"
                placeholder="iktib ism wahd lihna"
                value={name}
                onChange={handlename}
              />
             </div>
             <div className="the_name_emoji_shoe">
                 👞
             </div>
             <div className="the_name_emoji_flower">
                 🌹
             </div>
           </div> 
              <textarea 
                value={roastthefuck}
                placeholder="ahki 3lih 3la rahtk!"
                rows="6"
                onChange={handleroastthefuck}
              />
          </div>
        </div>
        </div>
       </div>
      </div>
      </Animated>
      <Animated style={vis4()} animationIn="fadeInDown" animationOut="zoomOut" animationInDuration={1000} animationOutDuration={1000}>
      <div className="input_container_container" >
       <div className="input_container"> 
        <div className="input_container_logo">
        💬 
        </div>
        <div className="input_container_share">
        <div className="input_container_share">
         <div className="input_container_share_talk">
           <div className="the_q_container">
            <div className="the_q">
              {questions[questionnumber]}
            </div>
            <div>
             <img 
                alt="Qries" 
                src="https://image.flaticon.com/icons/png/512/3580/3580275.png"
                width="50"
                height="50"
                className="the_image_pic"
                onClick={handleNewQuestion}
             />
            </div>
           </div>
              <textarea 
               value={answer}
               placeholder="3abr 3la rahtk 😃"
               rows="5"
               onChange={handleanswer}
              />
          </div>
        </div>
        </div>
       </div>
      </div>
      </Animated>
     
     <div className="input_container_container" >
       <div className="input_container_buttons" style={{marginTop:"-1.2vh"}}> 
       <Animated style={handleJellyFishButton()} animationIn="zoomIn" animationOut="zoomOut" animationInDuration={400} animationOutDuration={1000}>
        <div className="input_container_button" onClick={handleButton} style={{fontWeight: handleBold()}}>⭐ Rate The Fuck</div>
        </Animated>
        <Animated style={handleJellyFishButton()} animationIn="zoomIn" animationOut="zoomOut" animationInDuration={600} animationOutDuration={1000}>
        <div className="input_container_button" onClick={handleButton2} style={{fontWeight: handleBold2()}}>✍️ write something</div>
        </Animated>
        <Animated style={handleJellyFishButton()} animationIn="zoomIn" animationOut="zoomOut" animationInDuration={800} animationOutDuration={1000}>
        <div className="input_container_button" onClick={handleButton3} style={{fontWeight: handleBold3()}}>😀 talk about someone</div>
        </Animated>
        <Animated style={handleJellyFishButton()} animationIn="zoomIn" animationOut="zoomOut" animationInDuration={1000} animationOutDuration={1000}>
        <div className="input_container_button" onClick={handleButton4} style={{fontWeight: handleBold4(), marginBottom:"20px"}}>💬 answer a question</div>
        </Animated>
        <Animated style={handleJellyFishButton()} animationIn="zoomIn" animationOut="zoomOut" animationInDuration={1200} animationOutDuration={1000}>
        <div className="share_button" className="input_container_button" style={{marginBottom:"50px"}}>
        <a href="#" className="share_the_fuck" onClick={e => addToPosts()}><span>SHARE</span></a>
        </div>
        <div>
          <button onClick={e => addToPostsTest()}>A TEST</button>
        </div>
        </Animated>
       </div>
      </div>
      {
        //////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////
      }
      <div>
      </div>
      <div>
      </div>

     
      {
        //////////////////////////////////////////////////////////////////////
      }
      <div className="home_page">
         {fucks.map((fuck) => (
           <>
            <Post fuck={fuck} key={fuck.id} />
           </>
          ))}
      </div>
      </div>
      </div>
    )
  } else {
  return (
    <div className="App">
      <div className="header_container">
      <header className="header" style={{marginLeft:"15px"}}>
         <div className="rate_the_fuck">RateTheFuck</div>
         <div></div>
      </header>
      </div>
      {
       ///////////////////////////////////////////////////////////////////////////////////////
       ///////////////////////////////////////////////////////////////////////////////////////
       ///////////////////////////////////////////////////////////////////////////////////////
      }
      <div className="make_an_account" onClick={(localStorage.length === 0) ? handleTrueorfalse : handleTheCharts}>
        <div>
        {(localStorage.length === 0) ? "make an account" : "see" + " " + JSON.stringify(localStorage.getItem('data')).slice(0, JSON.stringify(localStorage.getItem('data')).length - 1).substring(1) + " " + "board 📋"}
        </div>
         </div>
      <Animated style={handleDisplay()} animationIn="fadeInDown" animationOut="zoomOut" animationInDuration={1000} animationOutDuration={1000} isVisible={!cond}>
      <div className="signup_container_container" >
       <div className="signup_container"> 
        <div className="signup_container_header">
          <div>one step to make your account</div>
          <div><span>&#8594;</span>just choose where you study</div>
        </div>
        <div>
        <Select
          placeholder="Select Option"
          value={selectedOption} // set selected value
          options={data} // set list of the data
          onChange={handleChange} // assign onChange function
          className="select_option"
        />
        </div>
        <div><a className="make_the_fuck" onClick={handleMakeTheFuck}>Make the fuck</a></div>
       </div>
      </div>
      </Animated>
      {///////////////////////////////////////////////////////////////////////////////////////
       ///////////////////////////////////////////////////////////////////////////////////////
       ///////////////////////////////////////////////////////////////////////////////////////
      }
      <div className="choose_your_uni" onClick={handleClickTwo} onClick={handleTrueorfalseTwo}>
        <p className="click_to_show_the_uni">
         
         see top 10 universities

        </p>
      </div>
      <Animated style={handleDisplayTwo()} animationIn="fadeInDown" animationOut="zoomOut"   animationInDuration={1000} animationOutDuration={1000} isVisible={!condTwo}>
      <div className="uni">
        <div>name of the uni</div>
        <div>6.5/10</div>
      </div>
      <div className="uni">
        <div>name of the uni</div>
        <div>6.5/10</div>
      </div>
      </Animated>
      {///////////////////////////////////////////////////////////////////////////////////////
       ///////////////////////////////////////////////////////////////////////////////////////
       ///////////////////////////////////////////////////////////////////////////////////////
      }
      <div className="choose_your_uni" onClick={handleClickThree} onClick={handleTrueorfalseThree}>
        <p className="click_to_show_the_uni">
          see all universities
        </p>
      </div>
      <Animated style={handleDisplayThree()} animationIn="fadeInDown" animationOut="zoomOut" animationInDuration={1000} animationOutDuration={1000} isVisible={!condThree}>
      {fucksratings.map((fuckrating) => {
                <div className="uni">
                <div>{fuckrating.name}</div>
                <div>{fuckrating.thefuckingrating}</div>
              </div>
      })}
      </Animated>
      {
       ///////////////////////////////////////////////////////////////////////////////////////
       ///////////////////////////////////////////////////////////////////////////////////////
       ///////////////////////////////////////////////////////////////////////////////////////
      }
      <div>
      </div> 
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
       <path fill="rgb(165, 124, 204)" fill-opacity="1" d="M0,96L120,117.3C240,139,480,181,720,192C960,203,1200,181,1320,170.7L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
      </svg>
    </div> 
  ); }
}
export default App;