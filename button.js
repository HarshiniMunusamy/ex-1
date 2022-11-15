import React,{useState} from 'react'
const FunctionalCount = () => {
    const [count,setCount] = useState(0)
    const handleClick = () =>{
        setCount(count+1)
    }
    const handledecrease = () =>{
        setCount(count-1)
    }
   
    return(
    <>
    <div className="count">
     <h1>TV shows : {count}</h1>
     <button onClick={() => handleClick()}>Increse</button><br></br>
     <br></br>
    {count !==0 && <button onClick={() => handledecrease()}>Decrese</button>}
    <br></br><br></br>

        </div>
        <div class ="slide">
            <i><u><h1>TOM AND JERRY</h1>
            <h1>CARTOON</h1></u></i>

   <h3><p>Tom and Jerry, American animated cartoon series about a hapless cat’s never-ending pursuit of a clever mouse.
Not yet named in their debut theatrical short,Puss Gets the Boot (1940), Tom (the scheming cat) and Jerry (the spunky mouse) nonetheless were a hit with audiences.
Animators William Hanna and Joseph Barbera produced more than 100 episodes for Metro-Goldwyn-Mayer (MGM).
The cat and mouse stars later resurfaced in their own animated television series produced by Hanna-Barbera and Filmation Studios during the 1970s, 1980s, and 1990s, a feature film, Tom and Jerry. The Movie, in 1992 and released domestically in 1993 and in 2001, their first made-for-TV short, Tom and Jerry in: The Mansion Cat for Cartoon Network.
Today,Warner Bros.Owns the rights to Tom and Jerry, and also produced the series, Tom and Jerry Tales for The CW's Saturday morning "The CW4Kids" lineup, as well as the recent Tom and Jerry short, The Karate Guard, in 2005 and a string of Tom and Jerry direct-to-video films.
Cartoon Network aired the shorts from the network's inception in 1992 until 2016. It returned in 2017 before being removed again later in the year along with the Looney Tunes shorts. 
It was notably one of the only classic cartoonsthe other notable one being Scooby-Doo, Where Are You! still airing during the Yes!, Summer 2007 and Fall eras as well as the CN City era starting in October 2004 and the first 6 months of the Noods era.
It has also aired on Boomerang since the channel's launch. </p></h3>

  </div>
    </>
    );
}
 
export default FunctionalCount;
