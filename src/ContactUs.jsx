const ContactUs = () => {
    return (
        <>
        <h1> Contact Us:</h1>
        <form>
            <label> First Name:
                <input type="text" name="first" placeholder="First Name">
                   
                </input>
            </label>
            <label> Last Name:
                <input type="text" name="last" placeholder="Last Name">
                    
                </input>
            </label>
            <label> Email:
                <input type="text" name="email" placeholder="enter email">
                  
                </input>
            </label>
            <label> Message:
                <input type="text" name="message" placeholder="message">
                    
                </input>
            </label>
            <button> Submit </button>
        </form>
        </>
    )
}

export default ContactUs