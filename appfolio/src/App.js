import './App.scss';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Box from '@mui/material/Box';
function App() {

  const URLData = "eyJhc3NldCI6eyJjaXR5IjoiTWFuaGF0dGFuIiwic3RhdGUiOiJOZXcgWW9yayIsInppcCI6IjEwMDEzIiwic3RyZWV0QWRkcmVzcyI6IjU4OCBCcm9hZHdheSAiLCJ0eXBlIjoiQ29sZCBTdG9yYWdlIn0sInVzZXIiOnsiZW1haWwiOiJwYXJ0bmVyYUBjb21wYW55LmNvbSIsImZpcnN0TmFtZSI6IkplZmYiLCJsYXN0TmFtZSI6Ik1vcnJpcyJ9LCJzb3VyY2UiOiJBcHBmb2xpbyIsImNvbXBhbnkiOiJOZXcgR3JlYXQgQ29tcGFueSIsImZvcm1EYXRhUHJlZmlsbCI6eyJsb2FuVHlwZSI6IkNvbnN0cnVjdGlvbiIsInZhbHVhdGlvbiI6MTIzMywibmV0T3BlcmF0aW5nSW5jb21lIjoxMjMzMDAsInJlbm92YXRpb25Db3N0cyI6MjIwMDAsInByb2plY3RlZE5ldE9wZXJhdGluZ0luY29tZSI6MTc1MDAwLCJsYW5kUHJpY2UiOjE1NDAwMDAsImNvbnN0cnVjdGlvbkJ1ZGdldCI6NDUwMDAwLCJleHBlbnNlc1NwZW50VG9EYXRlIjo0NTAwMCwiZGVzaXJlZExldmVyYWdlIjo3MH19"; 
  const JSONData = JSON.parse(atob(URLData));
  // console.log(JSONData)
  return (
    <div className="app">
      <Header data={JSONData}/>
      <Box sx={{ display: "flex"}}>
        <Sidebar data={JSONData}/>  
        <Main />
      </Box> 
    </div>
  );
}

export default App;
