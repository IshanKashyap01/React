import React from 'react';
import './css/screen.css';
import SideMenu from './SideMenu'
import Coverflow from './Coverflow'
import Music from './Music'
import Games from './Games'
import Settings from './Settings'
import MusicMenu from './MusicMenu';
import AllSongs from './AllSongs';
import Artists from './Artists';
import Albums from './Albums';


class Screen extends React.Component
{
    // Display the side menu, coverflow, games,Music etc here
    render()
    {
        const {showMenu, activeMenuIndex, menuOptions} = this.props
        const {musicMenu, musicOptions, activeMusicMenuIndex} = this.props
        const {showAllSongs, showArtists, showAlbums} = this.props
        let content
        if(showMenu)
        {
            content = (
                <SideMenu activeMenuIndex = {activeMenuIndex} menuOptions = {menuOptions} />
            )
        }
        else if(musicMenu)
        {
            content = <MusicMenu activeMusicMenuIndex = {activeMusicMenuIndex} musicOptions = {musicOptions} />
        }
        else if(showAllSongs)
        {
            content = <AllSongs/>
        }
        else if(showArtists)
        {
            content = <Artists/>
        }
        else if(showAlbums)
        {
            content = <Albums/>
        }
        else
        {
            switch(menuOptions[activeMenuIndex])
            {
                case "music": content = <Music/>; break;
                case "games": content = <Games/>; break
                case "settings": content = <Settings/>; break
                default: content = <Coverflow/>
            }
        }
        return (
            <div id='screen'>{content}</div>
        );
    }
}

export default Screen;