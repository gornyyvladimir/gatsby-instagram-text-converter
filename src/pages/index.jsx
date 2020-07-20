import React, { useState, useRef } from 'react';
import { YMInitializer } from 'react-yandex-metrika';
import convertText from '../helpers';
import Notification from '../components/Notification';
import SEO from '../components/Seo';
import Comments from '../components/Comments';
import 'normalize.css';
import './styles.css';

function App() {
  const textareaRef = useRef(null);
  const [text, setText] = useState('');
  const [convertedText, setConvertedText] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [notificationState, setNotificationState] = useState(false);

  const showNotification = (delay = 3000) => {
    setNotificationState(true);
    setTimeout(() => {
      setNotificationState(false);
    }, delay);
  };

  const handleTextChange = event => {
    setText(event.target.value);
  };

  const handleCovert = event => {
    event.preventDefault();
    const newConvertedText = convertText(text);
    setConvertedText(newConvertedText);
    setDisabled(false);
  };

  const handleCopy = event => {
    event.preventDefault();
    textareaRef.current.select();
    document.execCommand('copy');
    showNotification();
  };

  const handleTextareaFocus = event => {
    event.target.select();
  };

  return (
    <div>
      <YMInitializer
        accounts={[54322950]}
        options={{ webvisor: true, defer: true }}
        version="2"
      />
      <SEO
        title="Как сделать абзац в инстаграм?"
        description="Не знаете как сделать абзац в инстаграм? Этот онлайн инструмент обязательно вам поможет."
        author="gornyyvladimir"
      />
      <Notification show={notificationState}>
        Текст скопирован! Вставьте его в Instagram.
      </Notification>
      <div>
        <h1 className="title">Как сделать абзац в инстаграм?</h1>
        <p className="text">
          Этот инструмент поможет вам добавить специальный пробел в инстаграм,
          чтобы ваши описания в инстаграм могли начинаться с новой строки.
        </p>
        <div className="wrapper">
          <form className="form" onSubmit={handleCovert}>
            <label className="label" htmlFor="text">
              Текст, который вы хотите преобразовать
              <textarea
                id="text"
                className="textarea"
                onChange={handleTextChange}
                value={text}
                placeholder="Пожалуйста, введите текст"
                rows="5"
                cols="30"
                required
              />
            </label>
            <button className="button" type="submit">
              Конвертировать
            </button>
          </form>
          <form className="form" onSubmit={handleCopy}>
            <label className="label" htmlFor="converted-text">
              Преобразованный текст
              <textarea
                id="converted-text"
                className="textarea"
                ref={textareaRef}
                onFocus={handleTextareaFocus}
                value={convertedText}
                placeholder="Здесь будет преобразованный текст"
                rows="5"
                cols="30"
                readOnly
              />
            </label>
            <button className="button" type="submit" disabled={disabled}>
              Копировать
            </button>
          </form>
        </div>
        <p className="text text--margin-bottom-2">
          Количество символов: <b>{text.length}</b>
          <br />
          Максимальное количество символов в посте Instagram: <b>2200</b>
        </p>
        <Comments />
      </div>
    </div>
  );
}

export default App;
