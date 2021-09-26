let searchInputEl = document.getElementById('searchInput');
let searchResultsEl = document.getElementById('searchResults');
let spinnerEl = document.getElementById('spinner');


function createandAppend(result) {
    // creating result item
    let resultItemEl = document.createElement('div');
    resultItemEl.classList.add('result-item');
    searchResultsEl.appendChild(resultItemEl);

    // creating title element 
    let {
        link,
        title,
        description
    } = result;
    let titleEl = document.createElement('a');
    titleEl.href = link;
    titleEl.target = "_blank";
    titleEl.textContent = title;
    titleEl.classList.add('result_title');
    resultItemEl.appendChild(titleEl);

    // creating break element 
    let titleBrEl = document.createElement('br')
    resultItemEl.appendChild(titleBrEl);

    //creating url element
    let urlEl = document.createElement('a');
    urlEl.href = link;
    urlEl.target = "_blank";
    urlEl.textContent = link;
    urlEl.classList.add('result-url');
    resultItemEl.appendChild(urlEl);

    // creating break element 
    let urlBrEl = document.createElement('br');
    resultItemEl.appendChild(urlBrEl);

    //creating description element 
    let descriptionEl = document.createElement('p');
    descriptionEl.textContent = description;
    descriptionEl.classList.add('link-description');
    resultItemEl.appendChild(descriptionEl)

}

function displayResults(search_results) {
    spinnerEl.classList.toggle('d-none');
    //let result = search_results[0]
    //console.log(result);
    for (let result of search_results) {
        createandAppend(result);
    }
}

function wikipediaSearch(event) {
    if (event.key === "Enter") {
        spinnerEl.classList.toggle('d-none')
        searchResultsEl.textContent = " ";
        let searchInputValue = searchInputEl.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInputValue;
        let options = {
            method: "GET"
        }
        fetch(url, options)
            .then(function(response) {
                return response.json()
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData;
                console.log(search_results)
                //console.log(jsonData) 
                //console.log(search_results)
                displayResults(search_results)

            });
        //console.log(url)
        //console.log(searchInputValue)
    }
}

searchInputEl.addEventListener("keydown", wikipediaSearch)




