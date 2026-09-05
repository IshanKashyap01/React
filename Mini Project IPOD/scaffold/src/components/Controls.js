import './css/controls.css';
import leftArrow from './images/left-arrow.png';
import rightArrow from './images/right-arrow.png';
import bottomArrow from './images/arrow-pointing-downwards.png';

// introduce your own event handler for eac button Here.
function Controls({onOk, onMenu, onRotate}) {
    return (
        <section id="controls" /*onClick={}*/>
            <div id="wheel">
            <span id="menu-button" className="buttons" style={{top: 20}} onClick={onMenu}>
                Menu
            </span>
            <img 
                className="buttons" draggable="false" src={leftArrow} alt="left"
                style={{left: 13, width: 40}} onClick={() => onRotate(-1)}
            />
            <img className="buttons" draggable="false" src={rightArrow} alt="right"
                style={{right: 13, width: 40}} onClick={() => onRotate(1)}
            />
            <img className="buttons" draggable="false" src={bottomArrow} alt="bottom" 
                style={{bottom: 13, width: 30, height: 37}} onClick={() => onRotate(1)}
            />
            <div id="ok-button" onClick={onOk}>
                <b>OK</b>
            </div>
            </div>
        </section>
    );
  }
  
  export default Controls;
  