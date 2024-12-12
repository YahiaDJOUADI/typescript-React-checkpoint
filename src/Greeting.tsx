interface GreetingProps{
    name : String
}
export const Greeting = ({name}:GreetingProps)=>{
return(

    <h1 >Hello {name}</h1>

)
}
export default Greeting