import React from 'react'
import "./Header.css"
import { Add, ExpandMore, Flag, Forum, Home, NotificationsActive, Search, StorefrontOutlined, SubscriptionsOutlined, SupervisedUserCircle } from '@material-ui/icons'
import { Avatar, IconButton } from '@material-ui/core'

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" 
                alt="" />
                <div className="header__input ">
                    <Search />
                    <input type="text" placeholder="Search Facebook"/>
                </div>
            </div>
            <div className="header__middle">
                <div className="header__option header__option--active">
                    <Home fontsize="large" />
                </div>
                <div className="header__option ">
                    <Flag fontsize="large" />
                </div>
                <div className="header__option">
                    <SubscriptionsOutlined fontsize="large" />
                </div>
                <div className="header__option">
                    <StorefrontOutlined fontsize="large" />
                </div>
                <div className="header__option">
                    <SupervisedUserCircle fontsize="large" />
                </div>
            </div>
            <div className="header__right">
                    <div className="header__info" >
                        <Avatar />
                        <h4>here</h4>
                    </div>
                    <IconButton>
                        <Add />
                    </IconButton>
                    <IconButton>
                        <Forum />
                    </IconButton>
                    <IconButton>
                        <NotificationsActive />
                    </IconButton>
                    <IconButton>
                        <ExpandMore />
                    </IconButton>

            </div>
        </div>
    )
}

export default Header
