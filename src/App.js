import React, { useState } from 'react';
import logo from './tool-library-logo.png';
import './App.css';
import ToolItem from './components/Tool/ToolItem';
import NewTool from './components/NewTool/NewTool';
import SearchFilter from './components/SearchFilter/SearchFilter';


const dummyToolData = [
  {
    id: 1,
    title: "Random orbital sander",
    type: "Power",
    status: "checked in",
  },
  {
    id: 2,
    title: "Impact Driver",
    type: "Power",
    status: "checked in",
  },
  {
    id: 3,
    title: "Hammer",
    type: "Hand",
    status: "checked in",
  },
  {
    id: 4,
    title: "Belt sander",
    type: "Plugin",
    status: "checked in",
  },
];

const App = () => {


  const [tools, setTools] = useState(dummyToolData);

  const [searchFilter, setSearchFilter] = useState('');

  const searchFilterHandler = filter => {
    setSearchFilter(filter);
    console.log(filter);
  };

  const addToolHandler = tool => {
    setTools((prevTools) => {
      return [tool, ...tools];
    });
    console.log(tool);
  };

  let filteredTools = tools.filter(tool => {
    if (searchFilter === '') {
      return tool;
    } else if (tool.title.toLowerCase().includes(searchFilter.toLowerCase())) {
      return tool;
    }


  });

  return (
    <div className="App">
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Tracking tools, and "friends" since 2021</h2>
        <div></div>
        <SearchFilter onSearchFilter={searchFilterHandler}/>
        <NewTool onAddTool={addToolHandler}></NewTool>
        {filteredTools.length === 0 ? <p>no tools, change your search or it might be time to buy some more</p> :
        filteredTools.map(tool => <ToolItem key={tool.id} title={tool.title} type={tool.type} status={tool.status} />)}
        
      </header>
    </div>
  );
}

export default App;
