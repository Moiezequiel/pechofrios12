// images
import Logo from '../src/assets/img/header/logo.svg';
import ResistanceImg from '../src/assets/img/workouts/resistance.png';
import BoxingImg from '../src/assets/img/workouts/boxing.png';
import BodyPumpImg from '../src/assets/img/workouts/body-pump.png';
import YogaImg from '../src/assets/img/workouts/yoga.png';
import FullBodyImg from '../src/assets/img/workouts/full-body.png';
import FitnessImg from '../src/assets/img/workouts/fitness.png';
import BattleRopeImg from '../src/assets/img/workouts/battle-rope.png';
import CommunityImg1 from '../src/assets/img/community/img1.png';
import CommunityImg2 from '../src/assets/img/community/img2.png';
import CommunityImg3 from '../src/assets/img/community/img3.png';
import CommunityImg4 from '../src/assets/img/community/img4.png';
import JoinImg from '../src/assets/img/join/woman.png';
// icons
import UsersIcn from '../src/assets/img/about/icons/users-icn.svg';
import CalendarIcn from '../src/assets/img/workouts/icons/calendar.svg';
import PriceIcn from '../src/assets/img/pricing/icons/price.svg';
import CommunityIcn from '../src/assets/img/community/icons/community-icn.svg';
import QuestionMarkIcn from '../src/assets/img/faq/icons/question-mark.svg';

export const header = {
  logo: Logo,
  btnLoginText: 'Crear sesion',
  btnSignupText: 'Iniciar sesion',
};

export const nav = [
  { name: 'Inicio', href: '/' },
  { name: 'Sobre nosotros ', href: '/' },
  { name: 'Ejercicios', href: '/' },
   { name: 'Comunidad', href: '/' },
 
];

export const banner = {
  titlePart1: 'Da lo mejor de ti cada dia',
  titlePart2: '– Tu dia mejora aqui.',
  subtitle:
    'Somos una familia somo unidos somos tu gym.',
  textBtn: 'Inicia Aqui',
  img: '',
};

export const about = {
  icon: UsersIcn,
  title: 'Nuestra mision',
  subtitle1:
    'Somos un sitio que ayuda a motivarte para que hagas ejercicio sin complicaciones y gratis sin costo alguno.',
  subtitle2:
    'Puede que haya perdido todo, pero jamás dejaré de pelear por lo que creo.',
  link: 'Inicia aqui',
};

export const workouts = {
  icon: CalendarIcn,
  title: 'Programa de Entrenamientos',
  programs: [
    {
      image: ResistanceImg,
      name: 'Ejercicio en Casa',
    },
    {
      image: BoxingImg,
      name: 'Boxing',
    },
    {
      image: BodyPumpImg,
      name: 'Gimnasio',
    },
    {
      image: YogaImg,
      name: 'Estiramiento',
    },
    {
      image: FullBodyImg,
      name: 'Cross fit',
    },
    {
      image: FitnessImg,
      name: 'Power Lifter',
    },
    {
      image: BattleRopeImg,
      name: 'Consejos nutricionales',
    },
  ],
};

export const pricing = {
  icon: PriceIcn,
  title: 'Planes GYM UCA',
  plans: [
    {
      name: 'basico',
      price: '17',
      list: [
        { name: 'Acceso a todo el gym' },
        { name: 'Acceso a un locker' },
        
      ],
      delay: 600,
    },
    {
      name: 'Medio',
      price: '20',
      list: [
        { name: 'Acceso a todo el gym' },
        { name: 'Acceso a un locker' },
        { name: 'Programa de entrenamieno' },
      
      ],
      delay: 800,
    },
    {
      name: 'Avanzado',
      price: '25',
      list: [
        { name: 'Acceso a todo el gym' },
        { name: 'Acceso a un locker' },
        { name: 'Programa de Entreamieno personal' },
        { name: 'Entrenador personal' },
        { name: 'Plan nutricional' },
      ],
      delay: 1000,
    },
  ],
};

export const community = {
  icon: CommunityIcn,
  title: 'Frases Motivacionales',
  testimonials: [
    {
      image: CommunityImg1,
      name: 'ARNOLD SCHWARZENEGGER',
      message:
        '“Las últimas 3 ó 4 repeticiones es lo que hace que el músculo crezca. Ese punto de dolor, de no poder más, es el que separa a los campeones del resto”',
    },
    {
      image: CommunityImg2,
      name: 'SYLVESTER STALLONE',
      message:
        '“El éxito suele ser la culminación de controlar y aprender a convivir con el fracaso”',
    },
    {
      image: CommunityImg3,
      name: 'Cbum',
      message:
        '“Dont be a skinny b*tch”',
    },
    {
      image: CommunityImg4,
      name: 'CRISTIANO RONALDO',
      message:
        '“Siente una necesidad infinita de aprender, de mejorar, de evolucionar, y no solo para complacer al entrenador y los fans, sino también para sentirme satisfecho conmigo mismo”',
    },
  ],
};

export const faq = {
  icon: QuestionMarkIcn,
  title: 'Playlist',
  accordions: [
    {
      question: 'Quieres escuchar Hard Style?',
      answer:
        'https://open.spotify.com/playlist/37i9dQZF1DX7NhGf24haor',
        
    },
    {
      question: 'Quieres escuchar phonk?',
      answer:
        'https://open.spotify.com/playlist/37i9dQZF1DWWY64wDtewQt',
    },
    {
      question: 'Necesitas escuchar musica para hacer cardio?',
      answer:
        'https://open.spotify.com/playlist/37i9dQZF1DX76Wlfdnj7AP.',
    },
    {
      question: 'Necesitas musica para relajarte despues de tu rutina?',
      answer:
        'https://open.spotify.com/artist/2pV1IvIGDRwlHKKTDTXW7p.',
    },
    {
      question: 'Necesitas activarte antes del gym?',
      answer:
        'https://open.spotify.com/album/5vf0gMCDS26o8Jcvl5gmo8.',
    },
    {
      question: 'Necesitas escuchar musica para yoga?',
      answer:
        'https://open.spotify.com/artist/6ppQ1vjjme5Jtz2ceBFcWY.',
    },
  ],
};

export const join = {
  image: JoinImg,
  title: 'Te gustaria ser parte del equipo?',
  subtitle:
    'Unete con nosotros y creceras personalmene.',
  btnText: 'Unete Aqui',
};

export const footer = {
  logo: Logo,
  copyrightText: 'Gym uca derechos reservados 2022.',
};
