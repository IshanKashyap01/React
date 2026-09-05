function MusicMenu({activeMusicMenuIndex, musicOptions})
{
    return (
      <table id="music-menu">
        <tbody>
        <tr>
            <th className="table-heading">Music <i className="fas fa-music"></i></th>
        </tr>
        {
            musicOptions?.map((option, index) => (
                <tr key = {option} data-option = {option} className = {activeMusicMenuIndex === index ? "active" : ""}>
                    <td className="table-item">
                        {option.charAt(0).toUpperCase() + option.slice(1)}
                        <i className="fas fa-chevron-right"></i>
                    </td>
                </tr>
            ))
        }
        {/* <tr data-option="allSongs">
            <td className="table-item">All Songs<i className="fas fa-chevron-right"></i></td> 
        </tr>
        <tr data-option="artists">
            <td className="table-item">Artists<i className="fas fa-chevron-right"></i></td>
        </tr>
        <tr data-option="albums">
            <td className="table-item">Albums<i className="fas fa-chevron-right"></i></td>
        </tr> */}
        </tbody>
    </table>
    );
  }
  
  export default MusicMenu;
  