const newbooksBtn = document.querySelector('#newbooks-btn');
const hottestbooksBtn = document.querySelector('#hottestbooks-btn');
const SearchBtn = document.querySelector('#search-btn');
const boardBtn = document.querySelector('#board-btn');

function NewbooksPageRedirect() {
    window.open('https://reading.cbe.go.kr/r/newReading/search/schoolNewBookForm.jsp?schoolCode=30469&kind=1');
}
function HottestbooksPageRedirect() {
    window.open('https://reading.cbe.go.kr/r/newReading/search/schoolBestBookForm.jsp?schoolCode=30469&kind=1');
}
function SearchPageRedirect() {
    window.open('https://reading.cbe.go.kr/r/newReading/search/schoolSearchOnlyForm.jsp?schoolCode=30469&kind=1');
}

newbooksBtn.addEventListener('click', NewbooksPageRedirect);
hottestbooksBtn.addEventListener('click', HottestbooksPageRedirect);
SearchBtn.addEventListener('click', SearchPageRedirect);
