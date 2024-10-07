const RestaurantLogin =()=>{
    return(
        <>
        Login Componant
        <div >
            <div  className="input-wrapper"><input type="text" placeholder="Enter email id" className="input-field"/></div>
            <div  className="input-wrapper"><input type="Password" placeholder="Enter Password" className="input-field"/></div>
            <div  className="input-wrapper">
                <button className="input-field">Login</button>
            </div>
        </div>
        </>
    )
}

export default RestaurantLogin;