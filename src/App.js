
import './App.css';
import React from 'react';
import { FiTrash } from 'react-icons/fi';
import { marked } from 'marked';
import Prism from 'prismjs';



marked.setOptions({
    breaks: true,
    highlight: function (code) {
      return Prism.highlight(code, Prism.languages.javascript, 'javascript');
    }
  });

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        input: default_text,
      }
      this.handleChange = this.handleChange.bind(this)
      this.clearEditor = this.clearEditor.bind(this)
}
    
  handleChange(event) {
    this.setState({
      input: event.target.value,
    })   
  }
      
  clearEditor() {
      this.setState({
        input: ""
      })
  }
  render() {
        
    return (
      <div id="App">
        <header>
          <h1>Markdown Previewer</h1>
          <hr />
        </header>
        <div id="container">
          <div id="text-area-box">
            <nav>
              <h3>Editor</h3>
              <button name="clear" onClick={this.clearEditor}><FiTrash /></button>
            </nav>
            <textarea id="editor" onChange={this.handleChange} value={this.state.input}>
              
            </textarea>
          </div>

          <div id="preview-box">
            <nav>
                <h3>Preview</h3>
            </nav>
            <div  id="preview" dangerouslySetInnerHTML={{ __html: marked(this.state.input) }}>
              

            </div>
          </div>
        </div>
      </div>
    
    );
  }
}   

const default_text = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;
  
      
  


export default App;

