function Time() {
    let date = new Date().toLocaleTimeString() + "" ;
    return(
        <h2>
            {date}
        </h2>
    );
}

export default Time;