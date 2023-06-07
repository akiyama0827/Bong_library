const SearchBtn = document.querySelector('#search-btn');

function SearchpageRedirect() {
    window.open('https://reading.cbe.go.kr/r/newReading/search/schoolSearchOnlyForm.jsp?schoolCode=30469&kind=1');
}

SearchBtn.addEventListener('click', SearchpageRedirect);
