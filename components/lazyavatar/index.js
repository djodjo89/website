import Avatar from '@material-ui/core/Avatar';
import LazyLoad from 'react-lazyload';

export default function LazyAvatar(props) {
    return (
        <LazyLoad once offset={100}>
            <Avatar {...props}/>
        </LazyLoad>
    );
}
