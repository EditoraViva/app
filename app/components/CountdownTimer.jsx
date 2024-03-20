import { useEffect, useState } from 'react';
import { getCurrentTime } from '../utils/getCurrentTime';

const launchTime = new Date('2024-03-25T18:00:00Z'); // Replace with your launch time

const CountdownTimer = () => {
  const [timeRemaining, setTimeRemaining] = useState(null);

  useEffect(() => {
    const fetchCurrentTime = async () => {
      try {
        const currentTime = await getCurrentTime();
        const remaining = launchTime.getTime() - currentTime.getTime();
        setTimeRemaining(remaining);
      } catch (error) {
        console.error('Error fetching current time:', error);
      }
    };

    fetchCurrentTime();

    const timer = setInterval(fetchCurrentTime, 1000);

    return () => clearInterval(timer);
  }, []);

  if (timeRemaining === null) {
    return <div className='text-center'>Carregando...</div>;
  }

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return (
    <div>
      <div className='text-center'>
        Término da manutenção em {days} dias {hours} horas {minutes} minutos {seconds} segundos.
      </div>
    </div>
  );
};

export default CountdownTimer;
