const Details = ()=> {
    return(
        <div>
            <form>
                <label>Minister:</label><br/>
                <input type="text" placeholder="name" required/><br/>
                <label>Minister of state:</label><br/>
                <input type="text" placeholder="name" required/><br/>
                <label>Address:</label><br/>
                <input type="text" placeholder="address" required/><br/>
                <label>web:</label><br/>
                <input type="text" placeholder="website" required/>
            </form>
        </div>
    );
}

export default Details;