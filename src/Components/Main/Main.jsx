import './Main.css'
import React, { useContext } from 'react'
import {assets} from '../../assets/assets'
import { Context } from '../../Context/Context'

const Main = () => {
    const{onSent,recentPrompt,showResult,loading,resultData,setInput, input} = useContext(Context);

  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>

        <div className="main-conatiner">
            {!showResult
            ?<>
            <div className="greet">
                <p><span>Hello, People.</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div onClick={()=>onSent("Suggest the best parks to visit in a city with descriptions")}  className="card">
                    <p>Suggest the best parks to visit in a city with descriptions</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div onClick={()=>onSent("Briefly summarize this concept: urban planning")}className="card">
                    <p>Briefly summarize this concept: urban planning</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div onClick={()=>onSent("Brainstorm team bonding activities for our work retreat")} className="card" id='last-div1'>
                    <p>Brainstorm team bonding activities for our work retreat</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div onClick={()=>onSent("Tell me about React js and React native")} className="card" id='last-div2'>
                    <p>Tell me about React js and React native</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
            </>
            : 
            <div className='result'>
                <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    {loading
                    ?<div className='loader'>
                        <hr />
                        <hr />
                        <hr />
                    </div>
                    :<p dangerouslySetInnerHTML={{__html:resultData}}></p>}
                </div>
                </div>
            }

            
            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e) =>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        {input?<img onClick={()=>onSent()} src={assets.send_icon} alt="" />:null}
                    </div>
                </div>
                <p className="bottom-info">
                Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
                </p>
                <p className="bottom-info">
                -By Surbhi &#128519;
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main