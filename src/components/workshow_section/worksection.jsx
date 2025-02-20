import React from "react";
import './worksection.css'
import netflix01 from '../../assets/netflix01.png'
import netflix02 from '../../assets/netflix02.png'
import netflix03 from '../../assets/netflix03.png'
import netflix04 from '../../assets/netflix04.png'
import netflix05 from '../../assets/netflix05.png'
import createjo1 from '../../assets/createJourney01.png'
import createjo2 from '../../assets/createJourney02.png'
import createjo03 from '../../assets/createJourney03.png'
import createjo04 from '../../assets/createJourney04.png'
import clickkart01 from '../../assets/clickkart01.png'
import clickkart02 from '../../assets/clickkart02.png'
import clickkart03 from '../../assets/clickkart03.png'
import clickkart04 from '../../assets/clickkart04.png'
import TodoApp01 from '../../assets/todoproject01.png'
import TodoApp02 from '../../assets/todoproject02.png'
function WorkShow()
{
    return(
        <div className="work_section" id="work">
            <div className="work_heading">
                <h1>My work</h1>
            </div>

            <div className="works_boxes">
                <div className="work_box">
                    <div className="work_left">
                        <h1>NetFlix Clone</h1>
                    </div>
                    <div className="work_right">
                        <div className="images_part">
                            <img src={netflix01} alt="" />
                            <img src={netflix02} alt="" />
                            <img src={netflix03} alt="" />
                            <img src={netflix04} alt="" />
                            <img src={netflix05} alt="" />

                        </div>
                    </div>
                </div>
                <div className="work_box">
                    <div className="work_left">
                        <h1>CreateJourney</h1>
                    </div>
                    <div className="work_right">
                        <div className="images_part">
                            <img src={createjo1} alt="" />
                            <img src={createjo2} alt="" />
                            <img src={createjo03} alt="" />
                            <img src={createjo04} alt="" />

                        </div>
                    </div>
                </div>
                <div className="work_box">
                    <div className="work_left">
                        <h1>ClickKart</h1>
                    </div>
                    <div className="work_right">
                        <div className="images_part">
                            <img src={clickkart01} alt="" />
                            <img src={clickkart02} alt="" />
                            <img src={clickkart03} alt="" />
                            <img src={clickkart04} alt="" />

                        </div>
                    </div>
                </div>
                <div className="work_box">
                    <div className="work_left">
                        <h1>TodoApp</h1>
                    </div>
                    <div className="work_right">
                        <div className="images_part">
                            <img src={TodoApp01} alt="" />
                            <img src={TodoApp02} alt="" />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WorkShow