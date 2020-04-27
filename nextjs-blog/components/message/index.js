export default function Message({
                                    id,
                                    name,
                                    placeholder,
                                    children,
                                    formId,
                                }) {
    return (
        <div>
            <label for={id}>{children}</label>
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
                div { margin-top: 5% }
                textarea { margin-top: 2% }
            `}</style>
        </div>
    )
}
