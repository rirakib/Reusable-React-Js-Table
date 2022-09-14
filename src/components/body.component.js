
const Tbody = ({ data, columns }) => {
    return(
           
        data.map( row => (
            
            <tr key={row.id}>
                {
                    columns.map(column => column.content(row,column.path))
                }
            </tr>
        ))
            
        
    )
}
export default Tbody;