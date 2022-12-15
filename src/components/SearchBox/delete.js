< div className = "search-box" >
    <
    form className = "search-box__form"
onSubmit = { this.searchBoxSubmitHandler } >
    <
    label className = "search-box__form-label" >
    Filmin adını daxil edin:
    <
    input type = "text"
className = "search-box__form-input"
value = { this.state.searchLine }
onChange = { this.searchMovies }
placeholder = "For example — Batman" / >
    <
    /label>{" "} <
    button type = "submit"
className = "search-box__form-submit"
disabled = {!searchLine } >
    Axtar <
    /button> <
    /form> <
    /div>