function SideMenu({activeMenuIndex, menuOptions})
{
    // write logic for changing the selected item in the side menu
    return (
        <table id="side-menu">
            <tbody>
            <tr>
                <th className="table-heading">iPod <i className="fas fa-home"></i></th>
            </tr>
            {
                menuOptions.map((option, index) => (
                    <tr data-option = {option} key={option} >
                        <td className = {activeMenuIndex === index ? "active" : ""}>
                            {option.charAt(0).toUpperCase() + option.slice(1)}
                            <i className="fas fa-chevron-right"></i>
                        </td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    );
}

export default SideMenu;
