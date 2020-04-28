import CustomList from '../customlist';
import CustomIcon from '../icons/customicon';
import React from 'react';

export default function Technologies() {
    return (
        <CustomList
            title={'Technologies'}
            items={[
                <CustomIcon url={'reactjs.org'}>React</CustomIcon>,
                <CustomIcon url={'nestjs.com'}>Nest</CustomIcon>,
                <CustomIcon url={'material-ui.com'}>Material</CustomIcon>,
                <CustomIcon url={'www.typescriptlang.org'} noRadius>TypeScript</CustomIcon>,
                <CustomIcon url={'nextjs.org'} noRadius width={70}>Next</CustomIcon>,
                <CustomIcon
                    url={'nodejs.org/'}
                    width={36}
                    noRadius
                >
                    Node
                </CustomIcon>,
            ]}
        />
    )
}
