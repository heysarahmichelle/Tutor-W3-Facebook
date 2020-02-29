import React, {Component} from 'react';
import './App.css'

export default class App extends Component{
  constructor(){
    super();
      this.state={
        data: [],
        title: [],
        words: []
      };
  }
  onTitleChange=(value)=>{
    this.setState({
      title: value
    })
  }
  onPostChange=(value)=>{
    this.setState({
      words: value
    })
  }
  addPost=()=>{
    this.setState({
        data: this.state.data.push({
        title: this.state.title, 
        words: this.state.words
      })
    })
    this.setState({
      words: '',
      title: ''
    })
  }

  render(){
    const postList = this.state.data.map((post)=>{
      return <h1> {post.title}, {post.words} </h1>
    })
  return (
    <div>
      <section className='facebook-app'>
        <div>
          <input onChange={(e)=>this.onTitleChange(e.target.value)} placeholder="Title"/>
          <input onChange={(e)=>this.onPostChange(e.target.value)} placeholder="Post"/>
        </div>
        <button onClick={()=>this.addPost()} className='add-button'>Add</button>
        {/* <div className='post-boxes'>
          <p></p>
          <p></p>
        </div> */}
      </section>
    </div>
  );
}
}

