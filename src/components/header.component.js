
const Header = ({ columns }) => {
    return(
        <tr>
            {
                columns.map( column => <th key={column.label} >{column.label}</th>)
            }
        </tr>
    )
}

export default Header;