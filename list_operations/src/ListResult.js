
function ListResult(props) {
    return (
        <ul>
            {props.results.map((element) =>
                <li>The result of sum the first number <b>{element.property1}</b> and the second number <b>{element.property2}</b> is: <strong>{element.sum}</strong> </li>
            )}
        </ul>
    )
}

export default ListResult