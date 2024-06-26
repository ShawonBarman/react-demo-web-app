import reactLogoImg from './../assets/react-core-concepts.png';

const reactDescriptions = ["Fundamental", "Core", "Crucial"]
function getRandomValue(max) {
  return Math.floor(Math.random() * max);
}

//header component
export default function Header(){
  const description = reactDescriptions[getRandomValue(reactDescriptions.length)];
  return (
    <header>
      <img src={reactLogoImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}