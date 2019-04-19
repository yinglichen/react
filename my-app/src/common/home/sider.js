//import React from 'react'
import React, { Component } from 'react';
import {Menu,Icon,Button} from 'antd';
const SubMenu = Menu.SubMenu


function SiderPart(){
    return(
        // inlineCollapsed={this.state.collapsed}
        <div className='SiderPart'>
         <Menu 
          mode='inline'
          >
         <SubMenu key='sub1' title={<span><Icon type='mail'/><span>基本管理</span></span>}>
           <Menu.Item key='1'>数据字典</Menu.Item>
           <Menu.Item key='2'>文件管理</Menu.Item>
         </SubMenu>
         <SubMenu key='sub2' title={<span><Icon type='mail'/><span>高级管理</span></span>}>
           <Menu.Item key='3'>用户管理</Menu.Item>
           <Menu.Item key='4'>角色管理</Menu.Item>
           <Menu.Item key='5'>部门管理</Menu.Item>
         </SubMenu>
         <SubMenu key='sub3' title={<span><Icon type='mail'/><span>内容维护</span></span>}>
           <Menu.Item key='6'>首页维护</Menu.Item>
           <Menu.Item key='7'>系统菜单</Menu.Item>
         </SubMenu>
        
         <SubMenu key='sub4' title={<span><Icon type='mail'/><span>项目中心</span></span>}>
           <Menu.Item key='8'>进行中项目列表</Menu.Item>
           <Menu.Item key='9'>完成项目列表</Menu.Item> 
         </SubMenu>
         </Menu>
            
        </div>
    )


    
}

export default SiderPart