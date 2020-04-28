import Avatar from '@material-ui/core/Avatar';

export default function NodeIcon() {
    return (
        <Avatar
            alt={'Node Icon'}
            src={'/node.svg'}
            style={{
                width: '36px',
                borderRadius: '0',
            }}
        />
    )
}
