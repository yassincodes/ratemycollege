import {useState, useEffect} from 'react'
import firebase from './firebase'
import './index.css';
import {Animated} from "react-animated-css";
import Select from 'react-select';
import Post from './Post'
import Modal from 'react-modal';
import { PassThrouthLoading } from 'react-loadingg';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width:"85vw",
    height:"70vh",
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const customStyles2 = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width:"85vw",
    height:"65vh",
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement(document.getElementById('root'));

function App() {
  

  const [frombesttoworst, setFrombesttoworst] = useState(true)


  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  const [modalIsOpen2, setIsOpen2] = useState(false);
  function openModal2() {
    setIsOpen2(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#dd1b4c';

  }

  function closeModal() {

    setIsOpen(false);
  }

  function closeModal2() {
     setIsOpen2(false)
  }


    //// this code will help change the language ////
  function handleChangeTheLang() {
  if (JSON.stringify(localStorage.getItem('lang')).slice(0, JSON.stringify(localStorage.getItem('lang')).length - 1).substring(1) == "false") {
    localStorage.setItem('lang',true) 
  } else {
    localStorage.setItem('lang', false)
  }
  window.location.reload();
 }



 /////////////////////////////////////////////////
  const [makedTheFuck, setMakedTheFuck] = useState(0)
  useEffect(() => {
    localStorage.getItem('data') ? setMakedTheFuck(localStorage.getItem('data').length) : setMakedTheFuck(0)
  }, [localStorage.getItem('data')])


  function goToTheTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
 };

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
  const [useraskedforchange, setUseraskedforchange] = useState('')
  let sum = 0;
  let sum2 = 0;
  let sum3 = 0;
  const [rateraterate, setRateraterate] = useState()
  let nameOfTheUni = JSON.stringify(localStorage.getItem('data')).slice(0, JSON.stringify(localStorage.getItem('data')).length - 1).substring(1)
  let nameOfTheUniArabic = JSON.stringify(localStorage.getItem('dataArabic')).slice(0, JSON.stringify(localStorage.getItem('dataArabic')).length - 1).substring(1)
  
  // !!!! // const [sumofnum, setSumofnum] = useState([])
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let newarray = []
  let newarray2 = []
  const date = new Date();
  const questions = [
    'ما ندمتش إلي اخترت الفاك لتقرا فيها ؟',
    JSON.stringify(localStorage.getItem('data')).slice(0, JSON.stringify(localStorage.getItem('data')).length - 1).substring(1) + 'نصيحتك لشخص ناوي يختار',
    ':)' +  ' أوصف الفاك تاعك بكلمة',
    'شنوا رايك في الإدارة ؟', 
    'شني أحسن حاجة في التجربة الجامعية ؟', 
    'تتصور إلي الشعبة تاعك عندها آفاق ؟', 
    'ما تحسش ساعات إلي الفاك دمرتلك حياتك ؟',
    ':)' +  'كيفاه كانت تجربتك أول نهار',
     JSON.stringify(localStorage.getItem('data')).slice(0, JSON.stringify(localStorage.getItem('data')).length - 1).substring(1) + 'شني رسالتك للناس لعرفتهم في',
    'شنوا رأيك في الأساتذة',
    'شنوا رأيك في الماكلة',
    'لقراية صعيبة ولاّ لا ؟',
    'شنوا رأيك في المبيت',
    JSON.stringify(localStorage.getItem('data')).slice(0, JSON.stringify(localStorage.getItem('data')).length - 1).substring(1) + 'ليش إخترت تقرا في',
    'أما خير أيامات الباك ولا الفاك ؟'
    ]
  const [questionnumber, setQuestionnumber] = useState(0)
  
  const [checkit, setCheckit] = useState(false)
  const [nextvis, setNextvis] = useState(false)

  const alltheval = []
  const alltheval2 = []
  const [navbareditedcss, setNavbareditedcss] = useState({background:"#A57CCC"})
  const [statseditedcss, setStatseditedcss] = useState({visibility:"hidden"})
  window.onscroll = function (e) {
 // Value of scroll Y in px
    if (window.scrollY >= 440) {
      setNavbareditedcss({background:"linear-gradient(234deg, rgba(131,58,180,1) 0%, rgba(16,187,179,1) 50%, rgba(221,27,76,1) 100%)"})
      setStatseditedcss({visibility:"visible"})
    } else {
      setNavbareditedcss({background:"#A57CCC"})
      setStatseditedcss({visibility:"hidden"})
    }
};
  const [isMobile, setIsMobile] = useState(true)
 
//choose the screen size 
const handleResize = () => {
  if (window.innerWidth < 1000) {
      setIsMobile(false)
  } else {
      setIsMobile(true)
  }
}
useEffect(() => {
  window.addEventListener("resize", handleResize)
})

  function handleNewQuestion() {
    if (questionnumber < 14) {
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
  //useEffect(() => {
    // Hook to handle the initial fetching of posts
    //firebase
      //.firestore()
      //.collection(nameOfTheUni + "rating")
      //.get()
      //.then((querySnapshot) => {
        //const data = querySnapshot.docs.map((doc) => ({
          //id: doc.id,
          //...doc.data(),
       // }));

        //setFucksratings(data);
      //});
  //}, [addToPosts]);

  const [fucks, setFucks] = useState([]);
 
  const [todoList, setTodoList] = useState();
  useEffect(() => {
    const todoRef = firebase.database().ref(nameOfTheUni);
    todoRef.on('value', (snapshot) => {
      const todos = snapshot.val();
      const todoList = [];
      for (let id in todos) {
        todoList.push({ id, ...todos[id] });
      }
      setTodoList(todoList.reverse());
    });
  }, [JSON.stringify(localStorage.getItem('data'))]);

 {
   /////////////////////////////////////////////
 }

  const [todoList2, setTodoList2] = useState();
  useEffect(() => {
    const todoRef = firebase.database().ref(nameOfTheUni + "rating");
    todoRef.on('value', (snapshot) => {
      const todos2 = snapshot.val();
      const todoList2 = [];
      for (let id in todos2) {
        todoList2.push({ id, ...todos2[id] });
      }
      setTodoList2(todoList2);
    });
  }, [JSON.stringify(localStorage.getItem('data'))]);
   
  {
    /////////////////////////////////////////////
  }


  const [todoList3, setTodoList3] = useState();
  useEffect(() => {
    const todoRef = firebase.database().ref("alltheratings");
    todoRef.on('value', (snapshot) => {
      const todos3 = snapshot.val();
      const todoList3 = [];
      for (let id in todos3) {
        todoList3.push({ id, ...todos3[id] });
      }
      setTodoList3(todoList3);
    });
  }, [JSON.stringify(localStorage.getItem('data'))]);
  
  {
    /////////////////////////////////////////////
  }

  const [currentName, setCurrentName] = useState('TBS')
  const [currentNameArabic, setCurrentNameArabic] = useState('TBS')
  const [todoList4, setTodoList4] = useState();

  useEffect(() => {
    const todoRef = firebase.database().ref(currentName);
    todoRef.on('value', (snapshot) => {
      const todos4 = snapshot.val();
      const todoList4 = [];
      for (let id in todos4) {
        todoList4.push({ id, ...todos4[id] });
      }
      setTodoList4(todoList4);
    });
  }, [currentName]);



  function thefuckingrating() {
    todoList2 && todoList2.map((todo) => todo.firstrating ? sum = sum + todo.firstrating : sum2 = sum2+ todo.rating)
    todoList2 && todoList2.map((todo) => todo.firstrating ? sum3 = sum3 + 1 : 1)
      return (sum + sum2) / sum3      
  }
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
    if (localStorage.length === 3 && JSON.stringify(localStorage.getItem('data2')).slice(0, JSON.stringify(localStorage.getItem('data2')).length - 1).substring(1) === "true") {
      return {display: 'none'}
    } 
    //// yassin
    //// bug fixing : if local storage === 2 there will be a problem
    if (localStorage.length === 0) {
      return {display: 'none'}
    }
    if (localStorage.length === 1) {
      return {display: 'none'}
    }
    if (localStorage.length === 2) {
      return {display: 'none'}
    }
    if (localStorage.length === 3) {
      return {display: 'none'}
    }
    if (localStorage.length === 4) {
      return {display: 'none'}
    }
    if (localStorage.length === 5) {
      return {display: 'none'}
    }
    if (localStorage.length === 6) {
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
      label: "FSHST",
      labelArabic: "العلوم الإنسانية والإجتماعية بتونس"
    },
    {
      value: 2,
      label: "ESSECT",
      labelArabic: "المدرسة العليا للعلوم الإقتصادية والتجارة بتونس"
    },
    {
      value: 3,
      label: "ENS",
      labelArabic: "دار المعلمين العليا بتونس"
    },
    {
      value: 4,
      label: "ESSTT",
      labelArabic: "المدرسة العليا للعلوم والتقنيات بتونس"
    },
    {
      value: 5,
      label: "IPEAT",
      labelArabic: "المعهد التحضيري للدراسات الهندسية بتونس"
    },
    {
      value: 6,
      label: "IPELSHT",
      labelArabic: "المعهد التحضيري للدراسات الأدبية والعلوم الإنسانية بتونس"
    },
    {
      value: 7,
      label: "ISGT",
      labelArabic: "المعهد العالي للتصرف بتونس"
    },
    {
      value: 8,
      label: "ISEFC",
      labelArabic: "المعهد العالي للتربية والتكوين المستمر"
    },
    {
      value:9,
      label: "ISBAT",
      labelArabic: "المعهد العالي للفنون الجميلة بتونس"
    },
    {
      value:10,
      label: "ISM Tunis",
      labelArabic: "المعهد العالي للموسيقى بتونس"
    },
    {
      value:11,
      label: "ISAD Tunis",
      labelArabic: "المعهد العالي للفن المسرحي بتونس"
    },
    {
      value:12,
      label: "ISMPT",
      labelArabic: "المعهد العالي لمهن التراث بتونس"
    },
    {
      value:13,
      label: "ISEAHT",
      labelArabic: "المعهد العالي للدراسات التطبيقية في الإنسانيات بتونس"
    },
    {
      value:14,
      label: "ISAJC",
      labelArabic: "المعهد العالي للتنشيط الشبابي والثقافي"
    },
    {
      value:15,
      label: "ISEAHZ",
      labelArabic: "المعهد العالي للدراسات التطبيقية في الإنسانيات بزغوان"
    },
    {
      value:16,
      label: "TBS",
      labelArabic: "بكالوريوس أعمال"
    },
    {
      value:17,
      label: "INP",
      labelArabic: "المعهد الوطني للتراث"
    },
    {
      value:18,
      label: "ISTH",
      labelArabic: "المعهد العالي لأصول الدين بتونس"
    },
    {
      value:19,
      label: "ISCI",
      labelArabic: "المعهد الأعلى للحضارة الإسلاميّة"
    },
    {
      value:20,
      label: "CEIK",
      labelArabic: "مركز الدّراسات الإسلاميّة بالقيروان"
    },
    {
      value:21,
      label: "FDSPT",
      labelArabic: "كلية الحقوق والعلوم السياسية بتونس"
    },
    {
      value:22,
      label: "FSEGT",
      labelArabic: "كلية العلوم الاقتصادية والتصرف بتونس"
    },
    {
      value:23,
      label: "FST",
      labelArabic: "كلية العلوم بتونس"
    },
    {
      value:24,
      label: "FMT",
      labelArabic: "كلية الطب بتونس"
    },
    {
      value:25,
      label: "ENIT",
      labelArabic: "المدرسة الوطنية للمهندسين بتونس"
    },
      value:26,
      label: "IPEIEM",
      labelArabic: "المعهد التحضيري للدراسات الهندسية بالمنار"
    },
    {
      value:27,
      label: "ISSBAT",
      labelArabic: "المعهد العالي للعلوم البيولوجية التطبيقية بتونس"
    },
    {
      value:28,
      label: "ISI",
      labelArabic: "المعهد العالي للإعلامية بالمنار"
    },
    {
      value:29,
      label: "ISSHT",
      labelArabic: "المعهد العالي للعلوم الإنسانية بتونس"
    },
    {
      value:30,
      label: "ISTMT",
      labelArabic: "المعهد العالي للتكنولوجيات الطبية بتونس"
    },
    {
      value:31,
      label: "ESSTST",
      labelArabic: "المدرسة العليا لعلوم و تقنيات الصحة بتونس"
    },
    {
      value:32,
      label: "ISSIT",
      labelArabic: "المدرسة العليا لعلوم و تقنيات الصحة بتونس"
    },
    {
      value:33,
      label: "Institut Pasteur",
      labelArabic: "معهد باستور بتونس"
    },
    {
      value:34,
      label: "IRESA",
      labelArabic: "معهد البحوث البيطرية بتونس"
    },
    {
      value:35,
      label: "IBLV",
      labelArabic: "معهد بورڨيبة للغات الحية"
    },
    {
      value:36,
      label: "FSJPST",
      labelArabic: "كلية العلوم القانونية والسياسية والاجتماعية بتونس"
    },
    {
      value:37,
      label: "FSEGN",
      labelArabic: "كلية العلوم الاقتصادية والتصرف بنابل"
    },
    {
      value:38,
      label: "FSB",
      labelArabic: "كلية العلوم ببنزرت"
    },
    {
      value:39,
      label: "ENAU",
      labelArabic: "المدرسة الوطنية للهندسة المعمارية والتعمير"
    },
    {
      value:40,
      label: "EPT",
      labelArabic: "المـدرسة التونسيـة للتقنيـات"
    },
    {
      value:41,
      label: "enicarthage",
      labelArabic: "المدرسة الوطنية للمهندسين بقرطاج"
    },
    {
      value:42,
      label: "ESSAI",
      labelArabic: "المدرسة العليا للإحصاء وتحليل المعلومات بتونس"
    },
    {
      value:43,
      label: "ESAC",
      labelArabic: "المدرسة العليا للسمعي البصري والسنيما بقمرت"
    },
    {
      value:44,
      label: "IPEIB",
      labelArabic: "المعهد التحضيري للدراسات الهندسية ببنزرت"
    },
    {
      value:45,
      label: "IHEC",
      labelArabic: "معهد الدراسات التجارية العليا بقرطاج"
    },
    {
      value:46,
      label: "INSAT",
      labelArabic: "المعهد الوطني للعلوم التطبيقية والتكنولوجيا"
    },
    {
      value:47,
      label: "ISSATM",
      labelArabic: "المعهد العالي للعلوم التطبيقية والتكنولوجيا بماطر"
    },
    {
      value:48,
      label: "IPEIN",
      labelArabic: "المعهد التحضيري للدراسات الهندسية بنابل"
    },
    {
      value:49,
      label: "IPEST",
      labelArabic: "المعهد التحضيري للدراسات العلمية والتقنية"
    },
    {
      value:50,
      label: "ISBAN",
      labelArabic: "المعهد العالي للفنون الجميلة بنابل"
    },
    {
      value:51,
      label: "ETEUB",
      labelArabic: "المعهد العالي لتكنولوجيات البيئة والعمران والبنيان"
    },
    {
      value:52,
      label: "ISLT",
      labelArabic: "المعهد العالي للغات بتونس"
    },
    {
      value:53,
      label: "ISLAIN",
      labelArabic: "المعهد العالي للغات بنابل"
    },
    {
      value:54,
      label: "ISSTE",
      labelArabic: "المعهد العالي للعلوم وتكنولوجيات البيئة ببرج السدرية"
    },
    {
      value:55,
      label: "ISCCB",
      labelArabic: "المعهد العالي للتصرف ببنزرت"
    },
    {
      value:56,
      label: "ISEBGSOUKRA",
      labelArabic: "المعهد العالي لتكنولوجيا المعلومات والاتصالات ببرج السدرية"
    },
    {
      value:57,
      label: "supcom",
      labelArabic: "المدرسة العليا للمواصلات بتونس"
    },
    {
      value:58,
      label: "ESAMOG",
      labelArabic: "المدرسة العليا للفلاحة بالمقرن"
    },
    {
      value:59,
      label: "ESAMAT",
      labelArabic: "المدرسة العليا للفلاحة بماطر"
    },
    {
      value:60,
      label: "ESIAT",
      labelArabic: "المدرسة العليا للصناعات الغذائية بتونس"
    },
    {
      value:61,
      label: "ISPAB",
      labelArabic: "المعهد العالي للصيد البحري وتربية الأحياء المائية ببنزرت"
    },
    {
      value:62,
      label: "INTES",
      labelArabic: "المعهد الوطني للشغل والدراسات الاجتماعية"
    },
    {
      value:63,
      label: "ISCENT",
      labelArabic: "المعهد العالي لإطارات الطفولة"
    },
    {
      value:64,
      label: "INAT",
      labelArabic: "المعهد الوطني للعلوم الفلاحية بتونس"
    },
    {
      value:65,
      label: "IHET",
      labelArabic: "المعهد العالي للدراسات السياحية بسيدي الظريف"
    },
    {
      value:66,
      label: "INRGREF",
      labelArabic: "المعهد الوطني للبحوث في الهندسة الريفية والمياه والغابات"
    },
    {
      value:67,
      label: "INRAT",
      labelArabic: "المعهد الوطني للبحوث الزراعية بتونس"
    },
    {
      value:68,
      label: "FSGF",
      labelArabic: "كلية العلوم بقفصة"
    },
    {
      value:69,
      label: "ISEAHGF",
      labelArabic: "المعهد العالي للدراسات التطبيقية في الإنسانيات بقفصة"
    },
    {
      value:70,
      label: "ISAEG",
      labelArabic: "المعهد العالي لإدارة المؤسسات بقفصة"
    },
    {
      value:71,
      label: "ISSATGF",
      labelArabic: "المعهد العالي للعلوم التطبيقية والتكنولوجيا بقفصة"
    },
    {
      value:72,
      label: "ISAMGF",
      labelArabic: "المعهد العالي للفنون والحرف بقفصة"
    },
    {
      value:73,
      label: "ISSTEG",
      labelArabic: "المعهد العالي لعلوم وتكنولوجيا الطاقة بقفصة"
    },
    {
      value:74,
      label: "ISEAHTZ",
      labelArabic: "المعهد العالي للدراسات التكنولوجية بتوزر"
    },
    {
      value:75,
      label: "IPEIG",
      labelArabic: "المعهد العالي للعلوم التطبيقية والتكنولوجيا بقفصة"
    },
    {
      value:76,
      label: "ISSATGF",
      labelArabic: "المعهد العالي للرياضة والتربية البدنية بقفصة"
    },
    {
      value:78,
      label: "FDSEPS",
      labelArabic: "كلية الحقوق والعلوم الاقتصادية والسياسية بسوسة"
    },
    {
      value:79,
      label: "FMS",
      labelArabic: "كلية الطب بسوسة"
    },
    {
      value:80,
      label: "FLSHsousse",
      labelArabic: "كلية الآداب والعلوم الإنسانية بسوسة"
    },
    {
      value:81,
      label: "ISFFS",
      labelArabic: "المعهد العالي للمالية والجباية بسوسة"
    },
    {
      value:82,
      label: "INFCOM",
      labelArabic: "المعهد العالي للإعلامية وتقنيات الاتصال بحمام سوسة"
    },
    {
      value:83,
      label: "ISTLS",
      labelArabic: "المعهد العالي للنقل وخدمات الاتصال بسوسة"
    },
    {
      value:84,
      label: "ISBAS",
      labelArabic: "المعهد العالي للفنون الجميلة بسوسة"
    },
    {
      value:85,
      label: "ESSTSSOUSSE",
      labelArabic: "المدرسة العليا لعلوم وتقنيات الصحة بسوسة"
    },
    {
      value:86,
      label: "ISGS",
      labelArabic: "المعهد العالي للتصرف بسوسة"
    },
    {
      value:87,
      label: "IHECSO",
      labelArabic: "معهد الدراسات العليا التجارية بسوسة"
    },
    {
      value:88,
      label: "ISMSO",
      labelArabic: "المعهد العالي للموسيقى بسوسة"
    },
    {
      value:89,
      label: "ISSATS",
      labelArabic: "المعهد العالي للعلوم التطبيقية والتكنولوجيا بسوسة"
    },
    {
      value:90,
      label: "ENISO",
      labelArabic: "المدرسة الوطنية للمهندسين بسوسة"
    },
    {
      value:91,
      label: "ESSTHS",
      labelArabic: "المدرسة العليا للعلوم والتكنولوجيا بحمام سوسة"
    },
    {
      value:92,
      label: "ISACM",
      labelArabic: "المعهد العالي للعلوم الفلاحية بشط مريم"
    },
    {
      value:93,
      label: "ISSIS",
      labelArabic: "المعهد العالي لعلوم التمريض بسوسة"
    },
    {
      value:94,
      label: "FSEGS",
      labelArabic: "كلية العلوم الاقتصادية والتصرف بصفاقس"
    },
    {
      value:95,
      label: "FMSF",
      labelArabic: "كلية الطب بصفاقس"
    },
    {
      value:96,
      label: "FDSF",
      labelArabic: "كلية الحقوق بصفاقس"
    },
    {
      value:97,
      label: "ISAMS",
      labelArabic: "المعهد العالي للفنون والحرف بصفاقس"
    },
    {
      value:98,
      label: "ISECS",
      labelArabic: "المعهد العالي للإلكترونيك والاتصال بصفاقس"
    },
    {
      value:99,
      label: "ISGIS",
      labelArabic: "المعهد العالي للتصرف الصناعي بصفاقس"
    },
    {
      value:100,
      label: "IHECSF",
      labelArabic: "المدرسة العليا للتجارة بصفاقس"
    },
    {
      value:101,
      label: "FSS",
      labelArabic: "كلية العلوم بصفاقس"
    },
    {
      value:102,
      label: "ENIS",
      labelArabic: "المدرسة الوطنية للمهندسين بصفاقس"
    },
    {
      value:103,
      label: "ESCS",
      labelArabic: "المدرسة الوطنية للمهندسين بصفاقس"
    },
    {
      value:104,
      label: "ISAAS",
      labelArabic: "المعهد العالي لإدارة الأعمال بصفاقس"
    },
    {
      value:105,
      label: "ISIMSF",
      labelArabic: "المعهد العالي للإعلامية والملتيميديا بصفاقس"
    },
    {
      value:106,
      label: "ISMSF",
      labelArabic: "المعهد العالي للموسيقى بصفاقس"
    },
    {
      value:107,
      label: "IPEIS",
      labelArabic: "المعهد التحضيري للدراسات الهندسية بصفاقس"
    },
    {
      value:108,
      label: "ISSEP",
      labelArabic: "المعهد العالي للرياضة والتربية البدنية بصفاقس"
    },
    {
      value:109,
      label: "ISBS",
      labelArabic: "المعهد العالي للبيوتكنولوجيا بصفاقس"
    },
    {
      value:110,
      label: "FLSHS",
      labelArabic: "كلية الآداب والعلوم الإنسانية بصفاقس"
    },
    {
      value:111,
      label: "ISOSFAX",
      labelArabic: "معهد الزيتونة بصفاقس"
    },
    { 
      value:112,
      label: "ESSTSSFAX",
      labelArabic: "المدرسة العليا لعلوم وتقنيات الصحة بصفاقس"
    },
    {
      value:113,
      label: "ISSISFAX",
      labelArabic: "المعهد العالي لعلوم التمريض بصفاقس"
    },
    {
      value:114,
      label: "FSJEGJ",
      labelArabic: "كلية العلوم القانونية والاقتصادية والتصرف بجندوبة"
    },
    {
      value:115,
      label: "ISSHJ",
      labelArabic: "المعهد العالي للعلوم الإنسانية بجندوبة "
    },
    {
      value:122,
      label: "ISTMK",
      labelArabic: "المعهد العالي للموسيقى والمسرح بالكاف"
    },
    {
      value:123,
      label: "ISEAHK",
      labelArabic: "المعهد العالي للدراسات التطبيقية في الإنسانيات بالكاف"
    },
    {
      value:124,
      label: "ISLAIB",
      labelArabic: "المعهد العالي للغات التطبيقية والإعلامية بباجة"
    },
    {
      value:125,
      label: "ISAMSL",
      labelArabic: "المعهد العالي للفنون والحرف بسليانة"
    },
    {
      value:126,
      label: "ISIKEF",
      labelArabic: "المعهد العالي للإعلامية بالكاف"
    },
    {
      value:127,
      label: "ISBB",
      labelArabic: "المعهد العالي للبيوتكنولوجيا بباجة"
    },
    {
      value:128,
      label: "ESAKEF",
      labelArabic: "المدرسة العليا للفلاحة بالكاف"
    },
    {
      value:129,
      label: "ISSEPKEF",
      labelArabic: "المعهد الأعلى للرياضة والتربية البدنية بالكاف"
    },
    {
      value:130,
      label: "ISSIKF",
      labelArabic: "المعهد العالي لعلوم التمريض بالكاف"
    },
    {
      value:131,
      label: "ISIER",
      labelArabic: "المدرسة العليا للمهندسين بمجاز الباب"
    },
    { 
      value:132,
      label: "ISPTABARKA",
      labelArabic: "معهد المراعى والغابات بطبرقة"
    },
    {
      value:133,
      label: "FLM",
      labelArabic: "كلية الآداب والفنون والإنسانيات بمنوبة"
    },
    {
      value:134,
      label: "ESSTED",
      labelArabic: "المدرسة العليا لعلوم وتكنولوجيات التصميم"
    },
    {
      value:135,
      label: "ESCT",
      labelArabic: "المدرسة العليا للتجارة بتونس"
    },
    {
      value:136,
      label: "ESCEM",
      labelArabic: "المدرسة العليا للتجارة الإلكترونية بمنوبة"
    },
    {
      value:137,
      label: "ENSI",
      labelArabic: "المدرسة الوطنية لعلوم الإعلامية"
    },
    {
      value:138,
      label: "ISA2M",
      labelArabic: "المعهد العالي لفنون الملتيميديا بمنوبة"
    },
    {
      value:139,
      label: "ISCAE",
      labelArabic: "المعهد العالي للمحاسبة وإدارة المؤسسات بتونس"
    },
    {
      value:140,
      label: "ISBST",
      labelArabic: "المعهد العالي للبيوتكنولوجيا بسيدي ثابت بسيدي ثابت"
    },
    {
      value:141,
      label: "ISD",
      labelArabic: "المعهد العالي للتوثيق بتونس"
    },
    {
      value:142,
      label: "ISPI",
      labelArabic: "معهد الصحافة وعلوم الإخبار"
    },
    {
      value:143,
      label: "IRESA",
      labelArabic: "المدرسة الوطنية للطب البيطري بسيدي ثابت"
    },
    {
      value:144,
      label: "ISSEP-KS",
      labelArabic: "المعهد العالي للرياضة والتربية البدنية بقصر سعيد"
    },
    {
      value:145,
      label: "IPH",
      labelArabic: "معهد النهوض بالمعاقين قصر السعيد"
    },
    {
      value:146,
      label: "ISHMN",
      labelArabic: "المعهد العالي لتاريخ الحركة الوطنية"
    },
    {
      value:147,
      label: "FLSHK",
      labelArabic: "كلية الآداب والعلوم الإنسانية بالقيروان"
    },
    {
      value:148,
      label: "ISAMK",
      labelArabic: "المعهد العالي للفنون والحرف بالقيروان"
    },
    {
      value:149,
      label: "ISIGK",
      labelArabic: "المعهد العالي للإعلامية والتصرف بالقيروان"
    },
    {
      value:150,
      label: "ISEJPK",
      labelArabic: "المعهد العالي للدراسات القانونية والسياسية بالقيروان"
    },
    {
      value:151,
      label: "ISSATKR",
      labelArabic: "المعهد العالي للعلوم التطبيقية والتكنولوجيا بالقيروان"
    },
    {
      value:152,
      label: "ISAMKAS",
      labelArabic: "المعهد العالي للفنون والحرف بالقصرين"
    },
    {
      value:153,
      label: "ISMAIK",
      labelArabic: "المعهد العالي للرياضيات التطبيقية والإعلامية بالقيروان"
    },
    {
      value:154,
      label: "ISEAHS",
      labelArabic: "المعهد العالي للدراسات التطبيقية في الإنسانيات بسبيطلة"
    },
    {
      value:155,
      label: "ISAMSB",
      labelArabic: "المعهد العالي للفنون والحرف بسيدي بوزيد"
    },
    {
      value:156,
      label: "ISSATKAS",
      labelArabic: "المعهد العالي للعلوم التطبيقية والتكنولوجيا بالقصرين"
    },
    {
      value:157,
      label: "FSM",
      labelArabic: "كلية العلوم بالمنستير"
    },
    {
      value:158,
      label: "FMM",
      labelArabic: "كلية الطب بالمنستير"
    },
    {
      value:160,
      label: "ISIMM",
      labelArabic: "المعهد العالي للإعلامية والرياضيات بالمنستير"
    },
    {
      value:161,
      label: "FMDM",
      labelArabic: "كلية طب الأسنان بالمنستير"
    },
    {
      value:161,
      label: "FPHM",
      labelArabic: "كلية الصيدلة بالمنستير"
    },
    {
      value:161,
      label: "FSEGMA",
      labelArabic: "كلية العلوم الاقتصادية والتصرف بالمهدية"
    },
    {
      value:161,
      label: "ENIM",
      labelArabic: "المدرسة الوطنية للمهندسين بالمنستير"
    },
    {
      value:161,
      label: "ISBM",
      labelArabic: "المعهد العالي للبيوتكنولوجيا بالمنستير"
    },
    {
      value:161,
      label: "EPEIM",
      labelArabic: "المعهد التحضيري للدراسات الهندسية بالمنستير"
    },
    {
      value:161,
      label: "ESSTSM",
      labelArabic: "المدرسة العليا لعلوم وتطبيقات الصحة بالمنستير"
    },
    {
      value:161,
      label: "ISEAHM",
      labelArabic: "المعهد العالي للدراسات التطبيقية في الإنسانيات بالمهدية"
    },
    {
      value:161,
      label: "ISIMA",
      labelArabic: "المعهد العالي للإعلامية بالمهدية"
    },
    {
      value:161,
      label: "ISAMMH",
      labelArabic: "المعهد العالي للفنون والحرف بالمهدية"
    },
    {
      value:161,
      label: "ISSATMH",
      labelArabic: "المعهد العالي للعلوم التطبيقية والتكنولوجيا بالمهدية"
    },
    {
      value:161,
      label: "ISMMM",
      labelArabic: "المعهد العالي لمهن الموضة بالمنستير"
    },
    {
      value:161,
      label: "ISLAATM",
      labelArabic: "المعهد العالي للغات المطبقة في الأعمال والسياحة بالمكنين"
    },
    {
      value:161,
      label: "",
      labelArabic: ""
    },
    {
      value:161,
      label: "",
      labelArabic: ""
    },
    {
      value:161,
      label: "",
      labelArabic: ""
    },
    {
      value:161,
      label: "",
      labelArabic: ""
    },
    {
      value:161,
      label: "",
      labelArabic: ""
    },
    {
      value:161,
      label: "",
      labelArabic: ""
    },
    {
      value:161,
      label: "",
      labelArabic: ""
    },
    {
      value:161,
      label: "",
      labelArabic: ""
    },
    {
      value:161,
      label: "",
      labelArabic: ""
    },
    {
      value:161,
      label: "",
      labelArabic: ""
    },
    {
      value:161,
      label: "",
      labelArabic: ""
    },
    {
      value:161,
      label: "",
      labelArabic: ""
    },
    {
      value:161,
      label: "",
      labelArabic: ""
    },
    {
      value:161,
      label: "",
      labelArabic: ""
    },
    {
      value:161,
      label: "",
      labelArabic: ""
    },
    {
      value:161,
      label: "",
      labelArabic: ""
    },
    {
      value:161,
      label: "",
      labelArabic: ""
    }
  ];
  const [selectedOption, setSelectedOption] = useState(0);
  // handle onChange event of the dropdown
  const handleChange = e => {
    setSelectedOption(e);
  }
  function handleMakeTheFuck() {
    if (selectedOption && checkit) {
      localStorage.setItem('data',selectedOption.label)
      localStorage.setItem('dataArabic', selectedOption.labelArabic)
      setLocalData(JSON.stringify(localStorage.getItem('data')))
      // firebase.database().ref("aaaaNumberofusers").push({
      // newUser: "new user :)"
      // })
    }
  }
  function handleNext() {
    if (selectedOption) {
      setNextvis(true)
      setTrueorfalse(false)
    }
  }
  function handleBack() {
    setNextvis(false)
    setTrueorfalse(true)
    setCheckit(false)
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
  function handleDisplayToFixTheFuckingBug() {
    if (trueorfalse == false) {
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
  const [trueorfalse00 , setTrueorfalse00] = useState(false)
  function handleTrueorfalse() {
    if (nextvis === false) {
      setTrueorfalse(!trueorfalse)
      setTrueorfalse00(!trueorfalse00)
    }
    if (trueorfalseThree === true) {
      setTrueorfalseThree(false)
    }
    
  }
  function handleTrueorfalseTwo() {
    setTrueorfalseTwo(!trueorfalseTwo)
  }
  function handleTrueorfalseThree() {
    setTrueorfalseThree(!trueorfalseThree)
  }
  if (bold === true && useraskedforchange > 0 ) {
    localStorage.setItem('data5',JSON.stringify(localStorage.getItem('data4')).slice(0, JSON.stringify(localStorage.getItem('data4')).length - 1).substring(1))
  }
  function databaseVSbold() {
    localStorage.setItem('data4',slider)
    function therating() {
      return JSON.stringify(localStorage.getItem('data4')).slice(0, JSON.stringify(localStorage.getItem('data4')).length - 1).substring(1)*1/10
    }
    if (bold === true) {
      // setDidyouclickshare(true)
      localStorage.setItem('data3',true) 
      localStorage.setItem('data2',true)
      setBold(false)
    }
    if (useraskedforchange === '') {
      firebase.database().ref(nameOfTheUni + 'rating').push({
        firstrating: therating()
      })
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
      firebase.database().ref(nameOfTheUni + 'rating').push({
        rating: therating() - JSON.stringify(localStorage.getItem('data5')).slice(0, JSON.stringify(localStorage.getItem('data5')).length - 1).substring(1)*1/10
      })
      }
      // bug to be fixed : the problem is that you shoul verify that the first thefuckingrating() is a number not a NaN
    }
    if (thefuckingrating() === (sum + sum2)/sum3)
    firebase.database().ref("alltheratings/" + nameOfTheUni).set({
      name:nameOfTheUni,
      nameArabic:nameOfTheUniArabic,
      allrating: thefuckingrating()
    })

  function databaseVSbold2() {
      setSaythefuck('')
      setName('')
      setRoastthefuck('')
      setAnswer('')
    firebase.database().ref(nameOfTheUni).push({
      saythefuck: saythefuck,
      question:questions[questionnumber],
      answer:answer,
      name: name,
      roastthefuck: roastthefuck,
      upVotesCount: 0,
      downVotesCount: 0,
      funnyvote:0,
      createdAt: date.toUTCString(),
      updatedAt: date.toUTCString()
      })} 
  function databaseVSbold3() {
      setSaythefuck('')
      setName('')
      setRoastthefuck('')
      setAnswer('')
      firebase.database().ref(nameOfTheUni).push({
       saythefuck: saythefuck,
       question:questions[questionnumber],
       answer:answer,
       name: name,
       roastthefuck: roastthefuck,
       upVotesCount: 0,
       downVotesCount: 0,
       funnyvote:0,
       createdAt: date.toUTCString(),
       updatedAt: date.toUTCString()
      })}
  function databaseVSbold4() {
        setSaythefuck('')
        setName('')
        setRoastthefuck('')
        setAnswer('')
        firebase.database().ref(nameOfTheUni).push({
          saythefuck: saythefuck,
          question:questions[questionnumber],
          answer:answer,
          name: name,
          roastthefuck: roastthefuck,
          upVotesCount: 0,
          downVotesCount: 0,
          funnyvote:0,
          createdAt: date.toUTCString(),
          updatedAt: date.toUTCString()
      })
  }

  if (localData) {
    return ( 
      <div className="App">
       <div className="header_container" style={navbareditedcss}>

       {
       (JSON.stringify(localStorage.getItem('lang')).slice(0, JSON.stringify(localStorage.getItem('lang')).length - 1).substring(1) == "false") ?
       <header className="header">
        <div style={statseditedcss} onClick={goToTheTop} className="rate_the_fuck_plus_arabic">+</div>
        <div className="rate_the_fuck_arabic" style={{cursor:"pointer"}} onClick={(e) => window.location.reload()}>قــيّــم الــفــاك</div>
      </header>
        :
        <header className="header">
        <div className="rate_the_fuck" style={{cursor:"pointer"}} onClick={(e) => window.location.reload()}>RateTheFuck</div>
        <div style={statseditedcss} onClick={goToTheTop} className="rate_the_fuck_plus">+</div>
       </header>
        }
       </div>
       <div className="the_body_inside_the_body">
       <div className="second_header">

       {
        (JSON.stringify(localStorage.getItem('lang')).slice(0, JSON.stringify(localStorage.getItem('lang')).length - 1).substring(1) == "false") ?
        <div className="jellyfish_center">
        <div style={{marginTop:"auto", marginBottom:"auto"}}>
          {thefuckingrating() ? Math.round(thefuckingrating() * 10) / 10 : <PassThrouthLoading color="#dd1b4c" style={{position:"initial"}} />}
        </div>
        <div className="globe">
         {nameOfTheUniArabic}
        </div>
       </div>
         :
         <div className="jellyfish_center">
         <div>
          {nameOfTheUni}
         </div>
         <div style={{marginTop:"auto", marginBottom:"auto"}}>
           {thefuckingrating() ? Math.round(thefuckingrating() * 10) / 10 : <PassThrouthLoading color="#dd1b4c" style={{ position: "initial"}}/>}
         </div>
        </div>
        }
        <div>
        </div>
        {
         //  <div className="jellyfish_plus" onClick={handletrueinputorfalse}>
         //  +
         // </div>
        }
       </div>
       
      {(JSON.stringify(localStorage.getItem('lang')).slice(0, JSON.stringify(localStorage.getItem('lang')).length - 1).substring(1) == "false") 
     
     
     
     
     ?




    <div>
      {
        //////////////////////////////////////////////////////////////////////
      }
      <Animated style={vis0()} isVisible={!bold} animationIn="fadeInDown" animationOut="zoomOut" animationInDuration={1000} animationOutDuration={1000}>
      <div className="input_container_container" >
       <div className="input_container"> 
        <div className="input_container_share">
        <div className="input_container_share_rate">
           <div className="the_rating">  <span>{JSON.stringify(localStorage.getItem('data4')).slice(0, JSON.stringify(localStorage.getItem('data4')).length - 1).substring(1)/10}</span>/10 <span className="globe">{nameOfTheUni}تقييمك للـ</span></div>
           <div className="share_button" className="input_container_button" className="the_slider" style={{marginTop:"9vh"}} >
             <a href="#" className="share_the_fucking_rating_arabic" style={{marginTop:"10px"}} onClick={handleChangetherating}><span className="change_the_rating">تغيير التقييم</span></a>
           </div>
          </div>
        </div>
       </div>
      </div>
      </Animated>
      <Animated style={vis()} isVisible={bold} animationIn="fadeInDown" animationOut="zoomOut" animationInDuration={1000} animationOutDuration={1000}>
      <div className="input_container_container" >
       <div className="input_container"> 
        <div className="input_container_share">
        <div className="input_container_share_rate">
           <div className="the_rating"><span>{returnRatingEmoji()}  </span>{slider/10}<span className="devten">/10</span></div>
           <div className="the_slider">
            <input
            className="slider"
            type="range"
            step={10}
            value={slider}
            style={{direction:"rtl"}}
            onChange={handleSlider}
            />
           </div>
          </div>
        </div>
       </div>
      </div>
      </Animated>
      <Animated style={vis2()} isVisible={bold2} animationIn="fadeInDown" animationOut="zoomOut" animationInDuration={1000} animationOutDuration={1000}>
      <div className="input_container_container" >
       <div className="input_container"> 
        <div className="input_container_share">
        <div className="input_container_share_rate">
           <textarea 
             className="the_name_input_arabic"
             value={saythefuck}
             placeholder="أحكي على الفاك ..."
             style={{width:"auto"}}
             rows="16"
             onChange={handlesaythefuck}
           />
          </div>
        </div>
       </div>
      </div>
      </Animated>
      <Animated style={vis3()} isVisible={bold3} animationIn="fadeInDown" animationOut="zoomOut" animationInDuration={1000} animationOutDuration={1000}>
      <div className="input_container_container" >
       <div className="input_container"> 
        <div className="input_container_share">
        <div className="input_container_share">
         <div className="input_container_share_talk">
           <div className="the_name">
             <div className="the_name_is_perfect">
             </div>
             <div className="the_name_emoji_shoe">
                 👞
             </div>
             <div className="the_name_emoji_flower">
                 🌹
             </div>
             <div>
               <input 
                className="the_name_input_arabic"
                placeholder="إسم واحد "
                style={{marginLeft:"20px"}}
                value={name}
                onChange={handlename}
              />
             </div>
           </div> 
              <textarea 
                className="the_name_input_arabic"
                value={roastthefuck}
                placeholder="رايك فيه :)"
                style={{width:"auto"}}
                rows="6"
                onChange={handleroastthefuck}
              />
          </div>
        </div>
        </div>
       </div>
      </div>
      </Animated>
      <Animated style={vis4()} isVisible={bold4} animationIn="fadeInDown" animationOut="zoomOut" animationInDuration={1000} animationOutDuration={1000}>
      <div className="input_container_container" >
       <div className="input_container"> 
        <div className="input_container_share">
        <div className="input_container_share">
         <div className="input_container_share_talk">
         <div className="the_q_container">
             <img 
                alt="Qries" 
                src="https://image.flaticon.com/icons/png/512/3580/3580275.png"
                width="50"
                height="50"
                className="the_image_pic"
                onClick={handleNewQuestion}
             />
             
            <div className="the_q_arabic">
              {questions[questionnumber]}
            </div>
           </div>
              <textarea 
               className="the_name_input_arabic"
               value={answer}
               placeholder="جوابك :)"
               style={{width:"auto"}}
               rows="5"
               onChange={handleanswer}
              />
          </div>
        </div>
        </div>
       </div>
      </div>
      </Animated>
     









    <div className="input_container_container_arabic" >
      <div className="input_container_buttons_arabe" style={{marginTop:"-1.2vh"}}> 
        <Animated style={handleJellyFishButton()} animationIn="zoomIn" animationOut="zoomOut" animationInDuration={400} animationOutDuration={1000}>
        <div className="input_container_button_arabe" onClick={handleButton} style={{fontWeight: handleBold()}}>قيّم الفاك⭐</div>
        </Animated>
        <Animated style={handleJellyFishButton()} animationIn="zoomIn" animationOut="zoomOut" animationInDuration={600} animationOutDuration={1000}>
        <div className="input_container_button_arabe" onClick={handleButton2} style={{fontWeight: handleBold2()}}>إكتب حاجة✍️</div>
        </Animated>
        <Animated style={handleJellyFishButton()} animationIn="zoomIn" animationOut="zoomOut" animationInDuration={800} animationOutDuration={1000}>
        <div className="input_container_button_arabe" onClick={handleButton3} style={{fontWeight: handleBold3()}}>أحكي على واحد😀</div>
        </Animated>
        <Animated style={handleJellyFishButton()} animationIn="zoomIn" animationOut="zoomOut" animationInDuration={1000} animationOutDuration={1000}>
        <div className="input_container_button_arabe" onClick={handleButton4} style={{fontWeight: handleBold4(), marginBottom:"20px"}}>جاوب على سؤال💬</div>
        </Animated>
        <Animated className="share_button_big" style={handleJellyFishButton()} animationIn="zoomIn" animationOut="zoomOut" animationInDuration={1200} animationOutDuration={1000}>
        <div className="share_button" className="input_container_button" style={bold ? {display: 'initial'} : {display:"none"}}>
        <a href="#" className="share_the_fuck_arabic" onClick={databaseVSbold}><span>مشاركة</span></a>
        </div>
        <div className="share_button" className="input_container_button" style={bold2 ? {display: 'initial'} : {display:"none"}}>
        <a href="#" className="share_the_fuck_arabic" onClick={databaseVSbold2}><span>مشاركة</span></a>
        </div>
        <div className="share_button" className="input_container_button" style={bold3 ? {display: 'initial'} : {display:"none"}}>
        <a href="#" className="share_the_fuck_arabic" onClick={databaseVSbold3}><span>مشاركة</span></a>
        </div>
        <div className="share_button" className="input_container_button" style={bold4 ? {display: 'initial'} : {display:"none"}}>
        <a href="#" className="share_the_fuck_arabic" onClick={databaseVSbold4}><span>مشاركة</span></a>
        </div>
        </Animated>
      </div>
    </div>








      {
        //////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////
      }
    </div>





          :





         <div>
           {
         //////////////////////////////////////////////////////////////////////
       }
      <Animated style={vis0()} isVisible={!bold} animationIn="fadeInDown" animationOut="zoomOut" animationInDuration={1000} animationOutDuration={1000}>
      <div className="input_container_container" >
       <div className="input_container"> 
        <div className="input_container_share">
        <div className="input_container_share_rate">
           <div className="the_rating">you rated {nameOfTheUni} <span>{JSON.stringify(localStorage.getItem('data4')).slice(0, JSON.stringify(localStorage.getItem('data4')).length - 1).substring(1)/10}</span>/10</div>
           <div className="share_button" className="input_container_button" className="the_slider" >
             <a href="#" className="share_the_fuck" onClick={handleChangetherating} style={{marginTop:"10px"}} ><span className="change_the_rating">change the rating</span></a>
           </div>
          </div>
        </div>
       </div>
      </div>
      </Animated>
      <Animated style={vis()} isVisible={bold} animationIn="fadeInDown" animationOut="zoomOut" animationInDuration={1000} animationOutDuration={1000}>
      <div className="input_container_container" >
       <div className="input_container"> 
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
      <Animated style={vis2()} isVisible={bold2} animationIn="fadeInDown" animationOut="zoomOut" animationInDuration={1000} animationOutDuration={1000}>
      <div className="input_container_container" >
       <div className="input_container"> 
        <div className="input_container_share">
        <div className="input_container_share_rate">
           <textarea 
             value={saythefuck}
             placeholder="talk about the fuck!!"
             rows="16"
             onChange={handlesaythefuck}
           />
          </div>
        </div>
       </div>
      </div>
      </Animated>
      <Animated style={vis3()} isVisible={bold3} animationIn="fadeInDown" animationOut="zoomOut" animationInDuration={1000} animationOutDuration={1000}>
      <div className="input_container_container" >
       <div className="input_container"> 
        <div className="input_container_share">
        <div className="input_container_share">
         <div className="input_container_share_talk">
           <div className="the_name">
             <div>
               <input 
                className="the_name_input"
                placeholder="someone"
                style={{marginRight:"20px"}}
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
                placeholder="share your opinion about him :)"
                rows="6"
                onChange={handleroastthefuck}
              />
          </div>
        </div>
        </div>
       </div>
      </div>
      </Animated>
      <Animated style={vis4()} isVisible={bold4} animationIn="fadeInDown" animationOut="zoomOut" animationInDuration={1000} animationOutDuration={1000}>
      <div className="input_container_container" >
       <div className="input_container"> 
        <div className="input_container_share">
        <div className="input_container_share">
         <div className="input_container_share_talk">
           <div className="the_q_container">
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
            <div className="the_q_arabic">
              {questions[questionnumber]}
            </div>
           </div>
              <textarea 
               value={answer}
               placeholder="your answer :)"
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
        <Animated className="share_button_big" style={handleJellyFishButton()} animationIn="zoomIn" animationOut="zoomOut" animationInDuration={1200} animationOutDuration={1000}>
        <div className="share_button" className="input_container_button" style={bold ? {display: 'initial'} : {display:"none"}}>
        <a href="#" className="share_the_fuck" onClick={databaseVSbold}><span>SHARE</span></a>
        </div>
        <div className="share_button" className="input_container_button" style={bold2 ? {display: 'initial'} : {display:"none"}}>
        <a href="#" className="share_the_fuck" onClick={databaseVSbold2}><span>SHARE</span></a>
        </div>
        <div className="share_button" className="input_container_button" style={bold3 ? {display: 'initial'} : {display:"none"}}>
        <a href="#" className="share_the_fuck" onClick={databaseVSbold3}><span>SHARE</span></a>
        </div>
        <div className="share_button" className="input_container_button" style={bold4 ? {display: 'initial'} : {display:"none"}}>
        <a href="#" className="share_the_fuck" onClick={databaseVSbold4}><span>SHARE</span></a>
        </div>
        </Animated>
       </div>
      </div>
      {
        //////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////
      }
         </div>
       } 
      
      <div className="home_page">
       {todoList
         ? todoList.map((todo, index) => <Post fuck={todo} q={questionnumber} key={index} />)
         : <PassThrouthLoading style={{position:"initial", marginTop:"2vh"}} />}
       </div>
       </div>
       </div>
    )
  } else {
  return (
    <div className="App2">
      <div className="header_container" style={{background:"#A57CCC"}}>

      {
       (JSON.stringify(localStorage.getItem('lang')).slice(0, JSON.stringify(localStorage.getItem('lang')).length - 1).substring(1) == "false") ?
       <header className="header">
         <div></div>
         <div className="rate_the_fuck_arabic">قــيّــم الــفــاك</div>
       </header>
         :
         <header className="header">
         <div className="rate_the_fuck">RateTheFuck</div>
         <div></div>
        </header>
       }
      </div>
      
      {
       ///////////////////////////////////////////////////////////////////////////////////////
       ///////////////////////////////////////////////////////////////////////////////////////
       ///////////////////////////////////////////////////////////////////////////////////////
      }
      <div className="App2_container">
      <Animated animationIn="zoomIn" animationOut="zoomOut" animationInDuration={600} animationOutDuration={600} >
      <div className="change_the_lang">
        <p className="globe" onClick={handleChangeTheLang}>
        <span>🌐</span>
       {(JSON.stringify(localStorage.getItem('lang')).slice(0, JSON.stringify(localStorage.getItem('lang')).length - 1).substring(1) == "false") ? "change the language" :"تغيير اللغة"}
        </p>
      </div>
       </Animated>
      <Animated animationIn="zoomIn" animationOut="zoomOut" animationInDuration={800} animationOutDuration={800} >
      <div className="make_an_account_arabic" onClick={(makedTheFuck === 0) ? handleTrueorfalse : handleTheCharts}>
      {
        // (yassin) the bug is here 
        // localStorage.length === 1 || localStorage.length === 0
      } {
        (JSON.stringify(localStorage.getItem('lang')).slice(0, JSON.stringify(localStorage.getItem('lang')).length - 1).substring(1) == "false") ? 
        <div className="globe">
        {(makedTheFuck === 0 ) && "قيم جامعتك" }
        {(makedTheFuck > 0) && " " + JSON.stringify(localStorage.getItem('data')).slice(0, JSON.stringify(localStorage.getItem('data')).length - 1).substring(1) + "أخبار ال"
         }
        </div> : <div>
       {(makedTheFuck === 0 ) && "rate your university" }
        {(makedTheFuck > 0) && " " + JSON.stringify(localStorage.getItem('data')).slice(0, JSON.stringify(localStorage.getItem('data')).length - 1).substring(1) + " " + "updates" 
         }
        </div>
      }
         </div>
         </Animated>

         {
          (JSON.stringify(localStorage.getItem('lang')).slice(0, JSON.stringify(localStorage.getItem('lang')).length - 1).substring(1) == "false") ?
              <>

   <Animated style={handleDisplay()} animationIn="fadeInDown" animationOut="zoomOut" animationInDuration={1000} animationOutDuration={1000} isVisible={!cond}>
      <div className="signup_container_container" >
       <div className="signup_container"> 
        <div className="signup_container_header">
         <span className="globe">أول حاجة لازمنا نعرفوا وين تقرا</span> 
        </div>
        <div>
        <Select
          placeholder="أختار جامعتك"
          value={selectedOption} // set selected value
          options={data} // set list of the data
          onChange={handleChange} // assign onChange function
          className="select_option_arabic"
          theme={theme => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: 'hotpink',
              primary: 'black',
            },
          })}
        />
        </div>
        <div><a className="make_the_fuck_next_arabic" onClick={handleNext}>التالي</a></div>
       </div>
      </div>
      </Animated>
      {
        ///// the next is coming ... 
      }
      <Animated isVisible={nextvis} style={!nextvis ? {display:"none"} : {visibility:"visible"}} animationIn="fadeInDown" animationOut="zoomOut" animationInDuration={1000} animationOutDuration={1000}>
      <div className="signup_container_container" >
       <div className="signup_container_areyousure_arabic"> 
        <div className="signup_container_header" style={{fontSize:"22.5px"}}>
          <div>متأكد إلي تقرا في </div>
          <div>😅؟ {selectedOption.label}</div>
          <div>(ما تنجمش تبدل إسم الجامعة مرة أخرى)</div>
          <hr style={{backgroundColor:"red"}}/>
          <div style={{display:"flex", justifyContent:"space-around"}}>
          <label className="checkbox path">
               <input
                  type="checkbox"
                  checked={checkit}
                  onClick={() => setCheckit(!checkit)}
                 />
                 <svg viewBox="0 0 21 21">
                    <path d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186"></path>
                 </svg>
             </label>
           أعمل كليك على المربع التالي للتأكيد
          </div>
        </div>
        <div className="backandmake_container">
         <div style={{marginTop:"15px", marginBottom:"15px"}}>
          <a className="make_the_fuck" onClick={handleMakeTheFuck}>التالي</a>
         </div>
         <div style={{marginTop:"15px", marginBottom:"15px"}}>
         <a className="make_the_fuck" onClick={handleBack} style={{marginLeft:"10px", marginBottom:"10px"}}>العودة</a>
         </div>
        </div>
       </div>
      </div>
      </Animated>
    

              </>
               :
              <>
                  <Animated style={handleDisplay()} animationIn="fadeInDown" animationOut="zoomOut" animationInDuration={1000} animationOutDuration={1000} isVisible={!cond}>
      <div className="signup_container_container" >
       <div className="signup_container"> 
        <div className="signup_container_header">
          <div><span>&#8594;</span>first we must know where you study 😅</div>
        </div>
        <div>
        <Select
          placeholder="select your university"
          value={selectedOption} // set selected value
          options={data} // set list of the data
          onChange={handleChange} // assign onChange function
          className="select_option"
          theme={theme => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: 'hotpink',
              primary: 'black',
            },
          })}
        />
        </div>
        <div><a className="make_the_fuck" onClick={handleNext}>Next</a></div>
       </div>
      </div>
      </Animated>
      {
        ///// the next is coming ... 
      }
      <Animated isVisible={nextvis} style={!nextvis ? {display:"none"} : {visibility:"visible"}} animationIn="fadeInDown" animationOut="zoomOut" animationInDuration={1000} animationOutDuration={1000}>
      <div className="signup_container_container" >
       <div className="signup_container"> 
        <div className="signup_container_header" style={{fontSize:"22.5px"}} >
          <div>are you sure that you study in {selectedOption.label} ?</div>
          <div>(you can't change that after)</div>
          <hr />
          <div style={{display:"flex", justifyContent:"space-around"}}>
           <label>
           click on this box if you're sure
            </label>
            <label className="checkbox path">
               <input
                  type="checkbox"
                  checked={checkit}
                  onClick={() => setCheckit(!checkit)}
                 />
                 <svg viewBox="0 0 21 21">
                    <path d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186"></path>
                 </svg>
             </label>
          </div>
        </div>
        <div className="backandmake_container">
         <div style={{marginTop:"15px", marginBottom:"15px"}}>
         <a className="make_the_fuck" onClick={handleBack} style={{marginRight:"10px", marginBottom:"5px",fontSize:"20px"}}>back</a>
         </div>
         <div style={{marginTop:"15px", marginBottom:"15px"}}>
          <a className="make_the_fuck" onClick={handleMakeTheFuck} style={{fontSize:"20px"}} >Next</a>
         </div>
        </div>
       </div>
      </div>
      </Animated>
    

              </>
             }




      {///////////////////////////////////////////////////////////////////////////////////////
       ///////////////////////////////////////////////////////////////////////////////////////
       ///////////////////////////////////////////////////////////////////////////////////////
      }
      <Animated isVisible={!trueorfalse00} animationIn="zoomIn" animationOut="zoomOut" animationInDuration={1000} animationOutDuration={1000} >
      <div className="choose_your_uni" onClick={handleClickThree} onClick={handleTrueorfalseThree}>
        
        { (JSON.stringify(localStorage.getItem('lang')).slice(0, JSON.stringify(localStorage.getItem('lang')).length - 1).substring(1) == "false") ?
         <p className="click_to_show_the_uni">
          <span  className="globe">تقييمات الجامعات التونسية</span>
       </p> : <p className="click_to_show_the_uni">
         <span>all universities ratings</span>
        </p> }
      </div>
       </Animated>

          {todoList3
        &&
        todoList3.map((todo, key) => {
          alltheval.push({rating:todo.allrating, name:todo.nameArabic, nameArabic:todo.name})
          //   
    })}

       {
      (JSON.stringify(localStorage.getItem('lang')).slice(0, JSON.stringify(localStorage.getItem('lang')).length - 1).substring(1) == "false") 
      
      ?
      
      <Animated style={handleDisplayThree()} >
         {todoList3 && 
           <Animated  animationIn="zoomIn" animationOut="zoomOut" animationInDuration={1000} animationOutDuration={1000}>
            <div>
               <div className="choose_worst_best_arabic">
                <div className="worst_best" onClick={openModal2}>
                
                 {frombesttoworst ? <div>▼ من الأفضل للأسوأ</div> : <div>▼ من الأسوأ للأفضل</div> }   
                </div>
                <div>طريقة الترتيب</div> 
              </div>
              <Modal
                  isOpen={modalIsOpen2}
                  onAfterOpen={afterOpenModal}
                  onRequestClose={closeModal2}
                  style={customStyles2}
                  contentLabel="Example Modal"
                  >
              <div>
                <div className="the_university_info_container">
                   <h2 onClick={closeModal2} className="the_university_info_button" >
                     &#10006;
                   </h2>
                   <h2 ref={(_subtitle) => (subtitle = _subtitle)} className="the_university_info_name_arabic">طريقة الترتيب</h2>
                </div>
         
                <div className="choose_the_way">

                 {frombesttoworst ? <div><strong><u>من الأفضل للأسوأ</u></strong></div> : <span onClick={closeModal2}><div onClick={(e) => setFrombesttoworst(true)}>من الأفضل للأسوأ</div></span> }
                  
                  <br />
                  
                  {!frombesttoworst ? <div><strong><u>من الأسوأ للأفضل</u></strong></div> : <span onClick={closeModal2}><div onClick={(e) => setFrombesttoworst(false)}>من الأسوأ للأفضل</div></span> }
                  
                  
                </div>
              </div>
              </Modal>
            </div>
            </Animated>
            }



          {todoList3 ?
          
           alltheval.sort((a, b) => {
             return frombesttoworst === true ? b.rating - a.rating : a.rating - b.rating
           }
           ).map((todo, key) => {
             
            return <div>
             <Animated  animationIn="zoomIn" animationOut="zoomOut" animationInDuration={key*50 + 1050} animationOutDuration={key*50 + 1050}>
             <div onClick={e => setCurrentNameArabic(todo.name)}>
             <div onClick={e => setCurrentName(todo.nameArabic)}>
             <div className="uni_arabic" onClick={openModal}>
            <div>{Math.round(todo.rating * 10) / 10}</div>
            <div  style={{direction:"rtl"}}>{todo.name}</div>
            </div>
            </div>
            </div>
            </Animated>
            <div>
                <Modal
                  isOpen={modalIsOpen}
                  onAfterOpen={afterOpenModal}
                  onRequestClose={closeModal}
                  style={customStyles}
                  contentLabel="Example Modal"
                  >
               <div className="the_university_info_container">
                   <h2 onClick={closeModal} className="the_university_info_button" >
                     &#10006;
                   </h2>
                   <h2 ref={(_subtitle) => (subtitle = _subtitle)} className="the_university_info_name_arabic">{currentNameArabic}</h2>
                </div>
                     {todoList4
                        ?  todoList4.map((todo, key) => {
                          return      <div className="globe" style={{textAlign: "center"}} >
                        <div className="post">
                          {todo.saythefuck === "" || !todo.saythefuck ? "" : <div>
                          <p className="post_text">{todo.saythefuck}</p>
                      
                          </div>}
                         </div>
                         <div className="post">
                          {todo.name === "" || todo.roastthefuck === "" || !todo.name || !todo.roastthefuck ? "" :  <div className="post">
                          <p className="the_name_post">{todo.name}</p>
                          <p>{todo.roastthefuck}</p>
                          
                          </div>}
                         </div>
                         <div className="post">
                          {todo.aswer === "" || !todo.answer ? "" :  <div className="post">
                          <p className="the_question_post">{todo.question}</p>
                          <p>{todo.answer}</p>
                          
                          </div>}
                         </div>
                        </div>
                      
                        })
                       : <div className="uni_arabic">
                        <PassThrouthLoading style={{position:"initial"}} />
                       </div>}
                   </Modal>
              </div>
          </div>
         })
           :
           
           <div className="uni_arabic">
          <PassThrouthLoading style={{position:"initial"}} />
          </div>
          }
     
     </Animated>




        :
<Animated style={handleDisplayThree()} >
         {todoList3 && 
           <Animated  animationIn="zoomIn" animationOut="zoomOut" animationInDuration={1000} animationOutDuration={1000}>
            <div>
               <div className="choose_worst_best">
               <div>sorting</div> 
                <div className="worst_best" onClick={openModal2}>
                
                 {frombesttoworst ? <div>best first ▼</div> : <div>worst first ▼</div> }   
                </div>
                
              </div>
              <Modal
                  isOpen={modalIsOpen2}
                  onAfterOpen={afterOpenModal}
                  onRequestClose={closeModal2}
                  style={customStyles2}
                  contentLabel="Example Modal"
                  >
              <div>
                <div className="the_university_info_container"> 
                   <h2 ref={(_subtitle) => (subtitle = _subtitle)} className="the_university_info_name_arabic">sorting</h2>
                   <h2 onClick={closeModal2} className="the_university_info_button" >
                     &#10006;
                   </h2>
                </div>
         
                <div className="choose_the_way">

                 {frombesttoworst ? <div><strong><u>best first</u></strong></div> : <span onClick={closeModal2}><div onClick={(e) => setFrombesttoworst(true)}>best first</div></span> }
                  
                  <br />
                  
                  {!frombesttoworst ? <div><strong><u>worst first</u></strong></div> : <span onClick={closeModal2}><div onClick={(e) => setFrombesttoworst(false)}>worst first</div></span> }
                  
                  
                </div>
              </div>
              </Modal>
            </div>
            </Animated>
            }



          {todoList3 ?
          
           alltheval.sort((a, b) => {
             return frombesttoworst === true ? b.rating - a.rating : a.rating - b.rating
           }
           ).map((todo, key) => {
             
            return <div>
             <Animated  animationIn="zoomIn" animationOut="zoomOut" animationInDuration={key*50 + 1050} animationOutDuration={key*50 + 1050}>
             <div onClick={e => setCurrentNameArabic(todo.name)}>
             <div onClick={e => setCurrentName(todo.nameArabic)}>
             <div className="uni" onClick={openModal}>
               <div>{todo.nameArabic}</div>
               <div>{Math.round(todo.rating * 10) / 10}</div>
            </div>
            </div>
            </div>
            </Animated>
            <div>
                <Modal
                  isOpen={modalIsOpen}
                  onAfterOpen={afterOpenModal}
                  onRequestClose={closeModal}
                  style={customStyles}
                  contentLabel="Example Modal"
                  >
               <div className="the_university_info_container">
                   <h2 ref={(_subtitle) => (subtitle = _subtitle)} className="the_university_info_name_arabic">{currentName}</h2>
                   <h2 onClick={closeModal} className="the_university_info_button" >
                     &#10006;
                   </h2>
                </div>
                     {todoList4
                        ?  todoList4.map((todo, key) => {
                          return      <div className="globe" style={{textAlign: "center"}} >
                        <div className="post">
                          {todo.saythefuck === "" || !todo.saythefuck ? "" : <div>
                          <p className="post_text">{todo.saythefuck}</p>
                      
                          </div>}
                         </div>
                         <div className="post">
                          {todo.name === "" || todo.roastthefuck === "" || !todo.name || !todo.roastthefuck ? "" :  <div className="post">
                          <p className="the_name_post">{todo.name}</p>
                          <p>{todo.roastthefuck}</p>
                          
                          </div>}
                         </div>
                         <div className="post">
                          {todo.aswer === "" || !todo.answer ? "" :  <div className="post">
                          <p className="the_question_post">{todo.question}</p>
                          <p>{todo.answer}</p>
                          
                          </div>}
                         </div>
                        </div>
                      
                        })
                       : <div className="uni_arabic">
                        <PassThrouthLoading style={{position:"initial"}} />
                       </div>}
                   </Modal>
              </div>
          </div>
         })
           :
           
           <div className="uni_arabic">
          <PassThrouthLoading style={{position:"initial"}} />
          </div>
          }
     
     </Animated>




       }






     







      
      </div>
      <div style={{visibility:"hidden"}}>
        this is for fixing
        this is for fixing
      </div>

  {
    // first make text in the bottom using position .. then when user
    // clicked on second buttom the style will be normal
    //   <div className="website_sponsors">
     //   <div>
       //  website sponsor
      //  </div>
     //   <div>
     //    tn programmers
      //  </div
      //  </div>  
  }
 
     {
    //  <Animated animationIn="bounceInLeft" animationOut="bounceOutLeft" animationInDuration={0} animationOutDuration={isMobile === true ? 0 : 3500}  isVisible={isMobile && (window.innerWidth > 1000)}>
    //  <svg className="the_svg_pic" id="a80abe34-445f-4e13-ba21-3f71a0ed139d" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="876.16142" height="638.23334" viewBox="0 0 876.16142 638.23334"><path id="b1d22f69-f76d-408f-9148-ee919735497c" data-name="Path 438" d="M800.53973,700.72018a33.99885,33.99885,0,0,1-32.83078-5.783c-11.499-9.65212-15.105-25.54838-18.0376-40.27123l-8.67673-43.54924L759.16,623.62461c13.06432,8.995,26.42205,18.279,35.46681,31.30761s12.99072,30.81509,5.72566,44.91321" transform="translate(-161.91929 -130.88333)" fill="#a57ccc"/><path id="ade901b1-ea7b-4353-b3ad-0db3208b227f" data-name="Path 439" d="M797.73482,756.47635c2.28636-16.65737,4.63877-33.53015,3.03115-50.36612-1.42466-14.95233-5.98655-29.55387-15.27384-41.53134a69.08843,69.08843,0,0,0-17.72583-16.063c-1.77214-1.11831-3.40358,1.68985-1.639,2.80386a65.68133,65.68133,0,0,1,25.98143,31.34659c5.65638,14.38614,6.56464,30.06918,5.59034,45.35168-.58892,9.2418-1.84036,18.423-3.0972,27.59338a1.68231,1.68231,0,0,0,1.13453,1.99729,1.63361,1.63361,0,0,0,1.99733-1.13449Z" transform="translate(-161.91929 -130.88333)" fill="#f2f2f2"/><path id="b15deb1b-9611-49d7-aeea-2d3d35262ea7" data-name="Path 442" d="M781.27775,729.748a25.02764,25.02764,0,0,1-21.8071,11.25864c-11.04212-.524-20.24388-8.22742-28.52654-15.54336L706.44036,703.8283l16.21675-.77617c11.66243-.55859,23.62579-1.08256,34.73392,2.518s21.35241,12.2524,23.3833,23.75031" transform="translate(-161.91929 -130.88333)" fill="#e6e6e6"/><path id="e75b09f7-43e2-4148-8f0b-911a9c6242e1" data-name="Path 443" d="M804.1977,766.05162c-11.00747-19.47636-23.77409-41.12214-46.588-48.04077a51.98687,51.98687,0,0,0-19.59434-2.02332c-2.08068.17972-1.561,3.38624.51531,3.20764a48.29738,48.29738,0,0,1,31.27081,8.273c8.81743,6.00172,15.683,14.3461,21.49314,23.19383,3.55945,5.4204,6.7476,11.07027,9.93575,16.71254C802.2491,769.17806,805.22829,767.87573,804.1977,766.05162Z" transform="translate(-161.91929 -130.88333)" fill="#f2f2f2"/><circle cx="395.01969" cy="348.99318" r="59.75984" fill="#fff"/><path d="M556.939,540.6362a60.75977,60.75977,0,1,1,60.75977-60.75976A60.82858,60.82858,0,0,1,556.939,540.6362Zm0-119.51953a58.75977,58.75977,0,1,0,58.75977,58.75977A58.82629,58.82629,0,0,0,556.939,421.11667Z" transform="translate(-161.91929 -130.88333)" fill="#3f3d56"/><path d="M546.85452,525.26706l-.39917-.17139c-.22876-.09814-5.58448-2.51757-3.66016-12.52246l.03467-.11035.71313-1.59082a34.589,34.589,0,0,0,2.99854-14.92041c-4.30469-.09961-26.36987-.72558-28.95264-3.124a4.57633,4.57633,0,0,1-1.45971-3.08106l-.1316-2.104a4.728,4.728,0,0,1,4.71875-5.023h1.27051l-.89941-1.02832a4.50938,4.50938,0,0,1-1.117-2.97217v-1.74072a4.51473,4.51473,0,0,1,2.32178-3.94531l.72217-.40137-.41528-.41553a4.51331,4.51331,0,0,1,2.384-7.63232l4.72388-.85938a7.21385,7.21385,0,0,1,6.37719-6.74853l13.50293-1.55713a80.34412,80.34412,0,0,1,21.17115-.93652l2.06787.18261,20.89233-2.4917v27.9292l-19.32031,2.65186-16.27075,18.85937a118.458,118.458,0,0,1-10.6919,22.79541Z" transform="translate(-161.91929 -130.88333)" fill="#ffb7b7"/><polygon points="383.165 392.158 382.252 391.749 385.392 384.729 389.071 385.863 388.777 386.818 385.944 385.946 383.165 392.158" opacity="0.2"/><path d="M507.90212,457.97952l-6.39624-88.74346,1.21656-29.61939-24.93067,5.54724,9.18311,116.28259a12.994,12.994,0,1,0,20.92724-3.467Z" transform="translate(-161.91929 -130.88333)" fill="#ffb7b7"/><path d="M385.30764,376.35019l-1.5852-29.73352-16-13-9.26929,27.53357-51.84253,69.14337a12.99334,12.99334,0,1,0,15.04883,12.82306c0-.17493-.01929-.34491-.02612-.51813Z" transform="translate(-161.91929 -130.88333)" fill="#ffb7b7"/><path d="M388.17654,366.83249l-39.05249-41.68066,28.99731-60.6709a10.22181,10.22181,0,0,1,5.97119-5.32324,10.06507,10.06507,0,0,1,7.85645.56445l.28516.14453Z" transform="translate(-161.91929 -130.88333)" fill="#a57ccc"/><path d="M475.32546,360.26413l-6.937-40.668.02637-.10254,16.3999-64.46972,1.53662-.17871a17.90373,17.90373,0,0,1,19.4961,14.17382l15.4541,76.94141Z" transform="translate(-161.91929 -130.88333)" fill="#a57ccc"/><path d="M484.15945,237.61667h-83v-37.5a41.5,41.5,0,0,1,83,0Z" transform="translate(-161.91929 -130.88333)" fill="#2f2e41"/><polygon points="428.274 573.838 414.227 585.661 361.942 537.106 382.674 519.657 428.274 573.838" fill="#ffb7b7"/><path d="M605.23646,715.32232l-45.293,38.12077-.48219-.57287a23.04355,23.04355,0,0,1,2.79066-32.46678l.00112-.00094,27.6635-23.28278Z" transform="translate(-161.91929 -130.88333)" fill="#2f2e41"/><polygon points="217.724 619.763 199.365 619.762 190.63 548.945 217.728 548.946 217.724 619.763" fill="#ffb7b7"/><path d="M384.32605,768.44309l-59.20006-.0022v-.74878a23.04355,23.04355,0,0,1,23.04231-23.04195h.00146l36.15739.00146Z" transform="translate(-161.91929 -130.88333)" fill="#2f2e41"/><path d="M299.12332,732.87155l9.13891-104.60644a671.998,671.998,0,0,1,32.49536-155.62793l38.26953-113.749,3.34229-26.49023c-10.18311-21.11621.60254-37.19824,1.84473-38.93359L382.886,267.14987c-.02588-.51757-.063-1.01757-.09814-1.5-.38037-5.16992-.10352-8.14941,9.98535-9.26562l83.70947-2.58106c10.5918-.04394,17.01367,1.7168,19.62256,5.47168,3.00146,4.32129.62012,10.583-1.68262,16.63868-.23926.62988-.47949,1.25976-.71338,1.88964l-33.15673,89.02832c16.04541,31.01856,12.95263,78.458,12.91943,78.93457l1.17578,14.03028L596.36209,658.70358l-71.96534,67.19825-.32031-.52149L408.15017,536.8696l-.99609,190-.46973.02637Z" transform="translate(-161.91929 -130.88333)" fill="#2f2e41"/><circle cx="441.70308" cy="204.82213" r="33.9208" transform="translate(-111.80552 363.26825) rotate(-61.33682)" fill="#ffb7b7"/><circle cx="296.15999" cy="22.58017" r="22.58017" fill="#2f2e41"/><path d="M488.15945,206.61667h-83v-.5a41.5,41.5,0,0,1,83,0Z" transform="translate(-161.91929 -130.88333)" fill="#2f2e41"/><circle cx="111.01969" cy="264.99318" r="59.75984" fill="#fff"/><path d="M272.939,456.6362a60.75977,60.75977,0,1,1,60.75989-60.75976A60.82876,60.82876,0,0,1,272.939,456.6362Zm0-119.51953a58.75977,58.75977,0,1,0,58.75989,58.75977A58.82632,58.82632,0,0,0,272.939,337.11667Z" transform="translate(-161.91929 -130.88333)" fill="#3f3d56"/><path d="M236.15945,423.67966V395.751l19.32019-2.65186,16.27087-18.85986a118.47234,118.47234,0,0,1,10.6919-22.79541l.58117-.958.39917.17139c.22889.09814,5.58423,2.51758,3.66016,12.52246l-.03467.11035-.71325,1.59131a34.58292,34.58292,0,0,0-2.99842,14.91992c4.30457.09961,26.36975.72559,28.95252,3.12451a4.57484,4.57484,0,0,1,1.45971,3.08106l.1316,2.104a4.728,4.728,0,0,1-4.71875,5.02295h-1.27027l.89929,1.02783a4.513,4.513,0,0,1,1.11683,2.97217v1.74072a4.51667,4.51667,0,0,1-2.32154,3.9458l-.72229.40137.41529.415a4.5139,4.5139,0,0,1-2.38428,7.63281l-4.72388.85889a7.21363,7.21363,0,0,1-6.3772,6.74853l-13.50293,1.55713a80.28245,80.28245,0,0,1-21.17114.93653l-2.068-.18262Z" transform="translate(-161.91929 -130.88333)" fill="#ffb7b7"/><polygon points="120.647 229.257 116.968 228.124 117.262 227.168 120.095 228.041 122.875 221.829 123.788 222.237 120.647 229.257" opacity="0.2"/><path d="M1037.08071,769.11667H162.91929a1,1,0,1,1,0-2h874.16142a1,1,0,0,1,0,2Z" transform="translate(-161.91929 -130.88333)" fill="#cbcbcb"/></svg>
    //  </Animation>    
   }
     {
       ///////////////////////////////////////////////////////////////////////////////////////
       ///////////////////////////////////////////////////////////////////////////////////////
       ///////////////////////////////////////////////////////////////////////////////////////
      }
      <div>
      </div> 
    
    </div> 
  ); 
}
}
export default App;
