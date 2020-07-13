import CustomList from '../customlist';
import CustomIcon from '../icons/customicon';
import React from 'react';

export default function SocialNetworks() {
    return (
        <CustomList
            title={'Social networks'}
            items={[
                <CustomIcon url={'linkedin.com/in/mathys-simion'}
                            width={36}
                            height={36}
                            noRadius
                >
                    LinkedIn
                </CustomIcon>,
                <CustomIcon url={'gitlab.com/djodjo89'}>GitLab</CustomIcon>,
                <CustomIcon url={'github.com/djodjo89'}>GitHub</CustomIcon>,
            ]}
        />
    )
}
