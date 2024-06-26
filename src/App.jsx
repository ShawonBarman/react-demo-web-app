import Header from './components/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';

function App() {
  // let tabContent = (
  //   <div id='notClicked-topic'>
  //     <p>Please click a topic first to see the information.</p>
  //   </div>
  // );
  // if (clickedTopic) {
  //   tabContent = (
  //     <div id='tab-content'>
  //       <h3>{EXAMPLES[clickedTopic].title}</h3>
  //       <p>{EXAMPLES[clickedTopic].description}</p>
  //       <pre>
  //         <code>{EXAMPLES[clickedTopic].code}</code>
  //       </pre>
  //     </div>
  //   );
  // }
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
