import { useEffect, useState } from 'react';
function Cursor() {
    const [postion, setPosition] = useState(
        {
            x: 0,
            y: 0
        }
    );

    useEffect(() => {
        window.addEventListener('mousemove', putPosition);
        return () => {
            window.removeEventListener('mousemove', putPosition);
        }
    }, []);

    function putPosition(e){
        setPosition({x:e.clientX, y:e.clientY});
    }

    return(
        <div>
            <p>{postion.x} - {postion.y}</p>
        </div>
    )

}

export default Cursor