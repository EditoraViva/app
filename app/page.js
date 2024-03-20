"use client"
import CountdownTimer from './components/CountdownTimer';

export default function Home() {
  return (
    <div className="flex h-screen justify-center">
      <div className="m-auto">
        <span className="text-2xl font-bold">Estamos em manutenção. Voltaremos em breve.</span>
        <CountdownTimer />
      </div>
    </div>
  );
}
