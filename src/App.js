import './App.css';
import Header from './Header';
import ClassComp from './ClassComp';
import ListandKeys from './Components/ListsandKeys';
import StylingComp from './Components/Stylings/StylingComp';
import Counter from './Components/Counter';
import ContactUs from './Components/ContactUs';
import UserData from './Components/UserData';
import Pagination from './Components/Pagination';

function App() {

  const courseName = 'ReactJs';

  return (
    <div className="App">
      <Header  />
      <Pagination />
      {/* <ContactUs /> */}
      {/* <UserData /> */}
      {/* <ClassComp course={courseName} duration="3Months" /> */}
      {/* <ListandKeys /> */}
      {/* <StylingComp /> */}
      {/* <UsersList /> */}
    </div>
  );
}

export default App;
