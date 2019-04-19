import React,{Component} from 'react';
import HeadPart from './header';
import {Layout} from 'antd'
import SiderPart from './sider'

const {
  Header,Sider,Content, 
}=Layout

class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            collapsed:false,
        }
    }

    toggleCollapsed=(collapsed)=>{ 
        this.setState({
            collapsed:!this.state.collapsed
        })

    }
  

render(){
    return(
        <div>
            <Layout>
                <Sider><SiderPart/></Sider>
                <Layout>
                    <Header>
                        <HeadPart toggleCollapsed={this.toggleCollapsed} collapsed={this.state.collapsed}/>
                     </Header>
                   <Content> <h2>{this.state.collapsed}</h2></Content>
                </Layout>
            </Layout>
           
        </div>
    )
}; 
}
export default Home