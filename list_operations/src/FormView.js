
function FormView(props) {
    return (
        <form onSubmit={props.onSum}>
            <p>Insert the first number:
                <input type='number' name='v1' />
            </p>
            <p>Insert the first number:
                <input type='number' name='v2' />
            </p>
            <button type='submit' >Sum</button>
        </form>
    )
}

export default FormView;