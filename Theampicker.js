const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (e) {
      console.log(e);
      console.log(e.target);
      if (e.target.id === 'gray') {
        body.style.backgroundColor = e.target.id;
        document.querySelector('.container').style.color = "Black";
      }
      if (e.target.id === 'orange') {
        body.style.backgroundColor = e.target.id;
        document.querySelector('.container').style.color = "Black";
      }
      if (e.target.id === 'blue') {
        body.style.backgroundColor = e.target.id;
        document.querySelector('.container').style.color = "Black";
      }
      if (e.target.id === 'yellow') {
        body.style.backgroundColor = e.target.id;
        document.querySelector('.container').style.color = "Black";
      }
      if (e.target.id === 'black') {
        body.style.backgroundColor = e.target.id;
        document.querySelector('.container').style.color = "White";
      }
      
    });
  });

