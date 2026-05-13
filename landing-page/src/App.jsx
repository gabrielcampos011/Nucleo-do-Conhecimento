import './App.css';
import { useReveal } from './hooks/useReveal';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Trilhas from './components/Trilhas';
import PorQue from './components/PorQue';
import Lancamento from './components/Lancamento';
import Footer from './components/Footer';

export default function App() {
  useReveal();

  return (
    <main>
      <Hero />
      <Sobre />
      <Trilhas />
      <PorQue />
      <Lancamento />
      <Footer />
    </main>
  );
}
