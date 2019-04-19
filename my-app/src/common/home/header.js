import React,{Component} from 'react'
import { Button, Icon,Row,Col } from 'antd'

class HeadPart extends React.Component{
    // constructor(props){
    //     super(props)
    //     // this.state={
    //     //     collapsed:false,
    //     // }
    // }
    
    // 左边菜单颜色样式
    // toggleCollapsed=()=>{
    //     this.setState({
    //         collapsed:!this.state.collapsed
    //     })
    //     console.log(this.state.collapsed)
    // }
    //
render(){
return(
    <div className='header'>
    <Row>
        <Col span={8}>
        <Button type="primary" icon={this.props.collapsed?'menu-unfold':'menu-fold'}
         onClick={()=>this.props.toggleCollapsed()}
        />
        </Col>
        <Col span={8} offset={8}>
        <ul className='person_info'>
            <li>
                <a href='javascript:;'>
            <Icon type="mail" />通知
            </a>
            </li>
            <li>
                <a href='javascript:;'>
                <Icon type="idcard" />个人
            </a>
            </li>
        </ul>
        </Col>
    </Row>  
    </div>
)
}
}
export default HeadPart