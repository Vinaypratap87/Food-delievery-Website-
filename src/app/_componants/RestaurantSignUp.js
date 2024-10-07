const RestaurantSignUp = () => {
    return (
        <>
            SignUp Componant
            <div >
                <div className="input-wrapper"><input type="text" placeholder="Enter email id" className="input-field" /></div>
                <div className="input-wrapper"><input type="Password" placeholder="Enter Password" className="input-field" /></div>
                <div className="input-wrapper"><input type="Password" placeholder="Confirm Password" className="input-field" /></div>
                <div className="input-wrapper"><input type="Password" placeholder="Enter restaurant name" className="input-field" /></div>
                <div className="input-wrapper"><input type="Password" placeholder="Enter city" className="input-field" /></div>
                <div className="input-wrapper"><input type="Password" placeholder="Enter city" className="input-field" /></div>
                <div className="input-wrapper"><input type="Password" placeholder="Enter contact number" className="input-field" /></div>
                <div className="input-wrapper">
                    <button className="input-field">SignUp</button>
                </div>
            </div>
        </>
    )
}

export default RestaurantSignUp;