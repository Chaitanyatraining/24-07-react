import './App.css';
import Header from './Header';
import ClassComp from './ClassComp';
import ListandKeys from './Components/ListsandKeys';
import StylingComp from './Components/Stylings/StylingComp';
import UsersList from './Components/UsersList';
import ContactUs from './Components/ContactUs';

function App() {

  const courseName = 'ReactJs';

  return (
    <div className="App">
      <Header  />
      <ContactUs />
      {/* <ClassComp course={courseName} duration="3Months" /> */}
      {/* <ListandKeys /> */}
      {/* <StylingComp /> */}
      {/* <UsersList /> */}
    </div>
  );
}

export default App;
