import React from 'react';
import '../modules/Root/skillsbar.scss'
import html_icon from '../assets/html-icon.png'
import css_icon from '../assets/css-icon.png'
import javascript_icon from '../assets/javascript-icon.png'
import react_icon from '../assets/react-icon.png'
import redux_icon from '../assets/redux-icon.png'
import es6_icon from '../assets/es6-icon.png'
import jquery_icon from '../assets/jquery-icon.png'
import bootstrap_icon from '../assets/bootstrap-icon.png'

const skills = [
    { type: "HTML", level: "80" , icon:html_icon},
    { type: "CSS", level: "80" , icon: css_icon },
    { type: "JavaScript", level: "80" , icon: javascript_icon},
    { type: "React.js", level: "70" , icon: react_icon},
    { type: "Redux", level: "70" , icon: redux_icon},
    { type: "Ecmascript", level: "70" , icon: es6_icon },
    { type: "jQuery", level: "50" , icon: jquery_icon},
    { type: "Bootstrap", level: "50" , icon: bootstrap_icon}
];

const SkillsBar = () => {

    return (
        <div className="skillsbar-container">
            {
                skills.map(elem => {
                    return (
                        <div className='skill_text_control'>
                            <div class="outer-circle circle circle-1">
                                <span class="sq sq-1"></span>
                                <span class="inner-circle circle">
                                    <img src={elem.icon}/>
                                </span>
                            </div>
                            <p>{elem.type}</p>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default SkillsBar;