import Layout from "../components/Layout";
import Row from "../components/Row";
import Column from "../components/Column";
import ImageBox from "../components/ImageBox";
import Profile from "../components/Profile";
import SponsorCard from "../components/SponsorCard";
import Button from "../components/Button";
import Box from "../components/Box";

export default class Index extends React.Component {
    render(){
        return(
            <Layout>
                <div className="hero">
                    <div className="overlay">foop</div>
                    <div className="content">
                        <div style={{marginBottom:"5vh"}}>
                        <h1 className="title">Hack The New Year</h1>
                        <h2 className="subtitle">Be The Future</h2>
                        <p style={{fontSize:"1.5em",marginBottom:"10px"}}>January 11 - 12, 2020</p>
                        <a href="https://g.page/unionhallcincy?share" style={{ color:"white"}}>Union Hall, 1311 Vine Street, Cincinnati, Ohio</a>
                        </div>
                        <Button href="https://airtable.com/shrKfMOUBfP7jaEAx" val="Register!"/>
                    </div>
                    <div className="titleImage hidden-mobile">
                        <img className="logo" src="../static/htny-logo.png"/>
                    </div>
                </div>
                <div className="hero-norm" id="FAQ">
                    <Row>
                        <Column>
                            <h1>What is a hackathon?</h1>
                            <p style={{fontSize:"1.2em"}}>A hackathon is a place where people come together to hack (hack is a way to say make cool fun things) and meet new people! You can build anything you want in 24 hours, with free food, drinks, and places to sleep.</p>
                        </Column>
                        <Column>
                            <ImageBox src="https://cdn.glitch.com/3d283e0f-19c4-4546-b0b2-223ec3a7dc23%2Fworking.jpg?v=1565769221347" desc="Students gather into teams and learn to code! (Hack Penn)"/>
                        </Column>
                    </Row>
                    <Row>
                        <Column>
                            <ImageBox src="https://angelhacks.org/static/venue/stickexchange.jpg" desc="Sticker Exchange! (Flagship Summit)"/>
                        </Column>
                        <Column>
                        </Column>
                    </Row>
                </div>
                <div id="faq" style={{color:"white",display:"flex"}}>
                    <Box width="90vw">
                        <h1 style={{margin:"15px",fontSize:"2.3em",textAlign:"center"}}>Frequently Asked Questions</h1>
                        <div className="row">
                            <div className="inner">
                                <h2>Who can participate? 🔭</h2>
                                <p>Any student in middle school - 12th grade can participate. If you are above or below that please <a href="mailto:team@hacknewyear.com">email us</a> and we can work something out.</p>
                            </div>
                            <div className="inner">
                                <h2>What if I don't know how to code? 👾</h2>
                                <p>Perfect! Hack the New Year is open to all experience levels, anywhere from beginners to master hackers.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="inner">
                                <h2>Do I need a team? 👨‍👧‍👧</h2>
                                <p>Everyone will need to work on a team of 2 - 4 people. You can bring your friends to form a group of up to 4 people, or come alone and find a group here!</p>
                            </div>
                            <div className="inner">
                                <h2>How much does it cost? 💸</h2>
                                <p>It is completely free to attend Hack the New Year thanks to our amazing sponsors! We got you covered.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="inner">
                                <h2>Who runs this? 👨‍🏫</h2>
                                <p>Hack the New Year is run by high school students across the Cincinnati area and Massachusetts, backed by an international non-profit organization called Hack Club, which creates communities of makers <a href="https://map.hackclub.com">all over the world.</a></p>
                            </div>
                            <div className="inner">
                                <h2>Is this supervised? 👍</h2>
                                <p>Yes, there will be background checked adults at the event the entire time.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="inner">
                                <h2>How do I get there? 🚗</h2>
                                <p>The event is located at Union Hall, 1311 Vine Street, Cincinnati, Ohio, 45202. We highly recommend that you have a parent drop you off, but if not you can find parking right across the street. For those located outside the Cincinnati area, we are currently unable to provide travel assistance but urge you to check out <a href="https://grant.executebig.org">Execute Big's travel grants</a> if you want to come.</p>
                            </div>
                            <div className="inner">
                                <h2>Is there a theme? 🤖</h2>
                                <p>We don't have one! Feel free to make whatever want! Start the year right and make something you'll be proud of.</p>
                            </div>
                        </div>
                         <div className="row">
                            <div className = "inner">
                               <h2>I'm a college student/professional and I want to mentor at this hackathon. 📚</h2>
                               <p>Of course! Contact us at <a href="mailto:team@hacknewyear.com">team@hacknewyear.com</a>, and we'll see what we can do!</p>
                            </div>
                            <div className = "inner">
                               <h2>What do I need to bring? 🎒</h2>
                               <p>Be sure to bring your computer, phone, chargers, and anything else you might need for your project. You will also need to bring a form of ID (student IDs work great). Also, be sure to bring toiletries, a refillable water bottle, any medication you may need, and a sleeping bag if you plan to sleep. Middle School students must have a parent present on drop off and pick up.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className = "inner">
                               <h2>What if I have another question? ❓</h2>
                               <p>Feel free to contact us at <a href="mailto:team@hacknewyear.com">team@hacknewyear.com</a> with any questions you may have. We'd be more than happy to answer them!</p>
                            </div>
                        </div>
                    </Box>
                </div>
                <div style={{color:"white",marginTop:"5vh"}}>
                    <Box width="50vw">
                        <h1 style={{fontSize:"2.3em",textAlign:"center"}}>Schedule!</h1>
                        <div className="row">
                            <div style={{display:"flex",flexDirection:"column",flex:1,textAlign:"center"}}>
                                    <h2>Saturday Jan 11</h2>
                                    <p><strong>9:00 AM</strong> Doors Open 🚪</p>
                                    <p><strong>10:00 AM</strong> Opening Ceremony & Icebreaker 📹</p>
                                    <p><strong>11:00 AM</strong> Hacking Begins 💻</p>
                                    <p><strong>1:00 PM</strong> Web Dev Workshop w/ Melody</p>
                                    <p><strong>3:00 PM</strong> INTERalliance Workshop w/ Tyler</p>
                                    <p><strong>5:00 PM</strong>GitKraken Workshop w/ Evan</p>
                                    <p><strong>6:30 PM</strong> Dinner 🌮</p>
                                    <p><strong>7:30 PM</strong> CTF Starts 👩‍💻</p>
                            </div>
                            <div style={{display:"flex",flexDirection:"column",flex:1,textAlign:"center"}}>
                                <h2>Sunday Jan 12</h2>
                                <p><strong>12:00 AM</strong> Midnight Snack 🍩</p>
                                <p><strong>12:30 AM</strong> CTF Ends 👨‍💻</p>
                                <p><strong>1:00 AM</strong> Minecraft Survival Games ⚔️</p>
                                <p><strong>2:30 AM</strong> Kahoot.it Tournament ⚔️</p>
                                <p><strong>9:00 AM</strong> Breakfast 🥞</p>
                                <p><strong>7:00 AM</strong> Hacking Ends 😥</p>
                                <p><strong>9:45 AM</strong> Presentations Begin 🎥</p>
                                <p><strong>11:00 AM</strong> Presentations End/Judging Begins ⚖️</p>
                                <p><strong>11:15 AM</strong> Closing Ceremony 🎈</p>
                                <p><strong>12:00 PM</strong> Event Ends 😭</p>
                            </div>
                        </div>
                    </Box>
                </div>
                <div style={{color:"white",textAlign:"center"}}>
                    <h1>Our Venue</h1>
                    <div className="row">
                        <div style={{padding:"15px",marginLeft:"auto",marginRight:"auto",color:"white",overflow:"hidden"}} className="mapouter"><div className="gmap_canvas"><iframe width="500" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Union%20Hall%2C%201311%20Vine%20Street%2C%20Cincinnati%2C%20Ohio&t=&z=17&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.embedgooglemap.net">embedgooglemap.net</a></div><style jsx>{`.mapouter{position:relative;text-align:right;height:500px;width:500px;border-radius:30px;}.gmap_canvas {border-radius:30px;overflow:hidden;background:none!important;height:500px;width:500px;}`}</style></div>
                    </div>
                    <div className="row" style={{flexWrap:"wrap"}}>
                        <div className="row" style={{flexWrap:"wrap",width:"70vw", marginLeft:"auto",marginRight:"auto"}}>
                            <ImageBox src="../static/venue1.jpg" desc="Front side of our venue!"/>
                            <ImageBox src="../static/venue2.jpg" desc="The beautiful kitchen!"/>
                            <ImageBox src="../static/venue3.jpg" desc="Epic seats that you can hack on!"/>
                            <ImageBox src="../static/venue4.jpg" desc="Another awesome kitchen!"/>
                        </div>
                    </div>
                </div>
                <div style={{color:"white",marginLeft:"5vw",width:"90vw"}} id="sponsors">
                    <h1>Our Sponsors</h1>
                    <h2>Silver</h2>
                    <div style={{display:"flex",flexWrap:"wrap",flexDirection:"row",width:"100%"}}>
                        <SponsorCard href="https://balsamiq.com" target="_blank" src="../static/sponsor/balsamiq-logo.svg"/>
                        <SponsorCard href="https://kroger.com" target="_blank" src="../static/sponsor/kroger-new.png"/>
                        <SponsorCard href="https://www.losant.com" target="_blank" src="../static/sponsor/losant-logo-horiz-01-04.png"/>
                        <SponsorCard src="https://s2-cdn.greenhouse.io/external_greenhouse_job_boards/logos/400/250/400/original/Callibrity_Full_Color.png?1554299818" href="https://www.callibrity.com/"/>
                    </div>
                    <h2>Bronze</h2>
                    <div style={{display:"flex",flexWrap:"wrap",flexDirection:"row",width:"100%"}}>
                        <SponsorCard src="../static/sponsor/github.png" href="https://github.com" target="_blank"/>
                        <SponsorCard src="../static/sponsor/haap.png"/>
                    </div>
                    <h2>Additional Support</h2>
                    <div className="row" style={{flexWrap:"wrap"}}>
                        <SponsorCard href="https://hackclub.com" target="_blank" src="https://cdn.glitch.com/747f5921-6fdc-45db-8eaa-ac12523e0e6c%2Fhackclub-bank.svg?v=1566159701206"/>
                        <SponsorCard href="https://cengage.com" target="_blank" src="../static/sponsor/cengage.png"/>
                        <SponsorCard src="https://healthcollab.org/wp-content/uploads/cintrifuse-logo.png" href="https://cintrifuse.com" target="_blank" />
                        <SponsorCard src="https://camo.githubusercontent.com/4fc2fd1938e263da0a9d31e4e31572f4536b2c21/68747470733a2f2f636c6f756473706c6f69742e636f6d2f696d616765732f6c6f676f732f746578742d636f6c6f722d626c61636b2d706e672e706e67" href="https://cloudsploit.com/" target="_blank"/>
                        <SponsorCard src="../static/sponsor/digitalocean.png" href="https://digitalocean.com" target="_blank" />
                        <SponsorCard src="https://angelhacks.org/static/sashido-logo.png" href="https://www.sashido.io/en/" target="_blank"/>
                        <SponsorCard href="https://www.sketch.com" target="_blank" src="../static/sponsor/sketch-logo.png"/>
                        <SponsorCard src="../static/sponsor/Sticker-mule-logo-light.png" href="https://stickermule.com" target="_blank" />
                        <SponsorCard src="../static/sponsor/tile.png" href="https://tile.com" target="_blank" />
                    </div>
                    <div style={{textAlign:"center"}}>
                        <h1 style={{fontSize:"2.7em",}}>Become a Sponsor!</h1>
                        <p>Contact us at <a href="mailto:team@hacknewyear.com">our email</a> and take <a href="../static/Prospectus.pdf">a look at our prospectus</a>!</p>
                    </div>
                </div>
                <div style={{color:"white",marginLeft:"5vw",width:"90vw"}} id="team">
                    <h1>Our Team</h1>
                    <div style={{display:"flex",flexWrap:"wrap",flexDirection:"row",width:"100%"}}>
                        <Profile src="../static/profiles/jacob.jpg" name="Jacob Haap" desc="Executive Director"/>
                        <Profile src="../static/profiles/faham.png" name="Faham Tak" desc="Director of Marketing"/>
                        <Profile src="https://pic.jpjp.repl.co/jp.jpg" name="JP Mason" desc="Director of Hacker Experience"/>
                        <Profile src="../static/profiles/harshith.jpg" name="Harshith Iyer" desc="Director of Finance & Sponsorship"/>
                        <Profile src="../static/profiles/neel.jpg" name="Neel Redkar" desc="Web Developer"/>
                        <Profile src="../static/profiles/garret.jpg" name="Garrett Thompson" desc="Social Media"/>
                    </div>
                </div>
                {/* <div style={{color:"white",marginLeft:"5vw",width:"90vw"}} id="judges">
                    <h1>Judges</h1>
                    <div style={{display:"flex",flexWrap:"wrap",flexDirection:"row",width:"100%"}}>
                        <Profile src="https://media1.giphy.com/media/xUPGcuPLCKs0LiYnCg/giphy.gif" name="Catto" desc="I. will. Judge. You."/>
                        <Profile src="https://media1.giphy.com/media/xUPGcuPLCKs0LiYnCg/giphy.gif" name="Catto" desc="I. will. Judge. You."/>
                        <Profile src="https://media1.giphy.com/media/xUPGcuPLCKs0LiYnCg/giphy.gif" name="Catto" desc="I. will. Judge. You."/>
                        <Profile src="https://media1.giphy.com/media/xUPGcuPLCKs0LiYnCg/giphy.gif" name="Catto" desc="I. will. Judge. You."/>
                        <Profile src="https://media1.giphy.com/media/xUPGcuPLCKs0LiYnCg/giphy.gif" name="Catto" desc="I. will. Judge. You."/>
                        <Profile src="https://media1.giphy.com/media/xUPGcuPLCKs0LiYnCg/giphy.gif" name="Catto" desc="I. will. Judge. You."/>
                        <Profile src="https://media1.giphy.com/media/xUPGcuPLCKs0LiYnCg/giphy.gif" name="Catto" desc="I. will. Judge. You."/>
                    </div>
                </div> */}
            </Layout>
        )
    }
}
