// fetch current page from url
var lastIndex = window.location.href.lastIndexOf('/');
let baseUrl = window.location.href.substring(0, lastIndex + 1)
let currentPage = window.location.href.substring(lastIndex + 1).split('.')[0];

let max = 7;

function fetchNumber() {

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjUzNmMzYTQ2YzUyOTY1ZmY0NDNjOCIsImlhdCI6MTY4NDIyMTYyNSwiZXhwIjoxNjg2ODEzNjI1fQ.6MNQGWS1U3v2Fmr9ZLzwo29q8dhiFRzpkkBz8Rfecqg");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("https://api.n2048.com/step", requestOptions)
      .then(response => response.json())
      .then(data => {
        if (data.Number != currentPage && data.Number <= max) {
            window.location.replace(baseUrl + data.Number + '.html');
        }
      })
      .catch(error => console.log('error', error));

}

setInterval(fetchNumber, 1000); // Fetch number every 1 second
fetchNumber();
