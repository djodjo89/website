export default function Message({
                                    id,
                                    name,
                                    placeholder,
                                    children,
                                    formId,
                                }) {
    return (
        <div className={'message'}>
            <div>
                <label htmlFor={id}>{children}</label>
            </div>
            <textarea
                id={id}
                name={name}
                rows={'4'}
                cols={'50'}
                form={formId}
                placeholder={placeholder}
            >
            </textarea>
            <style jsx>{`
                .message {
                    margin-top: 5%;
                    flex-direction: column;
                }
                textarea { margin-top: 2% }
            `}</style>
        </div>
    )
}
