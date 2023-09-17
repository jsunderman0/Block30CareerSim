const MostExpensivePost = ({posts}) => {
    console.log(posts)
    let prices = [];
    posts.forEach((post) => prices.push(post.price*1))
    console.log(prices)
    const newPrices = prices.filter((price) => {
        return !Number.isNaN(price)
})
    console.log(newPrices)
    newPrices.sort((a,b) => b-a)
    console.log(newPrices)
    const mostExpensive = newPrices.find((price) => price >1)

    console.log(mostExpensive)


    
    
    
    return(
        <>
        <h1> How much is the most expensive post? </h1>
        <p>  {mostExpensive} </p>
        
        
        </>
    )
}
 
export default MostExpensivePost