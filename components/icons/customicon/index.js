import LazyAvatar from '../../lazyavatar';

export default function CustomIcon({ url, width, height, noRadius, children }) {
    const label = children.toString();
    const style = {};

    if (width) {
        style.width = `${width}px`;
    }

    if (height) {
        style.height = `${height}px`;
    }

    if (noRadius) {
        style.borderRadius = 0;
    }

    return (
        <a href={`https://${url}`} aria-label={label}>
            <LazyAvatar
                alt={`${label} Icon`}
                src={`/${label.toLowerCase()}.svg`}
                style={style}
            />
        </a>
    )
}
