export default function Technologies() {
    return (
        <>
            <h2>Technologies</h2>
            <ul>
                <li>React</li>
                <li>NodeJS</li>
            </ul>
            <style jsx>{`
                ul { 
                    list-style: none;
                    display: flex; 
                    justify-content: flex-start;
                }
                li { margin: 0 5% 0 0; }
            `}</style>
        </>
    )
}
