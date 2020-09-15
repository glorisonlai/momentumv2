import React, { useState, useEffect } from 'react';
import { months, days } from '../constants';
import './body.css';
import Weather from '../weather/weather';
import emoji from 'emoji-dictionary';

const Body: React.FunctionComponent = () => {
  const [time, setTime] = useState(Date.now());
  const currentTime = new Date(time);
  const year = currentTime.getFullYear(),
    month = currentTime.getMonth(),
    date = currentTime.getDate(),
    day = currentTime.getDay(),
    hour = currentTime.getHours(),
    minute = currentTime.getMinutes();

  useEffect((): void => {
    const refresh = (timer: number): void => {
      setTimeout(function () {
        setTime(Date.now);
      }, timer);
    };
    const nextMin = Date.parse(
      `${year}-${formatDate(month + 1)}-${formatDate(date)}T${formatDate(hour)}:${formatDate(minute + 1)}:00`,
    );
    const timer = nextMin - time;
    refresh(timer);
  }, [time]);

  const formatDate = (dateElement: number): string => {
    const dateElementStr = dateElement.toString();
    return `00${dateElementStr}`.substring(dateElementStr.length);
  };

  const Clock = (): React.FunctionComponentElement<void> => (
    <h1>
      <strong>
        {formatDate(hour)}:{formatDate(minute)}
      </strong>
    </h1>
  );

  const CalendarDate = (): React.FunctionComponentElement<void> => (
    <h1>
      <strong>
        {days[day]}, {months[month]} {date}
      </strong>
    </h1>
  );

  return (
    <div className="body">
      <div className="left">
        <div className="to-do" />
      </div>
      <div className="center">
        <h2>
          <strong>Let&apos;s get this bread {emoji.getUnicode('bread')}</strong>
        </h2>
        <Clock />
        <CalendarDate />
        <div className="favorite-links" />
      </div>
      <div className="right">
        <Weather />
      </div>
    </div>
  );
};

export default Body;
