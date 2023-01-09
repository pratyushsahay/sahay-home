import React, { useState } from "react";
import './Collapsible.css';
import './Cards.css'
import CollapsedContent from "./CollapsedContent";

interface CollapsibleProps {
    readonly path: string;
    readonly text: string;
    readonly src: string;
    readonly label: string;
    readonly link: string;
}

// class Collapsible extends React.Component<CollapsibleProps, React.HTMLAttributes<HTMLDivElement>, {}> {
//     isOpen: boolean = false;
    
//     setIsOpen() {
//         this.isOpen = !this.isOpen;
//     }

//     render(): React.ReactNode {
//         const handleFilterOpening = () => {this.setIsOpen()};

//         return (
            // <>
            //     <li className="cards__item">
            //         <div className="cards__item__link">
            //             <figure className="cards__item__pic-wrap" datatype={this.props.label}>
            //                 <img className="cards__item__img" src={this.props.src} alt="Adventure"></img>
            //             </figure>
            //             <div className="cards__item__info">
            //                 <h5 className="cards__item__text"> {this.props.text} </h5>
            //             </div>
            //             <div className="collapse--container">
            //                 <div>
            //                     <button className="collapse--button" type="button" onClick={handleFilterOpening}>
            //                         {this.isOpen ? "View Less" : "View More?"}
            //                     </button>
            //                 </div>
            //                 <div>
            //                     <div>{this.isOpen && <div>THIS IS NOW OPEN</div>}</div>
            //                 </div>
            //             </div>
            //         </div>
            //     </li>
            // </>
//         )
//     }

// }
function Collapsible(props: CollapsibleProps) {
    const [open, setIsOpen] = useState(false);

    const handleFilterOpening = () => {setIsOpen(!open)};
    return (
        <>
        <li className="cards__item">
            <div className="cards__item__link">
                <figure className="cards__item__pic-wrap" datatype={props.label}>
                    <img className="cards__item__img" src={props.src} alt="Adventure"></img>
                </figure>
                <div className="cards__item__info">
                    <h5 className="cards__item__text"> {props.text} </h5>
                </div>
                <div className="collapse--container">
                    <div>
                        <button className="collapse--button" type="button" onClick={handleFilterOpening}>
                            <i className={open ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'}/>
                        </button>
                    </div>
                    <div>
                        <div>{open && <CollapsedContent github={props.link} path={props.path}/>}</div>
                    </div>
                </div>
            </div>
        </li>
    </>
    );
}

export default Collapsible;