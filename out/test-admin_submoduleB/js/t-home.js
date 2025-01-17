(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let today = new Date(),
    dd = String(today.getDate()).padStart(2, '0'),
    mm = String(today.getMonth() + 1).padStart(2, '0'),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = '08/31/',
    birthday = dayMonth + yyyy;

  today = mm + '/' + dd + '/' + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end

  // 以下の2行を変更して、8月31日午後12時のタイムスタンプを計算します
  const countDown = new Date(birthday + ' 12:00:00').getTime();

  const x = setInterval(function () {
    const now = new Date().getTime(),
      distance = countDown - now;

    const daysElement = document.getElementById('days');
    daysElement.innerText = Math.floor(distance / day);

    const hoursElement = document.getElementById('hours');
    hoursElement.innerText = Math.floor((distance % day) / hour);

    const minutesElement = document.getElementById('minutes');
    const minutes = Math.floor((distance % hour) / minute);
    minutesElement.innerText = minutes;

    const secondsElement = document.getElementById('seconds');
    const seconds = Math.floor((distance % minute) / second);
    secondsElement.innerText = seconds;

    if (distance < 0) {
      daysElement.innerText = '0';
      hoursElement.innerText = '0';
      minutesElement.innerText = '0';
      secondsElement.innerText = '0';
      document.getElementById('headline').innerText = 'release date!';
      document.getElementById('countdown').style.display = 'none';
      document.getElementById('content').style.display = 'block';
      clearInterval(x);
    }
  }, 1000); // 1000ミリ秒ごとに更新
})();
