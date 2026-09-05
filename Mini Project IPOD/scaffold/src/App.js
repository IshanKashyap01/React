import React from 'react';
import './App.css';
import Screen from './components/Screen';
import Controls from './components/Controls'
import ZingTouch from 'zingtouch'
import MusicMenu from './components/MusicMenu';

class App extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            showMenu: true,
            activeMenuIndex: 0,
            menuOptions: ["coverflow", "music", "games", "settings"],
            musicMenu: false,
            musicOptions: ["allSongs", "artists", "albums"],
            activeMusicMenuIndex: 0,
            showAllSongs: false,
            showArtists: false,
            showAlbums: false
        }
    }
    // If ok button is clicked,  open the selected component
    handleOk = () => {
        const { showMenu, activeMenuIndex, menuOptions, musicMenu, activeMusicMenuIndex, musicOptions } = this.state
        if(showMenu)
        {
            if(menuOptions[activeMenuIndex] === 'music')
            {
                this.setState({
                    showMenu: false,
                    musicMenu: true,
                    activeMusicMenuIndex: 0,
                    showAllSongs: false,
                    showArtists: false,
                    showAlbums: false
                })
            }
            else
            {
                this.setState({showMenu: false})
            }
        }
        else if(musicMenu)
        {
            const selectedMusic = musicOptions[activeMusicMenuIndex]
            this.setState({
                musicMenu: false,
                showAllSongs: selectedMusic === "allSongs",
                showArtists: selectedMusic === "artists",
                showAlbums: selectedMusic === "albums"
            })
        }
    }
    // If menu button is clicked, go back to the menu screen
    handleMenu = () => {
        const { musicMenu, showAllSongs, showArtists, showAlbums } = this.state
        if (showAllSongs || showArtists || showAlbums) {
            this.setState({
                showAllSongs: false,
                showArtists: false,
                showAlbums: false,
                musicMenu: true
            })
        }
        else if(musicMenu)
        {
            this.setState({ musicMenu: false, showMenu: true })
        }
        else
        {
            this.setState({
                showMenu: true, menuMusic: false,
                showAllSongs: false, showArtists: false, showAlbums: false
            })
        }
    }
    // Handle the rotate event fired from the control component
    handleRotate = (delta) => {
        const { showMenu, menuOptions, activeMenuIndex, musicMenu, musicOptions, activeMusicMenuIndex } = this.state
        if(showMenu)
        {
            let newIndex = (activeMenuIndex + delta + menuOptions.length) % menuOptions.length
            this.setState({ activeMenuIndex: newIndex })
        }
        else if(musicMenu)
        {
            let newIndex = (activeMusicMenuIndex + delta + musicOptions.length) % musicOptions.length
            this.setState({ activeMusicMenuIndex: newIndex })
        }
    }

    render()
    {
        const {showMenu, activeMenuIndex, menuOptions} = this.state
        const {musicMenu, musicOptions, activeMusicMenuIndex} = this.state
        const {showAllSongs, showArtists, showAlbums} = this.state
        return (
            <div id='iPod-app'>
                <Screen showMenu = {showMenu} activeMenuIndex = {activeMenuIndex} menuOptions = {menuOptions} 
                    musicMenu = {musicMenu} musicOptions = {musicOptions} activeMusicMenuIndex = {activeMusicMenuIndex}
                    showAllSongs = {showAllSongs} showArtists = {showArtists} showAlbums = {showAlbums}
                />
                <Controls onOk = {this.handleOk} onMenu = {this.handleMenu} onRotate = {this.handleRotate} />
                <MusicMenu/>
            </div>
        );
    }

    componentDidMount()
    {
        const wheel = document.getElementById('wheel')
        const region = new ZingTouch.Region(wheel)
        region.bind(wheel, 'rotate', event => {
            const distance = event.detail.distanceFromLast
            if(distance > 10)
            {
                this.handleRotate(1)
            }
            else if(distance < -10)
            {
                this.handleRotate(-1)
            }
        })
    }
}

export default App;