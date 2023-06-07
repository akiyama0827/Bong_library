const SearchBtn = document.querySelector('#search-btn');

function SearchpageRedirect() {
    window.open('https://reading.cbe.go.kr/r/newReading/search/schoolSearchForm.jsp');
}

SearchBtn.addEventListener('click', SearchpageRedirect);
