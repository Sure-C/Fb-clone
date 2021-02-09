import React from 'react'
import './SideBarRow.css'
import { Avatar} from "@material-ui/core";
import { Chat, EmojiFlags, People, Storefront, VideoLibrary } from '@material-ui/icons';


function SideBarRow( {src, Icon, title } ) {
    return (
        <div className="sidebarrow">
            {src && <Avatar  src={src } alt="A" /> }
            {Icon && <Icon />}
            {title && <h4>{title}</h4>}
            
        </div>
    )
}

export default SideBarRow
