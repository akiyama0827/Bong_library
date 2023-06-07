const a = document.querySelector('a');

function SearchpageRedirect() {
    window.open('https://reading.cbe.go.kr/r/newReading/search/schoolSearchForm.jsp')
}

a.addEventListener('click', SearchpageRedirect);
