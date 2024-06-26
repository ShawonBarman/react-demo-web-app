import { EXAMPLES } from './../data.js';
import TabButton from './TabButton.jsx';
import { useState } from 'react';

export default function Examples(){
    const [clickedTopic, setClickedTopic] = useState()
    function handleClicker(clickedButton){
        setClickedTopic(clickedButton);
    }
    return (
        <section id='examples'>
            <h2>Examples</h2>
            <menu>
                < TabButton isSelected={clickedTopic==="components"} onSelect={() => {handleClicker('components')}} label="Components" />
                < TabButton isSelected={clickedTopic==="jsx"} onSelect={() => {handleClicker('jsx')}} label="JSX" />
                < TabButton isSelected={clickedTopic==="props"} onSelect={() => {handleClicker('props')}} label="Props" />
                < TabButton isSelected={clickedTopic==="state"} onSelect={() => {handleClicker('state')}} label="State" />
            </menu>
          
            {/* {!clickedTopic ? (
                <div id='notClicked-topic'>
                    <p>Please click a topic first to see the information.</p>
                </div>
                ) : (
                <div id='tab-content'>
                    <h3>{EXAMPLES[clickedTopic].title}</h3>
                    <p>{EXAMPLES[clickedTopic].description}</p>
                    <pre>
                        <code>{EXAMPLES[clickedTopic].code}</code>
                    </pre>
                </div>
                )
            } */}

            {/* {tabContent} */}

            {!clickedTopic && (
                <div id='notClicked-topic'>
                    <p>Please click a topic first to see the information.</p>
                </div>
                )
            }
            {clickedTopic && (
                <div id='tab-content'>
                    <h3>{EXAMPLES[clickedTopic].title}</h3>
                    <p>{EXAMPLES[clickedTopic].description}</p>
                    <pre>
                        <code>{EXAMPLES[clickedTopic].code}</code>
                    </pre>
                </div>
                )
            }
        </section>
    );
}