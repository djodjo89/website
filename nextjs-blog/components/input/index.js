export default function Input({
                                  id,
                                  name,
                                  placeholder,
                                  children,
                              }) {
    return (
        <div>
            <label for={'name'}>{children}</label>
            <input id={id} type={'text'} placeholder={placeholder} name={name}/>
            <style jsx>{`
                div { 
                    margin-top: 5%;
                    display: flex;
                    flex-direction: column;
                }
                label { margin-bottom: 2% }
            `}</style>
        </div>
    )
}
