import {
  ChakraProvider,
  theme,
  Button,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { useMemo, useState, useEffect, useRef } from 'react';
import './App.css';
import PageOne from './Pages/Start';
import SelectCharacter from './Pages/SelectChar/SelectChar';
import Home from './Pages/Home/Home';
import EatPage from './Pages/Home/Eat/EatPage';
import Eat from './Pages/Home/Eat/Eat2';
import Cafe from './Pages/Cafe/Cafe';
import { AllContext } from './components/Value/CoinContext';
import MiniGamestwo from './Pages/Home/MiniGames/ButtonApp';
import Class from './Pages/Universitas/classroom';
import ToStudy from './Pages/Universitas/UnivHall';
import Library from './Pages/Universitas/library';
import Cart from './Pages/Mall/shoppingCart/appShop';
import Uni from './Pages/Universitas/UnivHall';
import Pause from './components/buttons/PauseBtn';
import Phone from './components/phone/phoneMain';
import Toast from './components/templateAndFunction/toast';
import Mall from './Pages/Mall/Mall';
import Masak from './Pages/Home/Masak/masak';
import GameoverScreen from './Pages/GameOver/gameover';
import StatusGroup from './components/statusBar/StatusBarGroup';
import Currency from './components/buttons/Currency';
import { CreateChar } from './components/character/CharacterCard';
import { StatFunction } from './components/templateAndFunction/statCoinFunction';


/*
1. nama
2. jurusan
3. api
4. character
5. currency
6. status dll
7. clock
8. inventory (opsional)
9. baju
10. cuaca
*/
function DragEat() {
  return <></>;
}

function App() {
  //const buat set mulai
  const [start, setStart] = useState(false);
  //DND
  const [isdrag, setDrag] = useState(false);
  //show pause and phone
  const [showPause, setShowPause] = useState(true);
  const handeShowPause = x => {
    setShowPause(x);
  };

  //coin const
  const [coin, setCoin] = useState(1000);
  const prevCoin = useRef();
  useEffect(() => {
    prevCoin.current = coin;
  }, [coin]);

  //player choice
  const [jurusan, setJurusan] = useState('');
  const [character, setCharacter] = useState(1);
  const [nama, setNama] = useState('');

  //time const
  const [Day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setCount] = useState(0);
  const [countday, setCountday] = useState(0);
  const [realtime, setRealtime] = useState(0);

  //Status bar const
  const [makan, setMakan] = useState(50);
  const [tidur, setTidur] = useState(50);
  const [main, setMain] = useState(50);
  const [belajar, setBelajar] = useState(70);

  //Weather const
  const [weather, setWeather] = useState('');

  // background const
  const [bghome, setBgHome] = useState('BgPagi');
  const [bgCafe, setBgCafe] = useState('BgPagi');
  const [bgMall, setBgMall] = useState('BgPagi');
  const [bgUniv, setBgUniv] = useState('BgPagi');

  //const buat makanan
  const [foodIndex, setFoodIndex] = useState(0);
  const [burger, setBurger] = useState(10);
  const [telur, setTelur] = useState(10);
  const [ikangoreng, setIkangoreng] = useState(10);
  const [salad, setSalad] = useState(10);
  const [steak, setSteak] = useState(10);
  const [ayampanggang, setAyampanggang] = useState(10);

  //const buat bahan makanan
  const [tomato, setTomato] = useState(5);
  const [bread, setBread] = useState(2);
  const [beef, setBeef] = useState(1);
  const [salt, setSalt] = useState(3);
  const [cabbage, setCabbage] = useState(5);
  const [chicken, setChicken] = useState(5);
  const [eggtray, setEggtray] = useState(5);

  //const gameplay
  //gameover
  const [gameOver, setGameover] = useState(false);
  useEffect(
    () => {
      if (makan <= 0) {
        setGameover(true);
      }
      if (tidur <= 0) {
        setGameover(true);
      }
      if (main <= 0) {
        setGameover(true);
      }
    },
    [makan],
    [tidur],
    [main]
  );
  //
  //buat jam
  useInterval(() => {
    //pengurangan stat
    /*
    setMakan(makan - 5);
    setTidur(tidur - 5);
    setMain(main - 5);
    */
    if (start == true) {
      setCount(minute + 1);
      setRealtime(realtime + 1);
      {StatFunction(makan, setMakan, 0, 0.5)};
      {StatFunction(tidur, setTidur, 0, 0.5)};
      {StatFunction(main, setMain, 0, 0.5)};
      if (minute >= 59) {
        setHour(hour + 1);
        setCount(0);
      }
      if (hour >= 23 && minute === 59) {
        setDay(Day + 1);
        setCountday(1);
        setHour(0);
      }

      //ini buat duid harian
      if (countday == 1) {
        setCoin(coin + 2000);
        setCountday(0);
      }
    }
  }, 1000);
  function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest function.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  const [value, setValue] = useState(0);
  const test = useMemo(() => ({ value, setValue }), [value, setValue]);

  // handle switch page
  // https://medium.com/nerd-for-tech/a-case-to-switch-using-switch-statements-in-react-e83e01154f60
  const [game, setGame] = useState('selectchar');
  const handleClick = gameState => {
    setGame(gameState);
    console.log(game);
  };

  //this for hide the pause dan phone button
  useEffect(() => {
    if (
      game === 'start' ||
      game === 'selectchar' ||
      game === 'eat' ||
      game === 'cook' ||
      game === 'cart'
    ) {
      setShowPause(false);
    } else {
      setShowPause(true);
    }
  }, [game]);

  return (
    <ChakraProvider theme={theme}>
      <AllContext.Provider
        value={{
          start,
          setStart,
          coin,
          setCoin,
          prevCoin,
          nama,
          setNama,
          jurusan,
          setJurusan,
          character,
          setCharacter,
          Day,
          setDay,
          hour,
          setHour,
          minute,
          setCount,
          makan,
          setMakan,
          tidur,
          setTidur,
          main,
          setMain,
          belajar,
          setBelajar,
          weather,
          setWeather,
          game,
          setGame,
          bghome,
          setBgHome,
          burger,
          setBurger,
          telur,
          setTelur,
          ikangoreng,
          setIkangoreng,
          steak,
          setSteak,
          ayampanggang,
          setAyampanggang,
          tomato,
          setTomato,
          beef,
          setBeef,
          cabbage,
          setCabbage,
          chicken,
          setChicken,
          eggtray,
          setEggtray,
          bread,
          setBread,
          salt,
          setSalt,
          salad,
          setSalad,
          foodIndex,
          setFoodIndex,
          gameOver,
          setGameover,
        }}
      >
        {gameOver ? <GameoverScreen /> : ''}
        {showPause ? (
          <>
            <Pause />
            <Phone />
            <StatusGroup />
            <Currency />
            <Toast />
          </>
        ) : (
          ''
        )}
        <CreateChar />
        {(() => {
          switch (game) {
            case 'start':
              return <PageOne handleClick={handleClick} />;
            case 'selectchar':
              return <SelectCharacter handleClick={handleClick} />;
            case 'home':
              return <Home handleClick={handleClick} />;
            case 'eat':
              return <EatPage handleClick={handleClick} />;
            case 'cook':
              return <Masak handleClick={handleClick} />;
            case 'cafe':
              return <Cafe handleClick={handleClick} />;
            case 'mall':
              return <Mall handleClick={handleClick} />;
            case 'cart':
              return <Cart handleClick={handleClick} />;
            case 'uni':
              return <ToStudy handleClick={handleClick} />;
            case 'Minigames':
              return <MiniGamestwo handleClick={handleClick} />;
            case 'class':
              return <Class handleClick={handleClick} />;
            case 'library':
              return <Library handleClick={handleClick} />;
            default:
              return null;
          }
        })()}
      </AllContext.Provider>
    </ChakraProvider>
  );
}

export default App;
