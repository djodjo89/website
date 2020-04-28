import Avatar from '@material-ui/core/Avatar';

export default function CustomIcon({ url, width, height, noRadius, children }) {
    const label = children.toString();

    return (
        <a href={`https://${url}`}>
            <Avatar
                alt={`${label} Icon`}
                src={`/${label.toLowerCase()}.svg`}
                style={{
                    width: `${width}px`,
                    height: `${height}px`,
                    borderRadius: noRadius ? 0 : '',
                }}
            />
        </a>
    )
}
